import React from 'react'
import * as styles from './RequestBtn.module.scss'

export function RequestBtn() {
  return (
    <p className={styles.wrap}>
      <a href="https://github.com/Kiryu-kai/aphorism/issues/new?assignees=&amp;labels=request&amp;template=-------------.md&amp;title=%E4%BC%9A%E9%95%B7%E3%80%8C+%E2%97%AF%E2%97%AF%E2%97%AF+%E3%80%8D" className={styles.link}>
        新しい格言をリクエストする 🎉
      </a>
    </p>
  )
}
