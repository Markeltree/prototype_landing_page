"use client";

import { useState } from "react";
import { packages } from "@/content";

/** Three selectable prototype packages (radio group styled as cards). */
export function Packages() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="lt-packages__grid" role="radiogroup" aria-label={packages.title}>
      {packages.items.map((p, i) => (
        <label key={p.name} className={`lt-pack${selected === i ? " is-selected" : ""}`}>
          <input
            type="radio"
            name="package"
            value={p.name}
            checked={selected === i}
            onChange={() => setSelected(i)}
          />
          <span className="lt-pack__head">
            <span className="lt-pack__name">{p.name}</span>
            <span className="lt-pack__radio" aria-hidden="true" />
          </span>
          <span className="lt-pack__price">{p.price}</span>
          <span className="lt-pack__text">{p.text}</span>
        </label>
      ))}
    </div>
  );
}
