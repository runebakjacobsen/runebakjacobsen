import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import BurgerIcon from "./burger-icon"
import { above } from "../utilities/breakpoints"

const MobileNav = () => {
  const [isToggledOn, setIsToggledOn] = useState(false)
  return (
    <Wrapper>
      <span>
        <Link to="/">Rune Bak Jacobsen</Link>
      </span>
      <BurgerIcon isToggledOn={isToggledOn} setIsToggledOn={setIsToggledOn} />
      <NavList isShown={isToggledOn}>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </NavList>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${above.sm`
    display: none;
    `}

  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
  transition: all 0.2s ease-in-out;
  margin: 0;
  width: 100%;
  ${props =>
    props.isShown
      ? `opacity:1; height: 60vh; margin-top:30vh;`
      : `opacity:0;height: 0;`}
  li {
    margin-bottom: 1em;
    a {
      margin: 0;
    }
  }
`

export default MobileNav
