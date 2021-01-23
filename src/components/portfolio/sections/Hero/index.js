import React from 'react'
import * as S from "./styled"

import CutOutText from 'src/components/portfolio/CutOutText'
import GlitchText from 'src/components/portfolio/GlitchText'

const Hero = () => {

  return (
    <S.Text>
      <h1>Oi, meu nome é</h1>
      <GlitchText text="Marcus Rodrigues"/>
      {//<CutOutText copy="MARCUS" role="heading"/>
      }
      <p>e sou um Cientista da Computação</p>
    </S.Text>
  )
}

export default Hero
