import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Tree from "../images/tree.svg"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="page-home">
      <div className="image-wrapper-home">
        <img className="image-home-tree" src={Tree} />
        <div className="image-wrapper-home-card">
          <div className=".image-wrapper-home-card-text">
            <h1>Nolan Braman</h1>
            <h1> Software Developer</h1>
            <Link className="page-home-link" to="/about">
              About
            </Link>
            <Link className="page-home-link" to="/portfolio">
              Portfolio
            </Link>
            <Link className="page-home-link" to="/pricing">
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
