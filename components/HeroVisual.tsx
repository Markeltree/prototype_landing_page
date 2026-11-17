/**
 * Hero showcase: Markeltree projects on devices, built in HTML/SVG so it stays sharp on any screen.
 * Laptops use real screenshots (ContentScale, Advisory CRM); phone screens (Red, Applyup) are drawn in SVG.
 */

const RED = "#a3182c";
const font = "var(--font-geist-sans), Inter, system-ui, sans-serif";

function RedScreen() {
  const chips: [string, number, number, number, boolean][] = [
    ["Reading", 24, 268, 70, true], ["Photography", 102, 268, 92, false],
    ["Gaming", 24, 298, 66, false], ["Music", 98, 298, 60, true], ["Travel", 166, 298, 62, false],
    ["Painting", 24, 328, 74, true], ["Politics", 106, 328, 70, false],
    ["Charity", 24, 358, 68, false], ["Cooking", 100, 358, 72, false], ["Pets", 180, 358, 52, false],
    ["Sports", 24, 388, 66, true], ["Fashion", 98, 388, 72, false],
  ];
  return (
    <svg viewBox="0 0 280 580" className="lt-phone__screen" role="img" aria-label="Red by WORTH dating app: choose up to 5 interests" fontFamily={font}>
      <rect width="280" height="580" fill="#fbf7f2" />
      <text x="26" y="30" fontSize="11" fontWeight="600" fill="#111">9:41</text>
      <rect x="100" y="12" width="80" height="24" rx="12" fill="#000" />
      <path d="M30 62 h-10 m4 -5 l-5 5 5 5" stroke="#222" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <rect x="64" y="58" width="176" height="5" rx="2.5" fill="#f1dcdf" />
      <rect x="64" y="58" width="120" height="5" rx="2.5" fill={RED} />
      <text x="140" y="134" textAnchor="middle" fontSize="56" fontWeight="500" fill={RED} letterSpacing="-1">red</text>
      <text x="152" y="154" textAnchor="middle" fontSize="12" fill="#222" letterSpacing="0.5">by WORTH</text>
      <text x="140" y="196" textAnchor="middle" fontSize="15" fontWeight="600" fill="#111">Choose Up To</text>
      <text x="140" y="216" textAnchor="middle" fontSize="15" fontWeight="600" fill="#111">5 Interests</text>
      <text x="140" y="240" textAnchor="middle" fontSize="9.5" fill="#666">Tell us what piques your curiosity and</text>
      <text x="140" y="253" textAnchor="middle" fontSize="9.5" fill="#666">passions</text>
      {chips.map(([label, x, y, w, on]) => (
        <g key={label}>
          <rect x={x} y={y} width={w} height="22" rx="11" fill={on ? RED : "#fff"} stroke={on ? RED : "#e3dcd6"} />
          <text x={x + w / 2} y={y + 14.5} textAnchor="middle" fontSize="9.5" fill={on ? "#fff" : "#333"}>{label}</text>
        </g>
      ))}
      <path d="M20 452 C 90 430, 170 480, 260 446" stroke="#e7cfd2" strokeDasharray="4 5" fill="none" />
      <rect x="24" y="508" width="232" height="40" rx="20" fill={RED} />
      <text x="140" y="532" textAnchor="middle" fontSize="13" fontWeight="600" fill="#fff">Continue</text>
      <rect x="100" y="562" width="80" height="4" rx="2" fill="#222" />
    </svg>
  );
}

