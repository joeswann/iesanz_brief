import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { fontSize } from "@/styles/styling";

const footer = css`
  padding: 16rem 32rem;
  background-color: var(--light-grey);
  color: var(--foreground);
  text-align: center;
  ${fontSize(0.8)}
`;

const LayoutAdminFooter: DCI = () => {
    return (
        <footer className={footer}>
            &copy; {new Date().getFullYear()} IESANZ Admin Portal. All rights reserved.
        </footer>
    );
};

export default LayoutAdminFooter;
