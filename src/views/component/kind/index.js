import React from 'react';

import Kinds from '../../../components/kind/index/index'
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
          <h4>Tarot Cards, Astrology Signs, Planetary Energies, Crystals</h4>
          <h1>Lists & Collections</h1>
          <h5>For a starting seeker, there are so many things to memorize and learn.</h5>
          <h5>These are the endless lists on lists of collections.</h5>

                        { curr_user ?  <Link to="/collections/new">+ Create New Collection</Link> : "" }
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
