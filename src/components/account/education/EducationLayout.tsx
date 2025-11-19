import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import AccountPageLayout from "@/components/account/AccountPageLayout";
import { Link, Outlet } from "@tanstack/react-router";

const educationContainer = css`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 32rem;
  margin-top: 32rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const educationNav = css`
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

const navLink = css`
  padding: 12rem 16rem;
  border-radius: 0;
  text-decoration: none;
  color: var(--foreground);
  border: 2px solid transparent;

  &:hover {
    background: #f5f5f5;
  }
`;

const activeLink = {
    background: "#eee",
    fontWeight: "bold",
};

const EducationLayout: DCI = () => {
    return (
        <AccountPageLayout
            title="Education & Training"
            description="Access your CPD tracker, resources, and webinars."
        >
            <div className={educationContainer}>
                <nav className={educationNav}>
                    <Link
                        to="/account/education"
                        activeProps={{ style: activeLink }}
                        activeOptions={{ exact: true }}
                        className={navLink}
                    >
                        Overview
                    </Link>
                    <Link
                        to="/account/education/cpd"
                        activeProps={{ style: activeLink }}
                        className={navLink}
                    >
                        CPD Tracker
                    </Link>
                    <Link
                        to="/account/education/resources"
                        activeProps={{ style: activeLink }}
                        className={navLink}
                    >
                        Resources
                    </Link>
                    <Link
                        to="/account/education/webinars"
                        activeProps={{ style: activeLink }}
                        className={navLink}
                    >
                        Webinars
                    </Link>
                </nav>
                <div>
                    <Outlet />
                </div>
            </div>
        </AccountPageLayout>
    );
};

export default EducationLayout;
