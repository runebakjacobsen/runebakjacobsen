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
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);

  a svg {
    margin-left: 0.25rem;
  }
`

export default PostPreview
