import { createFileRoute, Outlet, Link } from "@tanstack/react-router";
import AccountPageLayout from "@/components/account/AccountPageLayout";

export const Route = createFileRoute("/account/education")({
  component: EducationLayout,
});

function EducationLayout() {
  return (
    <AccountPageLayout
      title="Education & Training"
      description="Access your CPD tracker, resources, and webinars."
    >
      <div style={{ display: "grid", gridTemplateColumns: "250px 1fr", gap: "32rem", marginTop: "32rem" }}>
        <nav style={{ display: "flex", flexDirection: "column", gap: "8rem" }}>
          <Link
            to="/account/education"
            activeProps={{ style: { background: "#eee", fontWeight: "bold" } }}
            activeOptions={{ exact: true }}
            style={{ padding: "12rem 16rem", borderRadius: "4px", textDecoration: "none", color: "var(--foreground)", border: "1px solid transparent" }}
          >
            Overview
          </Link>
          <Link
            to="/account/education/cpd"
            activeProps={{ style: { background: "#eee", fontWeight: "bold" } }}
            style={{ padding: "12rem 16rem", borderRadius: "4px", textDecoration: "none", color: "var(--foreground)", border: "1px solid transparent" }}
          >
            CPD Tracker
          </Link>
          <Link
            to="/account/education/resources"
            activeProps={{ style: { background: "#eee", fontWeight: "bold" } }}
            style={{ padding: "12rem 16rem", borderRadius: "4px", textDecoration: "none", color: "var(--foreground)", border: "1px solid transparent" }}
          >
            Resources
          </Link>
          <Link
            to="/account/education/webinars"
            activeProps={{ style: { background: "#eee", fontWeight: "bold" } }}
            style={{ padding: "12rem 16rem", borderRadius: "4px", textDecoration: "none", color: "var(--foreground)", border: "1px solid transparent" }}
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
}
