import { css, cx } from "@linaria/core";
import { fontSize } from "@/styles/styling";
import { DCI } from "@/types/dci";

const bodyBase = css`
    margin: 0;
    line-height: 1.5;
    color: var(--foreground);
`;

const variantDefault = css`
    ${fontSize(1)}
`;

const variantSmall = css`
    ${fontSize(0.875)}
`;

const variantLarge = css`
    ${fontSize(1.125)}
`;

const colorMuted = css`
    color: #666;
`;

const weightBold = css`
    font-weight: 600;
`;

interface TypeBodyProps extends React.HTMLAttributes<HTMLElement> {
    variant?: "default" | "small" | "large";
    color?: "default" | "muted";
    weight?: "default" | "bold";
    className?: string;
    as?: any;
}

export const TypeBody: DCI<TypeBodyProps> = ({
    children,
    variant = "default",
    color = "default",
    weight = "default",
    className,
    as: Component = "p",
    ...props
}) => {
    return (
        <Component
            className={cx(
                bodyBase,
                variant === "default" && variantDefault,
                variant === "small" && variantSmall,
                variant === "large" && variantLarge,
                color === "muted" && colorMuted,
                weight === "bold" && weightBold,
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
};
