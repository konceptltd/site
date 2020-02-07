import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => <Layout fullMenu>
	<article id="main">
		<header>
			<h2>Contact Us</h2>
		</header>
		<section className="wrapper style5">
			<div className="inner">
				<ul className="contact-list">
					<li>
						<i class="fas fa-map-marker-alt fa-2x contact-list-item"></i>
						San Francisco, CA 94126, USA
					</li>

					<li>
						<i class="fas fa-phone mt-4 fa-2x contact-list-item"></i>
						+ 01 234 567 89
					</li>

					<li>
						<i class="fas fa-envelope mt-4 fa-2x contact-list-item"></i>
						info@konceptltd.com
					</li>
				</ul>
			</div>
		</section>
	</article>

</Layout>;

export default IndexPage;
