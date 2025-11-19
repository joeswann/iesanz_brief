import { createFileRoute } from "@tanstack/react-router";
import AccountPageLayout from "@/components/account/AccountPageLayout";

export const Route = createFileRoute("/account/login")({
    component: AccountLogin,
});

function AccountLogin() {
    return (
        <AccountPageLayout>
            <div style={{ maxWidth: "400px", margin: "0 auto", padding: "2rem", border: "1px solid #eee", borderRadius: "8px" }}>
                <h1>Login</h1>
                <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div>
                        <label style={{ display: "block", marginBottom: "0.5rem" }}>Email</label>
                        <input type="email" style={{ width: "100%", padding: "0.5rem" }} />
                    </div>
                    <div>
                        <label style={{ display: "block", marginBottom: "0.5rem" }}>Password</label>
                        <input type="password" style={{ width: "100%", padding: "0.5rem" }} />
                    </div>
                    <button type="submit" style={{ padding: "0.75rem", background: "var(--foreground)", color: "var(--background)", border: "none", cursor: "pointer" }}>Login</button>
                </form>
                <p style={{ marginTop: "1rem", textAlign: "center" }}>
                    <a href="/account/register">Don't have an account? Register</a>
                </p>
            </div>
        </AccountPageLayout>
    );
}
