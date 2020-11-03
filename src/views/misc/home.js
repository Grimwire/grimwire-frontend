import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home(props) {

	return (
		<div>
			<div className="midCTA">
				<div>
					<h3 style={{ margin: 0 }}>GrimWire's</h3>
					<h1 style={{ margin: 0 }}>Online Grimoire</h1>
					<form action="/search" method="get" style={{ width: "100%" }}>
						<br />
						<input style={{ padding: '5px', color: 'black', width: '100%', borderRadius: "10px" }} type='text' placeholder="Search our database" name="searchTerm"></input>
						<br /><br />
						<button type="submit">Search <span className='fas fa-search'></span></button><br /><br />
					</form>

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
						<Link className="nice-button" to="/search">Search Ideas</Link>
					</Col>
					<Col xs={12} lg={4}>
						<Link className="nice-button" to="/search/portal-of-chaos">Random Articles</Link>
					</Col>
					<Col xs={12} lg={4}>
						<Link className="nice-button" to="/search/help">Help & FAQs</Link>
					</Col>
				</Row>
			</div>

			<div className="reverse-divider" />
		</div>
	);
}

export default Home;
