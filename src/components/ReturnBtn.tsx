import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import * as styles from './ReturnBtn.module.scss'

type Component = React.FC<{
  src: string;
}>

export const ReturnBtn: Component  = ({ src, children }) => {
  const [onclick, addHandler] = useState(() => undefined)

  useEffect(() => {
    if (document.referrer.startsWith(window.location.origin)) {
      addHandler(function (e: MouseEvent) {
        e.preventDefault()
        history.back()
      })
    }
  })

  return (
    <Link to={src} className={styles.button} onClick={onclick}>{children}</Link>
  )
}
