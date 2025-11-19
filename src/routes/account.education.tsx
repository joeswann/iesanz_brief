import { createFileRoute, Outlet, Link } from "@tanstack/react-router";
import AccountPageLayout from "@/components/account/AccountPageLayout";

export const Route = createFileRoute("/account/education")({
  component: EducationLayout,
});

function EducationLayout() {
  return (
    <AccountPageLayout>
      <h1>Education & Training</h1>
      <div style={{ display: "grid", gridTemplateColumns: "250px 1fr", gap: "2rem", marginTop: "2rem" }}>
        <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Link
            to="/account/education"
            activeProps={{ style: { background: "#f5f5f5", fontWeight: "bold" } }}
            activeOptions={{ exact: true }}
            style={{ padding: "0.75rem 1rem", borderRadius: "4px", textDecoration: "none", color: "var(--foreground)" }}
          >
            Overview
          </Link>
          <Link
            to="/account/education/cpd"
            activeProps={{ style: { background: "#f5f5f5", fontWeight: "bold" } }}
            style={{ padding: "0.75rem 1rem", borderRadius: "4px", textDecoration: "none", color: "var(--foreground)" }}
          >
            CPD Tracker
          </Link>
          <Link
            to="/account/education/resources"
            activeProps={{ style: { background: "#f5f5f5", fontWeight: "bold" } }}
            style={{ padding: "0.75rem 1rem", borderRadius: "4px", textDecoration: "none", color: "var(--foreground)" }}
          >
            Resources
          </Link>
          <Link
            to="/account/education/webinars"
            activeProps={{ style: { background: "#f5f5f5", fontWeight: "bold" } }}
            style={{ padding: "0.75rem 1rem", borderRadius: "4px", textDecoration: "none", color: "var(--foreground)" }}
          >
            Webinars
          </Link>
        </nav>
        <div style={{ padding: "1rem", background: "#fff", borderRadius: "8px", border: "1px solid #eee" }}>
          <Outlet />
        </div>
      </div>
    </AccountPageLayout>
  );
}
