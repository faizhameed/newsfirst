import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import Logo from '../../static/logo.jpg'

export default () => (
  <nav role="navigation">
    <div className={styles.logoContainer}>
      <img className={styles.logo} src={Logo} />
      <h3>NEWS FIRST</h3>
      <p>Be a part of it</p>
    </div>
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
