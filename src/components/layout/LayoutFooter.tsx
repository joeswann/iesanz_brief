import { DCI } from "@/types/dci";
import { css } from "@linaria/core";

import { links, socialLinks } from "@/data/data.footer";

import { fontSize } from "@/styles/styling";



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

const footerWrapper = css`
  width: 100%;
  margin-top: 10rem;
  border-top: 1px solid var(--foreground);
  padding: 16rem;
`;

const LayoutFooter: DCI = () => {
  return (
    <footer className={footerWrapper}>
      <div className={footerContent}>
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
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;
