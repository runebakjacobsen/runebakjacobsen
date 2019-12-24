import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"

const GlobalStyle = createGlobalStyle`
    ${normalize()}

    html {
        box-sizing: border-box;
        font-size: 16px;
    }
    
    *, *:before, *:after {
        box-sizing: inherit;
    }
    
    body {
        margin: 0;
        font-weight: 400;
        line-height: 1.45;
        color: #333;
        font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    p {margin-bottom: 1.25em;}

    h1, h2, h3, h4, h5 {
        margin: 2.75rem 0 1rem;
        font-weight: 400;
        line-height: 1.15;
        font-family: "IBM Plex Mono";
    }

    h1 {
        margin-top: 0;
        font-size: 3.815em;
        letter-spacing: -0.05em;
    }

    h2 {font-size: 3.052em;}

    h3 {font-size: 2.441em;}

    h4 {font-size: 1.953em;}

    h5 {font-size: 1.563em;}

    h6 {font-size: 1.25em;}

    small, .text_small {font-size: 0.8em;}
`

export default GlobalStyle
