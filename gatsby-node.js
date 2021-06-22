const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
          }
          slug
          id
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const posts = result.data.allMdx.nodes

  // you'll call `createPage` for each result
  posts.forEach((post) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: post.slug,
      // This component will wrap our MDX content
      component: path.resolve('./src/templates/common.tsx'),
      // You can use the values in this context in
      // our page layout component
      context: { id: post.id },
    })
  })
}
