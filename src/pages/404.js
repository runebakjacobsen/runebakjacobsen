import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section>
      <h1>
        <i>Well this is embarrasing...</i>
      </h1>
      <h3>The page you are looking for does not exist.</h3>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </section>
  </Layout>
)

export default NotFoundPage
