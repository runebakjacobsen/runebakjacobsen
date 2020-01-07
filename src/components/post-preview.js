import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { above } from "../utilities/breakpoints"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { lighten } from "polished"
const PostPreview = ({ post }) => {
  const { title, date, featuredImage, path } = post.frontmatter
  return (
    <Post>
      <div>
        <Img
          imgStyle={{ objectFit: "contain" }}
          fluid={featuredImage.childImageSharp.fluid}
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p>
          <time>{date}</time> - {post.excerpt}
        </p>
        <Link to={`/blog${path}`}>
          Read more
          <FontAwesomeIcon icon="arrow-right" />
        </Link>
      </div>
    </Post>
  )
}

const Post = styled.article`
  border: 1px solid ${lighten(0.625, "#1a202c")};
  border-radius: 0.25rem;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;

  a svg {
    margin-left: 0.25rem;
  }

  > div:first-child {
    width: 100%;
    margin: auto;
    ${above.md`
    width: 30%;
    margin-right: 1rem;
    `}

    + div {
      margin: auto;
      ${above.md`
      width: 67.5%;
      `}
    }
  }
`

export default PostPreview
