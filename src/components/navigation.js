import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link
          className={styles.navigationLink}
          activeClassName={styles.activeNav}
          to="/"
        >
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link
          className={styles.navigationLink}
          activeClassName={styles.activeNav}
          to="/blog/"
        >
          Blog
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link
          className={styles.navigationLink}
          activeClassName={styles.activeNav}
          to="/contact/"
        >
          Contact-Us
        </Link>
      </li>
    </ul>
  </nav>
)
