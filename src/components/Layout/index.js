/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import Header from "../Header"
import "./layout.css"
import "../../styles/main.scss"

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
    <React.StrictMode>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div>
        <main className="page">{children}</main>
        <footer>
          {/* © {new Date().getFullYear()}, Built with
          {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        </footer>
      </div>
    </React.StrictMode>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
