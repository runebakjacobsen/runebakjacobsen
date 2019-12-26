import React from "react"
import styled from "styled-components"

const BurgerIcon = ({ isToggledOn, setIsToggledOn }) => {
  return (
    <NavIcon onClick={() => setIsToggledOn(!isToggledOn)} isOpen={isToggledOn}>
      <div></div>
    </NavIcon>
  )
}
const NavIcon = styled.div`
  width: 32px;
  cursor: pointer;
  margin-left: auto;

  &:after,
  &:before,
  & div {
    background-color: #fff;
    border-radius: 3px;
    content: "";
    display: block;
    height: 3px;
    margin: 6px 0;
    transition: all 0.2s ease-in-out;
  }

  ${props =>
    props.isOpen
      ? `
        &:before {
            transform: translateY(9px) rotate(135deg);
        }
        
        &:after {
            transform: translateY(-9px) rotate(-135deg);
        }
        
        & div {
            transform: scale(0);
        }`
      : ""}
`

export default BurgerIcon
