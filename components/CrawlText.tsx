import type { Crawl } from "@/content";

/**
 * Renders text as one <span class="w"> per word so ScrollFx can reveal them
 * individually. Words passed as { b } are highlighted (data-a) and turn green.
 */
export function CrawlText({ parts, className, range, id }: { parts: Crawl; className: string; range: string; id?: string }) {
  const out: React.ReactNode[] = [];
  let key = 0;
  parts.forEach((part, i) => {
    const text = typeof part === "string" ? part : part.b;
    const accent = typeof part !== "string";
    const words = text.split(/\s+/).filter(Boolean);
    // Punctuation-only segments attach to the previous word without a space.
    if (i > 0 && !/^[,.;:!?]/.test(text)) out.push(" ");
    words.forEach((w, j) => {
      if (j > 0) out.push(" ");
      out.push(
        <span key={key++} className="w" data-a={accent ? "1" : undefined}>
          {w}
        </span>,
      );
    });
  });
  return (
    <p id={id} className={`${className} crawl`} data-range={range}>
      {out}
    </p>
  );
}
