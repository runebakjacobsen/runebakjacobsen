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
        height:100%;
    }
    
    *, *:before, *:after {
        box-sizing: inherit;
    }
    
    body {
        margin: 0;
        font-weight: 400;
        height:100%;
        line-height: 1.65;
        color: #1b1b1b;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    div#___gatsby, div#gatsby-focus-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    p {margin-bottom: 1.15rem;}

    h1, h2, h3, h4, h5 {
        margin: 2.75rem 0 1.05rem;
        line-height: 1.15;
        font-weight: bold;
    }

    h1 {
    margin-top: 0;
    font-size: 3.052em;
    }

    h2 {font-size: 2.441em;}

    h3 {font-size: 1.953em;}

    h4 {font-size: 1.563em;}

    h5 {font-size: 1.25em;}

    h1:first-child, 
    h2:first-child, 
    h3:first-child, 
    h4:first-child, 
    h5:first-child, 
    h6:first-child {
        margin-top: 0;
    }
    
    p:last-child, 
    ul:last-child, 
    ol:last-child, 
    dl:last-child, 
    blockquote:last-child, 
    pre:last-child, 
    table:last-child {
        margin-bottom: 0;
    }

    small, .text_small {font-size: 0.8em;}
    
    b {
        font-weight: 700;
    }

    section {
        margin: 1.15rem auto;
        ${above.xl`
            width: 80%;
        `}
    }

    main, .container {
        margin: 0 auto;
        padding: 0 1em;
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
