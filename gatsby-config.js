module.exports = {
  siteMetadata: {
    title: '#桐生ココの格言 | 桐生会',
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
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'aphorism',
        path: './content/',
      },
    },
  ],
}
