import styled from "styled-components"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  border-radius: 35px;
  background: linear-gradient(315deg, #1b2a38, #17232f);
  box-shadow:  -14px -14px 28px #121b24, 
                14px 14px 28px #213344;
  height: 96vh;
  margin: 2vh 1.5rem 0 0;
  
  align-items: center;
  //border-left: 1px solid #38444d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.span`
  color: #8899a6;
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;
  &:hover {
    color: #1fa1f2;
  }
`