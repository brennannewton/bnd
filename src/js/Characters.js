// Components
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Viewer from 'react-viewer';

// Images
import B from '../img/Characters/B_OC.png';
import Mads from '../img/Characters/Mads_OC.png';
import Cal from '../img/Characters/Cal_OC.png';
import Lana from '../img/Characters/Lana_OC.png';
import Kate from '../img/Characters/Kate_OC.png';
import Maggie from '../img/Characters/Maggie_OC.png';
import Bridge from '../img/Characters/Bridge_OC.png';
import Miuna from '../img/Characters/Miuna_OC.png';
import Michalah from '../img/Characters/Michalah_OC.png';
import Poster1 from '../img/Characters/Poster1_Final.png';

// Styles
import '../css/Characters.css'

export default class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            B_visible: false,
            Mads_visible: false,
            Cal_visible: false,
            Lana_visible: false,
            Kate_visible: false,
            Maggie_visible: false,
            Bridge_visible: false,
            Miuna_visible: false,
            Michalah_visible: false,
            Poster1_visible: false,
        }
    }
    render() {
        return (
            <div className="Characters">
                <Row className="Container">
                    <Col md={4} className="Text">
                        <h1>the creep beaters</h1>
                        <p>The Creep Beaters is a concept series depicting a group of friends who
                            protect the Earth. Each one has a unique ability to manipulate nature -
                            whether it's ice, animals, air, fire, electricity, water, plants,
                            sound, or earth.
                        </p>
                    </Col>
                    <Col className="Characters-All">
                        <Row className="Row">
                            <Col className="B_viewer Viewer">
                                <button onClick={() => {this.setState({B_visible: true});}}>
                                    <img src={B} alt=""/>
                                </button>
                                <Viewer
                                    visible={this.state.B_visible}
                                    onClose={() => {this.setState({B_visible: false});}}
                                    images={[
                                        {src: B},
                                        {src: Mads},
                                        {src: Cal},
                                        {src: Lana},
                                        {src: Kate},
                                        {src: Maggie},
                                        {src: Bridge},
                                        {src: Miuna},
                                        {src: Michalah},
                                        {src: Poster1}
                                    ]}
                                    activeIndex={0}
                                    noImgDetails={true}
                                />
                            </Col>
                            <Col className="Mads_viewer Center">
                                <button onClick={() => {this.setState({Mads_visible: true});}}>
                                    <img src={Mads} alt=""/>
                                </button>
                                <Viewer
                                    visible={this.state.Mads_visible}
                                    onClose={() => {this.setState({Mads_visible: false});}}
                                    images={[
                                        {src: B},
                                        {src: Mads},
                                        {src: Cal},
                                        {src: Lana},
                                        {src: Kate},
                                        {src: Maggie},
                                        {src: Bridge},
                                        {src: Miuna},
                                        {src: Michalah},
                                        {src: Poster1}
                                    ]}
                                    activeIndex={1}
                                    noImgDetails={true}
                                />
                            </Col>
                            <Col className="Cal_viewer Viewer">
                                <button onClick={() => {this.setState({Cal_visible: true});}}>
                                    <img src={Cal} alt=""/>
                                </button>
                                <Viewer
                                    visible={this.state.Cal_visible}
                                    onClose={() => {this.setState({Cal_visible: false});}}
                                    images={[
                                        {src: B},
                                        {src: Mads},
                                        {src: Cal},
                                        {src: Lana},
                                        {src: Kate},
                                        {src: Maggie},
                                        {src: Bridge},
                                        {src: Miuna},
                                        {src: Michalah},
                                        {src: Poster1}
                                    ]}
                                    activeIndex={2}
                                    noImgDetails={true}
                                />
                            </Col>
                        </Row>
                        <Row className="Row">
                            <Col className="Lana_viewer Viewer">
                                <button onClick={() => {this.setState({Lana_visible: true});}}>
                                    <img src={Lana} alt=""/>
                                </button>
                                <Viewer
                                    visible={this.state.Lana_visible}
                                    onClose={() => {this.setState({Lana_visible: false});}}
                                    images={[
                                        {src: B},
                                        {src: Mads},
                                        {src: Cal},
                                        {src: Lana},
                                        {src: Kate},
                                        {src: Maggie},
                                        {src: Bridge},
                                        {src: Miuna},
                                        {src: Michalah},
                                        {src: Poster1}
                                    ]}
                                    activeIndex={3}
                                    noImgDetails={true}
                                />
                            </Col>
                            <Col className="Kate_viewer Center">
                                <button onClick={() => {this.setState({Kate_visible: true});}}>
                                    <img src={Kate} alt=""/>
                                </button>
                                <Viewer
                                    visible={this.state.Kate_visible}
                                    onClose={() => {this.setState({Kate_visible: false});}}
                                    images={[
                                        {src: B},
                                        {src: Mads},
                                        {src: Cal},
                                        {src: Lana},
                                        {src: Kate},
                                        {src: Maggie},
                                        {src: Bridge},
                                        {src: Miuna},
                                        {src: Michalah},
                                        {src: Poster1}
                                    ]}
                                    activeIndex={4}
                                    noImgDetails={true}
                                />
                            </Col>
                            <Col className="Maggie_viewer Viewer">
                                <button onClick={() => {this.setState({Maggie_visible: true});}}>
                                    <img src={Maggie} alt=""/>
                                </button>
                                <Viewer
                                    visible={this.state.Maggie_visible}
                                    onClose={() => {this.setState({Maggie_visible: false});}}
                                    images={[
                                        {src: B},
                                        {src: Mads},
                                        {src: Cal},
                                        {src: Lana},
                                        {src: Kate},
                                        {src: Maggie},
                                        {src: Bridge},
                                        {src: Miuna},
                                        {src: Michalah},
                                        {src: Poster1}
                                    ]}
                                    activeIndex={5}
                                    noImgDetails={true}
                                />
                            </Col>
                        </Row>
                        <Row className="Row">
                            <Col className="Bridge_viewer Viewer">
                                <button onClick={() => {this.setState({Bridge_visible: true});}}>
                                    <img src={Bridge} alt=""/>
                                </button>
                                <Viewer
                                    visible={this.state.Bridge_visible}
                                    onClose={() => {this.setState({Bridge_visible: false});}}
                                    images={[
                                        {src: B},
                                        {src: Mads},
                                        {src: Cal},
                                        {src: Lana},
                                        {src: Kate},
                                        {src: Maggie},
                                        {src: Bridge},
                                        {src: Miuna},
                                        {src: Michalah},
                                        {src: Poster1}
                                    ]}
                                    activeIndex={6}
                                    noImgDetails={true}
                                />
                            </Col>
                            <Col className="Miuna_viewer Center">
                                <button onClick={() => {this.setState({Miuna_visible: true});}}>
                                    <img src={Miuna} alt=""/>
                                </button>
                                <Viewer
                                    visible={this.state.Miuna_visible}
                                    onClose={() => {this.setState({Miuna_visible: false});}}
                                    images={[
                                        {src: B},
                                        {src: Mads},
                                        {src: Cal},
                                        {src: Lana},
                                        {src: Kate},
                                        {src: Maggie},
                                        {src: Bridge},
                                        {src: Miuna},
                                        {src: Michalah},
                                        {src: Poster1}
                                    ]}
                                    activeIndex={7}
                                    noImgDetails={true}
                                />
                            </Col>
                            <Col className="Michalah_viewer Viewer">
                                <button onClick={() => {this.setState({Michalah_visible: true});}}>
                                    <img src={Michalah} alt=""/>
                                </button>
                                <Viewer
                                    visible={this.state.Michalah_visible}
                                    onClose={() => {this.setState({Michalah_visible: false});}}
                                    images={[
                                        {src: B},
                                        {src: Mads},
                                        {src: Cal},
                                        {src: Lana},
                                        {src: Kate},
                                        {src: Maggie},
                                        {src: Bridge},
                                        {src: Miuna},
                                        {src: Michalah},
                                        {src: Poster1}
                                    ]}
                                    activeIndex={8}
                                    noImgDetails={true}
                                />
                            </Col>
                        </Row>
                        <Row className="Row">
                            <Col className="Poster1_viewer Viewer">
                                <button onClick={() => {this.setState({Poster1_visible: true});}}>
                                    <img src={Poster1} alt=""/>
                                </button>
                                <Viewer
                                    visible={this.state.Poster1_visible}
                                    onClose={() => {this.setState({Poster1_visible: false});}}
                                    images={[
                                        {src: B},
                                        {src: Mads},
                                        {src: Cal},
                                        {src: Lana},
                                        {src: Kate},
                                        {src: Maggie},
                                        {src: Bridge},
                                        {src: Miuna},
                                        {src: Michalah},
                                        {src: Poster1}
                                    ]}
                                    activeIndex={9}
                                    noImgDetails={true}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}