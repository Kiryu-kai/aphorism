const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { paginate } = require('gatsby-awesome-pagination')

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark(
        sort: {fields: frontmatter___src, order: DESC}
      ) {
        edges {
          node {
            frontmatter {
              src
              words
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const items = result.data.allMarkdownRemark.edges

  paginate({
    createPage, // The Gatsby `createPage` function
    items, // An array of objects
    itemsPerPage: 1, // How many items you want per page
    pathPrefix: ({ idx }) => (idx === 0 ? '/' : '/pages'), // Creates pages like `/page`, `/page/2`, etc
    component: path.resolve('src/templates/pager.tsx'), // Just like `createPage()`
  })

  // you'll call `createPage` for each result
  items.forEach((post, index) => {
    const previous = index === items.length - 1 ? null : items[index + 1].node
    const next = index === 0 ? null : items[index - 1].node

    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: post.node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve('./src/templates/details.tsx'),
      // You can use the values in this context in
      // our page layout component
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}
