import React from "react"
import { Input } from "../elements/inputs"
import { Button } from "../elements/buttons"
import styled from "styled-components"
import { above } from "../utilities/breakpoints"

const ContactForm = () => {
  return (
    <Form
      name="contact"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <input type="hidden" name="bot-field" />

      <label>Your Name:</label>
      <Input type="text" name="name" />

      <label>Your Email:</label>
      <Input type="email" name="email" />

      <label>Message:</label>
      <Input as="textarea" name="message" />

      <Button type="submit">Send message</Button>
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
