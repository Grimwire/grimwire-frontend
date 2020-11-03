import React from 'react'
import Menu from './menu/topMenu.js'
import { NavLink } from 'react-router-dom'
import { Container, Row, Col, NavItem, Dropdown } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'


import { CSSTransition } from 'react-transition-group'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      showDropdown: false
    }

    document.addEventListener('click', (e) => {
      const mobileToggleClick = e.target.className.indexOf('hmenu-mobile-toggle') >= 0
      const dropdownToggleClick = e.target.className.indexOf('hmenu-dropdown-toggle') >= 0
      if (!dropdownToggleClick && !mobileToggleClick) {
        this.setState({ showMenu: false, showDropdown: false })
      }
    })
  }

  toggleMenu = (e) => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  toggleDropdown = (value) => {
    this.setState({showDropdown: value})
  }




  render = () => {

    const user = localStorage.user ? JSON.parse(localStorage.user) : null

    return <div className={`header ${this.state.showDropdown ? 'headerFill' : ""}`}>

        <Row style={{width:'100%', margin: 0}}>
          <Col xs={12} lg={2} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
            <NavLink to="/" style={{background:'none', margin:0, padding:0}}><img alt="logo" height="50px" src={require('../img/logo.png')} /></NavLink>
            </div>
            {/*
            <div className="social-media d-lg-none">
              <a href="https://youtube.com/grimwire" target="_blank"><span className="fab fa-youtube"></span></a>
              <a href="https://facebook.com/grimwire" target="_blank"><span className="fab fa-facebook"></span> </a>
              <a href="https://instagram.com/grimwirex" target="_blank"><span className="fab fa-instagram"></span> </a>
              <a href="https://etsy.com/shop/grimwirewitchyjewels" target="_blank"><span className="fab fa-etsy"></span></a>
            </div>*/}
            <div>
            <span style={{color:'white', fontSize:'24px'}} className='fas fa-bars hmenu-mobile-toggle d-inline d-lg-none' onClick={this.toggleMenu}></span>
            <div className="hmenu-mobile-toggle d-lg-none"></div>
            </div>
          </Col>       

          <Col xs={12} lg={8} className='menu-right' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <Menu auth={this.props.auth} showMenu={this.state.showMenu} toggleDropdown={this.toggleDropdown} />
          </Col>

          <Col xs={12} lg={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/*
          <div className="social-media d-none d-lg-block">
              <a href="https://youtube.com/grimwire" target="_blank"><span className="fab fa-youtube"></span></a>
              <a href="https://facebook.com/grimwire" target="_blank"><span className="fab fa-facebook"></span> </a>
              <a href="https://instagram.com/grimwirex" target="_blank"><span className="fab fa-instagram"></span> </a>
              <a href="https://etsy.com/shop/grimwirewitchyjewels" target="_blank"><span className="fab fa-etsy"></span></a>
          </div>*/}
            </Col>   
        </Row>


    </div>
  }

}

export default withRouter(Header);
//
