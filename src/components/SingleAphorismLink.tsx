import * as React from 'react'
import arrayShuffle from 'array-shuffle'
import { useStaticQuery, graphql, Link } from 'gatsby'

type Component = React.FC<{
  className?: string;
}>

export const SingleAphorismLink: Component = ({className}) => {
  type QueryType = {
    node: {
      frontmatter: {
        words: string
      }
      fields: {
        slug: string
      }
    }
  }[]

  const { edges } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                video
                words
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).allMarkdownRemark

  const [edge] = arrayShuffle(edges).slice(0, 1) as QueryType
  const { node } = edge
  const { slug } = node.fields

  return (
    <Link to={slug} className={className}>{node.frontmatter.words}</Link>
  )
}
