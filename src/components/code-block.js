import React from "react"
import styled from "styled-components"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwl"

const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
`

export default ({ children, className }) => {
  const language =
    className !== undefined ? className.replace(/language-/, "") : "jsx"

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => {
            // Remove the last empty line:
            let lineNumberElem
            if (
              line.length === 1 &&
              line[0].empty === true &&
              i === tokens.length - 1
            ) {
              lineNumberElem = null
            } else {
              lineNumberElem = <LineNo>{i + 1}</LineNo>
            }

            return (
              <div key={i} {...getLineProps({ line, key: i })}>
                {lineNumberElem}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          })}
        </Pre>
      )}
    </Highlight>
  )
}
