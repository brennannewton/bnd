// Components
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Viewer from 'react-viewer';

// Images
import THECREEPBEATERS from '../img/Fonts_/TheCreepBeaters.jpg';
import emo from '../img/Fonts_/fontConcepts.png';
import bnDLogo from '../img/Fonts_/bnd_logo.png';

// Styles
import '../css/Fonts.css';

export default class Graphics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      THECREEPBEATERS_visible: false,
      emo_visible: false,
      bnDLogo_visible: false,
    }
  }
  render() {
    return (
      <div className="Fonts w-100">
        <Row className="Container">
          <Col className="Text">
            <h1>back to the future</h1>
            <p>My fonts bring a vintage feel to the modern digital space. I find inspiration in old
              video games, anime, and pop culture. As technology rapidly advances, I want to remind
              us to appreciate how far we've come.
            </p>
          </Col>
          <Col className="Fonts-Digital">
            <div className="bnDLogo_viewer">
              <button onClick={() => {this.setState({bnDLogo_visible: true});}}>
                <img src={bnDLogo} alt=""/>
              </button>
              <Viewer
                visible={this.state.bnDLogo_visible}
                onClose={() => {this.setState({bnDLogo_visible: false});}}
                images={[{src: bnDLogo}]}
                noImgDetails={true}
              />
            </div>
            <div className="emo_viewer">
              <button onClick={() => {this.setState({emo_visible: true});}}>
                <img src={emo} alt=""/>
              </button>
              <Viewer
                visible={this.state.emo_visible}
                onClose={() => {this.setState({emo_visible: false});}}
                images={[{src: emo}]}
                noImgDetails={true}
              />
            </div>
          </Col>
          <Col className="Fonts-Analog">
            <div className="THECREEPBEATERS_viewer">
              <button onClick={() => {this.setState({THECREEPBEATERS_visible: true});}}>
                <img src={THECREEPBEATERS} alt=""/>
              </button>
              <Viewer
                visible={this.state.THECREEPBEATERS_visible}
                onClose={() => {this.setState({THECREEPBEATERS_visible: false});}}
                images={[{src: THECREEPBEATERS}]}
                noImgDetails={true}
              />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
