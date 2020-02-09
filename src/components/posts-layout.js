import React from "react"
import Layout from "./layout"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "../components/code-block"
import { Highlight } from "./highlight"

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
        <section>
          <article>
            <h1>
              <Highlight>{pageContext.frontmatter.title}</Highlight>
            </h1>
            <p>
              <time datetime={pageContext.frontmatter.date}></time>
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
