import React from "react"

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Bulb as Light } from "@styled-icons/boxicons-regular/Bulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"

import * as S from "./styled"

const MenuBar = () => (
  <S.Wrapper>
    <S.Group>
      <S.Link to="/" title="Voltar para Home">
        <S.Item>
          <Home />
        </S.Item>
      </S.Link>
      <S.Link to="/search/" title="Pesquisar">
        <S.Item>
          <Search />
        </S.Item>
      </S.Link>
    </S.Group>
    <S.Group>
      <S.Item title="Mudar o tema">
        <Light />
      </S.Item>
      <S.Item title="Mudar visualização">
        <Grid />
      </S.Item>
      <S.Item title="Ir para o Topo">
        <Arrow />
      </S.Item>
    </S.Group>
  </S.Wrapper>
)

export default MenuBar