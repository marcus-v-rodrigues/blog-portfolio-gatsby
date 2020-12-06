import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,600,800&display=swap");
  body {
    font-family: 'Poppins';
  }
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

export const HamburgerMenu = styled.div`
    display: none;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    
`

export const MenuSecundaryBackgroundColor = styled.div`
    background: black;    
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -1;   
`

export const MenuLayer = styled.div`
    position: relative;
    background: #192734;
    height: 100%;
    overflow: hidden;
`

export const MenuCityBackground = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    background-size: cover;
    background-repeat: no-repeat;
    animation-name: backgroundEffect;
    animation-duration: 30s;
    animation-iteration-count: infinite;
`

export const MenuLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: 200px;
    nav {
      display: block;
      ul {
        margin: 0;
        padding: 0;
        li {
          list-style: none;
          font-size: 6rem;
          font-weight: 700;
          cursor: pointer;
          height: 135px;
          overflow: hidden;
          position: relative;
          width: 700px;
          a {
            position: absolute;
            color: #fff;
            text-decoration: none;
            &:hover {
              color: black;
            }
          }
        }
      }
    }
`

export const Info = styled.div`
    color: #fff;
    width: 300px;
    h3 {
        font-size: 1.2rem;
        margin: 8px auto;
    }
    p {
        margin: 0 auto;
        font-size: 0.8rem;
    }
`

export const Locations = styled.div`
    position: absolute;
    bottom: -80px;
    color: #fff;
    margin-top: 16px;
    font-size: 0.8rem;
    font-weight: 600;
    span {
        cursor: pointer;
        &:first-child {
            margin-left: 64px;
        }
        font-weight: 400;
        margin: 0 32px;
        transition: 0.3s ease-in-out;
        &:hover {
            color: #fff;
            background: #333e49;
            padding: 8px 24px;
            border-radius: 4px;
        }
    }
`