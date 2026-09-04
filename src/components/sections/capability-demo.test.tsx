import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CapabilityDemo } from "./capability-demo";

describe("CapabilityDemo", () => {
  it("alterna as abas por teclado e move o foco", async () => {
    render(<CapabilityDemo />);
    const siteTab = screen.getByRole("tab", { name: /site/i });

    siteTab.focus();
    fireEvent.keyDown(siteTab, { key: "ArrowRight" });

    const systemTab = screen.getByRole("tab", { name: /sistema/i });
    expect(systemTab).toHaveAttribute("aria-selected", "true");
    expect(systemTab).toHaveFocus();
    await waitFor(() => {
      expect(screen.getByRole("tabpanel")).toHaveTextContent("Informações reunidas para decisões mais claras");
    });
  });
});
