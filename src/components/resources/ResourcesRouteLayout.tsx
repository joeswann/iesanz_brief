import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { spacing } from "@/styles/styling";
import { Outlet } from "@tanstack/react-router";

const container = css`
  padding: ${spacing(4)};
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`;

const ResourcesRouteLayout: DCI = () => {
    return (
        <div className={container}>
            <Outlet />
        </div>
    );
};

export default ResourcesRouteLayout;
