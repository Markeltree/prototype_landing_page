import type { Capability } from "@/content";

const G = "#08bf63";
const w = (a: number) => `rgba(255,255,255,${a})`;
const label = { fontSize: 11, fontFamily: "monospace", letterSpacing: 1.5 } as const;

function Stack() {
  return (
    <svg className="levo-card__svg" viewBox="0 0 420 340" fill="none" role="img" aria-label="Diagram: interface, API and workers over Postgres">
      <rect className="draw" x="60" y="30" width="300" height="62" rx="8" stroke={G} strokeWidth="1" />
      <rect className="draw" x="20" y="140" width="170" height="62" rx="8" stroke={w(0.4)} strokeWidth="1" />
      <rect className="draw" x="230" y="140" width="170" height="62" rx="8" stroke={w(0.4)} strokeWidth="1" />
      <rect className="draw" x="110" y="250" width="200" height="62" rx="8" stroke={w(0.22)} strokeWidth="1" />
      <path className="draw" d="M150 92 V116 H105 V140" stroke={w(0.3)} strokeWidth="1" />
      <path className="draw" d="M270 92 V116 H315 V140" stroke={w(0.3)} strokeWidth="1" />
      <path className="draw" d="M105 202 V226 H210 V250" stroke={w(0.3)} strokeWidth="1" />
      <path className="draw" d="M315 202 V226 H210 V250" stroke={w(0.3)} strokeWidth="1" />
      <circle className="draw" cx="210" cy="61" r="3" fill={G} stroke="none" />
      <text x="76" y="66" fill="#8A8A86" {...label}>interface</text>
      <text x="36" y="176" fill="#8A8A86" {...label}>api</text>
      <text x="246" y="176" fill="#8A8A86" {...label}>workers</text>
      <text x="126" y="286" fill="#5A5A57" {...label}>postgres</text>
    </svg>
  );
}

function Browser() {
  return (
    <svg className="levo-card__svg" viewBox="0 0 420 340" fill="none" role="img" aria-label="Diagram: a browser window with performance scores">
      <rect className="draw" x="40" y="30" width="340" height="200" rx="10" stroke={w(0.3)} strokeWidth="1" />
      <path className="draw" d="M40 64 H380" stroke={w(0.3)} strokeWidth="1" />
      <circle className="draw" cx="62" cy="47" r="3" fill={w(0.35)} stroke="none" />
      <circle className="draw" cx="76" cy="47" r="3" fill={w(0.2)} stroke="none" />
      <circle className="draw" cx="90" cy="47" r="3" fill={w(0.2)} stroke="none" />
      <rect className="draw" x="64" y="92" width="150" height="10" rx="5" stroke={w(0.4)} strokeWidth="1" />
      <rect className="draw" x="64" y="116" width="230" height="10" rx="5" stroke={w(0.22)} strokeWidth="1" />
      <rect className="draw" x="64" y="140" width="190" height="10" rx="5" stroke={w(0.22)} strokeWidth="1" />
      <rect className="draw" x="64" y="176" width="96" height="26" rx="13" stroke={G} strokeWidth="1" />
      <path className="draw" d="M40 274 H380" stroke={w(0.14)} strokeWidth="1" />
      <path className="draw" d="M40 274 L110 274" stroke={G} strokeWidth="2" />
      <text x="40" y="302" fill={G} {...label}>LCP 0.6s</text>
      <text x="150" y="302" fill="#5A5A57" {...label}>CLS 0.00</text>
      <text x="262" y="302" fill="#5A5A57" {...label}>100 / 100</text>
    </svg>
  );
}

function Pipeline() {
  const rows = [
    { y: 42, s: G },
    { y: 88, s: w(0.4) },
    { y: 134, s: w(0.4) },
    { y: 180, s: w(0.28) },
    { y: 226, s: w(0.28) },
    { y: 272, s: w(0.18) },
  ];
  return (
    <svg className="levo-card__svg" viewBox="0 0 420 340" fill="none" role="img" aria-label="Diagram: an application stack with an encrypted uplink">
      <rect className="draw" x="110" y="20" width="200" height="300" rx="10" stroke={w(0.28)} strokeWidth="1" />
      {rows.map((r) => (
        <rect key={r.y} className="draw" x="126" y={r.y} width="168" height="34" rx="4" stroke={r.s} strokeWidth="1" />
      ))}
      <circle className="draw" cx="142" cy="59" r="2.5" fill={G} stroke="none" />
      <circle className="draw" cx="142" cy="105" r="2.5" fill={w(0.5)} stroke="none" />
      <circle className="draw" cx="142" cy="151" r="2.5" fill={w(0.5)} stroke="none" />
      <path className="draw" d="M110 59 H40 V300 H110" stroke={w(0.22)} strokeWidth="1" />
      <path className="draw" d="M310 105 H390 V240 H310" stroke={w(0.22)} strokeWidth="1" />
      <rect className="draw" x="368" y="52" width="30" height="24" rx="4" stroke={G} strokeWidth="1" />
      <path className="draw" d="M375 52 V44 C375 38 379 34 383 34 C387 34 391 38 391 44 V52" stroke={G} strokeWidth="1" />
      <text x="20" y="330" fill="#5A5A57" {...label}>uplink</text>
      <text x="330" y="94" fill="#5A5A57" {...label}>encrypted</text>
    </svg>
  );
}

