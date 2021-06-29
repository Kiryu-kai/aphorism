import React from 'react'
import {Link} from 'gatsby'
import * as styles from './Header.module.scss'
import youtube from '../images/header.jpeg'

export function Header () {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.h1}>
          <Link to="/" className={styles.h1__link}>
            #桐生ココの格言
          </Link>
        </h1>

        <p className={styles.youtube}>
          <a href="https://www.youtube.com/channel/UCS9uQI-jC3DE0L4IpXyvr6w" className={styles.youtube__link}>
            <img src={youtube} alt="Coco Ch. 桐生ココ" className={styles.youtube__img} />
          </a>
        </p>
      </div>
    </header>
  )
}
