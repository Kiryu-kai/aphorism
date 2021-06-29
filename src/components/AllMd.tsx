import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
// import arrayShuffle from 'array-shuffle'
import { KokoaIcon } from './KokoaIcon'
import * as styles from './AllMd.module.scss'

type Component = React.FC<{
  start?: number;
  max?: number;
}>

type QueryType = {
  node: {
    frontmatter: {
      words: string
      model: string
    }
    fields: {
      slug: string
    }
  }
}[]

export const AllMd: Component = ({max, start}) => {
  const { edges } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                words
                model
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

  const _start = (start ?? 0)
  const _max = (max ?? 30) // templates/pager.tsx に 30 が直接書かれてます
  const begin = _start * _max
  const end = (_max * (_start + 1))
  const aphorisms = edges.slice(begin, end) as QueryType
  const list: React.ReactNode[] = []

  for (const {node} of aphorisms) {
    const {frontmatter, fields} = node

    list.push(
      <li key={fields.slug} className={styles.li}>
        <Link to={fields.slug} className={styles.a}>
          <span className={styles.a__inner}>
            <span className={styles.icon}>
              <KokoaIcon
                model={frontmatter.model}
                className={styles.icon__img}
                width={42}
                height={48}
              />
            </span>
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
      <ul className={styles.ul} data-hoge={edges.length} data-start={begin} data-end={end}>
        {list}
      </ul>
    </div>
  )
}
