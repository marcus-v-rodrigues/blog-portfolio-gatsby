import styled, { createGlobalStyle } from "styled-components"


export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,600,800&display=swap");
  body {
    font-family: 'Poppins';
  }
`

export const Header = styled.header`
    height: 100px;
`

export const Container = styled.div`
    width: 1280px;
    min-width: 1280px;
    margin: 0 auto;
`

export const Wrapper = styled.div`
    padding: 0 48px;
    position: relative;
`

export const InnerHeader = styled.div`
    position: relative;
    z-index: 10;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.a`
    font-weight: 700;
    font-size: 2.5rem;
    text-decoration: none;
    color: black;
`

export const Menu = styled.button`
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    font-size: 1rem;
    mix-blend-mode: difference;
`

