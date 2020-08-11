// Components
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-modal';
import Viewer from 'react-viewer';

// Images
import bnDesigns_Home from '../img/Prototypes/bnDesigns_Home.png';
import bnDesigns_UX from '../img/Prototypes/bnDesigns_UX.png';
import bnDesigns_Contact from '../img/Prototypes/bnDesigns_Contact.png';
import ELECTRA_Comments from '../img/Prototypes/ELECTRA_Comments.png';
import ELECTRA_Profile from '../img/Prototypes/ELECTRA_Profile.png';
import ELECTRA_Sketches from '../img/Prototypes/ELECTRA_ProfileSketches.png';
import Topple_Main from '../img/Prototypes/Topple_Main.png';
import Topple_Signup from '../img/Prototypes/Topple_Signup.png';
import Topple_Feed from '../img/Prototypes/Topple_Feed.png';
import Topple_Event from '../img/Prototypes/Topple_Event.png';
import Topple_NewEvent from '../img/Prototypes/Topple_NewEvent.png';
import Topple_Profile from '../img/Prototypes/Topple_Profile.png';
import Topple_LogoSketches from '../img/Prototypes/Topple_LogoSketches.jpg';
import Topple_Sketches from '../img/Prototypes/Topple_Sketches.png';

// Icon
import Close from '../img/close.png';

// Styles
import '../css/UX.css';

