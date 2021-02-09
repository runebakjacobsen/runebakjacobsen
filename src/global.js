import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"
import { above } from "./utilities/breakpoints"
import { dom } from "@fortawesome/fontawesome-svg-core"
import greenDustAndScracthes from "./images/greenDustAndScratches.png"
import Manrope from "./fonts/Manrope[wght].ttf"

const GlobalStyle = createGlobalStyle`
    ${normalize()}
    @font-face {
        font-family: "Manrope";
        src: url(${Manrope}) format("truetype-variations");
        font-weight: 1 999; 
    }

  
    ${dom.css()}

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
        line-height: 1.55;
        color: #111827;
        font-family: 'Manrope', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-image: url(${greenDustAndScracthes});
    }
    button, input, optgroup, select, textarea {
        font-family: 'Manrope', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
    }
    
    div#___gatsby, div#gatsby-focus-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    p {margin-bottom: 1.15rem;}

    h1, h2, h3, h4, h5 {
        padding: 1rem 0;  
        margin:0;
        line-height: 1.25;
        letter-spacing: -1px;
    }

    h1 {
        margin-top: 0;
        font-size: 3rem;
    }

    h2 {font-size: 2.5rem;}

    h3 {font-size: 2rem;}

    h4 {font-size: 1.5rem;}

    h5 {font-size: 1.25rem;}

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

    small {font-size: 0.8em;}
    
    b {
        font-weight: 700;
    }
    a {
        color: inherit;
        border-bottom: 1px solid darkorange;
        text-decoration: none;
    }
    label {
        display: block;
        margin-top: 1rem;
    }
    section, nav {
        padding: 0 1rem;
        margin: 0 auto 0 auto;
        ${above.sm`
            width: 540px;
        `}
        ${above.md`
            width: 720px;
        `}
        ${above.lg`
            width: 860px;
        `}
    }

    main {
        width: 100%;
        padding: 2rem 0;
    }

`

export default GlobalStyle
