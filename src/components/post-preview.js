import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { above } from "../utilities/breakpoints"

const PostPreview = ({ post }) => {
  const { title, date, featuredImage } = post.frontmatter
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
      </div>
    </Post>
  )
}

const Post = styled.article`
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;

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
