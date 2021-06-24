import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import { YouTube } from '../components/YouTube'
import { Button } from '../components/Button'
import { Footer } from '../components/Footer'
import '../../node_modules/normalize.css/normalize.css'
import '../common.scss'
import * as styles from './video.module.scss'

export default function PageTemplate({ data, pageContext }) {
  const siteTitle = data.site.siteMetadata.title
  const page = data.markdownRemark
  const  { frontmatter } = page
  const { previous, next } = pageContext
  const list = frontmatter.tags.length && (() => {
    const items: React.ReactNode[] = [];

    for (const tag of frontmatter.tags) {
      items.push(
        <li className={styles.tags__item}>
          <span className={styles.tags__txt}>
            {tag}
          </span>
        </li>
      )
    }

    return (
      <ul className={styles.tags}>{items}</ul>
    )
  })()

  return (
    <>
      <main className={styles.wrap}>
        <Helmet>
          <title>{frontmatter.words} | {siteTitle}</title>
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </Helmet>

        <div className={styles.videoContainer}>
          <div className={styles.videoContainer__title}>
            <h1 className={styles.h1}>{frontmatter.words}</h1>
          </div>

          <div className={styles.videoContainer__tag}>
            {list}
          </div>

          <div className={styles.videoContainer__video}>
            <YouTube src={frontmatter.src} width={frontmatter.width} height={frontmatter.height} />
          </div>
        </div>

        <div className={styles.sns}>
          <a
            className="twitter-share-button"
            href={`https://twitter.com/intent/tweet?text=「${frontmatter.words.length < 20 ? frontmatter.words : frontmatter.words.slice(0, 19) + `…`}」 #桐生ココの格言`}
            data-size="large">Tweet #桐生ココの格言</a>
        </div>

        <div className={styles.markdown}>
          <div dangerouslySetInnerHTML={{ __html: page.html }}></div>
        </div>


        <p>
          <Button src="/">戻る</Button>
        </p>
      </main>

      <Footer />
    </>
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
      frontmatter {
        src
        words
        tags
      }
      fields {
        slug
      }
      html
    }
  }
`
