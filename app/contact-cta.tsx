import { contactDetails, socialLinks } from "./content";
import ContactBrief from "./contact-brief";
import { Icon } from "./icons";

export default function ContactCTA() {
  return (
    <section className="v2-contact" id="contact">
      <img
        className="v2-contact-mark"
        src="/brand-assets/logos/meninges-labs-monogram-white.png"
        alt=""
        width="828"
        height="485"
        loading="lazy"
        aria-hidden="true"
      />
      <div className="v2-wrap v2-contact-grid">
        <div className="v2-contact-copy">
          <p className="v2-eyebrow is-light">
            <i aria-hidden="true" /> Start a conversation
          </p>
          <h2>
            Let&rsquo;s build
            <br />
            <span>something meaningful.</span>
          </h2>
          <p className="v2-contact-lede">
            Tell us what needs to work better. We start with the business problem, then define a practical path
            forward.
          </p>

          <div className="v2-contact-links">
            <a href={contactDetails.email}>
              <span><Icon name="mail" size={18} /> Email</span>
              <small>info@meningeslabs.com</small>
              <Icon name="arrow-up-right" size={17} />
            </a>
            <a href={contactDetails.tel}>
              <span><Icon name="phone" size={18} /> Call</span>
              <small>{contactDetails.phone}</small>
              <Icon name="arrow-up-right" size={17} />
            </a>
            <a href={contactDetails.whatsapp} target="_blank" rel="noreferrer">
              <span><Icon name="message" size={18} /> WhatsApp</span>
              <small>Message ready to send</small>
              <Icon name="arrow-up-right" size={17} />
            </a>
            <a href={socialLinks[0].href} target="_blank" rel="noreferrer">
              <span><Icon name="instagram" size={18} /> Instagram</span>
              <small>Follow the practice</small>
              <Icon name="arrow-up-right" size={17} />
            </a>
          </div>

          <p className="v2-contact-note">
            <Icon name="pin" size={15} /> Hyderabad, India · Remote-first. In-person meetings by prior agreement.
          </p>
        </div>

        <ContactBrief />
      </div>
    </section>
  );
}
