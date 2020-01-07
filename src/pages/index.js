import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Memoji from "../components/memoji"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi everyone!</h1>
    <div>
      <Memoji />
    </div>
    <p>
      Welcome to my website, eventually there will be some blog posts and other
      fun stuff here. Stay tuned!
    </p>
  </Layout>
)

export default IndexPage
