import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import { Layout } from '../components/Layout'
import '../../node_modules/normalize.css/normalize.css'
import '../common.scss'
import { Pager } from "../components/Pager"
import { AllMd } from "../components/AllMd"
// import * as styles from './video.module.scss'

export default function IndexPage({ data, pageContext }) {
  const siteTitle = data.site.siteMetadata.title
  // const { previous, next } = pageContext

  return (
    <Layout>
      <Helmet>
        <title>{`${pageContext.pageNumber}ページ目 | `}{siteTitle}</title>
      </Helmet>

      <p>
        {JSON.stringify(pageContext)}
      </p>

      <AllMd start={pageContext.pageNumber} />

      <Pager pageContext={pageContext} />
    </Layout>
  )
}
export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {fields: frontmatter___src, order: DESC}
      skip: $skip
      limit: $limit
    ) {
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
