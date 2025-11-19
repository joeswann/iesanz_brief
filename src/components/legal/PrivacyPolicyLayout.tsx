import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiHeading from "@/components/lofi/LofiHeading";
import { fontSize } from "@/styles/styling";

const styles = css`
  max-width: 800rem;
  margin: 0 auto;
  padding-bottom: 64rem;

  .body {
    display: flex;
    flex-direction: column;
    gap: 24rem;
    ${fontSize(1)}
    line-height: 1.6;

    h2 {
      margin-top: 24rem;
      ${fontSize(1.5)}
      font-weight: bold;
    }

    ul {
      padding-left: 24rem;
      display: flex;
      flex-direction: column;
      gap: 8rem;
    }
  }
`;

const PrivacyPolicyLayout: DCI = () => {
    return (
        <div className={styles}>
            <div style={{ marginBottom: "48rem", borderBottom: "1px solid var(--light-grey)", paddingBottom: "24rem" }}>
                <LofiHeading level={1}>Privacy Policy</LofiHeading>
                <div style={{ opacity: 0.6, marginTop: "16rem" }}>Last Updated: November 2025</div>
            </div>

            <div className="body">
                <p>
                    The Illuminating Engineering Society of Australia and New Zealand Ltd (IESANZ) recognizes the importance of protecting the privacy of personally identifiable information collected about our members and website users.
                </p>

                <h2>Information Collection and Use</h2>
                <p>
                    We collect information from users for the ordinary operation of our website and business. This information is used to provide services to our members, manage events, and improve our offerings. We are committed to ensuring that this information is handled responsibly and securely.
                </p>

                <h2>Disclosure of Information</h2>
                <p>
                    IESANZ will not disclose your personal information to third parties except in the following circumstances:
                </p>
                <ul>
                    <li>When you have given your consent for the disclosure.</li>
                    <li>For the purpose of providing services to you (e.g., event registration, membership processing).</li>
                    <li>When required by law or to cooperate with government authorities.</li>
                    <li>If the information is already publicly available.</li>
                </ul>

                <h2>Cookies and Tracking</h2>
                <p>
                    Our website may use cookies to enhance your user experience. These are small files stored on your device that help us analyze web traffic and improve our site. You can choose to accept or decline cookies through your browser settings.
                </p>

                <h2>External Links</h2>
                <p>
                    Our website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.
                </p>

                <h2>Security</h2>
                <p>
                    We take reasonable precautions to protect your information. However, given the nature of the internet, we cannot guarantee absolute security. We are not liable for any unauthorized access or disclosure that occurs due to transmission errors or unauthorized acts of third parties.
                </p>

                <h2>Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at <a href="mailto:secretariat@iesanz.org">secretariat@iesanz.org</a>.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicyLayout;
