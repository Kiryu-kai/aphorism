import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Link } from 'gatsby'
import cursor from '../images/cursor.png'

const shortcodes = { Link }

export const Layout: React.FC  = ({ children }) => (
  <div style={{
    cursor: `url(${cursor}), auto`
  }}>
    <MDXProvider components={shortcodes}>{children}</MDXProvider>
  </div>
)
