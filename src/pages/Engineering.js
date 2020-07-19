import React from 'react';
import Gallery from 'react-grid-gallery';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import EngineeringImageSlider from '../components/EngineeringImageSlider'


import pic8 from '../assets/images/pic08.jpg';
import pic9 from '../assets/images/pic09.jpg';
import pic10 from '../assets/images/pic10.jpg';
import pic12 from '../assets/images/pic12.jpg';
import pic13 from '../assets/images/pic13.jpg';

const Images =
[
  {
    src: pic8,
    thumbnail: pic8,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: pic9,
    thumbnail: pic9,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: pic10,
    thumbnail: pic10,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: pic12,
    thumbnail: pic12,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: pic13,
    thumbnail: pic13,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Boats (Jeshu John - designerspics.com)"
  },
]

const EngineeringPage = () => (
  <Layout fullMenu>

    <section className="image-overlay">
      <EngineeringImageSlider/>
    </section>

  <section id="banner">
    <div className="inner">
      <h2>End to End Engineering Solutions</h2>
      <p>World class standards</p>
    </div>
    <Scroll type="id" element="one">
        <a href="#one" className="more">
        </a>
      </Scroll>
  </section>

    <article id="one">
      <section className="wrapper style5">
        <div className="inner">
          <h4>A culture of innovation</h4>
          <p>
          Provide the highest quality service to our clients by combining highly-skilled
          team members with our proven methodology, Consistently improve our deliverables
          to our clients and add value to your organization.

          Koncept’s focus on fostering a culture of innovation is key to our business and
          enhances solid collaboration and constant efficiency amongst our projects and
          support services.
          </p>

          <h4>Project Execution strategy</h4>
          <p>
          We make sure our project’s goals and objectives have been clearly and defined in each
          stage of our execution steps. Skilled leadership lead to dynamic project team along
          with inspiring and influencing project management team and build a positive company
          culture. We’re using effective ways and project management tools to keep tracking and
          analyzing data & metrics to manage our progress and performance
          </p>

          <hr/>
          <section>
          <h4>Gallery</h4>

            <div className="box alt">
              <div className="row gtr-50 gtr-uniform">
                <Gallery images={Images}/>
              </div>
            </div>
          </section>
        </div>
      </section>
    </article>
  </Layout>
)
export default EngineeringPage;