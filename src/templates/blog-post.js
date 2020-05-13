import React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import HomeIcon from "@material-ui/icons/Home"
import LocalLibrary from "@material-ui/icons/LocalLibrary"
// Mui

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className="page-blog">
          <IconButton component={Link} to="/">
            <HomeIcon></HomeIcon>
          </IconButton>
          <IconButton component={Link} to="/blog">
            <LocalLibrary></LocalLibrary>
          </IconButton>
          <br />
          <div>
            <>
              <h2 style={{ marginBottom: "15px" }}>{post.frontmatter.title}</h2>
              <p>{post.frontmatter.date}</p>
              <hr />
              <div dangerouslySetInnerHTML={{ __html: post.html }} />

              <hr />
              <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>

                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item xs={4}>
                  <Button
                    component={Link}
                    to="/blog"
                    color="secondary"
                    variant="contained"
                    style={{ color: "black", float: "left" }}
                  >
                    {" "}
                    Back to Posts{" "}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <div style={{ textAlign: "center" }}>
                    © 2018 - {new Date().getFullYear()}, Nolan Braman
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    component={Link}
                    to="/contact"
                    color="secondary"
                    variant="contained"
                    style={{
                      color: "black",

                      float: "right",
                    }}
                  >
                    {" "}
                    Message me!
                  </Button>
                </Grid>
              </Grid>
            </>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
