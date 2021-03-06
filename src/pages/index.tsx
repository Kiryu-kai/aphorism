import React, {useState, useEffect} from 'react'
import { Layout } from '../components/Layout'
import { Helmet } from 'react-helmet'
import { AllMd } from '../components/AllMd'
import { Footer } from '../components/Footer'
import { RequestBtn } from '../components/RequestBtn'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { use100vh } from 'react-div-100vh'
import arrayShuffle from 'array-shuffle'
import cocoImg from './index/index-coco.png'
import cocoImg02 from './index/index-coco-02.png'
import cocoImg03 from './index/index-coco-03.png'
import headerBg from './index/index-bg.jpg'
import ogp from '../images/ogp.png'
import * as styles from './index.module.scss'


const IndexPage = () => {
  const { site, allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  )

  const height = use100vh()
  const [mv, setMv] = useState(null)
  const [load, setLoadState] = useState(`wait`)

  useEffect(() => {
    setMv(arrayShuffle([cocoImg, cocoImg02, cocoImg03])[0])
  }, [])

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta property="og:url" content={`https://kiryu-kai.github.io/aphorism/`} />
        <meta property="og:title" content={site.siteMetadata.title} />
        <meta property="og:description" content="心に残った一言。大切にしている言葉。人生観を変えた一瞬。たつのこたちの心に染み渡る、そんな数々の名シーンを紹介します。" />
        <meta property="og:image" content={`https://kiryu-kai.github.io${ogp}`} />
      </Helmet>

      <header className={styles.header} style={{ backgroundImage: `url(${headerBg})` }}>
        <div className={styles.mv} style={{ minHeight: height }}>
          <h1 className={styles.h1}>
            {site.siteMetadata.title}
          </h1>

          <div className={styles.description}>
            <p className={styles.description__txt}>
              <span className={styles.description__row}>心に残った一言。大切にしている言葉。</span>
              <span className={styles.description__row}>人生観を変えた一瞬。</span>
              <span className={styles.description__row}>たつのこたちの心に染み渡る、</span>
              <span className={styles.description__row}>そんな数々の名シーンを紹介します。</span>
            </p>
          </div>

          <div className={styles.coco}>
            <img
              src={mv}
              alt=""
              width={895}
              height={880}
              className={styles.coco__img}
              data-state={load}
              onLoad={() => setLoadState(`loaded`)}
              draggable={false}
            />
          </div>
        </div>

        <div className={styles.youtube}>
          <Link to="https://www.youtube.com/channel/UCS9uQI-jC3DE0L4IpXyvr6w" className={styles.youtube__link}>Coco Ch.</Link>
        </div>
      </header>

      <div className={styles.container}>
        <main className={styles.main}>
          <RequestBtn />
          <AllMd />
          {
            allMarkdownRemark.edges.length > 30 ?
              (
                <Link to='/pages/2'>もっと見る</Link>
              ) : ``
          }
        </main>

        <Footer />
      </div>
    </Layout>
  )
}

export default IndexPage
