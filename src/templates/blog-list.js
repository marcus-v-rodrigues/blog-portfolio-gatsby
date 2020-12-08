import React, { useRef, useEffect} from 'react'
import {TimelineMax} from "gsap"
import { graphql } from "gatsby"

import Layout from "../components/blog/Layout"
import SEO from "../components/seo"
import PostItem from "../components/blog/PostItem"
import Pagination from '../components/blog/Pagination'

const BlogList = props => {
    const postList = props.data.allMarkdownRemark.edges

    const { currentPage, numPages } = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/blog/" : `/blog/page/${currentPage - 1}`
    const nextPage = `/blog/page/${currentPage + 1}`

    let postItems = useRef([])
    postItems.current = []

    let timeline = useRef()

    const addToPostItems = (el) => {
        if (el && !postItems.current.includes(el)) {
          postItems.current.push(el)
        }
    }

    useEffect(() => {
        timeline.current = new TimelineMax()
        .staggerFrom(postItems.current, 0.7, {x: -200, opacity: 0, ease: "power3"}, 0.2)
    },[])

    return (
        <Layout>
        <SEO title="Home" />
        {postList.map(
            ({
            node: {
                frontmatter: { background, category, date, description, title },
                timeToRead,
                fields: { slug },
            },
            }) => (
            <div ref={addToPostItems}>
                <PostItem
                    slug={slug}
                    background={background}
                    category={category}
                    date={date}
                    timeToRead={timeToRead}
                    title={title}
                    description={description}
                />
            </div>
            )
        )}
            <Pagination
                isFirst={isFirst}
                isLast={isLast}
                currentPage={currentPage}
                numPages={numPages}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </Layout>
    )
}

export const query = graphql`
    query PostList($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: $limit
        skip: $skip
        ){
            edges {
                node {
                fields {
                    slug
                }
                frontmatter {
                    background
                    category
                    date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                    description
                    title
                }
                timeToRead
                }
            }
        }
    }
`

export default BlogList