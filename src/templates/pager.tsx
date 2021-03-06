import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'
import { Footer } from '../components/Footer'
import '../../node_modules/normalize.css/normalize.css'
import '../common.scss'
import { Pager } from "../components/Pager"
import { AllMd } from "../components/AllMd"
import { use100vh } from 'react-div-100vh'
import ogp from '../images/ogp.png'
import * as styles from './pager.module.scss'

export default function IndexPage({ data, pageContext }) {
  const siteTitle = data.site.siteMetadata.title
  const height = use100vh()
  // const { previous, next } = pageContext

  return (
    <Layout>
      <Helmet>
        <title>{`${pageContext.pageNumber + 1}ページ目 | `}{siteTitle}</title>
        <meta property="og:url" content={`https://kiryu-kai.github.io/aphorism/pages/${pageContext.pageNumber}`} />
        <meta property="og:title" content={`${pageContext.pageNumber + 1}ページ目 | ${siteTitle}`} />
        <meta property="og:description" content="心に残った一言。大切にしている言葉。人生観を変えた一瞬。たつのこたちの心に染み渡る、そんな数々の名シーンを紹介します。" />
        <meta property="og:image" content={`https://kiryu-kai.github.io${ogp}`} />
      </Helmet>

      <Header />

      <main className={styles.container} style={{ minHeight: height }}>
        <div className={styles.inner}>
          <AllMd start={pageContext.pageNumber} />
          <Pager pageContext={pageContext} />
        </div>
      </main>

      <Footer />
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
      sort: {fields: frontmatter___kana, order: ASC}
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
