import React from 'react'
import Header from "../components/main-page/Header"
import createGlobalStyle from 'styled-components'

const IndexPage = () => {
  return (
    <GlobalStyles/>
    <Header/>
  )
}

export default IndexPage

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,600,800&display=swap");
  body {
    font-family: 'Poppins';
  }
`