import { createFileRoute } from "@tanstack/react-router";
import AccountPageLayout from "@/components/account/AccountPageLayout";
import { LofiFormGroup, LofiInput } from "@/components/lofi/LofiForm";
import { LofiButton } from "@/components/lofi/LofiButton";
import { LofiCard } from "@/components/lofi/LofiLayouts";

export const Route = createFileRoute("/account/login")({
    component: AccountLogin,
});

function AccountLogin() {
    return (
        <AccountPageLayout>
            <div style={{ maxWidth: "400px", margin: "0 auto" }}>
                <LofiCard title="Login">
                    <form style={{ display: "flex", flexDirection: "column" }}>
                        <LofiFormGroup label="Email" htmlFor="email">
                            <LofiInput id="email" type="email" placeholder="you@example.com" />
                        </LofiFormGroup>

                        <LofiFormGroup label="Password" htmlFor="password">
                            <LofiInput id="password" type="password" />
                        </LofiFormGroup>

                        <LofiButton type="submit" variant="primary" style={{ width: "100%", marginTop: "16rem" }}>Login</LofiButton>
                    </form>
                    <p style={{ marginTop: "1.5rem", textAlign: "center", fontSize: "0.9rem", color: "#666" }}>
                        <a href="/account/register" style={{ color: "inherit", textDecoration: "underline" }}>Don't have an account? Register</a>
                    </p>
                </LofiCard>
            </div>
        </AccountPageLayout>
    );
}
