import * as React from 'react'
import arrayShuffle from 'array-shuffle'
import { useStaticQuery, graphql, Link } from 'gatsby'

type Component = React.FC<{
  className?: string;
}>

export const SingleAphorismLink: Component = ({className}) => {
  type QueryType = {
    frontmatter: {
      words: string
    }
    slug: string
  }[]

  const { nodes } = useStaticQuery(
    graphql`
      query {
        allMdx {
          nodes {
            frontmatter {
              words
            }
            slug
          }
        }
      }
    `
  ).allMdx

  const [page] = arrayShuffle(nodes).slice(0, 1) as QueryType

  return (
    <Link to={page.slug} className={className}>{page.frontmatter.words}</Link>
  )
}
