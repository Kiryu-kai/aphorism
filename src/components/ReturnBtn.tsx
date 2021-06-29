import React from "react"
import { Link } from "gatsby"
import * as styles from './ReturnBtn.module.scss'

type Component = React.FC<{
  src: string;
}>

export const ReturnBtn: Component  = ({ src, children }) => {
  const onclick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (document.referrer.startsWith(window.location.origin)) {
      e.preventDefault()
      history.back()
    }
  }

  return (
    <Link to={src} className={styles.button} onClick={onclick}>{children}</Link>
  )
}
