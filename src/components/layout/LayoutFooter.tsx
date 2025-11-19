import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiBox from "../lofi/LofiBox";
import { links, socialLinks } from "@/data/data.footer";

import { fontSize } from "@/styles/styling";

const styles = css`
  width: 100%;
  margin-top: 10rem;

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-menu {
    display: flex;
    gap: 16rem;
    align-items: center;
    ${fontSize(0.875)}

    a {
      text-decoration: none;
      color: var(--foreground);
      
      &:hover {
        text-decoration: underline;
      }
    }

    .separator {
      width: 1px;
      height: 1em;
      background: var(--foreground);
      opacity: 0.3;
    }
  }

  .right-section {
    display: flex;
    gap: 24rem;
    align-items: center;
  }

  .social-links {
    display: flex;
    gap: 12rem;
    ${fontSize(0.875)}
    
    a {
      text-decoration: none;
      color: var(--foreground);
      font-weight: bold;
      
      &:hover {
        opacity: 0.7;
      }
    }
  }

  .copyright {
    ${fontSize(0.875)}
    opacity: 0.5;
  }
`;

const LayoutFooter: DCI = ({ children }) => {
  return (
    <div className={styles}>
      <LofiBox className="footer-content">
        <nav className="footer-menu">
          {links.map(([label, url], i) => (
            <div key={url} style={{ display: "contents" }}>
              <a href={url}>{label}</a>
              {i < links.length - 1 && <div className="separator" />}
            </div>
          ))}
        </nav>

        <div className="right-section">
          <nav className="social-links">
            {socialLinks.map(([label, url]) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer">{label}</a>
            ))}
          </nav>
          <div className="copyright">&copy; 2025 IESANZ</div>
        </div>
      </LofiBox>
    </div>
  );
};

export default LayoutFooter;
