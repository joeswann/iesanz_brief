import { DCI } from "@/types/dci";
import { css, cx } from "@linaria/core";

interface LofiImageProps {
    ratio?: number;
    label?: string;
}

const imageContainer = css`
  position: relative;
  width: 100%;
  border: 1px solid var(--foreground);
  overflow: hidden;
  background: var(--background);
`;

const imageSvg = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  stroke: var(--foreground);
  stroke-width: 1;
`;

const imageLabel = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--background);
  padding: 4px 8px;
  font-family: monospace;
  border: 1px solid var(--foreground);
  z-index: 1;
`;

const LofiImage: DCI<LofiImageProps> = ({
    ratio = 16 / 9,
    label,
    className,
}) => {
    return (
        <div
            className={cx(imageContainer, className)}
            style={{ aspectRatio: `${ratio}` }}
        >
            <svg preserveAspectRatio="none" className={imageSvg}>
                <line x1="0" y1="0" x2="100%" y2="100%" />
                <line x1="100%" y1="0" x2="0" y2="100%" />
            </svg>
            {label && <div className={imageLabel}>{label}</div>}
        </div>
    );
};

export default LofiImage;
