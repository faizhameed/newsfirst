import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import heroStyles from '../components/hero.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const options = {
      renderNode: {
        'embedded-asset-block': node => {
          const alt = node.data.target.fields.title['en-GB']
          const url = node.data.target.fields.file['en-GB'].url
          return (
            <div className="container-embed">
              <img className="contentful-img" alt={alt} src={url} />
              <p>{node.data.target.fields.title['en-GB']}</p>
            </div>
          )
        },
        [INLINES.HYPERLINK]: node => {
          console.log('urls', node.data.uri.indexOf('youtube.com'))
          if (node.data.uri.indexOf('youtube.com') > -1) {
            let url = node.data.uri
            if (url.indexOf('watch?v=')) {
              url = url.replace('watch?v=', 'embed/') // replacing if direct youtube link is posted inteaded of embedded post
            }
            console.log('embed url', url)
            return (
              <iframe
                width="560"
                height="315"
                src={url}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="container-embed"
              ></iframe>
            )
          }
        },
      },
    }
    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className={heroStyles.hero}>
            <Img
              className={heroStyles.heroImage}
              alt={post.title}
              fluid={post.heroImage.fluid}
            />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
            {/* <div
              dangerouslySetInnerHTML={{
                __html: post.body2.childMarkdownRemark.html,
              }}
            /> */}
            {documentToReactComponents(post.body.json, options)}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        json
      }
    }
  }
`
