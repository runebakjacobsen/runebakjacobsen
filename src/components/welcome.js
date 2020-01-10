import React from "react"
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
      <p>
        This is my personal website, and eventually there will be some blog
        posts and other fun stuff here. Stay tuned!
      </p>
    </section>
  )
}

export default Welcome
