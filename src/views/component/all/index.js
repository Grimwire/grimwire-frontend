import React from 'react';

import Kinds from '../../../components/all/index/index'
import FormInsert from '../../../components/forms/handler'
import {defaultKind} from '../../../db/defaultObjects'
import {Link} from 'react-router-dom'
import {CSSTransition, SwitchTransition} from 'react-transition-group'

class Kind extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
    }
  }


  render() {
    const curr_user = localStorage.user ?  JSON.parse(localStorage.user) : false
  return (<SwitchTransition><CSSTransition key={`kinds`}
    in={true} timeout={350} classNames="whole-page" unmountOnExit appear enter exit><div className="">
    <div key='kinds' className="lowCTA">
        <div className="container">
				  <Link className="" to="/search/portal-of-chaos">Or... Try Some Random Pages Instead?</Link>
          <h2>Search GrimWire</h2>
					<p>What's your astrological sign?</p>
					<p>What's your favorite crystal?</p>
					<p>What deity are you curious about?</p>
					<p>What kind of spell do you want to make?</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="pageDarkSection">
      <Kinds />
      </div>
      <div className="reverse-divider"></div>

    </div></CSSTransition></SwitchTransition>
  );

  }
}

export default Kind;
