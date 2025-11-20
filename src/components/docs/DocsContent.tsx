import { styled } from '@linaria/react'
import { DocPageData } from '@/data/data.docs'
import { TypeHeading } from '@/components/type/TypeHeading'
import { TypeBody } from '@/components/type/TypeBody'
import { spacing } from '@/styles/styling'

const PageTitle = styled.div`
    margin-bottom: ${spacing(12)};
    padding-bottom: ${spacing(8)};
    border-bottom: 1px solid var(--border);
`

const Section = styled.div`
    margin-bottom: ${spacing(16)};
    
    &:last-child {
        margin-bottom: 0;
    }
`

const SectionTitle = styled.div`
    margin-bottom: ${spacing(6)};
`

const Block = styled.div`
    margin-bottom: ${spacing(8)};

    &:last-child {
        margin-bottom: 0;
    }
`

const BlockTitle = styled.div`
    margin-bottom: ${spacing(3)};
`

const BlockContent = styled.div`
    margin-bottom: ${spacing(4)};
    
    p {
        margin-bottom: ${spacing(4)};
        line-height: 1.6;
        color: var(--foreground-muted);
        
        &:last-child {
            margin-bottom: 0;
        }
    }
`

const List = styled.ul`
    margin: ${spacing(4)} 0;
    padding-left: ${spacing(6)};
    list-style-type: disc;
    color: var(--foreground-muted);

    li {
        margin-bottom: ${spacing(2)};
        line-height: 1.6;
        padding-left: ${spacing(2)};
        
        &:last-child {
            margin-bottom: 0;
        }
    }
`

const OrderedList = styled.ol`
    margin: ${spacing(4)} 0;
    padding-left: ${spacing(6)};
    list-style-type: decimal;
    color: var(--foreground-muted);

    li {
        margin-bottom: ${spacing(2)};
        line-height: 1.6;
        padding-left: ${spacing(2)};
        
        &:last-child {
            margin-bottom: 0;
        }
    }
`

export function DocsContent({ data }: { data: DocPageData }) {
    return (
        <>
            <PageTitle>
                <TypeHeading level={1}>{data.title}</TypeHeading>
            </PageTitle>

            {data.sections.map((section, index) => (
                <Section key={index}>
                    <SectionTitle>
                        <TypeHeading level={2}>{section.title}</TypeHeading>
                    </SectionTitle>
                    {section.blocks.map((block, blockIndex) => (
                        <Block key={blockIndex}>
                            {block.title && (
                                <BlockTitle>
                                    <TypeHeading level={4}>{block.title}</TypeHeading>
                                </BlockTitle>
                            )}
                            {block.content && (
                                <BlockContent>
                                    <TypeBody>{block.content}</TypeBody>
                                </BlockContent>
                            )}
                            {block.list && (
                                <List>
                                    {block.list.map((item, itemIndex) => (
                                        <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
                                    ))}
                                </List>
                            )}
                            {block.orderedList && (
                                <OrderedList>
                                    {block.orderedList.map((item, itemIndex) => (
                                        <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
                                    ))}
                                </OrderedList>
                            )}
                        </Block>
                    ))}
                </Section>
            ))}
        </>
    )
}
