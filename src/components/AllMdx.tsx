import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import arrayShuffle from 'array-shuffle'

type Component = React.FC<{
  max?: number;
}>

type QueryType = {
  frontmatter: {
    words: string
  }
  slug: string
}[]

export const AllMdx: Component = ({max}) => {
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

  const aphorisms = arrayShuffle(nodes).slice(0, max ?? nodes.length) as QueryType
  const list: React.ReactNode[] = []

  for (const {frontmatter, slug} of aphorisms) {
    list.push(
      <li key={slug}>
        <Link to={slug}>
          {frontmatter.words}
        </Link>
      </li>
    )
  }

  return (
    <ul>
      {list}
    </ul>
  )
}
