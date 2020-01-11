import React, { useState } from "react"
import { Highlight } from "./highlight"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"
import { lighten } from "polished"

const MailinglistSubscribeForm = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email)
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)

        // Errors in here are client side
        // Mailchimp always returns a 200
      })
  }

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h4>
        <i>Sign up for more good stuff!</i>
      </h4>
      <div>
        <input
          placeholder="Email address"
          name="email"
          type="text"
          onChange={handleEmailChange}
        />
        <button type="submit">Subscribe</button>
      </div>
    </Form>
  )
}

export default MailinglistSubscribeForm

const Form = styled.form`
  input {
    background: ${lighten(0.82, "#1a202c")};
    border: none;
    padding: 1rem;
    border: 1px solid transparent;
  }
  button {
    background: darkorange;
    border: none;
    padding: 1rem;
    font-weight: 900;
    border: 1px solid darkorange;
    font-style: italic;
  }
`
