import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contact-form"

const ContactPage = () => {
  return (
    <Layout>
      <section>
        <h1>Contact</h1>
      </section>
      <section>
        <ContactForm />
      </section>
    </Layout>
  )
}

export default ContactPage
