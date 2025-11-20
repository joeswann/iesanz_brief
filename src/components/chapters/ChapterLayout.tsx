import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { Outlet } from "@tanstack/react-router";
import { spacing } from "@/styles/styling";
import ChapterSidebar from "./ChapterSidebar";
import { TypeHeading } from "@/components/type/TypeHeading";
import { TypeBody } from "@/components/type/TypeBody";
import SidebarLayout from "@/components/layout/SidebarLayout";

const container = css`
  padding: ${spacing(4)};
`;

const header = css`
  margin-bottom: ${spacing(6)};
  padding-bottom: ${spacing(4)};
  border-bottom: 1px solid #eee;
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

      <SidebarLayout sidebar={<ChapterSidebar chapterSlug={chapter.slug} />}>
        <Outlet />
      </SidebarLayout>
    </div>
  );
};

export default ChapterLayout;
