import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { spacing } from "@/styles/styling";
import { Outlet } from "@tanstack/react-router";
import ResourcesSidebar from "./ResourcesSidebar";

const container = css`
  padding: ${spacing(4)};
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  gap: ${spacing(8)};
  min-height: 80vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const content = css`
  flex: 1;
  min-width: 0;
`;

const ResourcesRouteLayout: DCI = () => {
    return (
        <div className={container}>
            <ResourcesSidebar />
            <div className={content}>
                <Outlet />
            </div>
        </div>
    );
};

export default ResourcesRouteLayout;
