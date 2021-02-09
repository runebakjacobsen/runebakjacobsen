import React from "react"
import Layout from "./layout"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "../components/code-block"
import SEO from "./seo"

const components = {
  pre: CodeBlock,
}

const PostsLayout = ({ pageContext, children }) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  const dateObject = new Date(pageContext.frontmatter.date)

  return (
    <MDXProvider components={components}>
      <Layout>
        <SEO
          description={pageContext.frontmatter.metadesc}
          title={pageContext.frontmatter.metatitle}
        />
        <section>
          <article>
            <h1>{pageContext.frontmatter.title}</h1>
            <p>
              <time dateTime={pageContext.frontmatter.date}></time>
              {dateObject.toLocaleDateString("en-US", options)}
            </p>
            {children}
          </article>
        </section>
      </Layout>
    </MDXProvider>
  )
}

PostsLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PostsLayout
