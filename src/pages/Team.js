import React from 'react';

import Layout from '../components/Layout';

import faris from '../assets/images/faris.jpg';
import pic5 from '../assets/images/pic05.jpg';
const IndexPage = () => <Layout fullMenu>
	<article id="main">
		<header>
			<h2>Koncept Team</h2>
			<p>A unique and carefully selected set of skills</p>
		</header>
		<section className="wrapper style5">
			<div className="inner">
				<section>
					<p>
						<span className="image left">
							<img src={faris} alt="" width="250" height="141"/>
						</span>
						A cofounder, a PhD holder in theoretical physics and a published author.
						Faris has more than 10 years of experience in international companies. He is
						an expert in large-scale, low latency systems, causal inference, and utilizing
						artificial intelligence to solve business problems.
					</p>
				</section>
			</div>
		</section>

		<section className="wrapper style5">
			<div className="inner">
				<section>
					<p>
						<span className="image left">
							<img src={pic5} alt="" />
						</span>
						A cofounder, the general manager and a civil engineer with more than 10 years of 
						experience in international companies. He worked in the fields of software engineering
              			as well as data science
					</p>
				</section>
			</div>
		</section>
	</article>

</Layout>;

export default IndexPage;
