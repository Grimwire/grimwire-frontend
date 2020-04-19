import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import {Row, Col} from 'reactstrap'

import {CSSTransition, SwitchTransition} from 'react-transition-group'
import OurMission from './our_mission'

class Pages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {

        return <SwitchTransition><CSSTransition key={`mission`}
          in={true} timeout={350} classNames="whole-page" unmountOnExit appear enter exit><div key="mission" style={{minHeight:"100vh"}}>
          
          <h1 style={{paddingTop:'40px'}}>About Us</h1>

          <p>My name is Jordan Hubbard, I'm the Creator & Lead Developer of GrimWire. I've been practicing Magick & Spirituality
            for more than the past 10 years.
          </p>
          <p>The reason I started this was purely personal- I wanted to create a resource that I could use myself to keep track of all
            of my own information.
          </p>
          <p>But, as I asked for opinions and if people would use it, there was a resounding, "YES!"</p>

          <div className="divider"></div>
          <div className='pageDarkSection'>
          <h4>Here are the problems that led me to create GrimWire:</h4>
          <p>#1.<br />There's <b>plenty of information</b>, but <b>none</b> is organized or compiled in an <b>easily accesible form</b>.<br /> Most only have their own perspective, not how those things 
            may be seen in different lights.
          </p>
          <p>#2.<br />There's <b>no useful magick or spiritual apps</b>. Right now this largely functions as an interactive 
            encylopedia.<br />Soon you will be able to take your own notes on pages that only you will be able to see. <br />
            You'll be able
            to create entries & notes that aren't related either- effectively making
            it an online book of shadows. <br /> We have plans for a spell-maker and astrology clock as well.
          </p>
          <p>#3.<br />There's <b>no community</b> for electic solitary praticioners (people by themselves who combine other paths to make <b>their own unique path</b>). 
            GrimWire may seem like a lot- but a key belief is that all Magick, Spirituality, Witchcraft, Science, and Religion is interlinked.
            We try to offer as little dogma as possible (one being "you can't break the laws of physics", another is, "don't be a jerk")
            <a href="http://localhost:3000/pages/magick-statement">You Can See The Full List of Rules Here</a>
          </p>
          </div>
          <div className="reverse-divider"></div>
      <div style={{padding:'25px 10px'}}>
          <h3>Similiarly, Our Goals:</h3>
          <p>#1. Create a safe haven for newbies to the topic, to learn free from dogma, to grow.</p>
          <p>#2. Combine our strengths & talents as we grow to reach more & more people with better presented information.</p>
          <p>#3. Create a community for everybody, regardless of past, present, or future, to come together and ponder life's biggest questions, and act them accordingly.</p>

          </div>
          <div className="divider"></div>
          <div className='pageDarkSection'>
              <h3>What to Do Next?</h3>
              <Link className="nice-button" to="/users/register">Create An Account</Link>
              <p class="button-text">Support our mission by creating your account & joining the mailing list.</p>
              <Link className="nice-button" to="/search/portal-of-chaos">Enter the Portal of Chaos</Link>
              <p class="button-text">Jump to a page of random articles.</p>
              <Link className="nice-button" to="/pages/hall-of-initiates">Visit the Hall of Initiates</Link>
              <p class="button-text">For beginners who don't know where to start.</p>

          </div>
          <div className="reverse-divider"></div>

      </div></CSSTransition></SwitchTransition>


    }
}

export default Pages
