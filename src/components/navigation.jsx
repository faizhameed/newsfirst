import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import './navigation.scss'
import Logo from '../../static/logo.png'
import { Navbar, Nav } from 'react-bootstrap'

export default props => {
  const [fixed, setFixed] = useState(null)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      setFixed(null)
    }
  }, [])

  function handleScroll() {
    var navbar = document.getElementById('nav-cont')
    var sticky = navbar.offsetTop
    if (window.pageYOffset >= sticky + 90) {
      setFixed('top')
    } else {
      setFixed(null)
    }
  }
  /*  const [stickyClass, setStickyClass] = useState(null)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.addEventListener('scroll', handleScroll)
    }
  }, [window.addEventListener('scroll', handleScroll)])
  function handleScroll() {
    var navbar = document.getElementById('nav-cont')
    var sticky = navbar.offsetTop
    if (window.pageYOffset >= sticky + 90) {
      navbar.classList.add(styles.sticky)
      setStickyClass(styles.stickyOn)
    } else {
      navbar.classList.remove(styles.sticky)
      setStickyClass(null)
    }
  } */

  /*  */
  return (
    <nav role="navigation">
      <div className={`${styles.logoContainer}  `}>
        <img className={styles.logo} src={Logo} />
        <h3>NEWS FIRST</h3>
        <p>Be part of it !</p>
      </div>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed={fixed}
        bg="primary"
        variant="dark"
        id="nav-cont"
        className={styles.navigation}
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link
              eventkey="1"
              className={styles.navigationLink}
              activeClassName={styles.activeNav}
              to="/"
            >
              Home
            </Link>
            <Link
              eventkey="2"
              className={styles.navigationLink}
              activeClassName={styles.activeNav}
              to="/latest-news/"
            >
              Latest News
            </Link>
            <Link
              eventkey="3"
              className={styles.navigationLink}
              activeClassName={styles.activeNav}
              to="/category/national/"
            >
              National
            </Link>
            <Link
              eventkey="4"
              className={styles.navigationLink}
              activeClassName={styles.activeNav}
              to="/category/gulf/"
            >
              Gulf
            </Link>
            <Link
              eventkey="5"
              className={styles.navigationLink}
              activeClassName={styles.activeNav}
              to="/category/technology/"
            >
              Technology
            </Link>
            <Link
              eventkey="6"
              className={styles.navigationLink}
              activeClassName={styles.activeNav}
              to="/category/sports/"
            >
              Sports
            </Link>
            <Link
              eventkey="7"
              className={styles.navigationLink}
              activeClassName={styles.activeNav}
              to="/category/entertainment/"
            >
              Entertainment
            </Link>
            <Link
              eventkey="8"
              className={styles.navigationLink}
              activeClassName={styles.activeNav}
              to="/opinion/"
            >
              Opinion
            </Link>
            <Link
              eventkey="9"
              className={styles.navigationLink}
              activeClassName={styles.activeNav}
              to="/contact/"
            >
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/*   <div id="nav-cont" onScroll={handleScroll} className={styles.navigation}>
        <ul>
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
              Contact Us
            </Link>
          </li>
        </ul>
      </div> */}
    </nav>
  )
}
