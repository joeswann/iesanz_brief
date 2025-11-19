import { css, cx } from "@linaria/core";
import { fontSize } from "@/styles/styling";
import { DCI } from "@/types/dci";

const headingBase = css`
    margin: 0;
    line-height: 1.2;
    color: var(--foreground);
    font-weight: 600;
`;

const level1 = css` ${fontSize(2.5)} `;
const level2 = css` ${fontSize(2)} `;
const level3 = css` ${fontSize(1.75)} `;
const level4 = css` ${fontSize(1.5)} `;
const level5 = css` ${fontSize(1.25)} `;
const level6 = css` ${fontSize(1)} `;

interface TypeHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
    as?: any;
}

export const TypeHeading: DCI<TypeHeadingProps> = ({
    children,
    level = 2,
    className,
    as: ComponentProp,
    ...props
}) => {
    const Tag = ComponentProp || `h${level}` as any;
    return (
        <Tag
            className={cx(
                headingBase,
                level === 1 && level1,
                level === 2 && level2,
                level === 3 && level3,
                level === 4 && level4,
                level === 5 && level5,
                level === 6 && level6,
                className
            )}
            {...props}
        >
            {children}
        </Tag>
    );
};
