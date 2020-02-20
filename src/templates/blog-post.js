import React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import HomeIcon from "@material-ui/Icons/Home"
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
        <div style={{ position: "absolute", left: "15px", top: "15px" }}>
          <IconButton component={Link} to="/">
            <HomeIcon></HomeIcon>
          </IconButton>
          <IconButton component={Link} to="/blog">
            <LocalLibrary></LocalLibrary>
          </IconButton>
        </div>
        <div className="page-blog">
          <div style={{ padding: "30px" }}>
            <>
              <h2 style={{ marginBottom: "15px" }}>{post.frontmatter.title}</h2>
              <p>{post.frontmatter.date}</p>
              <hr />
              <div dangerouslySetInnerHTML={{ __html: post.html }} />

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
              <div style={{ textAlign: "center", position: "absolute" }}>
                <Button
                  component={Link}
                  to="/blog"
                  color="primary"
                  variant="contained"
                >
                  {" "}
                  Back to Posts{" "}
                </Button>
              </div>
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
