import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TwitterIconLink = () => {
  return (
    <>
      <Link to="https://twitter.com/runebakj">
        <FontAwesomeIcon icon={["fab", "twitter-square"]} size="2x" />
      </Link>
    </>
  )
}

export default TwitterIconLink
