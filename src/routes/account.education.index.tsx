import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/account/education/')({
  component: AccountEducationIndex,
})

function AccountEducationIndex() {
  return (
    <div>
      <h2>Education Overview</h2>
      <p>Access your education resources and track your professional development.</p>

      <div style={{ marginTop: "2rem", display: "grid", gap: "1.5rem" }}>
        <div style={{ padding: "1rem", border: "1px solid #eee", borderRadius: "8px" }}>
          <h3>Continue Learning</h3>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginTop: "0.5rem" }}>
            <div style={{ width: "60px", height: "60px", background: "#ddd", borderRadius: "4px" }} />
            <div>
              <strong>Lighting Design Fundamentals</strong>
              <p style={{ fontSize: "0.9rem", color: "#666" }}>Module 3: Color Rendering</p>
            </div>
            <button style={{ marginLeft: "auto", padding: "0.5rem 1rem" }}>Resume</button>
          </div>
        </div>

        <div style={{ padding: "1rem", border: "1px solid #eee", borderRadius: "8px" }}>
          <h3>Recent Resources</h3>
          <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li><a href="#">Understanding Glare Metrics (PDF)</a></li>
            <li><a href="#">Sustainable Lighting Practices (Video)</a></li>
            <li><a href="#">2024 Lighting Standards Update (Article)</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
