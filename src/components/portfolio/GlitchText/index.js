import React from 'react'
import * as S from "./styled"

const GlitchText = ({text}) => {
    var rows = [];
    for (var i = 0; i < 5; i++) {
        rows.push(<S.Text>{text}</S.Text>)
    }

    return (
        <S.Wrapper>
            <S.Effect>
                <S.Glitch>{rows}</S.Glitch>
            </S.Effect>
        </S.Wrapper>
    )
}

export default GlitchText
