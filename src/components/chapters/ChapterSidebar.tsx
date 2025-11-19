import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { Link } from "@tanstack/react-router";
import { fontSize, spacing } from "@/styles/styling";
import { TypeHeading } from "@/components/type/TypeHeading";

const sidebar = css`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  width: 250px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: ${spacing(2)};
    border-bottom: 1px solid #eee;
    margin-bottom: ${spacing(4)};
  }
`;

const link = css`
  text-decoration: none;
  color: var(--foreground);
  padding: ${spacing(2)};
  border-radius: 4px;
  transition: background-color 0.2s;
  ${fontSize(1)}

  &:hover {
    background-color: #f5f5f5;
  }
`;

const activeLink = css`
  background-color: #eee;
  font-weight: bold;
`;

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
        <nav className={sidebar}>
            <TypeHeading level={4} style={{ paddingLeft: spacing(2), marginBottom: spacing(1) }}>Menu</TypeHeading>
            {links.map((l) => (
                <Link
                    key={l.to}
                    to={l.to}
                    activeProps={{ className: activeLink }}
                    activeOptions={{ exact: l.exact }}
                    className={link}
                >
                    {l.label}
                </Link>
            ))}
        </nav>
    );
};

export default ChapterSidebar;
