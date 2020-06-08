import React from 'react'
import Layout from '../components/layout'
import Styles from './contact.module.scss'
const ContactUs = () => {
  return (
    <Layout>
      <div className={Styles.contactPageContainer}>
        {/* <img
          className={Styles.contactImg}
          src={'https://picsum.photos/1000/350'}
          alt="illus"
        /> */}
        <h1>Contact Us</h1>
      </div>
      <form method="post" action="#">
        <label>
          <p> Name</p>
          <input type="text" name="name" id="name" />
        </label>
        <label>
          <p> Email</p>
          <input type="email" name="email" id="email" />
        </label>
        <label>
          <p>Subject</p>
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          <p> Message</p>
          <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit">Send</button>
      </form>
    </Layout>
  )
}

export default ContactUs
