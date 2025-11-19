import { createFileRoute } from "@tanstack/react-router";
import AccountPageLayout from "@/components/account/AccountPageLayout";
import { user } from "@/data/data.user";
import { LofiCard, LofiGrid } from "@/components/lofi/LofiLayouts";
import { TypeBody } from "@/components/type/TypeBody";
import { TypeHeading } from "@/components/type/TypeHeading";
import { css } from "@linaria/core";

export const Route = createFileRoute("/account/invoices")({
    component: AccountInvoices,
});

const invoiceList = css`
    display: grid;
    gap: 16rem;
`;

const invoiceItem = css`
    padding: 16rem;
    border: 2px solid #000;
    border-radius: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const invoiceRight = css`
    text-align: right;
`;

const downloadLink = css`
    font-size: 14rem;
    text-decoration: underline;
`;

function AccountInvoices() {
    return (
        <AccountPageLayout
            title="Invoices"
            description="View and download your past invoices."
        >
            <LofiGrid>
                <LofiCard title="Invoice History">
                    {user.invoices.length > 0 ? (
                        <div className={invoiceList}>
                            {user.invoices.map((invoice) => (
                                <div key={invoice.id} className={invoiceItem}>
                                    <div>
                                        <TypeHeading level={4} style={{ marginBottom: "4rem" }}>{invoice.description}</TypeHeading>
                                        <TypeBody variant="small" color="muted">{invoice.date} • {invoice.id}</TypeBody>
                                    </div>
                                    <div className={invoiceRight}>
                                        <TypeBody weight="bold" style={{ marginBottom: "4rem" }}>{invoice.amount}</TypeBody>
                                        <a href={invoice.link} className={downloadLink}>Download PDF</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <TypeBody>No invoices found.</TypeBody>
                    )}
                </LofiCard>
            </LofiGrid>
        </AccountPageLayout>
    );
}
