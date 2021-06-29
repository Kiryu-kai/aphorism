import React from "react"
import { Link } from "gatsby"
import * as styles from './PrevNextLink.module.scss'

type Page = {
  frontmatter: {
    words: string,
  },
  fields: {
    slug: string,
  }
}
type Component = React.FC<{
  previous: Page;
  next: Page;
}>

export const PrevNextLink: Component  = ({ previous, next }) => {
  return (
    <div className={styles.wrap}>
      {
        previous ? (
          <p className={styles.previous}>
            <Link to={previous.fields.slug} className={styles.link}>{previous.frontmatter.words}</Link>
          </p>
        ) : ``
      }
      {
        next ? (
          <p className={styles.next}>
            <Link to={next.fields.slug} className={styles.link}>{next.frontmatter.words}</Link>
          </p>
        ) : ``
      }
    </div>
  )
}
