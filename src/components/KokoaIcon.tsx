import React from 'react'
import defaultIcon from '../images/kokoa_m0901--default.png'
import dragonIcon from '../images/kokoa_m0901--dragon.png'
import idolIcon from '../images/kokoa_m0901--idol.png'
import jerseyIcon from '../images/kokoa_m0901--jersey.png'
import kimonoIcon from '../images/kokoa_m0901--kimono.png'

type Component = React.FC<{
  model?: string;
  className?: string;
  width?: number;
  height?: number;
}>

export const KokoaIcon: Component = ({model, className, width, height}) => {
  const src = (() => {
    switch (model) {
    case `アイドル`:
      return idolIcon

    case `正月`:
      return kimonoIcon

    case `ジャージA`:
    case `ジャージB`:
      return jerseyIcon

    case `着ぐるみ`:
      return dragonIcon

    default:
      return defaultIcon
    }
  })()

  return (
    <img
      src={src}
      alt=""
      className={className}
      width={width}
      height={height}
    />
  )
}
