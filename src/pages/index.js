import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from "../components/welcome"
import PostPreview from "../components/post-preview"
import { graphql } from "gatsby"

export const query = graphql`
  query IndexQuery {
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

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Welcome />
    <section>
      <p>
        Welcome to my website, eventually there will be some blog posts and
        other fun stuff here. Stay tuned!
      </p>
    </section>
    <section>
      <h3>Recent Posts</h3>
      {data.allMdx.edges.map(edge => (
        <PostPreview post={edge.node} />
      ))}
    </section>
  </Layout>
)

export default IndexPage
