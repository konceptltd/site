import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import BackgroundSlider from 'gatsby-image-background-slider'

const ImageSlider = ( ) => (
  <>
    <BackgroundSlider 
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
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
      <div className="credit">Gio Bartlett</div>
      <div className="credit">Jason Blackeye</div>
      <div className="credit">Ricardo Gomez Angel</div>
    </BackgroundSlider>
  </>
)

export default ImageSlider;