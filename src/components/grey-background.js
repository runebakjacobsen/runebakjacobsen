import styled from "styled-components"
import { lighten } from "polished"
import greenDustAndScracthes from "../images/greenDustAndScratches.png"

export const GreyBackground = styled.div`
  padding: 1.5rem 0;
  margin: 0;
  background-color: ${lighten(0.82, "#1a202c")};
  background-image: url(${greenDustAndScracthes});
`
