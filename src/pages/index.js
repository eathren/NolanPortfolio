import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Tree from "../images/tree.svg"
// components
import Gallery from "../components/Gallery"
import BlogCard from "../components/BlogCard"
import ContactBar from "../components/ContactBar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="page page-1 flex-center text-center" id="#landing-page">
      <div className="image-wrapper">
        <img className="tree" src={Tree} />
      </div>
      <h1 className="header-shadow" style={{marginTop:'10px'}}>
       
       Nolan Braman
      </h1>
      <h2 className="header-shadow">
        
        Building Better Software Through Itterative Design
      </h2>
    </div>
    {/* <div className="page page-2 flex-center" id="#about">
      <div className="container">
        <Link to="/about">
          <h1 className="text-center text-light text-underline"> About </h1>
        </Link>
        <div className="row center-text">
          <div className="double-column">
            <h2 className="text-light header-shadow">Who I am:</h2>
            <div className="card border-primary text-left">
              <p>
                I'm a clever individual who enjoys writing functional,
                non-clever code. <i>Perhaps that means I'm not that clever?</i>
                <br />
                <br /> In any case, when I'm not working, I'm either writing,
                building hobby projects, learning a new skill, on the slopes, or
                spending time with my wife Nancy and our two cats in Concord,
                NH.
                <br /> <br />
                You can find more about me at my
                <a href="https://www.linkedin.com/in/nolanbraman/">
                  {" "}
                  LinkedIn
                </a>{" "}
                or a smattering of my non-proprietary work at{" "}
                <a href="https://www.github.com/eathren">Github.</a>
              </p>
            </div>
          </div>
          <div className="double-column">
            <h2 className="text-light header-shadow">What I Do:</h2>
            <div className="card border-primary text-left">
              <p>
                I'm a <b>software developer</b>. What this sounds like is that
                I'm a wizard with a keyboard, building apps with one hand and
                parting the binary red sea with the other... Neat, huh?
                <br /> <br /> What this really means is that I am a carpenter of
                the IT world, but instead of buildings and homes, I build or
                maintain webapps for large and small businesses so they don't
                fall over or catch on fire with everyone inside...
                <i> This is likely why I dislike clever code.</i>
              </p>
            </div>
          </div>
          <div className="double-column">
            <h2 className="text-light header-shadow">How I Do It:</h2>
            <div className="card border-primary text-left">
              <p>
                <b>Frontend:</b>
                <br />
                React.js, Gatsby.js, JavaScript
                <br />
                <br />
                <b>Backend:</b>
                <br />
                Django, Node.js <br />
                <br />
                <b>Datalayers and APIs</b>
                <br />
                REST, GraphQL, Django Rest Framework
                <br />
                <br />
                <b> Visuals & UI Frameworks:</b>
                <br />
                Sass, CSS, Material-UI, Semantic-UI
                <br />
                <br />
                <b> Serverless:</b>
                <br />
                AWS Lambda Functions
                <br />
                <br />
                <b>Miscellaneous:</b>
                <br />
                Github - Version control, CI, CD, Agile Methodology, Bash,
                Zenhub, Commandline
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    <div className="page page-3 flex-center">
      <Gallery />
    </div>
    <div className="page page-4 flex-center">
      <Link to="/blog">
        <h1> Blog </h1>
      </Link>
      <BlogCard />
    </div>

    <div className="page page-5 flex-center">
      <ContactBar />
    </div>
  </Layout>
)

export default IndexPage
