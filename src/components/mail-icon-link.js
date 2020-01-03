import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MailIconLink = () => {
  return (
    <>
      <a href="mailto:runebakjacobsen@gmail.com">
        <FontAwesomeIcon icon="envelope-square" size="2x" />
      </a>
    </>
  )
}

export default MailIconLink
