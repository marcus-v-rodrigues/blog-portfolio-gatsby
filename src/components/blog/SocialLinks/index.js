import React from "react"

import Icons from "./Icons"
import links from "./content"

import * as S from "./styled"

const SocialLinks = () => (
  <S.Wrapper>
    <S.List>
      {links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <S.Item key={i}>
            <S.Link
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.Link>
          </S.Item>
        )
      })}
    </S.List>
  </S.Wrapper>
)

export default SocialLinks