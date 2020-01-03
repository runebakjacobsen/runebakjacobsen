import React from "react"
import GithubIconLink from "./github-icon-link"
import TwitterIconLink from "./twitter-icon-link"
import MailIconLink from "./mail-icon-link"
import styled from "styled-components"

const IconLinkBar = () => {
  return (
    <Wrapper>
      <GithubIconLink />
      <TwitterIconLink />
      <MailIconLink />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  a {
    margin-left: 1rem;
  }
`

export default IconLinkBar
