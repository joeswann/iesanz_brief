import { styled } from '@linaria/react'
import { DocPageData } from '@/data/data.docs'
import { TypeHeading } from '@/components/type/TypeHeading'
import { TypeBody } from '@/components/type/TypeBody'

const PageTitle = styled.div`
    margin-bottom: 5rem;
`

const Section = styled.div`
    margin-bottom: 6rem;
    
    &:last-child {
        margin-bottom: 0;
    }
`

const SectionTitle = styled.div`
    margin-bottom: 3rem;
`

const Block = styled.div`
    margin-bottom: 3.5rem;

    &:last-child {
        margin-bottom: 0;
    }
`

const BlockTitle = styled.div`
    margin-bottom: 1.5rem;
`

const BlockContent = styled.div`
    margin-bottom: 1rem;
    
    p {
        margin-bottom: 1rem;
        line-height: 1.6;
        color: var(--color-text-secondary);
        
        &:last-child {
            margin-bottom: 0;
        }
    }
`

const List = styled.ul`
    margin: 1rem 0 1rem 1.5rem;
    list-style-type: disc;
    color: var(--color-text-secondary);

    li {
        margin-bottom: 0.5rem;
        line-height: 1.5;
        
        &:last-child {
            margin-bottom: 0;
        }
    }
`

const OrderedList = styled.ol`
    margin: 1rem 0 1rem 1.5rem;
    list-style-type: decimal;
    color: var(--color-text-secondary);

    li {
        margin-bottom: 0.5rem;
        line-height: 1.5;
        
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
