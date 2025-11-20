import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'

export const Route = createFileRoute('/docs/')({
    component: DocsIndex,
})

function DocsIndex() {
    return (
        <LayoutDocs>
            <LofiHeading level={1} style={{ marginBottom: '24rem' }}>IESANZ Website Documentation</LofiHeading>
            <LofiBox>
                <p>Welcome to the IESANZ technical documentation.</p>
                <p>This section contains the full technical brief and specifications for the website build.</p>
                <p>Use the sidebar to navigate through the different sections of the brief.</p>
            </LofiBox>
        </LayoutDocs>
    )
}
