import React from "react"

import links from "../../content"

import * as S from "./styled"

const MenuLinks = () => (
  <S.Wrapper>
    <S.List>
      {links.map((link, i) => (
        <S.Item key={i}>
          <S.MenuLink to={link.url} activeClassName="active">
            {link.label}
          </S.MenuLink>
        </S.Item>
      ))}
    </S.List>
  </S.Wrapper>
)

export default MenuLinks