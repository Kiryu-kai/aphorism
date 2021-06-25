import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import arrayShuffle from 'array-shuffle'
import * as styles from './AllMd.module.scss'

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

export const AllMd: Component = ({max}) => {
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
          <span>
            <span className={styles.txt}>
              {frontmatter.words}
            </span>
            <span className={styles.more}>
              <span className={styles.more__inner}>
                詳しく見る
              </span>
            </span>
          </span>
        </Link>
      </li>
    )
  }

  return (
    <div className={styles.wrap}>
      <ul className={styles.ul}>
        {list}
      </ul>
    </div>
  )
}
