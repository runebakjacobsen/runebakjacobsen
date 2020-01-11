/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import GlobalStyle from "../global"
import Header from "./header"
import Footer from "./footer"
import { useStaticQuery, graphql } from "gatsby"
import { library, config } from "@fortawesome/fontawesome-svg-core"
import {
  fab,
  faGithubSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"
import {
  faEnvelopeSquare,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons"

library.add(
  fab,
  faGithubSquare,
  faTwitterSquare,
  faEnvelopeSquare,
  faArrowRight
)
config.autoAddCss = false

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <GlobalStyle />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
