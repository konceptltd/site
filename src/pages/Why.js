import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Why Koncept</h2>
        <p>World class products</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Global Experience</h3>
          <p>
            Koncept teams consist of seasoned individuals with years of experience locally
            and internationally. We strive to deliver the best quality following industry
            standards. Our solutions are offered as an end to end package that caters for
            the wide needs of our clients.
          </p>

          <p>
            Unlike traditional teams, our teams usually consist of a broad spectrum of skills
            built to meet the needs of our clients, and understand their requirements.
            For each project we seek to hire domain experts to integrate their knowledge in the
            solution, and ensure the highest qualities. 
          </p>

          <hr />

          <h4>Unique Management Style</h4>
          <p>
            Koncept teams value communication and consider it as a critical key for the success.
            We employ the latest technologies to ensure that everyone on
            the project is informed in an honest and transparent manner.
          </p>

          <hr />

          <h4>Business Parteners</h4>
          <p>
            We seek to engage with businesses and collaborate to identify their problems,
            apply our minds to offer the best solution possible to the problem. We consider
            ourselves as partners to your business rather than outsiders.
          </p>

          <p>
            At Koncept we believe that the best products are built when people collaborate
            in healthy, transparent and agile environment. We always ensure that our teams
            are integrating with the different units of your business to achieve a high standard
            products.
          </p>

          <hr />

          <h4>After Service Support</h4>
          <p>
            Upon delivering the final solution, we do not simply walk away. We continue to monitor
            and offer support to ensure the solution in hand is the best possible solution. We pride
            our brand as the brand of success.
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
