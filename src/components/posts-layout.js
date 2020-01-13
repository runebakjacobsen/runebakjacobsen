import React from "react"
import Layout from "./layout"
import PropTypes from "prop-types"

const PostsLayout = ({ children }) => {
  return (
    <Layout>
      <section>
        <article>{children}</article>
      </section>
    </Layout>
  )
}

PostsLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PostsLayout
