import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiHeading from "@/components/lofi/LofiHeading";
import LofiText from "@/components/lofi/LofiText";
import { LofiButton } from "@/components/lofi/LofiButton";
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

const ContactLayout: DCI = () => {
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

      </div>

      <div className={formSection}>
        <LofiHeading level={2}>{contactDetails.form.title}</LofiHeading>

        <div className={formGroup}>
          <label className={formLabel}>{contactDetails.form.fields.name.label}</label>
          <input type="text" placeholder={contactDetails.form.fields.name.placeholder} className={formInput} />
        </div>

        <div className={formGroup}>
          <label className={formLabel}>{contactDetails.form.fields.email.label}</label>
          <input type="email" placeholder={contactDetails.form.fields.email.placeholder} className={formInput} />
        </div>

        <div className={formGroup}>
          <label className={formLabel}>{contactDetails.form.fields.subject.label}</label>
          <input type="text" placeholder={contactDetails.form.fields.subject.placeholder} className={formInput} />
        </div>

        <div className={formGroup}>
          <label className={formLabel}>{contactDetails.form.fields.message.label}</label>
          <textarea placeholder={contactDetails.form.fields.message.placeholder} className={formTextarea} />
        </div>

        <LofiButton variant="primary">{contactDetails.form.submit}</LofiButton>
      </div>
    </div>
  );
};

export default ContactLayout;
