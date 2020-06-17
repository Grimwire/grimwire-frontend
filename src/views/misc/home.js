import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home(props) {
	
	return (
		<div>
			<div className="midCTA">
				<div>
					<h1 className="">GrimWire</h1>
					<p className="">The Online Magick, Witchraft, and Spirituality Community & Grimoire</p>
	{/*<img height="100px" alt="logo" src={require('../../img/logo.png')} />*/}

<br /><br />
					<form action="/search" method="get">
						<input style={{ padding: '5px', color: 'black', width: '80%', borderRadius: "10px" }} type='text' placeholder="Search the whole site" name="searchTerm"></input>
						<button type="submit">Search It! <span className='fas fa-search'></span></button><br /><br />
						<a style={{padding:'4px'}} href="/search">Click here for search ideas <span className='fas fa-lightbulb'></span></a>
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
						<Link className="nice-button" to="/search/portal-of-chaos">The Portal of Chaos
						<div style={{fontSize:"14px"}}> > See random articles</div></Link>
					</Col>
					<Col xs={12} lg={4}>
						<Link className="nice-button" to="/pages/hall-of-initiates">The Hall of Initiates
						<div style={{fontSize:"14px"}}> > For complete beginners</div></Link>
					</Col>
					<Col xs={12} lg={6}>
						<Link className="nice-button" to="/pages/mission">About Us
						<div style={{fontSize:"14px"}}> > What we are trying to do</div></Link>
					</Col>
					<Col xs={12} lg={4}>
						<Link className="nice-button" to="/users/register">Help Us With Your Support
						<div style={{fontSize:"14px"}}> > Sign up for the mailing list & updates</div></Link>
					</Col>
				</Row>
			</div>

			<div className="reverse-divider" />
		</div>
	);
}

export default Home;
