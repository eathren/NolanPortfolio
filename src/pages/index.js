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
      <h1 className="header-shadow"> Nolan Braman</h1>
      <h1 className="header-shadow"> Softare Developer</h1>
    </div>
    <div className="page page-2 flex-center" id="#about">
      <div className="row center-text">
        <div className="double-column">
          <h2 className="text-light">Who I am:</h2>
          <div className="card">
            <p>
              I'm a clever individual who enjoys writing functional, non-clever
              code. (So perhaps I'm not that clever?)
            </p>
          </div>
        </div>
        <div className="double-column">
          <h2 className="text-light">What I Do:</h2>
          <div className="card">
            <p>
              I'm a carpenter of the IT world, but instead of buildings and
              homes, I build webapps for large and small businesses.
            </p>
          </div>
        </div>
        <div className="double-column">
          <h2 className="text-light">How I Do It:</h2>
          <div className="card">
            JavaScript-React-Gatsby & Python-Django-DRF
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
