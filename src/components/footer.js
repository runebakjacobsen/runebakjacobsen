import React from "react"
import styled from "styled-components"
import IconLinkBar from "./icon-link-bar"

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <IconLinkBar />© {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  margin-top: auto;
  background-color: #1a202c;
  color: #a0aec0;
  padding: 1rem 0;
  text-align: right;
  a {
    color: #a0aec0;
  }
`

export default Footer
