import styled from "styled-components"
import { Link } from "gatsby"

export const HamburgerMenuWrapper = styled.div`
    z-index: 0;
    position: absolute;
    background: #101010;
    height: 100vh;
    width: 100vw;
    top: -100vh;
    left: 0;
`

export const HamburgerMenuData = styled.div`
    padding: 8rem 0 0 2rem;
    text-align: left;
`

export const HamburgerMenuList = styled.ul`
    list-style: none;
`

export const HamburgerMenuItem = styled.li`  
    padding: 0.1em 0;
    &:first-child {
        color: grey;
        font-size: 3rem;
    }   
    &:not(:first-child) {
        color: #fff;
        font-size: 5rem;
    }
    a {
        text-decoration: none;
        color: #fff;
    }

`

export const HamburgerMenuLink = styled(Link)`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #1fa1f2;
  }
`

const Shape = styled.span`
    position: absolute;
    right: 0;
    width: 100%;
    height: 3px;
    background: #fff;
`

export const Top = styled(Shape)`
    top: 0;
    bottom: 100%;
`
export const Middle = styled(Shape)`
    top: 50%;
`
export const Bottom = styled(Shape)`
    top: 100%;
    bottom: 0;
`

export const HamburgerMenuToggleBtn = styled.div`
    position: fixed;
    right: 1rem;
    top: 1rem;
    margin: 1.4rem;
    padding: 1rem;
    width: 40px;
    height: 24px;
    z-index: 1;
    transition: transform 0.2s, opacity 0.2s !important;
    will-change: transform;
    &:hover {
        opacity: 0.7;
        transform: scale(1.2);
    }
`
/*
export const HamburgerMenuToggleBtn = styled.div`
    position: fixed;
    margin: 1.4em;
    padding: 1em;
    width: 40px;
    height: 24px;
    right: 1em;
    z-index: 1;
`
export const HamburgerMenuBtn = styled.span`
    position: absolute;
    background: #fff;
    width: 40px;
    height: 2px;
    &.one {
        margin-top: 0;
    }

    &.two {
        margin-top: 12px;
    }

    &.three {
        margin-top: 24px;
    }
`
*/