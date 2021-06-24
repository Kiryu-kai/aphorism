import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import { Link } from "gatsby"
import { YouTube } from '../components/YouTube'
import '../../node_modules/normalize.css/normalize.css'
import '../common.scss'

export default function PageTemplate({ data, pageContext }) {
  const siteTitle = data.site.siteMetadata.title
  const aphorism = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <div>
      <Helmet>
        <title>{aphorism.frontmatter.words} | {siteTitle}</title>
      </Helmet>

      <a className="twitter-share-button"
        href="https://twitter.com/intent/tweet?text=Hello%20world"
        data-size="large">
      Tweet</a>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

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
        video
        words
      }
    }
  }
`
