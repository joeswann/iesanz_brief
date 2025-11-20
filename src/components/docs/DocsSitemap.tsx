import { styled } from '@linaria/react'
import { spacing } from '@/styles/styling'
import { docsArchitectureSitemap } from '@/data/data.docs'

const PageTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: ${spacing(8)};
  color: var(--foreground);
`

const Section = styled.div`
  margin-bottom: ${spacing(10)};
`

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: ${spacing(6)};
  padding-bottom: ${spacing(2)};
  border-bottom: 1px solid var(--border);
  color: var(--foreground);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${spacing(6)};
`

const Card = styled.div`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: ${spacing(6)};
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--primary);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`

const GroupTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: ${spacing(4)};
  color: var(--foreground);
  display: flex;
  align-items: center;
  gap: ${spacing(2)};

  &::before {
    content: '';
    display: block;
    width: 4px;
    height: 16px;
    background: var(--primary);
    border-radius: 2px;
  }
`

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`

const LinkItem = styled.li`
  font-size: 14px;
  line-height: 1.5;
  color: var(--foreground-muted);
  display: flex;
  flex-direction: column;
  
  strong {
    color: var(--foreground);
    font-weight: 500;
    font-family: 'JetBrains Mono', monospace;
    margin-bottom: 2px;
  }
`

export default function DocsSitemap() {
  return (
    <>
      <PageTitle>{docsArchitectureSitemap.title}</PageTitle>

      {docsArchitectureSitemap.sections.map((section, i) => (
        <Section key={i}>
          <SectionTitle>{section.title}</SectionTitle>
          <Grid>
            {section.blocks.map((block, j) => (
              <Card key={j}>
                {block.title && <GroupTitle>{block.title}</GroupTitle>}
                {block.list && (
                  <LinkList>
                    {block.list.map((item, k) => (
                      <LinkItem key={k} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </LinkList>
                )}
              </Card>
            ))}
          </Grid>
        </Section>
      ))}
    </>
  )
}
