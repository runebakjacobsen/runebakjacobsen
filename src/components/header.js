import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <nav>
      <span>
        <Link to="/">{siteTitle}</Link>
      </span>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
      <Link to="/about">Contact</Link>
    </nav>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const HeaderWrapper = styled.header`
  background: #5a67d8;

  a {
    color: #fff;
    text-decoration: none;
  }
`

export default Header
