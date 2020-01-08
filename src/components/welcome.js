import React from "react"
import Memoji from "./memoji"
import styled from "styled-components"
import { above } from "../utilities/breakpoints"

const Welcome = () => {
  return (
    <Wrapper>
      <div>
        <h1>Welcome!</h1>
        <h4>
          My name is <b>Rune</b> and I'm a Software Developer living in Denmark{" "}
          <span role="img" aria-label="The Danish Flag">
            🇩🇰
          </span>
        </h4>
      </div>
      <Memoji />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div:first-of-type {
    width: 100%;
    order: 2;
    ${above.sm`
        order: 1;
        width: 60%;
        margin-left: auto;
    `}
    ${above.md`
        width: 50%;
    `}
    ${above.lg`
        width: 40%;
    `}
  }
  div + div {
    max-width: 200px;
    width: 80%;
    margin: auto;
    order: 1;
    ${above.sm`
        order:2;
        margin-left: 0;
    `}
  }
`

export default Welcome
