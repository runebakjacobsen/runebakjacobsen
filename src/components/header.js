import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <nav className="container">
      <span>
        <Link to="/">{siteTitle}</Link>
      </span>
      <div>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/about">Contact</Link>
      </div>
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
  background: #2c5282;
  padding: 1em;
  font-size: 1.125em;
  margin-bottom: 1em;

  nav {
    display: flex;
    div {
      margin-left: auto;
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    margin-left: 1em;
  }

  span a {
    margin-left: 0;
  }
`

export default Header
