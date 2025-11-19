import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiHeading from "@/components/lofi/LofiHeading";
import LofiText from "@/components/lofi/LofiText";
import { LofiButton } from "@/components/lofi/LofiButton";
import LofiBox from "@/components/lofi/LofiBox";
import { fontSize } from "@/styles/styling";
import { contactDetails } from "@/data/data.contacts";

const layoutContainer = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64rem;
  padding-bottom: 64rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const infoSection = css`
  display: flex;
  flex-direction: column;
  gap: 32rem;
`;

const contactDetailsContainer = css`
  display: flex;
  flex-direction: column;
  gap: 16rem;
  ${fontSize(1.125)}
`;

const detailItem = css`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const detailLabel = css`
  ${fontSize(0.875)}
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const detailLink = css`
  color: var(--foreground);
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`;

const formSection = css`
  background: rgba(0,0,0,0.03);
  padding: 32rem;
  display: flex;
  flex-direction: column;
  gap: 24rem;
`;

const formGroup = css`
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

const formLabel = css`
  font-weight: bold;
`;

const formInput = css`
  padding: 12rem;
  border: 1px solid var(--foreground);
  background: var(--background);
  font-family: inherit;
  ${fontSize(1)}
`;

const formTextarea = css`
  padding: 12rem;
  border: 1px solid var(--foreground);
  background: var(--background);
  font-family: inherit;
  ${fontSize(1)}
  min-height: 150rem;
  resize: vertical;
`;

const ContactsLayout: DCI = () => {
  return (
    <div className={layoutContainer}>
      <div className={infoSection}>
        <div>
          <LofiHeading level={1}>Contact Us</LofiHeading>
          <LofiText lines={2} />
        </div>

        <div className={contactDetailsContainer}>
          <div className={detailItem}>
            <label className={detailLabel}>{contactDetails.general.label}</label>
            <a href={contactDetails.general.phone.url} className={detailLink}>{contactDetails.general.phone.display}</a>
            <a href={contactDetails.general.email.url} className={detailLink}>{contactDetails.general.email.display}</a>
          </div>

          <div className={detailItem}>
            <label className={detailLabel}>{contactDetails.postal.label}</label>
            <div>
              {contactDetails.postal.address.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>
        </div>

        <LofiBox>
          <LofiHeading level={3}>{contactDetails.chapter.title}</LofiHeading>
          <p>{contactDetails.chapter.description}</p>
          <LofiButton variant="secondary">Find Your Chapter</LofiButton>
        </LofiBox>
      </div>

      <div className={formSection}>
        <LofiHeading level={2}>Send us a message</LofiHeading>

        <div className={formGroup}>
          <label className={formLabel}>Name</label>
          <input type="text" placeholder="Your name" className={formInput} />
        </div>

        <div className={formGroup}>
          <label className={formLabel}>Email</label>
          <input type="email" placeholder="your@email.com" className={formInput} />
        </div>

        <div className={formGroup}>
          <label className={formLabel}>Subject</label>
          <input type="text" placeholder="How can we help?" className={formInput} />
        </div>

        <div className={formGroup}>
          <label className={formLabel}>Message</label>
          <textarea placeholder="Write your message here..." className={formTextarea} />
        </div>

        <LofiButton variant="primary">Send Message</LofiButton>
      </div>
    </div>
  );
};

export default ContactsLayout;
