import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { TypeHeading } from "@/components/type/TypeHeading";
import { TypeBody } from "@/components/type/TypeBody";
import { fontSize } from "@/styles/styling";

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
  
  ul {
    padding-left: 24rem;
    display: flex;
    flex-direction: column;
    gap: 8rem;
  }
`;

interface PageSection {
    title: string;
    content: string;
    link?: {
        text: string;
        url: string;
    };
    list?: string[];
}

interface PageData {
    title: string;
    lastUpdated: string;
    intro: string;
    sections: PageSection[];
}

interface PageLayoutProps {
    data: PageData;
}

const PageLayout: DCI<PageLayoutProps> = ({ data }) => {
    return (
        <div className={layoutContainer}>
            <div className={header}>
                <TypeHeading level={1}>{data.title}</TypeHeading>
                <TypeBody className={lastUpdated}>Last Updated: {data.lastUpdated}</TypeBody>
            </div>

            <div className={body}>
                <TypeBody>{data.intro}</TypeBody>

                {data.sections.map((section, index) => (
                    <div key={index}>
                        <TypeHeading level={2} style={{ marginTop: '24rem', marginBottom: '16rem' }}>{section.title}</TypeHeading>
                        <TypeBody>
                            {section.content}
                            {section.link && (
                                <> <a href={section.link.url} style={{ color: 'inherit', textDecoration: 'underline' }}>{section.link.text}</a>.</>
                            )}
                        </TypeBody>
                        {section.list && (
                            <ul>
                                {section.list.map((item, i) => (
                                    <li key={i}><TypeBody>{item}</TypeBody></li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PageLayout;
