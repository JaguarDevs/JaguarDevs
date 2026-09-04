"use client";

import { useState } from "react";
import { capabilities } from "@/content/home";

type CapabilityKey = keyof typeof capabilities;

export function CapabilityDemo() {
  const [active, setActive] = useState<CapabilityKey>("site");
  const item = capabilities[active];
  const Icon = item.icon;
  const keys = Object.keys(capabilities) as CapabilityKey[];

  function handleTabKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, key: CapabilityKey) {
    const currentIndex = keys.indexOf(key);
    let nextIndex: number | null = null;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % keys.length;
    if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + keys.length) % keys.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = keys.length - 1;
    if (nextIndex === null) return;
    event.preventDefault();
    const nextKey = keys[nextIndex];
    setActive(nextKey);
    document.getElementById(`capability-tab-${nextKey}`)?.focus();
  }

  return (
    <div className="capability">
      <div className="capability__tabs" role="tablist" aria-label="Demonstrações conceituais">
        {(Object.keys(capabilities) as CapabilityKey[]).map((key) => (
          <button
            id={`capability-tab-${key}`}
            role="tab"
            aria-selected={active === key}
            aria-controls={`capability-panel-${key}`}
            tabIndex={active === key ? 0 : -1}
            onClick={() => setActive(key)}
            onKeyDown={(event) => handleTabKeyDown(event, key)}
            key={key}
          >
            {capabilities[key].label}
          </button>
        ))}
      </div>

      <div className="capability__stage">
        <div
          id={`capability-panel-${active}`}
          role="tabpanel"
          aria-labelledby={`capability-tab-${active}`}
          className={`concept concept--${active}`}
          key={active}
        >
          <div className="concept__copy">
            <span className="concept__badge">Demonstração conceitual</span>
            <Icon aria-hidden="true" size={30} strokeWidth={1.5} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
          <ConceptVisual type={active} />
        </div>
      </div>
    </div>
  );
}

function ConceptVisual({ type }: { type: CapabilityKey }) {
  if (type === "site") {
    return (
      <div className="interface interface--site" aria-hidden="true">
        <div className="interface__bar"><i /><i /><i /><span /></div>
        <div className="site-sketch__nav" />
        <div className="site-sketch__hero"><i /><i /><span /></div>
        <div className="site-sketch__cards"><i /><i /><i /></div>
      </div>
    );
  }
  if (type === "sistema") {
    return (
      <div className="interface interface--system" aria-hidden="true">
        <div className="system-sketch__aside"><i /><i /><i /><i /></div>
        <div className="system-sketch__main">
          <span /><div><i /><i /></div><div><i /><i /><i /></div>
        </div>
      </div>
    );
  }
  return (
    <div className="interface interface--flow" aria-hidden="true">
      <div className="flow-node flow-node--one">Entrada</div><i className="flow-line flow-line--one" />
      <div className="flow-node flow-node--two">Regra</div><i className="flow-line flow-line--two" />
      <div className="flow-node flow-node--three">Ação</div><i className="flow-line flow-line--three" />
      <div className="flow-node flow-node--four">Registro</div>
    </div>
  );
}
