import React from "react"
import { Link } from "gatsby"
import * as styles from './Button.module.scss'

type Component = React.FC<{
  src: string;
}>

export const Button: Component  = ({ src, children }) => {
  return (
    <Link to="/" className={styles.button}>{children}</Link>
  )
}
