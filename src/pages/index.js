import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from "../components/welcome"
import PostPreview from "../components/post-preview"
import { graphql } from "gatsby"
import { Highlight } from "../components/highlight"
import { GreyBackground } from "../components/grey-background"
import MailinglistSubscribeForm from "../components/mailinglist-subscribe-form"

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
      <GreyBackground>
        <section>
          <h2>
            <Highlight>Recent Posts.</Highlight>
          </h2>

          {data.allMdx.edges.map(edge => (
            <PostPreview key={edge.node.frontmatter.path} post={edge.node} />
          ))}
        </section>
      </GreyBackground>
    )}
    <section>
      <MailinglistSubscribeForm />
    </section>
  </Layout>
)

export default IndexPage
