import React from "react"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

import * as S from "./styled"

const Sidebar = () => (
  <S.Wrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </S.Wrapper>
)

export default Sidebar