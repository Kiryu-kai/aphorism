import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Link } from 'gatsby'

const shortcodes = { Link }

export const Layout: React.FC  = ({ children }) => (
  <MDXProvider components={shortcodes}>{children}</MDXProvider>
)
