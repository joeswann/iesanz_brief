import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { fontSize } from "@/styles/styling";

interface LofiHeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const styles = css`
  font-family: monospace;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  letter-spacing: -0.02em;

  &.h1 {
    ${fontSize(3)}
    display: inline-block;
  }
  &.h2 {
    ${fontSize(2.25)}
  }
  &.h3 {
    ${fontSize(1.75)}
  }
  &.h4 {
    ${fontSize(1.5)}
  }
  &.h5 {
    ${fontSize(1.25)}
  }
  &.h6 {
    ${fontSize(1)}
  }
`;

const LofiHeading: DCI<LofiHeadingProps> = ({
  children,
  level = 1,
  className,
}) => {
  const Tag = `h${level}` as any;
  return <Tag className={`${styles} h${level} ${className || ""}`}>{children}</Tag>;
};

export default LofiHeading;
