import styled from "styled-components"
import { lighten } from "polished"

export const Input = styled.input`
  background: ${lighten(0.82, "#1a202c")};
  border: none;
  padding: 1rem;
  border: 1px solid transparent;
  transition: border-color 300ms;
  caret-color: darkorange;
  &:focus {
    border-color: darkorange;
  }
`
