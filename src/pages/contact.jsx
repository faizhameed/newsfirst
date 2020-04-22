import React from 'react'
import Layout from '../components/layout'
import Styles from './contact.module.scss'
const ContactUs = () => {
  return (
    <Layout>
      <div className={Styles.contactPageContainer}>
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
      </div>
    </Layout>
  )
}

export default ContactUs
