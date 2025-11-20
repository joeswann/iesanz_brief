import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'
import { LofiButton } from '@/components/lofi/LofiButton'
import { css } from '@linaria/core'

const container = css`
    display: flex;
    flex-direction: column;
    gap: 24rem;
    max-width: 600rem;
`

const buttonGroup = css`
    display: flex;
    gap: 16rem;
    margin-top: 16rem;
`

interface StudioContentPlaceholderProps {
    title: string;
    type: 'cms' | 'ecommerce' | 'both';
}

const StudioContentPlaceholder = ({ title, type }: StudioContentPlaceholderProps) => {
    return (
        <div className={container}>
            <LofiHeading level={1}>{title}</LofiHeading>
            <LofiBox>
                <LofiHeading level={3}>Managed Externally</LofiHeading>
                <p>
                    {type === 'cms' && 'This content is managed via the Sanity CMS.'}
                    {type === 'ecommerce' && 'This content is managed via the Shopify Dashboard.'}
                    {type === 'both' && 'This content is managed via Sanity CMS and Shopify.'}
                </p>
                <div className={buttonGroup}>
                    {(type === 'cms' || type === 'both') && (
                        <a href="https://sanity.io" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                            <LofiButton>Open Sanity Studio</LofiButton>
                        </a>
                    )}
                    {(type === 'ecommerce' || type === 'both') && (
                        <a href="https://shopify.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                            <LofiButton variant="secondary">Open Shopify Admin</LofiButton>
                        </a>
                    )}
                </div>
            </LofiBox>
        </div>
    )
}

export default StudioContentPlaceholder
