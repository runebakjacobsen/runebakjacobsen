import React from "react"

const PostPreview = ({ post }) => {
  const { title, date } = post.frontmatter
  return (
    <div>
      <h4>{title}</h4>
      <p>{post.excerpt}</p>
    </div>
  )
}

export default PostPreview
