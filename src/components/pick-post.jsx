import React from 'react'
import Img from 'gatsby-image'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styles from './hero.module.css'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(filter: { editorsPick: { eq: true } }) {
        edges {
          node {
            title
            tags
            slug
            publishDate
            description {
              description
            }
            heroImage {
              fluid(
                maxWidth: 1180
                maxHeight: 480
                resizingBehavior: PAD
                background: "rgb:000000"
              ) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.allContentfulBlogPost.edges.map((post, i) => {
        if (i === 0)
          return (
            <div className={styles.hero}>
              <Img
                className={styles.heroImage}
                alt={post.node.title}
                fluid={post.node.heroImage.fluid}
              />
              <div className={styles.heroDetails}>
                <h3 className={styles.heroHeadline}>
                  <Link to={`/blog/${post.node.slug}`}>{post.node.title}</Link>
                </h3>
                <p className={styles.heroTitle}>
                  {post.node.description.description}
                </p>
              </div>
            </div>
          )
      })}
    </div>
  )
}
