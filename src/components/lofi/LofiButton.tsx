import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { fontSize } from "@/styles/styling";

interface LofiButtonProps {
  variant?: "primary" | "secondary";
  onClick?: () => void;
}



const styles = css`
  padding: 12rem 24rem;
  font-family: monospace;
  ${fontSize(1)}
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  transition: all 0.2s;

  &.primary {
    background: var(--foreground);
    color: var(--background);
    border: 1px solid var(--foreground);
  }

  &.secondary {
    background: transparent;
    color: var(--foreground);
    border: 1px solid var(--foreground);
  }

  &:hover {
    opacity: 0.8;
  }
`;

const LofiButton: DCI<LofiButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  className,
}) => {
  return (
    <button
      className={`${styles} ${variant} ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default LofiButton;
