import React from 'react';

import Layout from '../components/Layout';

import pic8 from '../assets/images/pic08.jpg';
import pic9 from '../assets/images/pic09.jpg';
import pic10 from '../assets/images/pic10.jpg';
import pic11 from '../assets/images/pic11.jpg';
import pic12 from '../assets/images/pic12.jpg';
import pic13 from '../assets/images/pic13.jpg';
import pic14 from '../assets/images/pic14.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>End to End Engineering Solutions</h2>
        <p>World class standards</p>
      </header>
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

          <h4>Projects Execution strategy</h4>
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
                <div className="col-4"><span className="image fit"><img src={pic8} alt="" /></span></div>
                <div className="col-4"><span className="image fit"><img src={pic9} alt="" /></span></div>
                <div className="col-4"><span className="image fit"><img src={pic10} alt="" /></span></div>
                <div className="col-4"><span className="image fit"><img src={pic11} alt="" /></span></div>
                <div className="col-4"><span className="image fit"><img src={pic12} alt="" /></span></div>
                <div className="col-4"><span className="image fit"><img src={pic13} alt="" /></span></div>
                <div className="col-4"><span className="image fit"><img src={pic14} alt="" /></span></div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
