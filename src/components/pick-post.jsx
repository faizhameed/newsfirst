import React from 'react'
import Img from 'gatsby-image'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styles from './hero.module.css'
import { hashDate } from '../utils/hashDate'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(filter: { editorsPick: { eq: true } }) {
        edges {
          node {
            title
            tags
            slug
            publishDate(formatString: "MMMM Do, YYYY")
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
        let dateSlug = hashDate(post.node.publishDate)
        if (i === 0)
          return (
            <div className={styles.hero} key={'pick-post ' + i}>
              <Img
                className={styles.heroImage}
                alt={post.node.title}
                fluid={post.node.heroImage.fluid}
              />
              <div className={styles.heroDetails}>
                <h3 className={styles.heroHeadline}>
                  <Link to={`/post/${dateSlug}/${post.node.slug}`}>
                    {post.node.title}
                  </Link>
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
