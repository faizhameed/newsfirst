const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.jsx')
    const categoryPost = path.resolve('./src/templates/category-posts.jsx')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/opinion/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
        /* category pages */

        const categories = [
          'National',
          'Gulf',
          'Technology',
          'Sports',
          'Entertainment',
        ]
        categories.forEach((category, index) => {
          createPage({
            path: `/category/${category.toLowerCase()}/`,
            component: categoryPost,
            context: {
              slug: category.toLowerCase(),
            },
          })
        })
        /* end of category pages */
      })
    )
  })
}
