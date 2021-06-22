import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { YouTube } from '../components/YouTube'
import '../../node_modules/normalize.css/normalize.css'
import '../common.scss'

const shortcodes = { Link, YouTube } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <div>
      <Helmet>
        <title>{mdx.frontmatter.words} | #桐生ココの格言 | 桐生会</title>
      </Helmet>

      <h1>{mdx.frontmatter?.words}</h1>

      <MDXProvider components={shortcodes}>
        <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
      </MDXProvider>

      <a className="twitter-share-button"
        href="https://twitter.com/intent/tweet?text=Hello%20world"
        data-size="large">
      Tweet</a>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

      <p>
        <Link to="/aphorism/">戻る</Link>
      </p>
    </div>
  )
}
export const pageQuery = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        words
      }
      body
    }
  }
`
