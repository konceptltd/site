import React from 'react';

import Layout from '../components/Layout';
import ImageSlider from '../components/ImageSlider'
import "../assets/sass/banner.scss"

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic11 from '../assets/images/pic11.jpg';
import config from '../../config';


const IndexPage = () => (
  <Layout fullMenu>
    <section id="banner">
      <section className="image-overlay">
        <ImageSlider/>
      </section>
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style5 special">
      <div className="inner">
        <header className="major">
          <h2>
            Building sustainable solutions that take your business to the next level.  
          </h2>
          <p>
            Koncept Co Ltd is a culmination of 10 years of global experience. It is built on the 
            premise that clients need integrated solutions that help their business foster. We operate
            in Sudan and the rest of Africa through our partners. Our expertees covers a wide range of
            diverse industries.
          </p>
          <a href="/About">
            Learn More
          </a>
        </header>
      </div>
    </section>

    <section id="two" className="wrapper alt style4">
      <section className="spotlight">
        <div className="image">
          <img src={pic11} alt="" />
        </div>
        <div className="content">
          <h2>
            <a href='/Engineering'>Comperhensive engineering solutions</a>
          </h2>
          <p>
          Leading innovative construction group with the ability to successfully setup and execute complex projects
          Koncept will develop key strategic alliances and sponsorships with major key
          clients and consultants that help bring credibility and strong relations for future projects.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            <a href='/Software'>Software that is built on the highest standards</a>
          </h2>
          <p>
            Crafting software solutions following the industry's best practices. We rely on
            automating our processes to ensure the ease of implementing changes, and deploying them safely.
            Our team has immense experience in the deployment of solutions that can scale horizontally, and
            perform highly under the load.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic7} alt="" />
        </div>
        <div className="content">
          <h2>
            <a href='/Analytics'>Intelligent analytics to empower your business</a>
          </h2>
          <p>
            Our highly skilled, scientific team has a solid experience in
            building and deploying data pipelines, implementing techniques
            that utilize the data and offer informative dashboards that guide
            business decisions. In addition to that, we have the expertees of
            building predictive models, that can replace the human intervention
            in some services.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic6} alt="" />
        </div>
        <div className="content">
          <h2>
            <a href='/Agriculture'>Precision agriculture solutions</a>
          </h2>
          <p>
            Technology and its applications have evolved. Agriculture is no foreign to
            those advances. At Koncept, we combine GIS data with specialised sophisticated
            sensors to help farmers monitor their farms, enhance on the quality of their
            products and fight off pests. 
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style5 special">
      <div className="inner">
        <header className="major">
          <h2>
            <a href='/Team'>Our Team</a>
          </h2>
          <p>
            Our diverse team consist of a wide range of skills varying from mathematicians, software engineers,
            civil, architecture and survey engineers, medical and agriculture experts.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Core Values</h3>
            <p>
            At Koncept we believe in creating a sustainable company culture where collaboration and honesty
            between us and our clients are key. At concept we encourage and guide each other in delivering
            and accomplishing our vision.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Vision</h3>
            <p>
            Our vision is to build highly collaborative teams that can power excellence. 
            Our values are the core of our company and we prioritise courage, reliability, 
            integrity, value our people and innovation.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2><a href='Why'>Love to hear from you</a></h2>
          <p>
            Our team is happy to hear from you and understand your
            business needs, and get to know more about what we do.
          </p>
          <a href="/Contact" className="button fit">
              Reach out
            </a>
        </header>
      </div>
    </section>
  </Layout>
  );

export default IndexPage;
