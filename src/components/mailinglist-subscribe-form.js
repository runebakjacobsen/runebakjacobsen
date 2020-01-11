import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { Input } from "../elements/inputs"
import { Button } from "../elements/buttons"
import { Alert } from "../elements/alerts"

const MailinglistSubscribeForm = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email)
      .then(data => {
        if (data.result === "success") {
          setSuccess(data.msg)
        } else {
          let errorMessage = data.msg
          errorMessage =
            errorMessage.charAt(0).toLowerCase() + errorMessage.slice(1)
          setError(errorMessage)
        }
      })
      .catch(error => {
        setError(error)
      })
  }

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value)
    setSuccess("")
    setError("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>
        <i>Sign up for more good stuff!</i>
      </h4>
      <Input
        placeholder="Email address"
        name="email"
        type="text"
        onChange={handleEmailChange}
      />
      <Button type="submit">Subscribe</Button>
      {error !== "" && (
        <Alert>
          Woops - Something went <b>wrong</b>. <br /> Looks like{" "}
          <span dangerouslySetInnerHTML={{ __html: error }} />"
        </Alert>
      )}
      {success !== "" && <Alert>{success}</Alert>}
    </form>
  )
}

export default MailinglistSubscribeForm
