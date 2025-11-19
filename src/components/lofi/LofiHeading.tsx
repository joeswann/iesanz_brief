import { DCI } from "@/types/dci";
import { TypeHeading } from "@/components/type/TypeHeading";

interface LofiHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const LofiHeading: DCI<LofiHeadingProps> = ({
  children,
  level = 1,
  className,
  ...props
}) => {
  return (
    <TypeHeading level={level} className={className} {...props}>
      {children}
    </TypeHeading>
  );
};

export default LofiHeading;
