import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Tree from "../images/tree.svg"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="page page-1 flex-center" id="#landing-page">
      <div className="image-wrapper">
        <img src={Tree} />
      </div>
      <h1> Nolan Braman</h1>
      <h1> Softare Developer</h1>
    </div>
    <div className="page page-2" id="#about">
      <p> </p>
    </div>
  </Layout>
)

export default IndexPage