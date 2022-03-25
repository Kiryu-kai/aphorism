import React, {useState, useEffect} from 'react'
import * as styles from './Footer.module.scss'

export function Footer() {
  const [isExpanded, setExpanded] = useState(false)
  const onclick: React.MouseEventHandler = function (e) {
    e.stopPropagation()
    setExpanded(!isExpanded)
  }
  const stopPropagetion = (e: React.MouseEvent) => e.stopPropagation()

  useEffect(() => {
    window.addEventListener(`click`, () => {
      if (isExpanded) {
        setExpanded(!isExpanded)
      }
    })
  })

  return (
    <footer className={styles.wrap}>
      <p className={styles.copyright}>
        <small>©︎ 2019 Coco Kiryu - <button type="button" className={styles.btn} onClick={onclick} aria-expanded={isExpanded}>Inspired &amp; Materials</button> - <a href="https://github.com/Kiryu-kai/aphorism">Repository</a> - <a href="/">Home</a></small>
      </p>

      <div className={styles.inspired} hidden={!isExpanded}>
        <div className={styles.inspired__inner} onClick={stopPropagetion}>
          <h2 className={styles.inspired__hdg}>Inspired &amp; Materrials</h2>

          <p className={styles.inspired__p}>
            The collaborators are different for each directory.
          </p>

          <p className={styles.inspired__p}>
            This /aphorism directory is inspired by the following fans.
          </p>

          <ul className={styles.inspired__ul}>
            <li className={styles.inspired__li}>
              <a href="https://twitter.com/ragnaSUS" rel="noopener noreferrer" target="_blank">ラグナ(@ragnaSUS) - Twitter</a>
            </li>
            <li className={styles.inspired__li}>
              <a href="https://twitter.com/rome0504/status/1407185429242122244" rel="noopener noreferrer" target="_blank">ローマ(@rome0504) - Twitter</a>
            </li>
          </ul>

          <p>This page is supported by the following works.</p>

          <ul className={styles.inspired__ul}>
            <li className={styles.inspired__li}>
              <a href="https://twitter.com/kiryucoco/status/1218277670040956928" rel="noopener noreferrer" target="_blank">桐生ココ🐉 (@kiryucoco) - Twitter</a>
            </li>
            <li className={styles.inspired__li}>
              <a href="https://twitter.com/kokoa_m0901/status/1409028882385174531" rel="noopener noreferrer" target="_blank">森永 茲亜(ココア)(@kokoa_m0901) - Twitter</a>
            </li>
            <li className={styles.inspired__li}>
              <a href="https://pixelbuddha.net/textures/paper-textures-kit" rel="noopener noreferrer" target="_blank">PAPER TEXTURES KIT - Pixelbuddha</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
