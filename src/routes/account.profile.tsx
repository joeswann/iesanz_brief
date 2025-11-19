import { createFileRoute } from "@tanstack/react-router";
import AccountPageLayout from "@/components/account/AccountPageLayout";

export const Route = createFileRoute("/account/profile")({
    component: AccountProfile,
});

function AccountProfile() {
    return (
        <AccountPageLayout>
            <h1>My Profile</h1>
            <p>Manage your personal information and privacy settings.</p>

            <form style={{ maxWidth: "600px", marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>First Name</label>
                        <input type="text" defaultValue="Joe" style={{ width: "100%", padding: "0.5rem" }} />
                    </div>
                    <div>
                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Last Name</label>
                        <input type="text" defaultValue="Swann" style={{ width: "100%", padding: "0.5rem" }} />
                    </div>
                </div>

                <div>
                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Email</label>
                    <input type="email" defaultValue="joe@example.com" style={{ width: "100%", padding: "0.5rem" }} />
                </div>

                <div>
                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>Chapter</label>
                    <select defaultValue="nsw" style={{ width: "100%", padding: "0.5rem" }}>
                        <option value="nsw">New South Wales</option>
                        <option value="vic">Victoria</option>
                        <option value="qld">Queensland</option>
                        <option value="nz">New Zealand</option>
                    </select>
                </div>

                <button type="submit" style={{ padding: "0.75rem", background: "var(--foreground)", color: "var(--background)", border: "none", cursor: "pointer", alignSelf: "flex-start" }}>Save Changes</button>
            </form>
        </AccountPageLayout>
    );
}
