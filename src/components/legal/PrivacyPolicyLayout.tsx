import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiHeading from "@/components/lofi/LofiHeading";
import { fontSize } from "@/styles/styling";
import { privacyPolicy } from "@/data/data.privacy";

const layoutContainer = css`
  max-width: 800rem;
  margin: 0 auto;
  padding-bottom: 64rem;
`;

const header = css`
  margin-bottom: 48rem;
  border-bottom: 1px solid var(--light-grey);
  padding-bottom: 24rem;
`;

const lastUpdated = css`
  opacity: 0.6;
  margin-top: 16rem;
`;

const body = css`
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
`;

const PrivacyPolicyLayout: DCI = () => {
    return (
        <div className={layoutContainer}>
            <div className={header}>
                <LofiHeading level={1}>Privacy Policy</LofiHeading>
                <div className={lastUpdated}>Last Updated: {privacyPolicy.lastUpdated}</div>
            </div>

            <div className={body}>
                <p>{privacyPolicy.intro}</p>

                {privacyPolicy.sections.map((section, index) => (
                    <div key={index}>
                        <LofiHeading level={2}>{section.title}</LofiHeading>
                        <p>
                            {section.content}
                            {section.link && (
                                <> <a href={section.link.url}>{section.link.text}</a>.</>
                            )}
                        </p>
                        {section.list && (
                            <ul>
                                {section.list.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrivacyPolicyLayout;
