import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import BackgroundSlider from 'gatsby-image-background-slider'

const AgricultureImageSlider = ( ) => (
  <>
    <BackgroundSlider 
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile (filter: {sourceInstanceName: {eq: "agriculture"}}){
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
      <div className="credit">Naseem Buras</div>
      <div className="credit">Francesco Gallarotti</div>
    </BackgroundSlider>
  </>
)

export default AgricultureImageSlider;