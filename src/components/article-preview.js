import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'
import { hashDate } from '../utils/hashDate'

export default ({ article }) => {
  let dateSlug = hashDate(article.publishDate)
  return (
    <div className={styles.preview}>
      <Img alt="" fluid={article.heroImage.fluid} />
      <h3 className={styles.previewTitle}>
        <Link to={`/post/${dateSlug}/${article.slug}`}>{article.title}</Link>
      </h3>
      <small>{article.publishDate}</small>
      <p>{article.description.childMarkdownRemark.excerpt}</p>
      {article.tags &&
        article.tags.map(tag => (
          <p className={styles.tag} key={tag}>
            {tag}
          </p>
        ))}
    </div>
  )
}
