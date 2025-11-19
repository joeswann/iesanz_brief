import { DCI } from "@/types/dci";
import { css, cx } from "@linaria/core";
import { fontSize } from "@/styles/styling";

interface LofiHeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const headingBase = css`
  font-family: monospace;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  letter-spacing: -0.02em;
`;

const h1 = css`
  ${fontSize(3)}
  display: inline-block;
`;

const h2 = css`
  ${fontSize(2.25)}
`;

const h3 = css`
  ${fontSize(1.75)}
`;

const h4 = css`
  ${fontSize(1.5)}
`;

const h5 = css`
  ${fontSize(1.25)}
`;

const h6 = css`
  ${fontSize(1)}
`;

const LofiHeading: DCI<LofiHeadingProps> = ({
  children,
  level = 1,
  className,
}) => {
  const Tag = `h${level}` as any;
  const levelStyle = level === 1 ? h1 : level === 2 ? h2 : level === 3 ? h3 : level === 4 ? h4 : level === 5 ? h5 : h6;

  return <Tag className={cx(headingBase, levelStyle, className)}>{children}</Tag>;
};

export default LofiHeading;
