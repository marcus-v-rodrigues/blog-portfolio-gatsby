import React from "react"
import Avatar from "../Avatar"
import * as S from "./styled"

const Profile = () => ( 
    <S.ProfileWrapper>
        <S.ProfileLink>
            <Avatar />
            <S.ProfileAuthor>
                <h1>Marcus Rodrigues</h1>
                <S.ProfilePosition>
                    <h2>Cientista da Computação</h2>
                </S.ProfilePosition>
            </S.ProfileAuthor>
        </S.ProfileLink>
        
        <p>Muitas ideias, mas poucas vontades de executá-las.</p>
    </S.ProfileWrapper>
)

export default Profile