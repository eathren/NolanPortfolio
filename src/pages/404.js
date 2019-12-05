import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import Container from "@material-ui/core/Container"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <Layout>
      <div
        className="page-404 "
        style={{
          height: "95vh ",
          color: "",
          paddingTop: "35vh",
          textAlign: "center",
        }}
      >
        <SEO title="404: Not found" />
        <Container maxWidth="md" className="container">
          <h1
            style={{ marginBottom: "0", paddingBottom: "0", color: "#eeeeee" }}
          >
            404: NOT FOUND
          </h1>
          <p style={{ marginTop: "0", color: "#eeeeee" }}>
            (You went somewhere weird.){" "}
          </p>

          <Button component={Link} to="/" variant="outlined" color="primary">
            Want to go to homepage and try again?
          </Button>
        </Container>
      </div>
    </Layout>
  </>
)

export default NotFoundPage
