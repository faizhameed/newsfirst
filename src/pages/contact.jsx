import React from 'react'
import Layout from '../components/layout'
import Styles from './contact.module.scss'
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
const ContactUs = () => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }
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
      <form
        name="contact"
        action="/thanks/"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <label>
          <p> Name</p>
          <input type="text" name="name" id="name" onChange={handleChange} />
        </label>
        <label>
          <p> Email</p>
          <input type="email" name="email" id="email" onChange={handleChange} />
        </label>
        <label>
          <p>Subject</p>
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          <p> Message</p>
          <textarea name="message" onChange={handleChange} />
        </label>
        <button type="submit">Send</button>
      </form>
    </Layout>
  )
}

export default ContactUs
