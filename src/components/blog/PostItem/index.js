import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const PostItem = ({
    slug,
    background,
    category,
    date,
    timeToRead,
    title,
    description,
}) => (
    <S.Link to={slug}>
        <S.Wrapper>
        <S.Tag background={background}>{category}</S.Tag>
            <S.Info>
            <S.Date>
          {date} • {timeToRead} min de leitura
        </S.Date>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
            </S.Info>
        </S.Wrapper>
    </S.Link>
)

PostItem.propTypes = {
    slug: PropTypes.string.isRequired,
    background: PropTypes.string,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default PostItem