import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Tree from "../images/tree.svg"
const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <div className=" page page-about">
      <div className="row">
        <div className="column"></div>
        <div className="column">
          <p>
            I'm a Full-Stack Developer for Open Anesthetics living in Concord,
            NH with my wife Nancy and our two cats. I love rapid-protyping
            projects, combining clean UI/UX with a reliable data layer so the
            app works the way it should, every time. You can find more about me
            at my Linkedin or a smattering of my non-proprietary work at Github.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
