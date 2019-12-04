import React, { Component } from "react"
import { Link, graphql, StaticQuery } from "gatsby"

// mui

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 3
        ) {
          edges {
            node {
              fields {
                slug
              }
              timeToRead
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
              }
            }
          }
        }
      }
    `}
    render={data => (
      <segment title="Blog Bar">
        <div style={{}} className="card">
          <Link to="/blog" className="normalize">
            <h3 className="center header-border"> Latest Posts</h3>
          </Link>
          {/* <hr
              style={{
                textAlign: "center",
                margin: "auto",
                width: "10%",
                marginTop: "0",
                marginBottom: "5vh",
              }}
            ></hr> */}

          {data.allMarkdownRemark.edges.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <Link className="normalize" to={node.fields.slug}>
                  <h2>{title}</h2>
                </Link>
                <small style={{ color: "grey" }}>
                  {node.frontmatter.date} - {node.timeToRead} minutes
                </small>
                <p
                  style={{ marginBottom: "0" }}
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />{" "}
                <br />
                <Link className="normalize" to={node.fields.slug}>
                  {/* <Button size="small" variant="outlined" color="secondary">
                    Read More
                  </Button> */}
                </Link>
                <br />
                <br />
                <hr
                  style={{
                    textAlign: "center",
                    margin: "auto",
                    width: "95%",
                  }}
                ></hr>
                <br />
              </div>
            )
          })}
        </div>
      </segment>
    )}
  />
)
