import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { spacing } from "@/styles/styling";
import { TypeHeading } from "@/components/type/TypeHeading";
import { TypeBody } from "@/components/type/TypeBody";
import AllChaptersSidebar from "./AllChaptersSidebar";
import SidebarLayout from "@/components/layout/SidebarLayout";

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

const AllChaptersLayout: DCI<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={container}>
      <div className={header}>
        <TypeHeading level={1}>All Chapters</TypeHeading>
        <TypeBody variant="large" style={{ marginTop: spacing(2) }}>
          Stay up to date with the latest news and events from across all IESANZ chapters.
        </TypeBody>
      </div>

      <SidebarLayout sidebar={<AllChaptersSidebar />}>
        {children}
      </SidebarLayout>
    </div>
  );
};

export default AllChaptersLayout;
