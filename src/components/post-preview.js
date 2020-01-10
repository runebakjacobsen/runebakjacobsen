import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PostPreview = ({ post }) => {
  const { title, date, path } = post.frontmatter
  return (
    <Post>
      <h3>{title}</h3>
      <p>
        <time>{date}</time> - {post.excerpt}
      </p>
      <Link to={`/blog${path}`}>
        Read more
        <FontAwesomeIcon icon="arrow-right" />
      </Link>
    </Post>
  )
}

const Post = styled.article`
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);

  &:last-of-type {
    margin-bottom: 0;
  }
  a svg {
    margin-left: 0.25rem;
  }
`

export default PostPreview
