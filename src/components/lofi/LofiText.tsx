import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { fontSize } from "@/styles/styling";

interface LofiTextProps {
  lines?: number;
}

const styles = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-bottom: 1em;
  ${fontSize(1)}

  .line {
    height: 1em;
    background: var(--foreground);
    opacity: 0.2;
    width: 100%;
    border-radius: 2px;

    &:last-child {
      width: 70%;
    }
  }
`;

const LofiText: DCI<LofiTextProps> = ({ lines = 3, className }) => {
  return (
    <div className={`${styles} ${className || ""}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="line" />
      ))}
    </div>
  );
};

export default LofiText;
