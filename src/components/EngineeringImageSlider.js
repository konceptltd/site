import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import BackgroundSlider from 'gatsby-image-background-slider'

const EngineeringImageSlider = ( ) => (
  <>
    <BackgroundSlider 
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile (filter: {sourceInstanceName: {eq: "engineering"}}){
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
      <div className="credit">Andrew Bowyer</div>
      <div className="credit">Callum Wale</div>
      <div className="credit">Ej Yao</div>
      <div className="credit">Josue Isai Ramos Figueroa</div>
    </BackgroundSlider>
  </>
)

export default EngineeringImageSlider;