// Components
import React from 'react';
import Viewer from 'react-viewer';

// Images
import HCCHome from '../img/Prototypes/HCCHome.png';
import ELECTRAProfile from '../img/Prototypes/ELECTRAProfile.png';
import bndesignHome from '../img/Prototypes/bndesignHome.png';
import bndesignIllustrations from '../img/Prototypes/bndesignIllustrations.png';
import bndesignUX from '../img/Prototypes/bndesignUX.png';
import bndesignContact from '../img/Prototypes/bndesignContact.png';

// Styles
import '../css/Prototypes.css';

export default class Prototypes extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        HCCHome_visible: false,
        ELECTRAProfile_visible: false,
        bndesignHome_visible: false,
        bndesignIllustrations_visible: false,
        bndesignUX_visible: false,
        bndesignContact_visible: false,
      }
    }
    render() {
      return (
        <div className="Prototypes d-flex flex-column justify-content-center">
          <div id="outer-box" className="d-flex justify-content-center align-self-center mt-5 mb-4">
            <div id="inner-box" className="d-flex justify-content-center p-3 pt-4">
              <h1>Prototypes</h1>
            </div>
          </div>
          <div className="d-flex flex-row align-self-center">
          <div className="d-flex flex-column">
            <div className="HCCHome_viewer">
              <button onClick={() => {this.setState({HCCHome_visible: true});}}>
                <img src={HCCHome} alt=""/>
              </button>
              <Viewer
                visible={this.state.HCCHome_visible}
                onClose={() => {this.setState({HCCHome_visible: false});}}
                images={[{src: HCCHome}]}
                noImgDetails={true}
              />
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className="ELECTRAProfile_viewer">
              <button onClick={() => {this.setState({ELECTRAProfile_visible: true});}}>
                <img src={ELECTRAProfile} alt=""/>
              </button>
              <Viewer
                visible={this.state.ELECTRAProfile_visible}
                onClose={() => {this.setState({ELECTRAProfile_visible: false});}}
                images={[{src: ELECTRAProfile}]}
                noImgDetails={true}
              />
            </div>
            <div className="bndesignHome_viewer">
              <button onClick={() => {this.setState({bndesignHome_visible: true});}}>
                <img src={bndesignHome} alt=""/>
              </button>
              <Viewer
                visible={this.state.bndesignHome_visible}
                onClose={() => {this.setState({bndesignHome_visible: false});}}
                images={[{src: bndesignHome}]}
                noImgDetails={true}
              />
            </div>
            <div className="bndesignIllustrations_viewer">
              <button onClick={() => {this.setState({bndesignIllustrations_visible: true});}}>
                <img src={bndesignIllustrations} alt=""/>
              </button>
              <Viewer
                visible={this.state.bndesignIllustrations_visible}
                onClose={() => {this.setState({bndesignIllustrations_visible: false});}}
                images={[{src: bndesignIllustrations}]}
                noImgDetails={true}
              />
            </div>
            <div className="bndesignUX_viewer">
              <button onClick={() => {this.setState({bndesignUX_visible: true});}}>
                <img src={bndesignUX} alt=""/>
              </button>
              <Viewer
                visible={this.state.bndesignUX_visible}
                onClose={() => {this.setState({bndesignUX_visible: false});}}
                images={[{src: bndesignUX}]}
                noImgDetails={true}
              />
            </div>
            <div className="bndesignContact_viewer">
              <button onClick={() => {this.setState({bndesignContact_visible: true});}}>
                <img src={bndesignContact} alt=""/>
              </button>
              <Viewer
                visible={this.state.bndesignContact_visible}
                onClose={() => {this.setState({bndesignContact_visible: false});}}
                images={[{src: bndesignContact}]}
                noImgDetails={true}
              />
            </div>
          </div>
        </div>
        </div>
      )
    }
}