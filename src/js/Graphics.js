// Components
import React from 'react';
import Viewer from 'react-viewer';

// Images
import B from '../img/Graphics/B.png';
import TheCreepBeaters from '../img/Graphics/TheCreepBeaters.jpg';
import emoFonts from '../img/Graphics/fontConcepts.png';
import Bed from '../img/Graphics/Bed.png';
import bndLogo from '../img/Graphics/bnd_logo.png';
import Marx from '../img/Graphics/MarxRedFlag.gif';
import Glitch from '../img/Graphics/Glitch.gif';
import BOC from '../img/Graphics/B_OC.png';
import MadsOC from '../img/Graphics/Mads_OC.png';
import CalOC from '../img/Graphics/Cal_OC.png';
import LanaOC from '../img/Graphics/Lana_OC.png';
import KateOC from '../img/Graphics/Kate_OC.png';
import MaggieOC from '../img/Graphics/Maggie_OC.png';

// Styles
import '../css/Graphics.css';

export default class Graphics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      B_visible: false,
      TheCreepBeaters_visible: false,
      emoFonts_visible: false,
      bndLogo_visible: false,
      Bed_visible: false,
      Marx_visible: false,
      BOC_visible: false,
      Glitch_visible: false,
    }
  }
  render() {
    return (
      <div className="Graphics d-flex flex-column justify-content-center">
        <div id="outer-box" className="d-flex justify-content-center align-self-center mb-4">
          <div id="inner-box" className="d-flex justify-content-center p-3 pt-4">
            <h1>Graphics</h1>
          </div>
        </div>
        <div className="d-flex flex-row align-self-center">
          <div className="d-flex flex-column">
            <div className="B_viewer">
              <button onClick={() => {this.setState({B_visible: true});}}>
                <img src={B} alt="An animated character wearing a cotton candy
                  sweater, matching sweatpants, and fishnets underneath"
                />
              </button>
              <Viewer
                visible={this.state.B_visible}
                onClose={() => {this.setState({B_visible: false});}}
                images={[{src: B}]}
                noImgDetails={true}
              />
            </div>
            <div className="TheCreepBeaters_viewer">
              <button onClick={() => {this.setState({TheCreepBeaters_visible: true});}}>
                <img src={TheCreepBeaters} alt="A stamp and block print that read
                  THE CREEP BEATERS in stencil lettering"
                />
              </button>
              <Viewer
                visible={this.state.TheCreepBeaters_visible}
                onClose={() => {this.setState({TheCreepBeaters_visible: false});}}
                images={[{src: TheCreepBeaters}]}
                noImgDetails={true}
              />
            </div>
            <div className="emoFonts_viewer">
              <button onClick={() => {this.setState({emoFonts_visible: true});}}>
                <img src={emoFonts} alt="A series of horror font concepts that
                  read e.mo"
                />
              </button>
              <Viewer
                visible={this.state.emoFonts_visible}
                onClose={() => {this.setState({emoFonts_visible: false});}}
                images={[{src: emoFonts}]}
                noImgDetails={true}
              />
            </div>
            <div className="bndLogo_viewer">
              <button onClick={() => {this.setState({bndLogo_visible: true});}}>
                <img src={bndLogo} alt="A logo that reads brennan newton DESIGNS
                  with a vintage video game style"
                />
              </button>
              <Viewer
                visible={this.state.bndLogo_visible}
                onClose={() => {this.setState({bndLogo_visible: false});}}
                images={[{src: bndLogo}]}
                noImgDetails={true}
              />
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className="Bed_viewer">
              <button onClick={() => {this.setState({Bed_visible: true});}}>
                <img src={Bed} alt="Two animated women eating popcorn in bed"/>
              </button>
              <Viewer
                visible={this.state.Bed_visible}
                onClose={() => {this.setState({Bed_visible: false});}}
                images={[{src: Bed}]}
                noImgDetails={true}
              />
            </div>
            <div className="Marx_viewer">
              <button onClick={() => {this.setState({Marx_visible: true});}}>
                <img src={Marx} alt="A gif of Karl Marx waving a red flag in front
                  of a bookshelf"
                />
              </button>
              <Viewer
                visible={this.state.Marx_visible}
                onClose={() => {this.setState({Marx_visible: false});}}
                images={[{src: Marx}]}
                noImgDetails={true}
              />
            </div>
            <div className="BOC_viewer">
              <button onClick={() => {this.setState({BOC_visible: true});}}>
                <img src={BOC} alt="An animated character with ice on their
                  shoulder stares susupiciouly to the side. Their name is B."
                />
              </button>
              <Viewer
                visible={this.state.BOC_visible}
                onClose={() => {this.setState({BOC_visible: false});}}
                images={[{src: BOC},
                  {src: MadsOC},
                  {src: CalOC},
                  {src: LanaOC},
                  {src: KateOC},
                  {src: MaggieOC}
                ]}
                noImgDetails={true}
              />
            </div>
            <div className="Glitch_viewer">
              <button onClick={() => {this.setState({Glitch_visible: true});}}>
                <img src={Glitch} alt="A gif of me glitching"/>
              </button>
              <Viewer
                visible={this.state.Glitch_visible}
                onClose={() => {this.setState({Glitch_visible: false});}}
                images={[{src: Glitch}]}
                noImgDetails={true}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
