const Promise = require('bluebird')
const path = require('path')
const { hashDate } = require('./src/utils/hashDate')
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.jsx') // renamed as opinion
    const categoryPost = path.resolve('./src/templates/category-posts.jsx') // for categories divisions
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  publishDate(formatString: "MMMM Do, YYYY")
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
        //creating posts page for each blog posts
        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          let dateSlug = hashDate(post.node.publishDate)
          createPage({
            path: `/post/${dateSlug}/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })

        /* creating category pages */

        const categories = [
          'National',
          'Gulf',
          'Technology',
          'Sports',
          'Entertainment',
          'Opinion',
        ]
        categories.forEach((category, index) => {
          createPage({
            path: `/category/${category.toLowerCase()}/`,
            component: categoryPost,
            context: {
              slug: category,
            },
          })
        })
        /* end of category pages */
      })
    )
  })
}
