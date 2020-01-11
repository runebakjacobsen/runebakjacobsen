import React from "react"
import Layout from "../components/layout"
import { Highlight } from "../components/highlight"
import ContactForm from "../components/contact-form"

const ContactPage = () => {
  return (
    <Layout>
      <section>
        <h1>
          <Highlight>Contact</Highlight>
        </h1>
      </section>
      <section>
        <ContactForm />
      </section>
    </Layout>
  )
}

export default ContactPage
