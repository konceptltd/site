import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import AgricultureImageSlider from '../components/AgricultureImageSlider'


const IndexPage = () => (
  <Layout fullMenu>

    <section className="image-overlay">
        <AgricultureImageSlider/>
      </section>

      <section id="banner">
      <div className="inner">
        <h2>Precision Agriculture</h2>
        <p>Applying GIS and Artificial Intelligence Methodologies in Agriculture</p>
      </div>
      <Scroll type="id" element="one">
          <a href="#one" className="more">
          </a>
        </Scroll>
    </section>

    <article id="one">
      <section className="wrapper style5">
        <div className="inner">
          <h3>Agricultural Technologies</h3>
          <p>
            We offer end to end agricultural solutions that aim at enhancing the
            quality of your products and increase the yield. At koncept sustainability
            is a first class citizen, hence, in all our projects we ensure that whatever
            we do, the solution should remain sustainable.
          </p>

          <p>
            We integrate technologies offered by the internet of things (IoT) and link
            them to cloud services to collect the data and use them to build models that
            help farm owners with the forecast of their farms, and use that to drive their
            marketing strategy.
          </p>

          <hr />

          <h4>Automated Systems</h4>
          <p>
            Our engineering team designs and implements custom irrigation systems that are best
            suited for your farm. From large scale to small scale, we build computerized irrigation
            systems that integrates with a network of remote sensors that controls the flow of water
            as well as fertilizers in an automated manner.
          </p>

          <p>
            In addition to that we build systems that offer real time monitoring of the entire farm
            regardless of the scale of the farm at hand. Provide insights on the current state of the
            the project.
          </p>

          <hr />

        <h4>High Quality Fertilizers</h4>
          <p>
            We partnered with some of the world's top producers of fertilizers in europe. At koncept
            we ensure that the necessary fertilizers are delivered according to the standard and
            the integration with the system is done by our world class team of engineers and experts.
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
