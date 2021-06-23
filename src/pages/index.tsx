import * as React from 'react'
import { Layout } from '../components/layout'
import { Helmet } from 'react-helmet'
import { AllMdx } from '../components/AllMdx'
import { SingleAphorismLink } from '../components/SingleAphorismLink'
import { useStaticQuery, graphql } from 'gatsby'
import { use100vh } from 'react-div-100vh'
import cocoImg from './index/index-coco.png'
import * as styles from './index.module.scss'

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const height = use100vh()

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
      </Helmet>

      <div className={styles.primary} style={{ minHeight: height }}>
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
          <img src={cocoImg} alt="" className={styles.coco__img} />
        </div>

        <div className={styles.voice}>
          <SingleAphorismLink className={styles.voice__link} />
        </div>
      </div>

      <div className={styles.secondary}>
        <AllMdx />
      </div>
    </Layout>
  )
}

export default IndexPage
