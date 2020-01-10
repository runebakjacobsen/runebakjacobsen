import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import MobileNav from "./mobile-nav"
import { above } from "../utilities/breakpoints"
import { Highlight } from "./highlight"
import { darken } from "polished"

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <MobileNav />
    <nav>
      <span>
        <Link to="/">{siteTitle}.</Link>
      </span>
      <div>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
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
  border-bottom: 4px solid darkorange;
  background: ${darken(0.1, "darkorange")};
  padding: 1em;
  /* font-size: 1.125em; */
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
    margin-left: 1em;
  }

  span a {
    margin-left: 0;
    font-style: italic;
    font-weight: 900;
    color: #1b1b1b;
    text-decoration: none;
  }
`

export default Header
