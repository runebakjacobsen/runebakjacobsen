import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { darken } from "polished"

export const Button = styled.button`
  background: darkorange;
  border: none;
  padding: 1rem;
  font-weight: 900;
  border: 1px solid darkorange;
  font-style: italic;
  cursor: pointer;
  transition: background-color 300ms, border-color 300ms;
  &:hover {
    background: ${darken(0.1, "darkorange")};
    border-color: ${darken(0.1, "darkorange")};
  }
`

export const LinkButton = props => <Link {...props} />
