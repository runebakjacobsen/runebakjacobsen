import React, { useState } from "react"
import { Input } from "../elements/inputs"
import { Button } from "../elements/buttons"
import { Alert } from "../elements/alerts"
import styled from "styled-components"
import { above } from "../utilities/breakpoints"

const ContactForm = () => {
  const [fields, setFields] = useState({ name: "", email: "", message: "" })
  const [error, setError] = useState(false)

  const isEmpty = obj => Object.values(obj).some(x => x === null || x === "")

  const validateInputs = e => {
    if (isEmpty(fields)) {
      e.preventDefault()
      setError(true)
    }
  }
  return (
    <Form
      name="contact"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      onSubmit={validateInputs}
    >
      <input type="hidden" name="bot-field" />

      <label>Your Name:</label>
      <Input
        type="text"
        name="name"
        onChange={e => {
          setError(false)
          setFields({ ...fields, name: e.target.value })
        }}
      />

      <label>Your Email:</label>
      <Input
        type="email"
        name="email"
        onChange={e => {
          setError(false)
          setFields({ ...fields, email: e.target.value })
        }}
      />

      <label>Message:</label>
      <Input
        as="textarea"
        name="message"
        onChange={e => {
          setError(false)
          setFields({ ...fields, message: e.target.value })
        }}
      />

      <Button type="submit">Send message</Button>

      {error && (
        <Alert>
          Looks like you forgot to fill out something! Please check again.
        </Alert>
      )}
    </Form>
  )
}

const Form = styled.form`
  margin-top: 2rem;
  width: 100%;
  ${above.md`
    width: 50%;
  `}

  input,
  textarea {
    display: block;
    width: 100%;
    resize: none;
  }
  button {
    margin-top: 1rem;
    display: block;
    margin-left: auto;
  }
`

export default ContactForm
