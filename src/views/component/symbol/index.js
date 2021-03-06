import React from 'react';

import Symbols from '../../../components/symbol/index/index';
import { Link } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

class Symbol extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showSymbolForm: false
		};
	}

	toggleSymbolForm = () => {
		this.setState({ showSymbolForm: !this.state.showSymbolForm });
	};

	render() {
		const curr_user = localStorage.user ? JSON.parse(localStorage.user) : false;
		return (
			<SwitchTransition>
				<CSSTransition
					key={`symbols`}
					in={true}
					timeout={350}
					classNames="whole-page"
					unmountOnExit
					appear
					enter
					exit
				>
					<div className="">
						<div key="symbols" className="pageCTA">
							<div className="container">
								<h4>Search through our database of topics & objects</h4>
								<h1>Symbols</h1>
								<h5>In one way or another, everything is a symbol, everything has meaning</h5>
								<h3>Our "Symbols" include the items that make up all of our Collections list.</h3>

								{curr_user ? <Link to="/symbols/new">+ Create New Symbol</Link> : ''}
							</div>
						</div>
						<div className="divider" />
						<div className="pageDarkSection">
							<Symbols />
						</div>
						<div className="reverse-divider" />
					</div>
				</CSSTransition>
			</SwitchTransition>
		);
	}
}

export default Symbol;
