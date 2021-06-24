import React from 'react'
import * as styles from './YouTube.module.scss'

type Component = React.FC<{
  src: string;
  width?: number;
  height?: number;
}>

export const YouTube: Component  = ({ src, width, height }) => {
  // https://youtu.be/jB48OrSwapc?t=1
  // https://www.youtube.com/embed/jB48OrSwapc?start=1
  // https://www.youtube.com/watch?v=jB48OrSwapc
  // TODO: 複数のパターンを許容するか（シェアURLを前提）
  const _src = src?.replace(`https://youtu.be/`, `https://www.youtube.com/embed/`).replace(`?t=`, `?start=`)

  return (
    <div className={styles.wrap}>
      <iframe
        width={width ?? 560}
        height={height ?? 315}
        src={_src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={styles.iframe}></iframe>
    </div>
  )
}
