import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const PostPreview = ({ post }) => {
  const { title, date, featuredImage } = post.frontmatter
  return (
    <Post>
      <Img fluid={featuredImage.childImageSharp.fluid} />
      <time>{date}</time>
      <h3>{title}</h3>
      <p>{post.excerpt}</p>
    </Post>
  )
}

const Post = styled.article`
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  width: 50%;
  margin: 0 auto;
`

export default PostPreview
