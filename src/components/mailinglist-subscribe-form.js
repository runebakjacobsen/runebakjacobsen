import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"
import { Input } from "../elements/inputs"
import { Button } from "../elements/buttons"

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
        <Input
          placeholder="Email address"
          name="email"
          type="text"
          onChange={handleEmailChange}
        />
        <Button type="submit">Subscribe</Button>
      </div>
    </Form>
  )
}

export default MailinglistSubscribeForm

const Form = styled.form``
