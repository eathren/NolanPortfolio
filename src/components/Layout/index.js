/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import CssBaseline from "@material-ui/core/CssBaseline"
import { MuiThemeProvider } from "@material-ui/core/styles"
import theme from "../../theme/theme"
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
    // <React.StrictMode>
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div>
          <main style={{ maxWidth: "100%" }} className="layout-root">
            {children}
          </main>
          <footer>
            {/* © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> */}
          </footer>
        </div>
      </MuiThemeProvider>
    </>
    // </React.StrictMode>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
