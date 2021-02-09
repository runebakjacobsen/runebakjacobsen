import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import MobileNav from "./mobile-nav"
import { above } from "../utilities/breakpoints"

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <MobileNav />
    <nav>
      <span>
        <Link to="/">{siteTitle}.</Link>
      </span>
      <div>
        <Link to="/blog">Blog</Link>
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
  border-bottom: 6px solid darkorange;
  padding: 1rem;
  font-size: 1.125rem;


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
    margin-left: 1rem;
    border: none;
  }

  span a {
    margin-left: 0;
    font-style: italic;
    font-weight: 900;
    border: none;
  }
`

export default Header
