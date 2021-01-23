import React from 'react'
import PropTypes from "prop-types"

import GlobalStyles from "src/styles/GlobalStyles"
import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"

import * as S from "./styled"

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyles/>
      <S.Wrapper>
        <Sidebar/>
        <S.Main>{children}</S.Main>
        <MenuBar/>
      </S.Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