function ApplyupScreen() {
  return (
    <svg viewBox="0 0 280 580" className="lt-phone__screen" role="img" aria-label="Applyup recruitment app: job match for a senior React Native developer" fontFamily={font}>
      <defs>
        <linearGradient id="ap-head" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3566f0" />
          <stop offset="1" stopColor="#1f45c8" />
        </linearGradient>
        <filter id="ap-shadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#1b2a55" floodOpacity="0.12" />
        </filter>
      </defs>
      <rect width="280" height="580" fill="#f3f5f9" />
      <rect width="280" height="176" fill="url(#ap-head)" />
      <rect x="100" y="12" width="80" height="24" rx="12" fill="#000" />
      <text x="20" y="60" fontSize="10.5" fill="#dbe4ff">Good morning 👋</text>
      <text x="20" y="84" fontSize="19" fontWeight="700" fill="#fff">Ayesha</text>
      <circle cx="242" cy="70" r="17" fill="#ffffff26" />
      <path d="M236 75 h12 l-1.5 -2 v-5 a4.5 4.5 0 0 0 -9 0 v5 z M240 77.5 h4" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      <circle cx="249" cy="62" r="3" fill="#ff5a6e" />
      {[["Picks left", "12", 20], ["Saved", "5", 104], ["Applied", "3", 188]].map(([l, v, x]) => (
        <g key={l as string}>
          <rect x={x as number} y="104" width="72" height="48" rx="10" fill="#ffffff21" stroke="#ffffff40" />
          <text x={(x as number) + 10} y="122" fontSize="9" fill="#e6ecff">{l}</text>
          <text x={(x as number) + 10} y="142" fontSize="15" fontWeight="700" fill="#fff">{v}</text>
        </g>
      ))}
      <g filter="url(#ap-shadow)">
        <rect x="20" y="196" width="240" height="266" rx="18" fill="#fff" />
      </g>
      <rect x="36" y="212" width="38" height="38" rx="10" fill="#efe9ff" />
      <text x="55" y="236" textAnchor="middle" fontSize="14" fontWeight="700" fill="#6d4ae8">N</text>
      <text x="84" y="228" fontSize="12" fontWeight="600" fill="#111">Nimbus Labs</text>
      <text x="84" y="243" fontSize="9" fill="#8a90a0">Remote · Full-time</text>
      <text x="36" y="284" fontSize="15.5" fontWeight="700" fill="#111">Senior React Native</text>
      <text x="36" y="304" fontSize="15.5" fontWeight="700" fill="#111">Developer</text>
      {[["React Native", 36, 318, 74], ["TypeScript", 116, 318, 64], ["$4k–6k/mo", 36, 344, 68]].map(([l, x, y, w]) => (
        <g key={l as string}>
          <rect x={x as number} y={y as number} width={w as number} height="20" rx="6" fill="#f1f3f7" />
          <text x={(x as number) + (w as number) / 2} y={(y as number) + 13.5} textAnchor="middle" fontSize="9" fill="#333">{l}</text>
        </g>
      ))}
      <rect x="36" y="376" width="208" height="30" rx="10" fill="#eef2ff" />
      <text x="140" y="395" textAnchor="middle" fontSize="10" fontWeight="600" fill="#2f5ae0">✦ 92% AI match with your profile</text>
      <rect x="36" y="420" width="208" height="6" rx="3" fill="#eef0f4" />
      <rect x="36" y="432" width="170" height="6" rx="3" fill="#eef0f4" />
      <rect x="36" y="444" width="130" height="6" rx="3" fill="#eef0f4" />
      <circle cx="80" cy="512" r="21" fill="#fff" stroke="#e6e8ee" />
      <path d="M74 506 l12 12 m0 -12 l-12 12" stroke="#e0435a" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="140" cy="512" r="23" fill="#2f6bff" />
      <path d="M134 502 h12 v20 l-6 -5 -6 5 z" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinejoin="round" />
      <circle cx="200" cy="512" r="21" fill="#0f1115" />
      <path d="M192 512 l16 -7 -6 16 -2 -7 z" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <rect x="100" y="562" width="80" height="4" rx="2" fill="#222" />
    </svg>
  );
}

function Laptop({ src, alt, className }: { src: string; alt: string; className: string }) {
  return (
    <div className={`lt-laptop ${className}`}>
      <div className="lt-laptop__screen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={1600} height={1000} fetchPriority="high" />
      </div>
      <div className="lt-laptop__base" aria-hidden="true" />
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="lt-show">
      <Laptop className="lt-laptop--back" src="/showcase/contentscale.webp" alt="ContentScale generative AI dashboard built by Markeltree" />
      <div className="lt-phone lt-phone--apply"><ApplyupScreen /></div>
      <Laptop className="lt-laptop--front" src="/showcase/advisory-crm.webp" alt="Advisory CRM, a compliance-first CRM built by Markeltree" />
      <div className="lt-phone lt-phone--red"><RedScreen /></div>
    </div>
  );
}
