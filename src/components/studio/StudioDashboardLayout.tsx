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
                <LofiHeading level={3}>Platform Overview</LofiHeading>
                <p style={{ marginBottom: '16rem' }}>
                    The IESANZ digital experience is powered by a headless architecture, separating the frontend presentation from the backend content and commerce engines. This Studio provides a unified interface to access these systems.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24rem', marginTop: '24rem' }}>
                    <div>
                        <LofiHeading level={4}>Sanity CMS</LofiHeading>
                        <p>
                            Sanity is the source of truth for all editorial and structural content. Use Sanity to manage:
                        </p>
                        <ul style={{ paddingLeft: '20rem', marginBottom: '16rem' }}>
                            <li>News articles and announcements</li>
                            <li>Event calendars and details</li>
                            <li>Awards programs and galleries</li>
                            <li>General page content and navigation</li>
                        </ul>
                        <a href="https://sanity.io" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                            <LofiButton>Open Sanity Studio</LofiButton>
                        </a>
                    </div>

                    <div>
                        <LofiHeading level={4}>Shopify Store</LofiHeading>
                        <p>
                            Shopify powers the e-commerce functionality. Use Shopify to manage:
                        </p>
                        <ul style={{ paddingLeft: '20rem', marginBottom: '16rem' }}>
                            <li>Product catalog and inventory</li>
                            <li>Customer orders and fulfillment</li>
                            <li>Discount codes and promotions</li>
                            <li>Payment gateways and settings</li>
                        </ul>
                        <a href="https://shopify.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                            <LofiButton variant="secondary">Open Shopify Admin</LofiButton>
                        </a>
                    </div>
                </div>
            </LofiBox>
        </LayoutStudio>
    )
}

export default StudioDashboardLayout;
