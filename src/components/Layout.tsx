import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import cursor from '../images/cursor.png'
import '../../node_modules/normalize.css/normalize.css'

type Component = React.FC<{
  className?: string;
  style?: React.CSSProperties;
}>
const shortcodes = { Link }

export const Layout: Component  = ({ style, children }) => (
  <div style={{
    ...style,
    cursor: `url(${cursor}), auto`
  }}>
    <Helmet>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@soten_bluesky" />
    </Helmet>
    <MDXProvider components={shortcodes}>{children}</MDXProvider>
  </div>
)
