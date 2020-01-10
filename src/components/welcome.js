import React from "react"
import Memoji from "./memoji"
import styled from "styled-components"
import { above } from "../utilities/breakpoints"
import { Highlight } from "./highlight"

const Welcome = () => {
  return (
    <section>
      <h1>
        <Highlight>Hello there.</Highlight>
      </h1>
      <p>
        {" "}
        I'm{" "}
        <b>
          <i>Rune</i>
        </b>{" "}
        and I ❤️ programming.
      </p>
    </section>
  )
}

export default Welcome
