import { createFileRoute } from "@tanstack/react-router";
import AccountPageLayout from "@/components/account/AccountPageLayout";
import { user } from "@/data/data.user";
import { LofiCard, LofiGrid } from "@/components/lofi/LofiLayouts";


export const Route = createFileRoute("/account/invoices")({
    component: AccountInvoices,
});

function AccountInvoices() {
    return (
        <AccountPageLayout
            title="Invoices"
            description="View and download your past invoices."
        >
            <LofiGrid>
                <LofiCard title="Invoice History">
                    {user.invoices.length > 0 ? (
                        <div style={{ display: "grid", gap: "16rem" }}>
                            {user.invoices.map((invoice) => (
                                <div key={invoice.id} style={{ padding: "16rem", border: "1px solid #eee", borderRadius: "4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div>
                                        <h4 style={{ margin: "0 0 4rem 0" }}>{invoice.description}</h4>
                                        <p style={{ margin: 0, color: "#666", fontSize: "14rem" }}>{invoice.date} • {invoice.id}</p>
                                    </div>
                                    <div style={{ textAlign: "right" }}>
                                        <p style={{ margin: "0 0 4rem 0", fontWeight: "bold" }}>{invoice.amount}</p>
                                        <a href={invoice.link} style={{ fontSize: "14rem", textDecoration: "underline" }}>Download PDF</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No invoices found.</p>
                    )}
                </LofiCard>
            </LofiGrid>
        </AccountPageLayout>
    );
}
