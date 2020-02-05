import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostPreview from "../../components/post-preview"
import { graphql } from "gatsby"
import { Highlight } from "../../components/highlight"

export const query = graphql`
  query BlogQuery {
    allMdx(
      limit: 10
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`

const BlogPage = ({ data }) => (
  <Layout hero={{ title: "Blog" }}>
    <SEO title="Blog" />
    <section>
      <h1>
        <Highlight>Recent Posts</Highlight>
      </h1>
      {data.allMdx.edges.length > 0 ? (
        data.allMdx.edges.map(edge => (
          <PostPreview key={edge.node.frontmatter.path} post={edge.node} />
        ))
      ) : (
        <p>Sorry, no posts were found.</p>
      )}
    </section>
  </Layout>
)

export default BlogPage
