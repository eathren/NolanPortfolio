import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Tree from "../images/tree.svg"

// mui
import { makeStyles } from "@material-ui/styles"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Card from "@material-ui/core/Card"
import IconButton from "@material-ui/core/IconButton"

import Grid from "@material-ui/core/Grid"
// icons
import GitHubIcon from "@material-ui/icons/GitHub"
import MailIcon from "@material-ui/icons/Mail"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TrendingUpIcon from "@material-ui/icons/TrendingUp"
import theme from "../theme/theme.js"

import { Link as SmoothLink, animateScroll as scroll } from "react-scroll"
// components
import Gallery from "../components/Gallery"
import BlogCard from "../components/BlogCard"
import ContactBar from "../components/ContactBar"
import Particles from "../components/Particles"

const useStyles = makeStyles({
  root: {
    scrollBehavior: "smooth",
    flexGrow: 1,
  },
  card: {
    padding: "20px",
    margin: `8px`,
    border: "6px solid #1976d2",
    borderRadius: "20px",
    zIndex: "15",
  },
  cardContent: {
    margin: "8px",
  },
  buttonGroup: {
    border: "3px solid #0d193b",
    borderRadius: "10px",
    boxShadow: "0px 1px 2px grey",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    zIndex: "15",
  },
  skillsMarginBottom: {
    marginBottom: "0px",
    paddingBottom: "0px",
  },
  skillsMarginTop: {
    marginTop: "0px",
    paddingBottom: "0px",
    marginBottom: "12px",
  },
})

const IndexPage = () => {
  const classes = useStyles()
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <div class="page-home">
          <div class="container">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={12} md={6}>
                <h1 className="text-margin-none">Nolan Braman</h1>
                <h3 className="text-margin-none"> Software Engineer </h3>
                <p className="text-margin-none">
                  Building better software for two years and counting{" "}
                </p>
                <IconButton
                  className="icon-button"
                  href="https://github.com/eathren"
                >
                  <GitHubIcon className="icon-color" />
                </IconButton>
                <IconButton
                  className="icon-button"
                  href="https://www.linkedin.com/in/nolanbraman/"
                >
                  <LinkedInIcon className="icon-color" />
                </IconButton>
                <IconButton
                  className="icon-button"
                  component={Link}
                  to="/contact"
                >
                  <MailIcon className="icon-color" />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <BlogCard
                  style={{ overflow: "auto", maxHeight: "100vh" }}
                ></BlogCard>
              </Grid>
              {/* <div className="page page-5 flex-center" id="contact">
                  <ContactBar />
                  </div> */}
            </Grid>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
