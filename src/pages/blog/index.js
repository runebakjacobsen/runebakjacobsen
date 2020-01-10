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
            date(formatString: "MMMM DD, YYYY")
            path
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const BlogPage = ({ data }) => (
  <Layout hero={{ title: "Blog" }}>
    <SEO title="Blog" />
    <h1>Recent Posts</h1>
    {data.allMdx.edges.map(edge => (
      <PostPreview key={edge.node.frontmatter.path} post={edge.node} />
    ))}
  </Layout>
)

export default BlogPage
