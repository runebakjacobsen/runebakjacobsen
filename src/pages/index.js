import { graphql } from "gatsby"
import React from "react"
import { GreyBackground } from "../components/grey-background"
import Layout from "../components/layout"
import MailinglistSubscribeForm from "../components/mailinglist-subscribe-form"
import PostPreview from "../components/post-preview"
import SEO from "../components/seo"
import Welcome from "../components/welcome"

export const query = graphql`
  query IndexQuery {
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

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Welcome />
    {data.allMdx.edges.length > 0 && (
      <GreyBackground
        css={`
          padding-bottom: 4rem;
        `}
      >
        <section>
          <h2>Recent Posts</h2>

          {data.allMdx.edges.map((edge) => (
            <PostPreview key={edge.node.frontmatter.path} post={edge.node} />
          ))}
        </section>
      </GreyBackground>
    )}
    <section
      css={`
        padding: 4rem 0;
      `}
    >
      <MailinglistSubscribeForm />
    </section>
  </Layout>
)

export default IndexPage
