import { createFileRoute } from "@tanstack/react-router";
import AccountPageLayout from "@/components/account/AccountPageLayout";
import { LofiButton } from "@/components/lofi/LofiButton";
import { LofiFormGroup, LofiInput, LofiSelect } from "@/components/lofi/LofiForm";
import { LofiCard } from "@/components/lofi/LofiLayouts";

export const Route = createFileRoute("/account/profile")({
    component: AccountProfile,
});

function AccountProfile() {
    return (
        <AccountPageLayout
            title="My Profile"
            description="Manage your personal information and privacy settings."
        >
            <div style={{ maxWidth: "800px" }}>
                <LofiCard>
                    <form style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
                            <LofiFormGroup label="First Name" htmlFor="firstName">
                                <LofiInput id="firstName" type="text" defaultValue="Joe" />
                            </LofiFormGroup>
                            <LofiFormGroup label="Last Name" htmlFor="lastName">
                                <LofiInput id="lastName" type="text" defaultValue="Swann" />
                            </LofiFormGroup>
                        </div>

                        <LofiFormGroup label="Email Address" htmlFor="email">
                            <LofiInput id="email" type="email" defaultValue="joe@example.com" />
                        </LofiFormGroup>

                        <LofiFormGroup label="Chapter" htmlFor="chapter" hint="Your local chapter for events and news.">
                            <LofiSelect id="chapter" defaultValue="nsw">
                                <option value="nsw">New South Wales</option>
                                <option value="vic">Victoria</option>
                                <option value="qld">Queensland</option>
                                <option value="nz">New Zealand</option>
                            </LofiSelect>
                        </LofiFormGroup>

                        <div style={{ marginTop: "16rem" }}>
                            <LofiButton type="submit" variant="primary">Save Changes</LofiButton>
                        </div>
                    </form>
                </LofiCard>
            </div>
        </AccountPageLayout>
    );
}
