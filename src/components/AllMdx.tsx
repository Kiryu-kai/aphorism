import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import arrayShuffle from 'array-shuffle'
import * as styles from './AllMdx.module.scss'

type Component = React.FC<{
  max?: number;
}>

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

export const AllMdx: Component = ({max}) => {
  const { edges } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
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

  const aphorisms = arrayShuffle(edges).slice(0, max ?? edges.length) as QueryType
  const list: React.ReactNode[] = []

  for (const {node} of aphorisms) {
    const {frontmatter, fields} = node

    list.push(
      <li key={fields.slug} className={styles.li}>
        <Link to={fields.slug} className={styles.a}>
          {frontmatter.words}
        </Link>
      </li>
    )
  }

  return (
    <ul className={styles.ul}>
      {list}
    </ul>
  )
}
