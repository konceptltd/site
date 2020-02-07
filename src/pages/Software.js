import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Building software</h2>
        <p>Following the industry's best practices</p>
      </header>
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
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
