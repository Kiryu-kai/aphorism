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
        <small>©︎ 2019 Coco Kiryu - <button type="button" className={styles.btn} onClick={onclick} aria-expanded={isExpanded}>Inspired</button> - <a href="https://github.com/Kiryu-kai/aphorism">Repository</a></small>
      </p>

      <div className={styles.inspired} hidden={!isExpanded}>
        <div className={styles.inspired__inner} onClick={stopPropagetion}>
          <h2 className={styles.inspired__hdg}>Inspired by</h2>

          <p className={styles.inspired__p}>
            The collaborators are different for each directory.
          </p>

          <p className={styles.inspired__p}>
            This /aphorism directory is inspired by the following fans.
          </p>

          <ul className={styles.inspired__ul}>
            <li className={styles.inspired__li}>
              <a href="https://twitter.com/ragnaSUS">UNこの悪魔ラグナ🐉［雪民］(レ)(@ragnaSUS) - Twitter</a>
            </li>
            <li className={styles.inspired__li}>
              <a href="https://twitter.com/rome0504/status/1407185429242122244">ローマ・アビュース🐉(@rome0504) - Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
