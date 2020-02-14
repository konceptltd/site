import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>About Koncept</h2>
        <p>Integrated solutions under one roof</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <p>
            Koncept Co Ltd as an idea has consistently evolved and grown over the last 10 years, 
            to eventually be founded in Sudan in 2020. Our goal is to become a trusted partner for 
            the execution of complex and iconic projects, building an end to end solution with the highest
            qualities grown on African soil by African minds.  
          </p>

          <p>
            The name Koncept is derived from the word "concept" since our principles are built on the modern
            concepts of management and product development, which is our unique selling point. We apply some
            of the newly developed concepts in all aspects of engineering work that we do from construction,
            agriculture to software development as well as advanced analytics and artificial intelligence.
          </p>

          <p>
            <a href='/Team'>Koncept team</a> has extensive experience in complex projects across diverse industries including 
            construction and city palnning, software development, advanced analytics, business intelligence, 
            enterprice resource planning, medical services, education, and agriculture.
          </p>

          <p>
            At kocept, we partner with businesses to identify the problems and offer the most suitable solution 
            that fits the client's needs by employing and integrating the latest and the most sophistacted technologies.
            We pride ourselves as technology leaders and futuristis with unique after-sales client-care including our
            guarantees, staff-training, onsite and offsite support.
          </p>
          <hr />
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
