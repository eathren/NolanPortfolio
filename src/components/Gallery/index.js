import React from "react"
import { Link } from "gatsby"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"
import TestImage from "../../components/image"
import Image from "../../components/image"

import Grid from "@material-ui/core/Grid"

const items = [
  {
    title: "IARS360 ",
    client: "SelfStudyPlus",
    description:
      " A subscription  CME website, IARS360 is an new and improved learning and technical resource website for an better experience in Continued Medical Education for healthcare professionals. ",
    // img: [iars2],
    // iars2,
    img: <TestImage />,
    webstack:
      "Webstack: Gatsby.js, React.js, GraphQL,   Netlify, Material-UI, and Algolia.",
    link: "",
  },
  {
    title: "General Contractor Website",
    client: " American Dream \n Construction, LLC",
    description:
      "One of the largest employers in Alaska, ADC wanted a fresh face for their construction and renovation company, in a static Gatsby format to make updating job postings and recent work easy to navigate and update.",
    // img: [adc2],
    img: <TestImage />,
    webstack: "Gatsby.js, React.js, Netlify, Material-UI",
    link: "https://adcalaska.com",
  },
  {
    title: "Program Director Admin",
    client: "SelfStudyPlus",
    description:
      "A hybrid webapp combining the best of static and dynamic use cases for Program Directors to monitor their students and anesthesiology medical students.",
    img: "",
    img: <TestImage />,
    webstack: "Gatsby.js, React.js, Netlify, Material-UI, GraphQL, MongoDB",
    link: "",
  },
  {
    title: "Medical Keywords Study WebApp",
    client: "Open Anesthetics",
    description:
      "Built with Gatsby and GraphQL, the new Keywords app contains Open Anesthetic's massive list of medical study keywords for their Continuing Medical Education(CME) content, with over 6000 full page entries, sortable by category, year, and difficulty,   ",
    // img: [keywords3, keywords4],
    img: <TestImage />,
    webstack:
      "Webstack: Gatsby.js, React.js, GraphQL, MongoDB/MongoStitch, Node.js,  Netlify, Material-UI, and Algolia.",
    link: "https://keywords.selfstudy.app/",
  },
  {
    title: "Selards",
    client: "",
    description:
      "An online jobboard for remote development & design professionals of all stripes and colors.",
    img: <TestImage />,
    webstack:
      "React, Django Rest Framework, Netlify, Heroku, REST API, and ECMAScript6",
    link: "https://www.selards.com",
  },
  //   { title: "", client: "", description: "", img: "", webstack: "", link: "" },
]

const Gallery = props => {
  return (
    <>
      <Link to="/portolfio">
        <h1 className=" text-light header-shadow text-underline">My Work</h1>
      </Link>
      <div className="gallery">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={6}
        >
          {" "}
          {items.map(item => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div className="gallery-item">
                <div className="gallery-image"> {item.img}</div>
                <div className="gallery-header">
                  <h1> {item.title}</h1>
                </div>
                <div className="gallery-header-sub">{item.client}</div>
                <div className="gallery-description">{item.description}</div>
                <div className="gallery-webstack">
                  {item.webstack ? (
                    <b>
                      Webstack: <br />
                    </b>
                  ) : (
                    <> </>
                  )}
                  {item.webstack}
                  <div className="gallery-link">
                    {item.link ? (
                      <a href={item.link} className="normalize">
                        <button className="button-gallery">VIEW SITE</button>
                      </a>
                    ) : (
                      <div style={{ color: "grey" }}>
                        {" "}
                        This site is behind an auth layer and is not available
                        for viewing
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}

export default Gallery
