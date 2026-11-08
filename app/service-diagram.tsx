const diagrams: Record<string, { title: string; body: React.ReactNode }> = {
  "digital-engineering": { title: "Digital architecture", body: <><rect x="28" y="44" width="170" height="90" rx="2"/><rect x="237" y="44" width="170" height="90" rx="2"/><rect x="446" y="44" width="170" height="90" rx="2"/><path d="M198 89h39m170 0h39"/><circle cx="218" cy="89" r="3"/><circle cx="427" cy="89" r="3"/></> },
  "search-intelligence": { title: "Search discovery", body: <><circle cx="110" cy="90" r="45"/><circle cx="110" cy="90" r="20"/><path d="M142 122l22 22M155 60h160M155 90h210M155 120h160"/><circle cx="336" cy="60" r="4"/><circle cx="386" cy="90" r="4"/><circle cx="336" cy="120" r="4"/></> },
  "performance-marketing": { title: "Campaign pathway", body: <><path d="M45 54h120l45 36-45 36H45zM255 54h120l45 36-45 36H255zM465 54h120v72H465z"/><path d="M165 90h90m165 0h45"/><path d="M510 66v48m-18-24h36"/></> },
  "ai-automation": { title: "Human-led automation", body: <><rect x="25" y="63" width="128" height="54" rx="27"/><rect x="247" y="22" width="148" height="48" rx="2"/><rect x="247" y="100" width="148" height="48" rx="2"/><rect x="492" y="63" width="148" height="54" rx="2"/><path d="M153 90h42v-44h52m-52 44v34h52m148-78h34v44h63m-63 0v-44"/><circle cx="195" cy="90" r="4"/><circle cx="429" cy="90" r="4"/></> },
  "growth-intelligence": { title: "Measure and prioritise", body: <><path d="M36 140h580M64 140V96h76v44m34 0V70h76v70m34 0V45h76v95m34 0V84h76v56"/><path d="M64 90l70-20 73 8 76-36 76 29 77-14"/><circle cx="436" cy="57" r="5"/></> },
};

export default function ServiceDiagram({ slug }: { slug: string }) {
  const diagram = diagrams[slug];
  if (!diagram) return null;
  return <figure className={`service-diagram diagram-${slug}`} aria-label={diagram.title}>
    <svg viewBox="0 0 665 180" role="img"><title>{diagram.title}</title>{diagram.body}</svg>
    <figcaption className="mono">{diagram.title}</figcaption>
  </figure>;
}
