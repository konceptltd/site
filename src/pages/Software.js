import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import SoftwareImageSlider from '../components/SoftwareImageSlider'


const IndexPage = () => (
  <Layout fullMenu>

    <section className="image-overlay">
      <SoftwareImageSlider/>
    </section>

    <section id="banner">
    <div className="inner">
      <h2>Building software</h2>
      <p>Following the industry's best practices</p>
    </div>
    <Scroll type="id" element="one">
        <a href="#one" className="more">
        </a>
      </Scroll>
  </section>

    <article id="one">
      <section className="wrapper style5">
        <div className="inner">
          <h3>Shaping your business following agile methodologies</h3>
          <p>
            At Koncept Co Ltd we are aware that empowering organizations to adapt and respond
            effectively to a rapidly changing world takes a mixture of technical excellence, exceptional analytical
            abilities, and clear communication. Thus, our firm hires some of the most talented youth to ensure you
            receive the best service. We know that every client is unique, and we strive to deliver an individual,
            innovative and affordable proposal every time and to follow it through with an outstanding delivery
            which is both on time and within budget.
          </p>

          <p>
            As a newly founded company, our founders have over 10 years of collective experience with international exposure
            in the fields of software development, data engineering, artificial intelligence, scientific research, and
            organizational agile transformation. Our expertise covers a wide range of services including non-profit
            organizations, entertainment industry, and the financial sector. The list of the clients our founders have
            worked for includes, but not limited to, UNICEF, Standard Bank, Multichoice, and Nedbank (South Africa).
          </p>

          <hr />
          <h3>Enterprise Resource Planning Application</h3>
          <p>
            Having to deal with the complexity of your business at all different levels is a tedious and time consuming
            job. At Koncept we take away that complexity by customizing and deploying solutions that are tailored for
            your business needs.
          </p>

          <p>
            The advantage of partnering with us is that, we take care of all the work that is not
            at the core to your business, however, it is considered critical to your success. For instance, maintaining
            software might necessarily by part of your business, but it is a key component for the operations. Koncept
            does the hard work of ensuring, that your systems are up and running, and the standards are looked after.
          </p>

          <hr />
          <h3>Systems That Scale</h3>
          <p>
            One of the most diffcult challenges in the world of software engineering is building systems that can scale
            according the customer's needs. Our team is specialised in building and deploying microservices that can scale
            at the specified layer of your application. We optimize the code to achieve high performance, reliability, security
            and 
          </p>


        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
