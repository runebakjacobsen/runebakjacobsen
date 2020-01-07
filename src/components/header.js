import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import MobileNav from "./mobile-nav"
import { above } from "../utilities/breakpoints"
import Memoji from "./memoji"

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <MobileNav />
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
  margin-bottom: 2rem;

  nav {
    display: none;
    div {
      margin-left: auto;
    }
    ${above.sm`
    display: flex;  
    `}
  }

  a {
    color: #fff;
    text-decoration: none;
    margin-left: 1em;
  }

  span a {
    margin-left: 0;
    font-weight: 500;
  }
`

export default Header
