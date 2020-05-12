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
          limit: 5
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
        <div class="blog-card-container">
          <div style={{}} className="blog-card ">
            {/* <Link to="/blog">
        <h3 className="blog-card-title flex-center"> Latest Posts</h3>
        <hr />
        </Link> */}

            {data.allMarkdownRemark.edges.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div key={node.fields.slug}>
                  <Link className="link-normalize" to={node.fields.slug}>
                    <h2 className="blog-card-title">{title}</h2>
                  </Link>
                  <small className="blog-card-date">
                    {node.frontmatter.date} - {node.timeToRead} minutes
                  </small>
                  <p
                    style={{ marginBottom: "0" }}
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />

                  {/* <Link className="" to={node.fields.slug}>
                    <button className="button-blog">Read More</button>
                  </Link> */}

                  {/* <hr
                    style={{
                      textAlign: "center",
                      margin: "auto",
                      width: "95%",
                    }}
                  ></hr> */}
                  <br />
                </div>
              )
            })}
          </div>
        </div>
      </segment>
    )}
  />
)
