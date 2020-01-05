import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostPreview from "../../components/post-preview"
import { graphql } from "gatsby"

export const query = graphql`
  query BlogQuery {
    allMdx(limit: 10, sort: { fields: frontmatter___date }) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Posts</h1>
    <p>Here is the posts</p>
    {data.allMdx.edges.map(edge => (
      <PostPreview post={edge.node} />
    ))}
    {JSON.stringify(data.allMdx.edges)}
  </Layout>
)

export default BlogPage
