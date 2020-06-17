import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import OurMission from './our_mission'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

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
          <p>That's why we're here!</p>
          <p>-Find something that resonates with you and just start reading & doing research</p>
          <p>-Just start doing- meditation, spellwork, anything</p>
          <p>-Start cheap- you don't need books or items or anything else.</p>
          <p>-Start skeptical, nothing requires faith, but at least a healthy curiosity.</p>

          <hr />
          <h4>Check out our YouTube Channel:</h4>
          <iframe width="100%" src="https://www.youtube.com/embed/videoseries?list=PLqAY4uQc52KLADO4l84pQUFhmXZIYLUZr" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <a href="https://www.youtube.com/playlist?list=PLqAY4uQc52KLADO4l84pQUFhmXZIYLUZr" target="_blank">Click Here To Open in YouTube</a>
          <br />
          <hr />
          <h3>This page will expand as our content expands, this will be the place to find all the beginner links.</h3>



        </div>
        <div className="reverse-divider"></div>
        <br /><br />
        <Link className="nice-button" to="/search/portal-of-chaos">Enter the Portal of Chaos</Link>
        <p class="button-text">Jump to a page of random articles.</p>

      </div></CSSTransition></SwitchTransition>
    );

  }
}

export default Pages
