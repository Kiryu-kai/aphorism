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
        <title>{mdx.frontmatter.title} | #桐生ココの格言 | 桐生会</title>
      </Helmet>

      <h1>{mdx.frontmatter.title}</h1>

      <MDXProvider components={shortcodes}>
        <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}
export const pageQuery = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`
