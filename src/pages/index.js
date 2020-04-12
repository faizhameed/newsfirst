import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
/* import Hero from '../components/hero' */
import PickPost from '../components/pick-post'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    /* const [author] = get(this, 'props.data.allContentfulPerson.edges') */

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#F3F7F0' }}>
          <Helmet title={siteTitle} />
          {/* <Hero data={author.node} /> */}
          <PickPost />
          <div className="wrapper-recent">
            <h2 className="section-headline">Recent</h2>
            <ul className="article-list">
              {posts.map(({ node }, index) => {
                if (index < 3)
                  return (
                    <li key={node.slug + 'recent'}>
                      <ArticlePreview article={node} />
                    </li>
                  )
              })}
            </ul>
          </div>
          <div className="wrapper">
            <h2 className="section-headline">All Stories</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug + 'article-list'}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "DDMMYYYYhhmmss")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
/*    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
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
    } */
