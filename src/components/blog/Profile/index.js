import React from "react"
import Avatar from "../Avatar"
import * as S from "./styled"

const Profile = () => ( 
    <S.Wrapper>
        <S.ProfileLink>
            <Avatar />
            <S.Author>
                <h1>Marcus Rodrigues</h1>
                <S.Position>
                    <h2>Cientista da Computação</h2>
                </S.Position>
            </S.Author>
        </S.ProfileLink>
        
        <p>Muitas ideias, mas poucas vontades de executá-las.</p>
    </S.Wrapper>
)

export default Profile