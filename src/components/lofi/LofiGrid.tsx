import { DCI } from "@/types/dci";
import { css } from "@linaria/core";

interface LofiGridProps {
    columns?: number;
    gap?: number;
}

const styles = css`
  display: grid;
  width: 100%;
`;

const LofiGrid: DCI<LofiGridProps> = ({
    children,
    columns = 3,
    gap = 16,
    className,
}) => {
    return (
        <div
            className={`${styles} ${className || ""}`}
            style={{
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap: `${gap}px`,
            }}
        >
            {children}
        </div>
    );
};

export default LofiGrid;
