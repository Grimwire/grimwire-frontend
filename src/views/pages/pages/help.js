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
        return <SwitchTransition><CSSTransition key={`help`}
          in={true} timeout={350} classNames="whole-page" unmountOnExit appear enter exit>
              <div className="">
              
        <div key="help"  className="lowCTA">

          <div className="container">
            <h4></h4>
            <h2>Frequently Asked Questions</h2>
            <p>In doubt? Ask us <a href="#">here</a>!</p>

          </div>
        </div>
        <div className="divider"></div>
        <div className="pageDarkSection">


            <h3>Wait, what exactly is this?</h3>
            <p>This is an online Grimoire, containing 1000's of magickal, witchy, spiritual, and religious items and articles.</p>
            
            <h3>Why did you make this?</h3> 
            <p>It was made because there are no good </p>
            
            <h3>Who are you?</h3>
            <p>We are GrimWire, founded by Jordan Hubbard, a magick practitioner & spiritual philosopher. He also has a background
                in technology & web development, and intially created this as a tool for personal use, but has decided to polish and
                release it under GrimWire.</p>
            
            <h3>Is there anyone I can contact with questions I have?</h3>
            <p>Sure thing! You can reach us <a href="#">here</a>.</p> 
            
            <h3>Are you looking for help?</h3> 
            <p>Yes! We are looking for many different sorts of volunteers. Please go <a href="#">here</a>!</p>
            
            <h3>Isn't xxx cultural appropriation?</h3>
            <p>We take providing accurate & respectful information seriously, but's possible. 
                If you see something that is inaccurate, harmful, or is misinformation, 
                please contact us <a href="#">here</a> to get it resolved immediately.</p>
            
            <h3>Is this information wrong?</h3>
            <p>There's certainly a chance either way. We aren't perfect, and have a huge database that has been contributed to by
                many people. If you see something you think is an error, please contact us <a href="#">here.</a>.</p>
        </div>
        </div>
        </CSSTransition></SwitchTransition>

    }
}

export default Pages
