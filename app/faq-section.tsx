import { faqGroups } from "./content";
import { Icon } from "./icons";

export default function FAQSection({ groups, limit, id }: { groups: string[]; limit?: number; id?: string }) {
  let selected = faqGroups.filter((group) => groups.includes(group.name));
  if (limit) selected = selected.map((group) => ({ ...group, items: group.items.slice(-limit) }));
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: selected.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    ),
  };

  return (
    <section className="section faq-section" id={id}>
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            Questions, answered
          </p>
          <div className="section-head-copy">
            <h2 className="display section-title">
              Clear answers,
              <br />
              without the <em>runaround.</em>
            </h2>
            <p className="section-copy">
              Practical detail about services, scope, search, automation, pricing and getting started.
            </p>
          </div>
        </div>

        <div className="faq-groups">
          {selected.map((group) => (
            <div className="faq-group" key={group.name}>
              <p className="faq-group-label">{group.name}</p>
              <div className="faq-list">
                {group.items.map((item) => (
                  <details className="faq-item" key={item.question}>
                    <summary>
                      <span>{item.question}</span>
                      <i className="faq-icon" aria-hidden="true">
                        <Icon name="plus" size={18} />
                      </i>
                    </summary>
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
