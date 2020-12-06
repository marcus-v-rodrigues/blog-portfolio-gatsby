import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "profile-image.jpg" }) {
                    childImageSharp {
                      fixed(quality: 90, width: 80, height: 80) {
                        ...GatsbyImageSharpFixed #GraphQL fragment sendo chamado por spread operator
                      }
                    }
                }
            }
        `  
    )
    return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar