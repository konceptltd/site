import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import BackgroundSlider from 'gatsby-image-background-slider'

const SoftwareImageSlider = ( ) => (
  <>
    <BackgroundSlider 
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile (filter: {sourceInstanceName: {eq: "software"}}){
            nodes {
              relativePath
              childImageSharp {
                fluid (maxWidth: 4000, quality: 100){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
      initDelay={5}
      transition={4}
      duration={8}
    >
      <div className="credit">Muhannad Ajjan</div>
      <div className="credit">Pakata Goh</div>
      <div className="credit">Nesa by Makers</div>
    </BackgroundSlider>
  </>
)

export default SoftwareImageSlider;