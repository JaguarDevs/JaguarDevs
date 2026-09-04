import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "screenshots");
const executablePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const targetUrl = process.env.VISUAL_CHECK_URL ?? "http://localhost:3000";
const viewports = [
  { name: "mobile-360", width: 360, height: 800 },
  { name: "tablet-768", width: 768, height: 1000 },
  { name: "desktop-1440", width: 1440, height: 1000 },
];

await mkdir(output, { recursive: true });
const browser = await chromium.launch({ executablePath, headless: true });
const results = [];

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1, reducedMotion: "no-preference" });
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(targetUrl, { waitUntil: "networkidle" });
  const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < pageHeight; y += Math.max(420, Math.floor(viewport.height * 0.72))) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(90);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.addStyleTag({ content: ".section { content-visibility: visible !important; contain-intrinsic-size: none !important; }" });
  await page.evaluate(() => {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  });
  await page.waitForTimeout(250);
  await page.screenshot({ path: path.join(output, `${viewport.name}.png`), fullPage: true });
  await page.screenshot({ path: path.join(output, `${viewport.name}-hero.png`) });
  if (viewport.width === 360) {
    await page.locator(".site-header, .skip-link").evaluateAll((elements) => {
      for (const element of elements) element.style.visibility = "hidden";
    });
    await page.locator("#solucoes").screenshot({ path: path.join(output, "mobile-360-solutions.png") });
    await page.locator("#contato").screenshot({ path: path.join(output, "mobile-360-contact.png") });
    await page.locator(".site-header, .skip-link").evaluateAll((elements) => {
      for (const element of elements) element.style.visibility = "";
    });
  }
  const metrics = await page.evaluate(() => ({
    documentWidth: document.documentElement.scrollWidth,
    viewportWidth: document.documentElement.clientWidth,
    height: document.documentElement.scrollHeight,
    h1Count: document.querySelectorAll("h1").length,
    visibleSections: [...document.querySelectorAll("main > section")].filter((element) => {
      const style = getComputedStyle(element);
      return style.display !== "none" && style.visibility !== "hidden";
    }).length,
  }));
  if (viewport.width === 360) {
    await page.evaluate(() => window.scrollTo(0, 0));
    const menuButton = page.locator(".menu-toggle");
    await menuButton.click({ force: true });
    const opened = await menuButton.getAttribute("aria-expanded");
    await page.keyboard.press("Escape");
    const closed = await menuButton.getAttribute("aria-expanded");
    const focusedAfterEscape = await menuButton.evaluate((element) => element === document.activeElement);
    metrics.mobileMenu = { opened, closed, focusedAfterEscape };
  }
  results.push({ viewport: viewport.name, ...metrics, errors });
  await page.close();
}

const reducedPage = await browser.newPage({ viewport: { width: 1024, height: 900 }, reducedMotion: "reduce" });
await reducedPage.goto(targetUrl, { waitUntil: "networkidle" });
const reducedMotion = await reducedPage.evaluate(() => ({
  preference: matchMedia("(prefers-reduced-motion: reduce)").matches,
  spotlight: getComputedStyle(document.querySelector(".hero-visual__spotlight")).display,
}));
await reducedPage.close();
await browser.close();

console.log(JSON.stringify({ results, reducedMotion }, null, 2));
if (results.some((result) => result.documentWidth > result.viewportWidth || result.errors.length > 0)) process.exitCode = 1;
