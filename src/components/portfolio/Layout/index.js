import React from 'react'
import PropTypes from "prop-types"

import * as S from "./styled"

import GlobalStyles from "src/styles/GlobalStyles"
import HamburgerMenu from "../HamburgerMenu"


const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyles/>
      <S.Wrapper>
        <HamburgerMenu/>
        <S.Main>{children}</S.Main>
      </S.Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
