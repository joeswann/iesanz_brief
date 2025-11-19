import { DCI } from "@/types/dci";
import { css } from "@linaria/core";

const styles = css`
  padding: 8px;
  border: 1px solid var(--foreground);
  display: flex;

  .link {
    display: flex;
    padding: 0 8px;

    + .link {
      border-left: 1px solid var(--foreground);
    }
  }
`;

const LofiMenu: DCI<{ links: [string, string][] }> = ({ links, className }) => {
  return (
    <div className={styles + " " + className}>
      {links.map(([text, url]) => (
        <a className="link" href={url}>
          {text}
        </a>
      ))}
    </div>
  );
};

export default LofiMenu;
