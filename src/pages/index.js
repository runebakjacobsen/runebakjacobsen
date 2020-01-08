import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from "../components/welcome"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Welcome />
    <p>
      Welcome to my website, eventually there will be some blog posts and other
      fun stuff here. Stay tuned!
    </p>
  </Layout>
)

export default IndexPage
