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
      initDelay={2}
      transition={4}
      duration={8}

    //   // pass down standard element props
    //   style={{
    //     transform: "rotate(-2deg) scale(.9)",
    //   }}           
    > 
    </BackgroundSlider>
  </>
)

export default ImageSlider;