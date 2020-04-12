import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from '../pages/blog.module.css'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class CategoryPostTemplate extends React.Component {
  componentDidMount() {
    console.log('props in created pages', this.props)
  }
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const title = this.props.pageContext.slug
    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#F3F7F0' }}>
          <Helmet title={siteTitle} />
          <div className={styles.hero}>{title}</div>
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
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

export default CategoryPostTemplate

export const pageQuery = graphql`
  query CategoryIndexQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: ASC }
      filter: { tags: { eq: $slug } }
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
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
