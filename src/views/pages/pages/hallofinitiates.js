import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'

import OurMission from './our_mission'
import {CSSTransition, SwitchTransition} from 'react-transition-group'

class Pages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
      return (<SwitchTransition><CSSTransition key={`kinds`}
      in={true} timeout={350} classNames="whole-page" unmountOnExit appear enter exit><div className="">
      <div key='kinds' className="lowCTA">
          <div className="container">
            <h4>Welcome To</h4>
            <h2>The Hall of Initiates</h2>
            
          </div>
        </div>
        <div className="divider"></div>
        <div className="pageDarkSection">
        
          <h3>New to The Craft?</h3>
        </div>
        <div className="reverse-divider"></div>
  
      </div></CSSTransition></SwitchTransition>
    );

    }
}

export default Pages
