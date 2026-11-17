const G = "#08bf63";

/** Small Markeltree-style cube (lime top, green left, mid-green right). */
function Cube({ x, y, s }: { x: number; y: number; s: number }) {
  const h = s * 0.58;
  return (
    <g>
      <path d={`M${x} ${y - h * 1.5} L${x + s} ${y - h} L${x} ${y - h / 2} L${x - s} ${y - h} Z`} fill="#c4ff73" />
      <path d={`M${x - s} ${y - h} L${x} ${y - h / 2} L${x} ${y + h / 2} L${x - s} ${y} Z`} fill={G} />
      <path d={`M${x + s} ${y - h} L${x} ${y - h / 2} L${x} ${y + h / 2} L${x + s} ${y} Z`} fill="#83da5c" />
    </g>
  );
}

/** Logo mark: three cubes stacked like the Markeltree logo. */
function Mark({ x, y, s }: { x: number; y: number; s: number }) {
  const h = s * 0.58;
  return (
    <g>
      <Cube x={x} y={y - h * 1.5} s={s} />
      <Cube x={x - s} y={y} s={s} />
      <Cube x={x + s} y={y} s={s} />
    </g>
  );
}

const nav = ["Dashboard", "Users", "Features", "Analytics"];

/** Laptop + phone mockup of a product prototype, drawn in SVG. */
export function HeroVisual() {
  return (
    <div className="lt-visual" aria-hidden="true">
      <svg viewBox="0 0 640 430" fill="none" className="lt-visual__svg">
        <defs>
          <linearGradient id="lt-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={G} stopOpacity="0.45" />
            <stop offset="1" stopColor={G} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lt-bezel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4a4f4d" />
            <stop offset="0.5" stopColor="#1c1f1e" />
            <stop offset="1" stopColor="#3a3e3c" />
          </linearGradient>
        </defs>

        {/* Laptop */}
        <rect x="40" y="20" width="470" height="304" rx="16" fill="#0c0e0d" stroke="url(#lt-bezel)" strokeWidth="3" />
        <rect x="54" y="34" width="442" height="276" rx="8" fill="#080a09" />
        {/* sidebar */}
        <rect x="54" y="34" width="100" height="276" rx="8" fill="#0d100f" />
        <Mark x={72} y={64} s={5} />
        <text x="86" y="62" fill="#fff" fontSize="9" fontWeight="600">Markel<tspan fill={G}>tree</tspan></text>
        {nav.map((n, i) => (
          <g key={n}>
            {i === 0 && <rect x="62" y={86 + i * 26} width="84" height="20" rx="5" fill="#1a1f1c" />}
            <rect x="70" y={92 + i * 26} width="8" height="8" rx="2" stroke={i === 0 ? "#fff" : "#6b706d"} strokeWidth="1" />
            <text x="84" y={100 + i * 26} fill={i === 0 ? "#fff" : "#8a8f8c"} fontSize="8.5">{n}</text>
          </g>
        ))}
        {/* header */}
        <text x="172" y="66" fill="#fff" fontSize="16" fontWeight="600" fontStyle="italic">Product Prototype</text>
        {/* stat + chart card */}
        <rect x="170" y="84" width="176" height="128" rx="10" fill="#111513" />
        <text x="184" y="106" fill="#8a8f8c" fontSize="8.5">Active Users</text>
        <text x="184" y="134" fill="#fff" fontSize="22" fontWeight="600" fontStyle="italic">1,248</text>
        <text x="292" y="132" fill={G} fontSize="10" fontWeight="600">↑ +12%</text>
        <path d="M184 196 L204 188 L220 192 L238 176 L254 182 L272 166 L288 172 L306 154 L332 140 L332 204 L184 204 Z" fill="url(#lt-area)" />
        <path d="M184 196 L204 188 L220 192 L238 176 L254 182 L272 166 L288 172 L306 154 L332 140" stroke={G} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
        {/* video tile */}
        <rect x="358" y="84" width="128" height="74" rx="10" fill="#1d2320" />
        <path d="M414 108 L414 134 L436 121 Z" fill="#fff" />
        {/* list tile */}
        <rect x="358" y="168" width="128" height="44" rx="8" fill="#111513" />
        <rect x="370" y="180" width="80" height="6" rx="3" fill="#2c322f" />
        <rect x="370" y="194" width="56" height="6" rx="3" fill="#232825" />
        {/* bottom tiles */}
        <rect x="170" y="222" width="316" height="76" rx="10" fill="#0f1211" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
          <rect key={i} x={186 + i * 24} y={286 - [18, 30, 24, 40, 34, 46, 38, 52, 44, 30, 48, 36][i]} width="10" height={[18, 30, 24, 40, 34, 46, 38, 52, 44, 30, 48, 36][i]} rx="2" fill={i === 7 ? G : "#24302a"} />
        ))}
        {/* base */}
        <path d="M0 326 H550 L540 340 Q536 346 528 346 H22 Q14 346 10 340 Z" fill="url(#lt-bezel)" />
        <rect x="230" y="326" width="90" height="6" rx="3" fill="#121514" />

        {/* Phone */}
        <g>
          <rect x="468" y="112" width="148" height="290" rx="26" fill="#0a0c0b" stroke="url(#lt-bezel)" strokeWidth="4" />
          <rect x="478" y="122" width="128" height="270" rx="18" fill="#0b100d" />
          <rect x="522" y="130" width="40" height="9" rx="4.5" fill="#000" />
          <Mark x={542} y={184} s={7} />
          <text x="542" y="236" fill="#fff" fontSize="16" fontWeight="600" fontStyle="italic" textAnchor="middle">Your Idea</text>
          <text x="542" y="256" fill="#fff" fontSize="16" fontWeight="600" fontStyle="italic" textAnchor="middle">in Action</text>
          <circle cx="542" cy="314" r="22" fill="#08bf631f" stroke={G} strokeWidth="1.5" />
          <path d="M535 303 L535 325 L553 314 Z" fill={G} />
        </g>
      </svg>
    </div>
  );
}
