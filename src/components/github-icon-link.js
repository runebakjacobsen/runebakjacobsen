import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const GithubIconLink = () => {
  return (
    <>
      <Link to="https://github.com/runebakjacobsen">
        <FontAwesomeIcon icon={["fab", "github-square"]} size="2x" />
      </Link>
    </>
  )
}

export default GithubIconLink
