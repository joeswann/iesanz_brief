import { createFileRoute } from '@tanstack/react-router'
import { user } from "@/data/data.user";
import { LofiCard } from "@/components/lofi/LofiLayouts";
import { LofiButton } from "@/components/lofi/LofiButton";

export const Route = createFileRoute('/account/education/')({
  component: AccountEducationIndex,
})

function AccountEducationIndex() {
  return (
    <div>
      <LofiCard title="Education Overview">
        <p>Access your education resources and track your professional development.</p>
      </LofiCard>

      <div style={{ marginTop: "32rem", display: "grid", gap: "24rem" }}>
        <LofiCard title="Continue Learning">
          {user.education.continueLearning.map((item) => (
            <div key={item.id} style={{ display: "flex", gap: "16rem", alignItems: "center", marginTop: "8rem" }}>
              <div style={{ width: "60px", height: "60px", background: item.image, border: "1px solid #000" }} />
              <div>
                <strong>{item.title}</strong>
                <p style={{ fontSize: "14rem", color: "#666", margin: 0 }}>{item.module}</p>
              </div>
              <div style={{ marginLeft: "auto" }}>
                <LofiButton variant="secondary">Resume</LofiButton>
              </div>
            </div>
          ))}
        </LofiCard>

        <LofiCard title="Recent Resources">
          <ul style={{ paddingLeft: "24rem", marginTop: "8rem" }}>
            {user.education.resources.map((resource, index) => (
              <li key={index}><a href={resource.link} style={{ color: "inherit" }}>{resource.title}</a></li>
            ))}
          </ul>
        </LofiCard>
      </div>
    </div>
  );
}
