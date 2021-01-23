import React from 'react'
import * as S from "./styled"
import SplitText from "../SplitText"

const CutOutText = ({copy, role}) => {

  return (
    <S.CutOutWrapper>
        <SplitText copy={copy} role={role}/>
    </S.CutOutWrapper>  
  )
}

export default CutOutText
