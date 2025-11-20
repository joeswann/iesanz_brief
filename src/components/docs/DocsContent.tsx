import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'
import { DocPageData } from '@/data/data.docs'

export default function DocsContent({ data }: { data: DocPageData }) {
    return (
        <>
            <LofiHeading level={1} style={{ marginBottom: '24rem' }}>{data.title}</LofiHeading>

            {data.sections.map((section, index) => (
                <LofiBox key={index} style={{ marginBottom: index === data.sections.length - 1 ? 0 : '32rem', flexDirection: 'column' }}>
                    <LofiHeading level={2}>{section.title}</LofiHeading>
                    {section.blocks.map((block, blockIndex) => (
                        <div key={blockIndex}>
                            {block.title && <LofiHeading level={3}>{block.title}</LofiHeading>}
                            {block.content && <p>{block.content}</p>}
                            {block.list && (
                                <ul>
                                    {block.list.map((item, itemIndex) => (
                                        <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
                                    ))}
                                </ul>
                            )}
                            {block.orderedList && (
                                <ol>
                                    {block.orderedList.map((item, itemIndex) => (
                                        <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
                                    ))}
                                </ol>
                            )}
                        </div>
                    ))}
                </LofiBox>
            ))}
        </>
    )
}
