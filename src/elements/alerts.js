import styled from "styled-components"
import { lighten } from "polished"

export const Alert = styled.div`
  background: ${lighten(0.25, "darkorange")};
  padding: 0.5rem 1rem;
  margin-top: 1rem;
`
