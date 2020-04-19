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

          <div className="divider"></div>
          <h4>Don't Know How To Start?</h4>
          <p>-Find something that resonates with you and research</p>
          <p>-Just start doing- meditation, spellwork, anything</p>
          <p>-Start cheap- you don't need books or items or anything else.</p>
          <p>-Start skeptical, nothing requires faith, and no matter how hard you try, you can't break the laws of reality and physics. Figure out how to bend them.</p>

          <div className="reverse-divider"></div>
          <h3>Our Videos For Beginners</h3>
          <hr />
          <h4>Religious But Don't Know How To Feel?</h4>
          <h5>"G"od vs. Deities- How God ties into Worshipping Other Deities</h5>
          <iframe width="100%" src="https://www.youtube.com/embed/dq-FRvc9nNw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <a href="https://www.youtube.com/watch?v=dq-FRvc9nNw" target="_blank">Click Here To Open in YouTube</a>

          <hr />
          <h4>Interested in the Witchcraft Side?</h4>
          <h5>Introduction to Witchcraft YouTube Playlist</h5>
          <iframe width="100%" src="https://www.youtube.com/embed/videoseries?list=PLqAY4uQc52KLADO4l84pQUFhmXZIYLUZr" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <a href="https://www.youtube.com/playlist?list=PLqAY4uQc52KLADO4l84pQUFhmXZIYLUZr" target="_blank">Click Here To Open in YouTube</a>
          <br />
          <hr />
          <h3>This page will expand as our content expands, this will be the place to find all the beginner links.</h3>



        </div>
        <div className="reverse-divider"></div>
        <br /><br />
        <Link className="nice-button" to="/users/register">Create An Account</Link>
        <p class="button-text">To get updates, show your support, & join the mailing list.</p>
        <Link className="nice-button" to="/search/portal-of-chaos">Enter the Portal of Chaos</Link>
        <p class="button-text">Jump to a page of random articles.</p>

        <Link className="nice-button" to="/pages/shop">See Our Shop</Link>
        <p class="button-text">You don't *need* to buy anthing to start, but our stuff is pretty and it's helps us out.</p>

      </div></CSSTransition></SwitchTransition>
    );

  }
}

export default Pages
