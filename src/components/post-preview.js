import React from "react"
import styled from "styled-components"

const PostPreview = ({ post }) => {
  const { title, date } = post.frontmatter
  return (
    <Post>
      <h3>{title}</h3>
      <p>{post.excerpt}</p>
    </Post>
  )
}

const Post = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  width: 50%;
  margin: 0 auto;
`

export default PostPreview
