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
import ogp from '../images/ogp.png'
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
        <li className={styles.tags__item} key={tag}>
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
  const shareBtn = {
    hash: `${videoId.replace(/[^a-zA-Z0-9_]/g, ``)}_${timestamp}`,
    text: `桐生ココ「${frontmatter.words.length < 20 ? frontmatter.words : frontmatter.words.slice(0, 19) + `…`} 」`,
  }

  useEffect(() => {
    // @ts-ignore
    window?.twttr?.widgets.load()
  })

  return (
    <Layout>
      <Helmet>
        <title>「{frontmatter.words}」 | {siteTitle}</title>
        <meta property="og:url" content={`https://kiryu-kai.github.io/aphorism${fields.slug}`} />
        <meta property="og:title" content={`「${frontmatter.words}」 | ${siteTitle}`} />
        <meta property="og:description" content="心に残った一言。大切にしている言葉。人生観を変えた一瞬。たつのこたちの心に染み渡る、そんな数々の名シーンを紹介します。" />
        <meta property="og:image" content={`https://kiryu-kai.github.io${ogp}`} />
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

          <dl className={styles.sns}>
            <div className={styles.sns__item}>
              <dt className={styles.sns__title}>元動画をシェアする</dt>
              <dd className={styles.sns__btn}>
                <span>
                  <a
                    className="twitter-share-button"
                    href={`https://twitter.com/intent/tweet?url=${src.replace(`?`, `%3F`)}&hashtags=桐生ココの格言,${shareBtn.hash}`}
                    data-url={src}
                    data-hashtags={`桐生ココの格言,${shareBtn.hash}`}
                    data-text={shareBtn.text}
                    data-size="large">Twitter #桐生ココの格言</a>
                </span>
              </dd>
            </div>

            <div className={styles.sns__item}>
              <dt className={styles.sns__title}>このページをシェアする</dt>
              <dd className={styles.sns__btn}>
                <span>
                  <a
                    className="twitter-share-button"
                    href={`https://twitter.com/intent/tweet?url=${`https://kiryu-kai.github.io/aphorism${fields.slug}`}&hashtags=桐生ココの格言,${shareBtn.hash}`}
                    data-url={`https://kiryu-kai.github.io/aphorism${fields.slug}`}
                    data-hashtags={`桐生ココの格言,${shareBtn.hash}`}
                    data-text={shareBtn.text}
                    data-size="large">Twitter #桐生ココの格言</a>
                </span>
              </dd>
            </div>
          </dl>

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
