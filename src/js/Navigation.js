// Components
import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Social icons
import Instagram from '../img/Navigation/instagram.png';
import Github from '../img/Navigation/github.png';
import Linkedin from '../img/Navigation/linkedin.png';

// Menu icon
import Menu from '../img/menu.png';

// Styles
import '../css/Navigation.css';

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="Navigation w-100">
        <Navbar collapseOnSelect expand="lg" className="Bar m-0 p-0">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="Menu m-auto">
            <img src={Menu} alt="Menu icon"/>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="Internal mr-auto align-items-center">
              <Nav.Link as={Link} to="/" onClick={() => this.props.setIsHome(true)}>
                <p>bn</p>
              </Nav.Link>
              <Nav.Link as={Link} to="ux" onClick={() => this.props.setIsHome(false)}>
                <p>ux</p>
              </Nav.Link>
              <Nav.Link as={Link} to="fonts" onClick={() => this.props.setIsHome(false)}>
                <p>fonts</p>
              </Nav.Link>
              <Nav.Link as={Link} to="characters" onClick={() => this.props.setIsHome(false)}>
                <p>characters</p>
              </Nav.Link>
            </Nav>
            <Nav className="External ml-auto align-items-center">
              <a href="https://www.instagram.com/thebndesigns/" target="_blank" rel="noopener noreferrer">
                <img id="ig" src={Instagram} alt="Instagram icon"/>
              </a>
              <a href="https://github.com/brennannewton" target="_blank" rel="noopener noreferrer">
                <img id="gh" src={Github} alt="GitHub icon"/>
              </a>
              <a href="https://www.linkedin.com/in/brennan-newton-075238145/" target="_blank" rel="noopener noreferrer">
                <img id="li" src={Linkedin} alt="LinkedIn icon"/>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}