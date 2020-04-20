import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home(props) {
	
	return (
		<div>
			<div className="midCTA">
				<div>
					<img height="100px" alt="logo" src={require('../../img/logo.png')} />

					<h3 className="d-block d-lg-none">The Online Magick, Witchraft, and Spirituality Grimoire</h3>
					<h1 className="d-none d-lg-block">The Online Magick, Witchraft,<br /> and Spirituality Grimoire</h1>

					<form action="/search" method="get">
						<span className='fas fa-search'></span>&nbsp;
						<input style={{ padding: '5px', color: 'black', width: '80%', borderRadius: "10px" }} type='text' placeholder="Search the whole site..." name="searchTerm"></input>
					</form>



					<h5>Try:</h5>
					<p>What's your astrological sign?</p>
					<p>What's your favorite crystal?</p>
					<p>What deity are you curious about?</p>
					<p>What kind of spell do you want to make?</p>
				</div>
			</div>

			<div className="divider">
				<div className="divider-block-text"><h3>OR :</h3></div>
			</div>

			<div className="indexBar pageDarkSection">
				<br className="d-none d-lg-block" />
				<br className="d-none d-lg-block" />
				<br className="d-none d-lg-block" />
				<Row>
					<Col xs={12} lg={4}>
						<Link className="nice-button" to="/search/portal-of-chaos">Enter the Portal of Chaos</Link>
						<p class="button-text">Jump to a page of random articles.</p>
					</Col>
					<Col xs={12} lg={4}>
						<Link className="nice-button" to="/pages/hall-of-initiates">Visit the Hall of Initiates</Link>
						<p class="button-text">For beginners who don't know where to start.</p>
					</Col>
					<Col xs={12} lg={4}>
						<Link className="nice-button" to="/users/register">Create An Account</Link>
						<p class="button-text">Support our mission by creating your account & joining the mailing list.</p>
					</Col>
					<Col xs={12} lg={6}>
						<Link className="nice-button" to="/pages/mission">Our History</Link>
						<p class="button-text">How we came about & who makes up our team.</p>
					</Col>
					<Col xs={12} lg={6}>
						<Link className="nice-button" to="/resources">External Resources</Link>
						<p class="button-text">Our allies & other external resources.</p>
					</Col>
				</Row>
			</div>

			<div className="reverse-divider" />
		</div>
	);
}

export default Home;
