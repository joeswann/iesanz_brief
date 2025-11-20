import { DCI } from "@/types/dci";
import LayoutStudio from '@/components/layout/studio/LayoutStudio'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'
import { LofiButton } from '@/components/lofi/LofiButton'

const StudioDashboardLayout: DCI = () => {
    return (
        <LayoutStudio>
            <LofiHeading level={1} style={{ marginBottom: '24rem' }}>Content Studio</LofiHeading>
            <LofiBox>
                <LofiHeading level={3}>Manage Content</LofiHeading>
                <p>
                    All site content, including news, events, awards, and pages, is managed via the Sanity CMS.
                </p>
                <a href="https://sanity.io" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <LofiButton>Open Sanity Studio</LofiButton>
                </a>
            </LofiBox>

            <div style={{ height: '32rem' }} />

            <LofiBox>
                <LofiHeading level={3}>Manage Products</LofiHeading>
                <p>
                    Store products, inventory, and orders are managed via the Shopify dashboard.
                </p>
                <a href="https://shopify.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <LofiButton variant="secondary">Open Shopify Admin</LofiButton>
                </a>
            </LofiBox>
        </LayoutStudio>
    )
}

export default StudioDashboardLayout;