function Stages() {
  return (
    <svg className="levo-card__svg" viewBox="0 0 420 340" fill="none" role="img" aria-label="Diagram: a prototype growing from sketch to clickable to working">
      <rect className="draw" x="20" y="110" width="100" height="120" rx="8" stroke={w(0.22)} strokeWidth="1" />
      <path className="draw" d="M36 140 H100 M36 160 H86 M36 180 H94" stroke={w(0.18)} strokeWidth="1" />
      <rect className="draw" x="160" y="90" width="100" height="160" rx="8" stroke={w(0.4)} strokeWidth="1" />
      <path className="draw" d="M160 118 H260" stroke={w(0.3)} strokeWidth="1" />
      <rect className="draw" x="176" y="136" width="68" height="10" rx="5" stroke={w(0.3)} strokeWidth="1" />
      <rect className="draw" x="176" y="200" width="54" height="22" rx="11" stroke={w(0.5)} strokeWidth="1" />
      <rect className="draw" x="300" y="60" width="100" height="220" rx="8" stroke={G} strokeWidth="1" />
      <path className="draw" d="M300 88 H400" stroke={w(0.3)} strokeWidth="1" />
      <rect className="draw" x="316" y="106" width="68" height="10" rx="5" stroke={w(0.4)} strokeWidth="1" />
      <rect className="draw" x="316" y="130" width="52" height="10" rx="5" stroke={w(0.25)} strokeWidth="1" />
      <rect className="draw" x="316" y="160" width="68" height="60" rx="4" stroke={w(0.25)} strokeWidth="1" />
      <rect className="draw" x="316" y="236" width="54" height="22" rx="11" stroke={G} strokeWidth="1" />
      <circle className="draw" cx="388" cy="74" r="3" fill={G} stroke="none" />
      <path className="draw" d="M124 170 H156 M264 170 H296" stroke={w(0.3)} strokeWidth="1" />
      <text x="20" y="300" fill="#5A5A57" {...label}>sketch</text>
      <text x="160" y="300" fill="#8A8A86" {...label}>clickable</text>
      <text x="300" y="300" fill={G} {...label}>working</text>
    </svg>
  );
}

function Grid() {
  const nodes: [number, number][] = [[120, 60], [340, 60], [120, 276], [340, 276]];
  const small = { ...label, fontSize: 10 };
  const big = { ...label, fontSize: 12 };
  return (
    <svg className="levo-card__svg levo-card__svg--wide" viewBox="0 0 460 340" fill="none" role="img" aria-label="Diagram: app, database, files and DNS, each with a standby">
      <path className="draw" d="M120 60 H340 M120 60 V276 M340 60 V276 M120 276 H340" stroke={w(0.14)} strokeWidth="1" />
      <path className="draw" d="M120 60 L340 276 M340 60 L120 276" stroke={w(0.07)} strokeWidth="1" />
      {nodes.map(([x, y]) => (
        <rect key={`r${x}${y}`} className="draw" x={x - 16} y={y - 16} width="32" height="32" rx="6" stroke={G} strokeWidth="1" />
      ))}
      {nodes.map(([x, y]) => (
        <circle key={`c${x}${y}`} className="draw" cx={x} cy={y} r="3" fill={G} stroke="none" />
      ))}
      <text x="104" y="26" fill="#fff" {...big}>APP</text>
      <text x="324" y="26" fill="#fff" {...big}>DB</text>
      <text x="104" y="316" fill="#fff" {...big}>FILES</text>
      <text x="324" y="316" fill="#fff" {...big}>DNS</text>
      <text x="146" y="52" fill="#5A5A57" {...small}>your app</text>
      <text x="366" y="52" fill="#5A5A57" {...small}>standby</text>
      <text x="146" y="300" fill="#5A5A57" {...small}>storage</text>
      <text x="366" y="300" fill="#5A5A57" {...small}>domains</text>
    </svg>
  );
}

export function Diagram({ kind }: { kind: Capability["diagram"] }) {
  switch (kind) {
    case "stack": return <Stack />;
    case "browser": return <Browser />;
    case "pipeline": return <Pipeline />;
    case "stages": return <Stages />;
    case "grid": return <Grid />;
  }
}
