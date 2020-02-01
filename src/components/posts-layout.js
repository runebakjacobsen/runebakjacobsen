import React from "react"
import Layout from "./layout"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "../components/code-block"

const components = {
  pre: CodeBlock,
}

const PostsLayout = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <Layout>
        <section>
          <article>{children}</article>
        </section>
      </Layout>
    </MDXProvider>
  )
}

PostsLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PostsLayout
