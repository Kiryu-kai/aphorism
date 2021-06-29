import React, {useEffect} from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import { Layout } from '../components/Layout'
import { YouTube } from '../components/YouTube'
import { ReturnBtn } from '../components/ReturnBtn'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { PrevNextLink } from '../components/PrevNextLink'
import '../common.scss'
import * as styles from './details.module.scss'

export default function PageTemplate({ data, pageContext }) {
  const siteTitle = data.site.siteMetadata.title
  const page = data.markdownRemark
  const  { frontmatter, fields } = page
  const [videoId, timestamp] = fields.slug.replace(/\//g, ``).split(`.`)
  const src = `https://youtu.be/${videoId}?t=${timestamp}`
  const { previous, next } = pageContext
  const list = frontmatter.tags.length && (() => {
    const items: React.ReactNode[] = []

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

  useEffect(() => {
    // @ts-ignore
    window.twttr.widgets.load()
  })

  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.words} | {siteTitle}</title>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </Helmet>

      <Header />

      <main className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.videoContainer}>
            <div className={styles.videoContainer__title}>
              <h1 className={styles.h1}>{frontmatter.words}</h1>
            </div>

            <div className={styles.videoContainer__tag}>
              {list}
            </div>

            <div className={styles.videoContainer__video}>
              <YouTube src={src} width={frontmatter.width} height={frontmatter.height} />
            </div>
          </div>

          <div className={styles.sns}>
            <a
              className="twitter-share-button"
              href={`https://twitter.com/intent/tweet?url=${src}&hashtags=桐生ココの格言,${videoId}__${timestamp}`}
              data-text={`桐生ココ「${frontmatter.words.length < 20 ? frontmatter.words : frontmatter.words.slice(0, 19) + `…`} 」`}
              data-hashtags={`桐生ココの格言,${videoId}`}
              data-size="large">Tweet #桐生ココの格言</a>
          </div>

          {
            page.html ? (
              <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: page.html }}></div>
            ) : ``
          }

          <PrevNextLink previous={previous} next={next} />

          <p className={styles.returnBtn}>
            <ReturnBtn src="/">戻る</ReturnBtn>
          </p>
        </div>
      </main>

      <Footer />
    </Layout>
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
