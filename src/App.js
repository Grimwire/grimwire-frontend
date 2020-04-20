import React from 'react';
import './App.scss';


import Helmet from 'react-helmet'
import Header from './pageComponents/header';
import Body from './pageComponents/body';
import Footer from './pageComponents/footer';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {},
			token: null
		};
	}

	logout = () => {
		localStorage.setItem('user', null);
		localStorage.setItem('token', null);
		this.setState({ user: {}, token: null });
		window.location.replace('/?loggedIn=false');
	};

	login = (user, token) => {
		localStorage.setItem('user', JSON.stringify(user));
		localStorage.setItem('token', token);
		this.setState({ user, token });
		this.forceUpdate();
	};

	render() {
		return (
			<div className="App main-bg">
				<div className="main-screen">
					<Helmet>
                		<title>{`GrimWire- The Online Grimoire & Encyclodpedia`}</title>
						<meta property="og:image" content={require('../../img/metaimage.png')} />
						<meta property="og:title" content="GrimWire- The Online Grimoire & Encyclodpedia" />
						<meta property="og:description" content="1000's of items- from crystals to herbs to deities- free online grimoire & encyclopedia for witchy folks." />
        			</Helmet>
					<Header auth={{ curr_user: this.state, logout: this.logout, login: this.login }} />
					<Body auth={{ curr_user: this.state, logout: this.logout, login: this.login }} />
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
