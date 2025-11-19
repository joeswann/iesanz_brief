import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { Outlet } from "@tanstack/react-router";
import { spacing } from "@/styles/styling";
import ChapterSidebar from "./ChapterSidebar";
import { TypeHeading } from "@/components/type/TypeHeading";
import { TypeBody } from "@/components/type/TypeBody";

const container = css`
  padding: ${spacing(4)};
  max-width: 1200px;
  margin: 0 auto;
`;

const header = css`
  margin-bottom: ${spacing(6)};
  padding-bottom: ${spacing(4)};
  border-bottom: 1px solid #eee;
`;

const contentWrapper = css`
  display: flex;
  gap: ${spacing(8)};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${spacing(4)};
  }
`;

const mainContent = css`
  flex-grow: 1;
  min-width: 0; /* Prevents flex child from overflowing */
`;

interface ChapterLayoutProps {
    chapter: {
        name: string;
        slug: string;
    };
    description: string;
}

const ChapterLayout: DCI<ChapterLayoutProps> = ({ chapter, description }) => {
    return (
        <div className={container}>
            <div className={header}>
                <TypeHeading level={1}>{chapter.name} Chapter</TypeHeading>
                <TypeBody>{description}</TypeBody>
            </div>

            <div className={contentWrapper}>
                <ChapterSidebar chapterSlug={chapter.slug} />
                <main className={mainContent}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default ChapterLayout;
