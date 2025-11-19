import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiBox from "../lofi/LofiBox";
import { links, socialLinks } from "@/data/data.footer";

import { fontSize } from "@/styles/styling";

const footerContainer = css`
  width: 100%;
  margin-top: 10rem;
`;

const footerContent = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const footerMenu = css`
  display: flex;
  gap: 16rem;
  align-items: center;
  ${fontSize(0.875)}
`;

const footerLink = css`
  text-decoration: none;
  color: var(--foreground);
  
  &:hover {
    text-decoration: underline;
  }
`;

const separator = css`
  width: 1px;
  height: 1em;
  background: var(--foreground);
  opacity: 0.3;
`;

const rightSection = css`
  display: flex;
  gap: 24rem;
  align-items: center;
`;

const socialLinksContainer = css`
  display: flex;
  gap: 12rem;
  ${fontSize(0.875)}
`;

const socialLink = css`
  text-decoration: none;
  color: var(--foreground);
  font-weight: bold;
  
  &:hover {
    opacity: 0.7;
  }
`;

const copyright = css`
  ${fontSize(0.875)}
  opacity: 0.5;
`;

const LayoutFooter: DCI = ({ children }) => {
  return (
    <div className={footerContainer}>
      <LofiBox className={footerContent}>
        <nav className={footerMenu}>
          {links.map(([label, url], i) => (
            <div key={url} style={{ display: "contents" }}>
              <a href={url} className={footerLink}>{label}</a>
              {i < links.length - 1 && <div className={separator} />}
            </div>
          ))}
        </nav>

        <div className={rightSection}>
          <nav className={socialLinksContainer}>
            {socialLinks.map(([label, url]) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" className={socialLink}>{label}</a>
            ))}
          </nav>
          <div className={copyright}>&copy; 2025 IESANZ</div>
        </div>
      </LofiBox>
    </div>
  );
};

export default LayoutFooter;
