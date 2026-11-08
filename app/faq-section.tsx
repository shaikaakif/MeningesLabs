import { faqGroups } from "./content";

export default function FAQSection({ groups, limit, id }: { groups: string[]; limit?: number; id?: string }) {
  let selected = faqGroups.filter((group) => groups.includes(group.name));
  if (limit) selected = selected.map((group) => ({ ...group, items: group.items.slice(-limit) }));
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: selected.flatMap((group) => group.items.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } }))) };
  return <section className="faq-section content-section" id={id}>
    <div className="section-inner"><p className="eyebrow">Answers, without the runaround</p><div><h2 className="display section-title">Questions we hear often.</h2><p className="section-copy">{limit ? "A few useful details before we talk." : "Browse practical answers about our services, approach, scope and costs."}</p></div></div>
    <div className="faq-groups">{selected.map((group) => <div key={group.name} className="faq-group"><h3 className="eyebrow">{group.name}</h3><div className="faq-list">{group.items.map((item) => <details className="faq-item" key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></div>)}</div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </section>;
}
