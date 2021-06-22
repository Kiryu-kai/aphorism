module.exports = {
  siteMetadata: {
    title: '#桐生ココの格言',
  },
  pathPrefix: '/aphorism',
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    // TODO: ビルドができない不具合。解決する必要あるか検討。
    // 'gatsby-plugin-sitemap',
    // TODO: ビルドができない不具合。解決する必要あるか検討。
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     icon: 'static/image/icon.png',
    //   },
    // },
    {
      resolve: 'gatsby-plugin-mdx',
      // options: {
      //   extensions: ['.md', '.mdx'], //mdとmdxどちらも受け入れる
      //   defaultLayouts: {
      //     default: require.resolve('./src/templates/common.tsx'),
      //   },
      // },
    },
    'gatsby-plugin-mdx-frontmatter',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
}
