import React from 'react';

import AllRandom from '../../../components/all/index/random'
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
    <div key='kinds' className="midCTA">
        <div className="container">
          <h2>The Portal<br />Of Chaos</h2>
          <h6>A few random pages from our database.</h6>
          <a href="" className="nice-button" to="/search/portal-of-chaos">Re-Enter The Portal</a> 
        </div>
      </div>
      <div className="divider"></div>
      <div className="pageDarkSection">
      <AllRandom />
      </div>
      <div className="reverse-divider"></div>

    </div></CSSTransition></SwitchTransition>
  );

  }
}

export default Kind;
