import { DCI } from "@/types/dci";
import { SidebarContainer, SidebarLink, SidebarSection } from "@/components/layout/Sidebar";

interface ChapterSidebarProps {
  chapterSlug: string;
}

const ChapterSidebar: DCI<ChapterSidebarProps> = ({ chapterSlug }) => {
  const links = [
    { to: `/chapters/${chapterSlug}`, label: "Overview", exact: true },
    { to: `/chapters/${chapterSlug}/news`, label: "News" },
    { to: `/chapters/${chapterSlug}/events`, label: "Events" },
    { to: `/chapters/${chapterSlug}/committee`, label: "Committee" },
    { to: `/chapters/${chapterSlug}/awards`, label: "Awards" },
    { to: `/chapters/${chapterSlug}/gallery`, label: "Gallery" },
    { to: `/chapters/${chapterSlug}/store`, label: "Store" },
  ];

  return (
    <SidebarContainer>
      <SidebarSection title="Menu">
        {links.map((l) => (
          <SidebarLink
            key={l.to}
            to={l.to}
            exact={l.exact}
          >
            {l.label}
          </SidebarLink>
        ))}
      </SidebarSection>
    </SidebarContainer>
  );
};

export default ChapterSidebar;
