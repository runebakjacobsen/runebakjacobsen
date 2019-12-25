import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"
import { above } from "./utilities/breakpoints"

const GlobalStyle = createGlobalStyle`
    ${normalize()}
    
    @import url('https://rsms.me/inter/inter.css');
  
    @supports (font-variation-settings: normal) {
      body { font-family: 'Inter var', sans-serif; }
    }
    
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
        color: #1b1b1b;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    p {margin-bottom: 1.25em; }

    h1, h2, h3, h4, h5 {
        margin: 2.75rem 0 1rem;
        font-weight: 400;
        line-height: 1.15;
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
    
    main, .container {
        margin: 0 auto;
        ${above.sm`
            width: 540px;
        `}
        ${above.md`
        width: 720px;
        `}
        ${above.lg`
        width: 960px;
        `}
        ${above.xl`
            width: 1140px;
        `}
    }
`

export default GlobalStyle
