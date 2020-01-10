import React from "react"
import styled from "styled-components"
import IconLinkBar from "./icon-link-bar"

const Footer = () => {
  return (
    <FooterWrapper>
      <section>
        <IconLinkBar />© {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </section>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  margin-top: auto;
  background-color: #1a202c;
  color: #a0aec0;
  padding-top: 1rem;
  text-align: right;
  a {
    color: #a0aec0;
  }
`

export default Footer