export default class UX extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal1: false,
            showModal2: false,
            showModal3: false,
            showModal4: false,
            bnDesigns_Home_visible: false,
            bnDesigns_UX_visible: false,
            bnDesigns_Contact_visible: false,
            ELECTRA_Profile_visible: false,
            ELECTRA_Comments_visible: false,
            ELECTRA_Sketches_visible: false,
            Topple_Main_visible: false,
            Topple_Signup_visible: false,
            Topple_Feed_visible: false,
            Topple_Event_visible: false,
            Topple_NewEvent_visible: false,
            Topple_Profile_visible: false,
            Topple_LogoSketches_visible: false,
            Topple_Sketches_visible: false,
        };
        this.handleOpenModal1 = this.handleOpenModal1.bind(this);
        this.handleOpenModal2 = this.handleOpenModal2.bind(this);
        this.handleOpenModal3 = this.handleOpenModal3.bind(this);
        this.handleOpenModal4 = this.handleOpenModal4.bind(this);
        this.handleCloseModal1 = this.handleCloseModal1.bind(this);
        this.handleCloseModal2 = this.handleCloseModal2.bind(this);
        this.handleCloseModal3 = this.handleCloseModal3.bind(this);
        this.handleCloseModal4 = this.handleCloseModal4.bind(this);
    }

    handleOpenModal1() {
        this.setState({showModal1: true});
    }
    handleOpenModal2() {
        this.setState({showModal2: true});
    }
    handleOpenModal3() {
        this.setState({showModal3: true});
    }
    handleOpenModal4() {
        this.setState({showModal4: true});
    }

    handleCloseModal1() {
        this.setState({showModal1: false});
    }
    handleCloseModal2() {
        this.setState({showModal2: false});
    }
    handleCloseModal3() {
        this.setState({showModal3: false});
    }
    handleCloseModal4() {
        this.setState({showModal4: false});
    }

    render() {
        return (
            <div className="UX w-100">
                <Row className="Container">
                    <Col xl={4} className="Text" >
                        <h1>humanity</h1>
                        <h1>x</h1>
                        <h1>technology</h1>
                        <p>My goal as a designer is to humanize the technology we use on a daily
                            basis. I want to create interfaces, color palettes, and interactions
                            that mimic our physical world. Right now accessibiligy is a major issue
                            impeding human-computer interaction. Our natural world is multimoal by
                            design, so our virtual one should be too. My designs aim to be
                            accesible to a variety of users and responsive across a variety of
                            devices.
                        </p>
                    </Col>
                    <Col xl={8} className="Projects">
                        <Row className="Project Project1">
                            <button onClick={this.handleOpenModal1}>bnDesigns 1.0</button>
                            <Modal
                                className="Modal"
                                overlayClassName="Overlay"
                                isOpen={this.state.showModal1}
                                onRequestClose={this.handleCloseModal1}
                            >
                                <Row>
                                    <Col xl={4} className="Text">
                                        <button onClick={this.handleCloseModal1}>
                                            <img src={Close} alt="Exit icon"/>
                                        </button>
                                        <h1>bnDesigns 1.0</h1>
                                        <p>
                                            bnDesigns is both a way to showcase my work as a
                                            designer and create a user experience in the process.
                                            The concept behind my first iteration was to create an
                                            emotionally engaging experience that was hospitable
                                            and encouraged exploration. To create the prototypes I
                                            used Adobe XD and Photoshop. Next I built the site in
                                            React. Finally I deployed the site with Netlify. 
                                        </p>
                                    </Col>
                                    <Col xl={8} className="Content">
                                        <div className="ScrollArea">
                                            <div className="bnDesigns_Home_viewer">
                                                <button onClick={() => {this.setState({bnDesigns_Home_visible: true});}}>
                                                    <img src={bnDesigns_Home} alt=""/>
                                                </button>
                                                <Viewer
                                                    visible={this.state.bnDesigns_Home_visible}
                                                    onClose={() => {this.setState({bnDesigns_Home_visible: false});}}
                                                    images={[
                                                        {src: bnDesigns_Home},
                                                        {src: bnDesigns_UX},
                                                        {src: bnDesigns_Contact}
                                                    ]}
                                                    activeIndex={0}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="bnDesigns_UX_viewer">
                                                <button onClick={() => {this.setState({bnDesigns_UX_visible: true});}}>
                                                    <img src={bnDesigns_UX} alt=""/>
                                                </button>
                                                <Viewer
                                                    visible={this.state.bnDesigns_UX_visible}
                                                    onClose={() => {this.setState({bnDesigns_UX_visible: false});}}
                                                    images={[
                                                        {src: bnDesigns_Home},
                                                        {src: bnDesigns_UX},
                                                        {src: bnDesigns_Contact}
                                                    ]}
                                                    activeIndex={1}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="bnDesigns_Contact_viewer">
                                                <button
                                                    className="LastBtn"
                                                    onClick={() => {this.setState({bnDesigns_Contact_visible: true});}}
                                                >
                                                    <img src={bnDesigns_Contact} alt=""/>
                                                </button>
                                                <Viewer
                                                    visible={this.state.bnDesigns_Contact_visible}
                                                    onClose={() => {this.setState({bnDesigns_Contact_visible: false});}}
                                                    images={[
                                                        {src: bnDesigns_Home},
                                                        {src: bnDesigns_UX},
                                                        {src: bnDesigns_Contact}
                                                    ]}
                                                    activeIndex={2}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                        </div>
                                        <a
                                            href="https://bndesign.netlify.app/"
                                            target="_blank"
                                            className="Link d-inline-block"
                                        >
                                            bndesign.netlify.app
                                        </a>
                                        <br/>
                                        <a
                                            href="https://github.com/brennannewton/bndesign"
                                            target="_blank"
                                            className="Link d-inline-block"
                                        >
                                            GitHub Repository 
                                        </a>
                                    </Col>
                                </Row>
                            </Modal>
                        </Row>
                        <Row className="Project Project2">
                            <button onClick={this.handleOpenModal2}>ELECTRA</button>
                            <Modal
                                className="Modal"
                                overlayClassName="Overlay"
                                isOpen={this.state.showModal2}
                                onRequestClose={this.handleCloseModal2}
                            >
                                <Row>
                                    <Col xl={4} className="Text">
                                        <button onClick={this.handleCloseModal2}>
                                            <img src={Close} alt="Exit icon"/>
                                        </button>
                                        <h1>ELECTRA</h1>
                                        <p>
                                            ELECTRA is where digital artists
                                            collaborate and receive feedback on their work. I was
                                            the Project Manager for ELECTRA, so I oversaw the
                                            product from concept to release. We started by
                                            generating user flows and personas. Then we created the
                                            brand identity and designed features in Adobe XD that
                                            would bring the concept to life. Next we developed the
                                            product using the PERN stack. Finally we released a
                                            beta-stage product with Netlify.
                                        </p>
                                    </Col>
                                    <Col xl={8} className="Content">
                                        <div className="ScrollArea">
                                            <div className="ELECTRA_Comments_viewer">
                                                <button onClick={() => {this.setState({ELECTRA_Comments_visible: true});}}>
                                                    <img src={ELECTRA_Comments} alt=""/>
                                                </button>
                                                <Viewer
                                                    visible={this.state.ELECTRA_Comments_visible}
                                                    onClose={() => {this.setState({ELECTRA_Comments_visible: false});}}
                                                    images={[
                                                        {src: ELECTRA_Comments},
                                                        {src: ELECTRA_Profile},
                                                        {src: ELECTRA_Sketches}
                                                    ]}
                                                    activeIndex={0}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="ELECTRA_Profile_viewer">
                                                <button onClick={() => {this.setState({ELECTRA_Profile_visible: true});}}>
                                                    <img src={ELECTRA_Profile} alt=""/>
                                                </button>
                                                <Viewer
                                                    visible={this.state.ELECTRA_Profile_visible}
                                                    onClose={() => {this.setState({ELECTRA_Profile_visible: false});}}
                                                    images={[
                                                        {src: ELECTRA_Comments},
                                                        {src: ELECTRA_Profile},
                                                        {src: ELECTRA_Sketches}
                                                    ]}
                                                    activeIndex={1}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="ELECTRA_Sketches_viewer">
                                                <button
                                                    className="LastBtn"
                                                    onClick={() => {this.setState({ELECTRA_Sketches_visible: true});}}
                                                >
                                                    <img src={ELECTRA_Sketches} alt=""/>
                                                </button>
                                                <Viewer
                                                    visible={this.state.ELECTRA_Sketches_visible}
                                                    onClose={() => {this.setState({ELECTRA_Sketches_visible: false});}}
                                                    images={[
                                                        {src: ELECTRA_Comments},
                                                        {src: ELECTRA_Profile},
                                                        {src: ELECTRA_Sketches}
                                                    ]}
                                                    activeIndex={2}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                        </div>
                                        <a
                                            href="https://electrala.netlify.app/"
                                            target="_blank"
                                            className="Link d-inline-block"
                                        >
                                            electrala.netlify.app
                                        </a>
                                        <br/>
                                        <a
                                            href="https://github.com/electrala"
                                            target="_blank"
                                            className="Link d-inline-block"
                                        >
                                            GitHub Organization
                                        </a>
                                    </Col>
                                </Row>
                            </Modal>
                        </Row>
                        <Row className="Project Project3">
                            <button onClick={this.handleOpenModal3}>Topple</button>
                            <Modal
                                className="Modal"
                                overlayClassName="Overlay"
                                isOpen={this.state.showModal3}
                                onRequestClose={this.handleCloseModal3}
                            >
                                <Row>
                                    <Col xl={4} className="Text">
                                        <button onClick={this.handleCloseModal3}>
                                            <img src={Close} alt="Exit icon"/>
                                        </button>
                                        <h1>Topple</h1>
                                        <p>
                                            Topple is a event organizing app that protects users'
                                            identities. Inspired by the 2020 BLM protests and
                                            apps like Citizen and Signal, I designed this app
                                            independently. I started by listing features,
                                            researching competitors, and creating the brand
                                            identity. Once I had a logo and an MVP, I began sketching
                                            out wireframes and user flows. Next I designed hi-fidelity
                                            prototypes in Adobe XD. Now the app is
                                            in development.
                                        </p>
                                    </Col>
                                    <Col xl={8} className="Content">
                                        <Row className="ScrollArea">
                                            <Col xl={6}>
                                                <div className="Topple_Main_viewer">
                                                    <button onClick={() => {this.setState({Topple_Main_visible: true});}}>
                                                        <img src={Topple_Main} alt=""/>
                                                    </button>
                                                    <Viewer
                                                        visible={this.state.Topple_Main_visible}
                                                        onClose={() => {this.setState({Topple_Main_visible: false});}}
                                                        images={[
                                                            {src: Topple_Main},
                                                            {src: Topple_Signup},
                                                            {src: Topple_Feed},
                                                            {src: Topple_Event},
                                                            {src: Topple_NewEvent},
                                                            {src: Topple_Profile},
                                                            {src: Topple_LogoSketches},
                                                            {src: Topple_Sketches}
                                                        ]}
                                                        activeIndex={0}
                                                        noImgDetails={true}
                                                    />
                                                </div>
                                                <div className="Topple_Feed_viewer">
                                                    <button onClick={() => {this.setState({Topple_Feed_visible: true});}}>
                                                        <img src={Topple_Feed} alt=""/>
                                                    </button>
                                                    <Viewer
                                                        visible={this.state.Topple_Feed_visible}
                                                        onClose={() => {this.setState({Topple_Feed_visible: false});}}
                                                        images={[
                                                            {src: Topple_Main},
                                                            {src: Topple_Signup},
                                                            {src: Topple_Feed},
                                                            {src: Topple_Event},
                                                            {src: Topple_NewEvent},
                                                            {src: Topple_Profile},
                                                            {src: Topple_LogoSketches},
                                                            {src: Topple_Sketches}
                                                        ]}
                                                        activeIndex={2}
                                                        noImgDetails={true}
                                                    />
                                                </div>
                                                <div className="Topple_NewEvent_viewer">
                                                    <button onClick={() => {this.setState({Topple_NewEvent_visible: true});}}>
                                                        <img src={Topple_NewEvent} alt=""/>
                                                    </button>
                                                    <Viewer
                                                        visible={this.state.Topple_NewEvent_visible}
                                                        onClose={() => {this.setState({Topple_NewEvent_visible: false});}}
                                                        images={[
                                                            {src: Topple_Main},
                                                            {src: Topple_Signup},
                                                            {src: Topple_Feed},
                                                            {src: Topple_Event},
                                                            {src: Topple_NewEvent},
                                                            {src: Topple_Profile},
                                                            {src: Topple_LogoSketches},
                                                            {src: Topple_Sketches}
                                                        ]}
                                                        activeIndex={4}
                                                        noImgDetails={true}
                                                    />
                                                </div>
                                                <div className="Topple_LogoSketches_viewer">
                                                    <button onClick={() => {this.setState({Topple_LogoSketches_visible: true});}}>
                                                        <img src={Topple_LogoSketches} alt=""/>
                                                    </button>
                                                    <Viewer
                                                        visible={this.state.Topple_LogoSketches_visible}
                                                        onClose={() => {this.setState({Topple_LogoSketches_visible: false});}}
                                                        images={[
                                                            {src: Topple_Main},
                                                            {src: Topple_Signup},
                                                            {src: Topple_Feed},
                                                            {src: Topple_Event},
                                                            {src: Topple_NewEvent},
                                                            {src: Topple_Profile},
                                                            {src: Topple_LogoSketches},
                                                            {src: Topple_Sketches}
                                                        ]}
                                                        activeIndex={6}
                                                        noImgDetails={true}
                                                    />
                                                </div>
                                            </Col>
                                            <Col xl={6}>
                                                <div className="Topple_Signup_viewer">
                                                    <button onClick={() => {this.setState({Topple_Signup_visible: true});}}>
                                                        <img src={Topple_Signup} alt=""/>
                                                    </button>
                                                    <Viewer
                                                        visible={this.state.Topple_Signup_visible}
                                                        onClose={() => {this.setState({Topple_Signup_visible: false});}}
                                                        images={[
                                                            {src: Topple_Main},
                                                            {src: Topple_Signup},
                                                            {src: Topple_Feed},
                                                            {src: Topple_Event},
                                                            {src: Topple_NewEvent},
                                                            {src: Topple_Profile},
                                                            {src: Topple_LogoSketches},
                                                            {src: Topple_Sketches}
                                                        ]}
                                                        activeIndex={1}
                                                        noImgDetails={true}
                                                    />
                                                </div>
                                                <div className="Topple_Event_viewer">
                                                    <button onClick={() => {this.setState({Topple_Event_visible: true});}}>
                                                        <img src={Topple_Event} alt=""/>
                                                    </button>
                                                    <Viewer
                                                        visible={this.state.Topple_Event_visible}
                                                        onClose={() => {this.setState({Topple_Event_visible: false});}}
                                                        images={[
                                                            {src: Topple_Main},
                                                            {src: Topple_Signup},
                                                            {src: Topple_Feed},
                                                            {src: Topple_Event},
                                                            {src: Topple_NewEvent},
                                                            {src: Topple_Profile},
                                                            {src: Topple_LogoSketches},
                                                            {src: Topple_Sketches}
                                                        ]}
                                                        activeIndex={3}
                                                        noImgDetails={true}
                                                    />
                                                </div>
                                                <div className="Topple_Profile_viewer">
                                                    <button onClick={() => {this.setState({Topple_Profile_visible: true});}}>
                                                        <img src={Topple_Profile} alt=""/>
                                                    </button>
                                                    <Viewer
                                                        visible={this.state.Topple_Profile_visible}
                                                        onClose={() => {this.setState({Topple_Profile_visible: false});}}
                                                        images={[
                                                            {src: Topple_Main},
                                                            {src: Topple_Signup},
                                                            {src: Topple_Feed},
                                                            {src: Topple_Event},
                                                            {src: Topple_NewEvent},
                                                            {src: Topple_Profile},
                                                            {src: Topple_LogoSketches},
                                                            {src: Topple_Sketches}
                                                        ]}
                                                        activeIndex={5}
                                                        noImgDetails={true}
                                                    />
                                                </div>
                                                <div className="Topple_Sketches_viewer">
                                                    <button onClick={() => {this.setState({Topple_Sketches_visible: true});}}>
                                                        <img src={Topple_Sketches} alt=""/>
                                                    </button>
                                                    <Viewer
                                                        visible={this.state.Topple_Sketches_visible}
                                                        onClose={() => {this.setState({Topple_Sketches_visible: false});}}
                                                        images={[
                                                            {src: Topple_Main},
                                                            {src: Topple_Signup},
                                                            {src: Topple_Feed},
                                                            {src: Topple_Event},
                                                            {src: Topple_NewEvent},
                                                            {src: Topple_Profile},
                                                            {src: Topple_LogoSketches},
                                                            {src: Topple_Sketches}
                                                        ]}
                                                        activeIndex={7}
                                                        noImgDetails={true}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Modal>
                        </Row>
                        <Row className="Project Project4">
                            <button onClick={this.handleOpenModal4}>Second Sight Design</button>
                            <Modal
                                className="Modal"
                                overlayClassName="Overlay"
                                isOpen={this.state.showModal4}
                                onRequestClose={this.handleCloseModal4}
                            >
                                <p>Modal content 4</p>
                            </Modal>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}