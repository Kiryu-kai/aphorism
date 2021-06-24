import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import { Link } from "gatsby"
import { YouTube } from '../components/YouTube'
import '../../node_modules/normalize.css/normalize.css'
import '../common.scss'
import * as styles from './common.module.scss'

export default function PageTemplate({ data, pageContext }) {
  const siteTitle = data.site.siteMetadata.title
  const page = data.markdownRemark
  const  { frontmatter } = page
  const { previous, next } = pageContext

  return (
    <div className={styles.wrap}>
      <Helmet>
        <title>{frontmatter.words} | {siteTitle}</title>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </Helmet>

      <h1 className={styles.h1}>{frontmatter.words}</h1>

      <YouTube src={frontmatter.src} width={frontmatter.width} height={frontmatter.height} />

      <div className={styles.sns}>
        <a
          className="twitter-share-button"
          href="https://twitter.com/intent/tweet?text=Hello%20world"
          data-size="large">Tweet</a>
      </div>

      <p>
        <Link to="/">戻る</Link>
      </p>
    </div>
  )
}
export const pageQuery = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      fields {
        slug
      }
      frontmatter {
        src
        words
      }
    }
  }
`
