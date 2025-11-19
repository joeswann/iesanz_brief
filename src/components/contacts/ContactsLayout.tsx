import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiHeading from "@/components/lofi/LofiHeading";
import LofiText from "@/components/lofi/LofiText";
import LofiButton from "@/components/lofi/LofiButton";
import LofiBox from "@/components/lofi/LofiBox";
import { fontSize } from "@/styles/styling";

const styles = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64rem;
  padding-bottom: 64rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .info-section {
    display: flex;
    flex-direction: column;
    gap: 32rem;
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 16rem;
    ${fontSize(1.125)}
  }

  .detail-item {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    
    label {
      ${fontSize(0.875)}
      opacity: 0.6;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    a {
      color: var(--foreground);
      text-decoration: none;
      font-weight: bold;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .form-section {
    background: rgba(0,0,0,0.03);
    padding: 32rem;
    display: flex;
    flex-direction: column;
    gap: 24rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8rem;
    
    label {
      font-weight: bold;
    }
    
    input, textarea {
      padding: 12rem;
      border: 1px solid var(--foreground);
      background: var(--background);
      font-family: inherit;
      ${fontSize(1)}
    }
    
    textarea {
      min-height: 150rem;
      resize: vertical;
    }
  }
`;

const ContactsLayout: DCI = () => {
    return (
        <div className={styles}>
            <div className="info-section">
                <div>
                    <LofiHeading level={1}>Contact Us</LofiHeading>
                    <LofiText lines={2} />
                </div>

                <div className="contact-details">
                    <div className="detail-item">
                        <label>General Inquiries</label>
                        <a href="tel:+61733262318">+61 7 3326 2318</a>
                        <a href="mailto:secretariat@iesanz.org">secretariat@iesanz.org</a>
                    </div>

                    <div className="detail-item">
                        <label>Postal Address</label>
                        <div>
                            PO Box 576<br />
                            Crows Nest NSW 1585<br />
                            Australia
                        </div>
                    </div>
                </div>

                <LofiBox>
                    <LofiHeading level={3}>Chapter Contacts</LofiHeading>
                    <p>For local inquiries, please reach out to your Chapter President.</p>
                    <LofiButton variant="secondary">Find Your Chapter</LofiButton>
                </LofiBox>
            </div>

            <div className="form-section">
                <LofiHeading level={2}>Send us a message</LofiHeading>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Your name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="your@email.com" />
                </div>

                <div className="form-group">
                    <label>Subject</label>
                    <input type="text" placeholder="How can we help?" />
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea placeholder="Write your message here..." />
                </div>

                <LofiButton variant="primary">Send Message</LofiButton>
            </div>
        </div>
    );
};

export default ContactsLayout;
