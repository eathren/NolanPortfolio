import React from "react"

import GalleryCard from "../GalleryCard"

const items = [
  {
    title: "Medical Keywords Study WebApp",
    client: "Open Anesthetics",
    description:
      "Open Anesthetics wanted to modernize their webstack, and that in part included building a new Keywords learning webapp, the final product is a combination of the best of static and dynamic React content. Built with Gatsby (and rehydrated to React in the client's browser) and GraphQL, it contains their massive list of medical study keywords for their Continuing Medical Education(CME) content. \n \nWith over 6000 full page entries, sortable by category, year, and difficulty, their new webapp is clean-cut. And with Algolia search implemented, it couldn't be easier for their users to find whatever they are looking for.  ",
    // img: [keywords3, keywords4],
    webstack:
      "Webstack: Gatsby.js, React.js, GraphQL, MongoDB/MongoStitch, Node.js, Netlify, Material-UI, and Algolia.",
    link: "https://keywords.selfstudy.app/",
  },
  {
    title: "IARS360 ",
    client: "SelfStudy",
    description:
      " A subscription  CME website, IARS360 is an in-progress project for an updated experience for Continued Medical Education for healthcare professionals. ",
    // img: [iars2],
    // iars2,
    webstack:
      "Webstack: Gatsby.js, React.js, GraphQL,   Netlify, Material-UI, and Algolia.",
    link: "",
  },
  {
    title: "Contractor Website",
    client: " American Dream Construction LLC",
    description:
      "One of the largest employers in Alaska, ADC wanted a fresh face for their construction and renovation company, in a static Gatsby format to make updating job postings and recent work easy to navigate and update.",
    // img: [adc2],
    webstack: "Gatsby.js, React.js, Netlify, Material-UI",
    link: "https://adcalaska.com",
  },
  {
    title: "Program Director Admin",
    client: " SelfStudyPlus",
    description: "",
    img: "",
    webstack: "",
    link: "",
  },
  // { title: "", client: "", description: "", img: "", webstack: "", link: "" },
]

const Gallery = props => {
  return (
    <>
      <h1 className=" text-light header-shadow">My Work</h1>
      <div className="gallery">
        <div className="row">
          {items.map(item => (
            <div className="gallery-item double-column">
              <div className="gallery-image"></div>
              <div className="gallery-header">
                <h1> {item.title}</h1>
                <div className="gallery-header-sub">{item.client}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Gallery
