// Components
import React from 'react';

// Images
import B from '../img/Graphics/B.png';
import CreepBeaters from '../img/Graphics/TheCreepBeaters.jpg';
import emoFonts from '../img/Graphics/fontConcepts.png';
import Bed from '../img/Graphics/Bed.png';
import Path from '../img/pokemon-path.png';
import bndLogo from '../img/Graphics/bnd_logo.png';
import Marx from '../img/Graphics/MarxRedFlag.gif';
import Glitch from '../img/Graphics/Glitch.gif';
import B_OC from '../img/Graphics/B_OC.png';

// Styles
import '../css/Graphics.css';

export default class Graphics extends React.Component {
  render() {
    return (
      <div className="Graphics d-flex flex-column justify-content-center">
        <div id="outer-box" className="d-flex justify-content-center align-self-center mb-4">
          <div id="inner-box" className="d-flex justify-content-center p-3 pt-4">
            <h1>Graphics</h1>
          </div>
        </div>
        <div id="graphics" className="d-flex flex-row align-self-center">
          <div id="col1" className="d-flex flex-column">
            <img src={B} alt="An animated characted wearing a cotton candy
              sweater, matching sweatpants, and fishnets underneath"
            />
            <img src={CreepBeaters} alt="A stamp and a block print that read
              The Creep Beaters in stencil lettering"
            />
            <img src={emoFonts} alt="A series of horror fonts that read e.mo"/>
            <img src={Bed} alt="Two animated women eating popcorn in bed"/>
          </div>
          <div id="col2" className="d-flex flex-column">
            <img src={Path} alt="A soft dirt road"/>
            <img src={Path} alt="A soft dirt road"/>
            <img src={Path} alt="A soft dirt road"/>
            <img src={Path} alt="A soft dirt road"/>
            <img src={Path} alt="A soft dirt road"/>
          </div>
          <div id="col3" className="d-flex flex-column">
            <img src={bndLogo} alt="A logo that reads brennan newton DESIGNS in
              the style of an old video game"
            />
            <img src={Marx} alt="A gif of Karl Marx waving a red flag in front
              of a bookshelf"
            />
            <img src={Glitch} alt="A gif of me glitching"/>
            <img src={B_OC} alt="An animated character with ice on their
              shoulder stares susupiciouly to the side. Their name is B."
            />
          </div>
        </div>
      </div>
    )
  }
}