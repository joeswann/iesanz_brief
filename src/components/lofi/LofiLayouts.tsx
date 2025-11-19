import { DCI } from "@/types/dci";
import { css, cx } from "@linaria/core";
import { fontSize } from "@/styles/styling";

const cardContainer = css`
  border: 1px solid #e0e0e0;
  padding: 24rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 16rem;
  border-radius: 8px;
`;

const cardTitle = css`
  ${fontSize(1.25)}
  font-weight: bold;
  margin: 0;
  margin-bottom: 8rem;
  color: #111;
`;

const cardText = css`
  ${fontSize(1)}
  color: #555;
  margin: 0;
  line-height: 1.5;
`;

const cardLink = css`
  ${fontSize(0.95)}
  color: #111;
  text-decoration: none;
  font-weight: 600;
  margin-top: auto;
  display: inline-block;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const LofiCard: DCI<{ title?: string }> = ({ title, children, className }) => {
  return (
    <div className={cx(cardContainer, className)}>
      {title && <h3 className={cardTitle}>{title}</h3>}
      {children}
    </div>
  );
};

export const LofiCardText: DCI = ({ children, className }) => (
  <p className={cx(cardText, className)}>{children}</p>
);

export const LofiCardLink: DCI<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ children, className, ...props }) => (
  <a className={cx(cardLink, className)} {...props}>{children}</a>
);

const gridStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32rem;
  margin-top: 32rem;
`;

export const LofiGrid: DCI = ({ children, className }) => {
  return <div className={cx(gridStyles, className)}>{children}</div>;
};
