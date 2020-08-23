// Components
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-modal';
import Viewer from 'react-viewer';

// bnDesigns images
import bnd_W_D_UX from '../img/Prototypes/bnd/W_D_UX.png';
import bnd_W_D_Fonts from '../img/Prototypes/bnd/W_D_Fonts.png';
import bnd_P_D_UX from '../img/Prototypes/bnd/P_D_UX.png';
import bnd_P_D_Modal from '../img/Prototypes/bnd/P_D_Modal.png';
import bnd_P_D_Fonts from '../img/Prototypes/bnd/P_D_Fonts.png';
import bnd_P_T_UX from '../img/Prototypes/bnd/P_T_UX.png';
import bnd_P_T_Modal from '../img/Prototypes/bnd/P_T_Modal.png';
import bnd_P_T_Fonts from '../img/Prototypes/bnd/P_T_Fonts.png';
import bnd_P_M_UX from '../img/Prototypes/bnd/P_M_UX.png';
import bnd_P_M_Modal from '../img/Prototypes/bnd/P_M_Modal.png';
import bnd_P_M_Fonts from '../img/Prototypes/bnd/P_M_Fonts.png';

// Topple images
import Topple_Main from '../img/Prototypes/Topple/Topple_Main.png';
import Topple_Signup from '../img/Prototypes/Topple/Topple_Signup.png';
import Topple_Feed from '../img/Prototypes/Topple/Topple_Feed.png';
import Topple_Event from '../img/Prototypes/Topple/Topple_Event.png';
import Topple_NewEvent from '../img/Prototypes/Topple/Topple_NewEvent.png';
import Topple_Profile from '../img/Prototypes/Topple/Topple_Profile.png';
import Topple_LogoSketches from '../img/Prototypes/Topple/Topple_LogoSketches.jpg';
import Topple_Sketches from '../img/Prototypes/Topple/Topple_Sketches.png';
import Topple_WFFeed from '../img/Prototypes/Topple/Topple_WFFeed.png';
import Topple_WFEvent from '../img/Prototypes/Topple/Topple_WFEvent.png';

// Second Sight Design images
import SSD_DisplayD from '../img/Prototypes/SSD/Display_Desk.png';
import SSD_PrototypeDLanding from '../img/Prototypes/SSD/PrototypeD_Landing.png';
import SSD_PrototypeDItem from '../img/Prototypes/SSD/PrototypeD_Item.png';
import SSD_WireframeDItem from '../img/Prototypes/SSD/WireframeD_Item.png';
import SSD_DisplayM from '../img/Prototypes/SSD/Display_Mobile.png';
import SSD_PrototypeMLanding from '../img/Prototypes/SSD/PrototypeM_Landing.png';
import SSD_PrototypeMMenu from '../img/Prototypes/SSD/PrototypeM_Menu.png';
import SSD_PrototypeMItem from '../img/Prototypes/SSD/PrototypeM_Item.png';
import SSD_WireframeMMenu from '../img/Prototypes/SSD/WireframeM_Menu.png';
import SSD_WireframeMItem from '../img/Prototypes/SSD/WireframeM_Item.png';

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

            bnd_W_D_UX_visible: false,
            bnd_W_D_Fonts_visible: false,
            bnd_P_D_UX_visible: false,
            bnd_P_D_Modal_visible: false,
            bnd_P_D_Fonts_visible: false,
            bnd_P_T_UX_visible: false,
            bnd_P_T_Modal_visible: false,
            bnd_P_T_Fonts_visible: false,
            bnd_P_M_UX_visible: false,
            bnd_P_M_Modal_visible: false,
            bnd_P_M_Fonts_visible: false,

            Topple_Main_visible: false,
            Topple_Signup_visible: false,
            Topple_Feed_visible: false,
            Topple_Event_visible: false,
            Topple_NewEvent_visible: false,
            Topple_Profile_visible: false,
            Topple_LogoSketches_visible: false,
            Topple_Sketches_visible: false,
            Topple_WFFeed_visible: false,
            Topple_WFEvent_visible: false,

            SSD_DisplayD_visible: false,
            SSD_PrototypeDLanding_visible: false,
            SSD_PrototypeDItem_visible: false,
            SSD_WireframeDItem_visible: false,
            SSD_DisplayM_visible: false,
            SSD_PrototypeMLanding_visible: false,
            SSD_PrototypeMMenu_visible: false,
            SSD_PrototypeMItem_visible: false,
            SSD_WireframeMMenu_visible: false,
            SSD_WireframeMItem_visible: false,
        };
        this.handleOpenModal1 = this.handleOpenModal1.bind(this);
        this.handleOpenModal2 = this.handleOpenModal2.bind(this);
        this.handleOpenModal3 = this.handleOpenModal3.bind(this);
        this.handleCloseModal1 = this.handleCloseModal1.bind(this);
        this.handleCloseModal2 = this.handleCloseModal2.bind(this);
        this.handleCloseModal3 = this.handleCloseModal3.bind(this);
    }

    // Open modal functions
    // Fix background position to top & prevent scrolling
    handleOpenModal1() {
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
        this.setState({showModal1: true});
    }
    handleOpenModal2() {
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
        this.setState({showModal2: true});
    }
    handleOpenModal3() {
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
        this.setState({showModal3: true});
    }

    // Close modal functions
    // Allow scrolling
    handleCloseModal1() {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        this.setState({showModal1: false});
    }
    handleCloseModal2() {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        this.setState({showModal2: false});
    }
    handleCloseModal3() {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        this.setState({showModal3: false});
    }

    render() {
        return (
            <div className="UX w-100">
                <Row className="Container">
                    <Col xl={4} className="Text" >
                        <h1>humanity</h1>
                        <h1>x</h1>
                        <h1>technology</h1>
                        <p>
                            My goal as a designer is to humanize the technology we use on a daily
                            basis. I want to make interfaces, color palettes, and interactions
                            that mimic our natural world.
                        <hr/>
                            Right now accessibility is a major hurdle in human-computer interaction.
                            Our world is multimoal by design, so our virtual one should be too. My
                            designs aim to be widely accesible and responsive across a variety of
                            devices.
                        </p>
                    </Col>
                    <Col xl={8} className="Projects">
                        <Row className="Project Project1">
                            <button onClick={this.handleOpenModal1}>bnDesigns</button>
                            <Modal
                                className="Modal"
                                overlayClassName="Overlay"
                                isOpen={this.state.showModal1}
                                onRequestClose={this.handleCloseModal1}
                            >
                                <Row>
                                    <Col xl={4} xs={12} className="Text">
                                        <button onClick={this.handleCloseModal1}>
                                            <img src={Close} alt="Exit icon"/>
                                        </button>
                                        <h1>bnDesigns</h1>
                                        <p>
                                            bnDesigns is both a potfiolo and a user experience.
                                        <hr/>
                                            The vision was to create something emotional, engaging,
                                            hospitable, and interesting.
                                        <hr/>
                                            To start materializing that vision, I made simple
                                            wireframes. Then, I selected colors and fonts
                                            that really capture the mood of my work. Next, I
                                            created hi-fidelity prototypes using Adobe XD and
                                            Photoshop. Once I was satisfied with the design, I
                                            developed it using React and Node.js. Finally, I
                                            deployed it on Netlify.
                                        </p>
                                    </Col>
                                    <Col xl={8} xs={12} className="Content">
                                        <div className="ScrollArea" id="bndSA">
                                            <div className="bnd_W_D_UX_viewer">
                                                <button onClick={() => {this.setState({bnd_W_D_UX_visible: true});}}>
                                                    <img
                                                        src={bnd_W_D_UX}
                                                        alt="UX page desktop wireframe, which shows
                                                        a top navbar, large paceholder on the left,
                                                        and list of placeholders on the right"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.bnd_W_D_UX_visible}
                                                    onClose={() => {this.setState({bnd_W_D_UX_visible: false});}}
                                                    images={[
                                                        {src: bnd_W_D_UX},
                                                        {src: bnd_W_D_Fonts},
                                                        {src: bnd_P_D_UX},
                                                        {src: bnd_P_D_Modal},
                                                        {src: bnd_P_D_Fonts},
                                                        {src: bnd_P_T_UX},
                                                        {src: bnd_P_T_Modal},
                                                        {src: bnd_P_T_Fonts},
                                                        {src: bnd_P_M_UX},
                                                        {src: bnd_P_M_Modal},
                                                        {src: bnd_P_M_Fonts}
                                                        
                                                    ]}
                                                    activeIndex={0}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="bnd_W_D_Fonts_viewer">
                                                <button onClick={() => {this.setState({bnd_W_D_Fonts_visible: true});}}>
                                                    <img
                                                        src={bnd_W_D_Fonts}
                                                        alt="Fonts page desktop wireframe, which
                                                        displays a top navbar, block of text on
                                                        the left, and gallery on the right"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.bnd_W_D_Fonts_visible}
                                                    onClose={() => {this.setState({bnd_W_D_Fonts_visible: false});}}
                                                    images={[
                                                        {src: bnd_W_D_UX},
                                                        {src: bnd_W_D_Fonts},
                                                        {src: bnd_P_D_UX},
                                                        {src: bnd_P_D_Modal},
                                                        {src: bnd_P_D_Fonts},
                                                        {src: bnd_P_T_UX},
                                                        {src: bnd_P_T_Modal},
                                                        {src: bnd_P_T_Fonts},
                                                        {src: bnd_P_M_UX},
                                                        {src: bnd_P_M_Modal},
                                                        {src: bnd_P_M_Fonts}
                                                        
                                                    ]}
                                                    activeIndex={1}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="bnd_P_D_UX_viewer">
                                                <button onClick={() => {this.setState({bnd_P_D_UX_visible: true});}}>
                                                    <img
                                                        src={bnd_P_D_UX}
                                                        alt="UX page desktop prototype, which shows
                                                        a top navbar with pixelated page links, a text
                                                        section on the left, and a list of buttons
                                                        for each project on the right"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.bnd_P_D_UX_visible}
                                                    onClose={() => {this.setState({bnd_P_D_UX_visible: false});}}
                                                    images={[
                                                        {src: bnd_W_D_UX},
                                                        {src: bnd_W_D_Fonts},
                                                        {src: bnd_P_D_UX},
                                                        {src: bnd_P_D_Modal},
                                                        {src: bnd_P_D_Fonts},
                                                        {src: bnd_P_T_UX},
                                                        {src: bnd_P_T_Modal},
                                                        {src: bnd_P_T_Fonts},
                                                        {src: bnd_P_M_UX},
                                                        {src: bnd_P_M_Modal},
                                                        {src: bnd_P_M_Fonts}
                                                        
                                                    ]}
                                                    activeIndex={2}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="bnd_P_D_Modal_viewer">
                                                <button onClick={() => {this.setState({bnd_P_D_Modal_visible: true});}}>
                                                    <img
                                                        src={bnd_P_D_Modal}
                                                        alt="Desktop modal prototype, which has a
                                                        brown translucent overlay, a text section
                                                        on the left, and a carousel of prototypes
                                                        on the right"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.bnd_P_D_Modal_visible}
                                                    onClose={() => {this.setState({bnd_P_D_Modal_visible: false});}}
                                                    images={[
                                                        {src: bnd_W_D_UX},
                                                        {src: bnd_W_D_Fonts},
                                                        {src: bnd_P_D_UX},
                                                        {src: bnd_P_D_Modal},
                                                        {src: bnd_P_D_Fonts},
                                                        {src: bnd_P_T_UX},
                                                        {src: bnd_P_T_Modal},
                                                        {src: bnd_P_T_Fonts},
                                                        {src: bnd_P_M_UX},
                                                        {src: bnd_P_M_Modal},
                                                        {src: bnd_P_M_Fonts}
                                                        
                                                    ]}
                                                    activeIndex={3}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="bnd_P_D_Fonts_viewer">
                                                <button onClick={() => {this.setState({bnd_P_D_Fonts_visible: true});}}>
                                                    <img
                                                        src={bnd_P_D_Fonts}
                                                        alt="Fonts page desktop prototype, which
                                                        displays a top navbar, text section on
                                                        the left, and gallery on the right"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.bnd_P_D_Fonts_visible}
                                                    onClose={() => {this.setState({bnd_P_D_Fonts_visible: false});}}
                                                    images={[
                                                        {src: bnd_W_D_UX},
                                                        {src: bnd_W_D_Fonts},
                                                        {src: bnd_P_D_UX},
                                                        {src: bnd_P_D_Modal},
                                                        {src: bnd_P_D_Fonts},
                                                        {src: bnd_P_T_UX},
                                                        {src: bnd_P_T_Modal},
                                                        {src: bnd_P_T_Fonts},
                                                        {src: bnd_P_M_UX},
                                                        {src: bnd_P_M_Modal},
                                                        {src: bnd_P_M_Fonts}
                                                        
                                                    ]}
                                                    activeIndex={4}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="bnd_P_T_UX_viewer">
                                                <button onClick={() => {this.setState({bnd_P_T_UX_visible: true});}}>
                                                    <img
                                                        src={bnd_P_T_UX}
                                                        alt="UX page tablet prototype, which shows
                                                        a top menu button, text section, and list
                                                        of buttons for each project"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.bnd_P_T_UX_visible}
                                                    onClose={() => {this.setState({bnd_P_T_UX_visible: false});}}
                                                    images={[
                                                        {src: bnd_W_D_UX},
                                                        {src: bnd_W_D_Fonts},
                                                        {src: bnd_P_D_UX},
                                                        {src: bnd_P_D_Modal},
                                                        {src: bnd_P_D_Fonts},
                                                        {src: bnd_P_T_UX},
                                                        {src: bnd_P_T_Modal},
                                                        {src: bnd_P_T_Fonts},
                                                        {src: bnd_P_M_UX},
                                                        {src: bnd_P_M_Modal},
                                                        {src: bnd_P_M_Fonts}
                                                        
                                                    ]}
                                                    activeIndex={5}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="bnd_P_T_Modal_viewer">
                                                <button onClick={() => {this.setState({bnd_P_T_Modal_visible: true});}}>
                                                    <img
                                                        src={bnd_P_T_Modal}
                                                        alt="Tablet modal prototype, which shows a
                                                        brown translucent overly and a text
                                                        section over a carousel of
                                                        prototypes"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.bnd_P_T_Modal_visible}
                                                    onClose={() => {this.setState({bnd_P_T_Modal_visible: false});}}
                                                    images={[
                                                        {src: bnd_W_D_UX},
                                                        {src: bnd_W_D_Fonts},
                                                        {src: bnd_P_D_UX},
                                                        {src: bnd_P_D_Modal},
                                                        {src: bnd_P_D_Fonts},
                                                        {src: bnd_P_T_UX},
                                                        {src: bnd_P_T_Modal},
                                                        {src: bnd_P_T_Fonts},
                                                        {src: bnd_P_M_UX},
                                                        {src: bnd_P_M_Modal},
                                                        {src: bnd_P_M_Fonts}
                                                        
                                                    ]}
                                                    activeIndex={6}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="bnd_P_T_Fonts_viewer">
                                                <button onClick={() => {this.setState({bnd_P_T_Fonts_visible: true});}}>
                                                    <img
                                                        src={bnd_P_T_Fonts}
                                                        alt="Fonts page tablet prototype, which
                                                        shows a top menu button over a text
                                                        section and a gallery"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.bnd_P_T_Fonts_visible}
                                                    onClose={() => {this.setState({bnd_P_T_Fonts_visible: false});}}
                                                    images={[
                                                        {src: bnd_W_D_UX},
                                                        {src: bnd_W_D_Fonts},
                                                        {src: bnd_P_D_UX},
                                                        {src: bnd_P_D_Modal},
                                                        {src: bnd_P_D_Fonts},
                                                        {src: bnd_P_T_UX},
                                                        {src: bnd_P_T_Modal},
                                                        {src: bnd_P_T_Fonts},
                                                        {src: bnd_P_M_UX},
                                                        {src: bnd_P_M_Modal},
                                                        {src: bnd_P_M_Fonts}
                                                        
                                                    ]}
                                                    activeIndex={7}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="bnd_P_M_UX_viewer">
                                                <button onClick={() => {this.setState({bnd_P_M_UX_visible: true});}}>
                                                    <img
                                                        src={bnd_P_M_UX}
                                                        alt="UX page mobile prototype, which
                                                        displays a top menu button, a text
                                                        section, and a list of buttons for
                                                        each project"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.bnd_P_M_UX_visible}
                                                    onClose={() => {this.setState({bnd_P_M_UX_visible: false});}}
                                                    images={[
                                                        {src: bnd_W_D_UX},
                                                        {src: bnd_W_D_Fonts},
                                                        {src: bnd_P_D_UX},
                                                        {src: bnd_P_D_Modal},
                                                        {src: bnd_P_D_Fonts},
                                                        {src: bnd_P_T_UX},
                                                        {src: bnd_P_T_Modal},
                                                        {src: bnd_P_T_Fonts},
                                                        {src: bnd_P_M_UX},
                                                        {src: bnd_P_M_Modal},
                                                        {src: bnd_P_M_Fonts}
                                                        
                                                    ]}
                                                    activeIndex={8}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="bnd_P_M_Modal_viewer">
                                                <button onClick={() => {this.setState({bnd_P_M_Modal_visible: true});}}>
                                                    <img
                                                        src={bnd_P_M_Modal}
                                                        alt="Mobile modal prototype, which has a
                                                        brown translucent overlay and a text
                                                        section over a carousel of
                                                        prototypes"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.bnd_P_M_Modal_visible}
                                                    onClose={() => {this.setState({bnd_P_M_Modal_visible: false});}}
                                                    images={[
                                                        {src: bnd_W_D_UX},
                                                        {src: bnd_W_D_Fonts},
                                                        {src: bnd_P_D_UX},
                                                        {src: bnd_P_D_Modal},
                                                        {src: bnd_P_D_Fonts},
                                                        {src: bnd_P_T_UX},
                                                        {src: bnd_P_T_Modal},
                                                        {src: bnd_P_T_Fonts},
                                                        {src: bnd_P_M_UX},
                                                        {src: bnd_P_M_Modal},
                                                        {src: bnd_P_M_Fonts}
                                                        
                                                    ]}
                                                    activeIndex={9}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="bnd_P_M_Fonts_viewer">
                                                <button
                                                    onClick={() => {this.setState({bnd_P_M_Fonts_visible: true});}}
                                                    className="LastBtn"
                                                >
                                                    <img
                                                        src={bnd_P_M_Fonts}
                                                        alt="Fonts page mobile prototype, which
                                                        displays a top menu button over a text
                                                        section and a gallery"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.bnd_P_M_Fonts_visible}
                                                    onClose={() => {this.setState({bnd_P_M_Fonts_visible: false});}}
                                                    images={[
                                                        {src: bnd_W_D_UX},
                                                        {src: bnd_W_D_Fonts},
                                                        {src: bnd_P_D_UX},
                                                        {src: bnd_P_D_Modal},
                                                        {src: bnd_P_D_Fonts},
                                                        {src: bnd_P_T_UX},
                                                        {src: bnd_P_T_Modal},
                                                        {src: bnd_P_T_Fonts},
                                                        {src: bnd_P_M_UX},
                                                        {src: bnd_P_M_Modal},
                                                        {src: bnd_P_M_Fonts}
                                                        
                                                    ]}
                                                    activeIndex={10}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                        </div>
                                        <a
                                            href="https://github.com/brennannewton/bnd"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="Link d-inline-block"
                                        >
                                            GitHub Repository 
                                        </a>
                                    </Col>
                                </Row>
                            </Modal>
                        </Row>
                        <Row className="Project Project2">
                            <button onClick={this.handleOpenModal2}>Topple</button>
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
                                        <h1>Topple</h1>
                                        <p>
                                            Inspired by the 2020 BLM protests and apps like Citizen
                                            and Signal, Topple is an event-organizing app with the
                                            mission to protect its user's privacy.
                                        <hr/>
                                            I started the process by listing features,
                                            researching competitors, and creating the app's
                                            identity. Once I had a logo and an MVP, I began sketching
                                            wireframes and user flows. Finally, I designed
                                            hi-fidelity prototypes in Adobe XD.
                                        </p>
                                    </Col>
                                    <Col xl={8} className="Content">
                                        <div className="ScrollArea" id="ToppleSA">
                                            <div className="Topple_LogoSketches_viewer">
                                                <button onClick={() => {this.setState({Topple_LogoSketches_visible: true});}}>
                                                    <img
                                                        src={Topple_LogoSketches}
                                                        alt="Sketches of logo ideas, including a
                                                        pyramid's top falling off, a fist holding
                                                        up a sign, a lowercase t, and some people
                                                        lined up next to each other"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.Topple_LogoSketches_visible}
                                                    onClose={() => {this.setState({Topple_LogoSketches_visible: false});}}
                                                    images={[
                                                        {src: Topple_LogoSketches},
                                                        {src: Topple_Sketches},
                                                        {src: Topple_WFFeed},
                                                        {src: Topple_WFEvent},
                                                        {src: Topple_Main},
                                                        {src: Topple_Signup},
                                                        {src: Topple_Feed},
                                                        {src: Topple_Event},
                                                        {src: Topple_NewEvent},
                                                        {src: Topple_Profile}
                                                    ]}
                                                    activeIndex={0}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="Topple_Sketches_viewer">
                                                <button
                                                    onClick={() => {this.setState({Topple_Sketches_visible: true});}}
                                                >
                                                    <img
                                                        src={Topple_Sketches}
                                                        alt="Sketches of the layout, including a
                                                        welcome page, signup form, event feed,
                                                        and event page"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.Topple_Sketches_visible}
                                                    onClose={() => {this.setState({Topple_Sketches_visible: false});}}
                                                    images={[
                                                        {src: Topple_LogoSketches},
                                                        {src: Topple_Sketches},
                                                        {src: Topple_WFFeed},
                                                        {src: Topple_WFEvent},
                                                        {src: Topple_Main},
                                                        {src: Topple_Signup},
                                                        {src: Topple_Feed},
                                                        {src: Topple_Event},
                                                        {src: Topple_NewEvent},
                                                        {src: Topple_Profile}
                                                    ]}
                                                    activeIndex={1}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="Topple_WFFeed_viewer">
                                                <button
                                                    onClick={() => {this.setState({Topple_WFFeed_visible: true});}}
                                                >
                                                    <img
                                                        src={Topple_WFFeed}
                                                        alt="Feed wireframe, which shows a location
                                                        at the top and placeholders for posts"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.Topple_WFFeed_visible}
                                                    onClose={() => {this.setState({Topple_WFFeed_visible: false});}}
                                                    images={[
                                                        {src: Topple_LogoSketches},
                                                        {src: Topple_Sketches},
                                                        {src: Topple_WFFeed},
                                                        {src: Topple_WFEvent},
                                                        {src: Topple_Main},
                                                        {src: Topple_Signup},
                                                        {src: Topple_Feed},
                                                        {src: Topple_Event},
                                                        {src: Topple_NewEvent},
                                                        {src: Topple_Profile}
                                                    ]}
                                                    activeIndex={2}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="Topple_WFEvent_viewer">
                                                <button
                                                    onClick={() => {this.setState({Topple_WFEvent_visible: true});}}
                                                >
                                                    <img
                                                        src={Topple_WFEvent}
                                                        alt="Event wireframe, which shows the
                                                        layout for all the event info"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.Topple_WFEvent_visible}
                                                    onClose={() => {this.setState({Topple_WFEvent_visible: false});}}
                                                    images={[
                                                        {src: Topple_LogoSketches},
                                                        {src: Topple_Sketches},
                                                        {src: Topple_WFFeed},
                                                        {src: Topple_WFEvent},
                                                        {src: Topple_Main},
                                                        {src: Topple_Signup},
                                                        {src: Topple_Feed},
                                                        {src: Topple_Event},
                                                        {src: Topple_NewEvent},
                                                        {src: Topple_Profile}
                                                    ]}
                                                    activeIndex={3}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="Topple_Main_viewer">
                                                <button onClick={() => {this.setState({Topple_Main_visible: true});}}>
                                                    <img
                                                        src={Topple_Main}
                                                        alt="Landing page prototype, which
                                                        displays a welcome message, the logo,
                                                        slogan, and buttons for different users -
                                                        organizers and supporters"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.Topple_Main_visible}
                                                    onClose={() => {this.setState({Topple_Main_visible: false});}}
                                                    images={[
                                                        {src: Topple_LogoSketches},
                                                        {src: Topple_Sketches},
                                                        {src: Topple_WFFeed},
                                                        {src: Topple_WFEvent},
                                                        {src: Topple_Main},
                                                        {src: Topple_Signup},
                                                        {src: Topple_Feed},
                                                        {src: Topple_Event},
                                                        {src: Topple_NewEvent},
                                                        {src: Topple_Profile}
                                                    ]}
                                                    activeIndex={4}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="Topple_Signup_viewer">
                                                <button onClick={() => {this.setState({Topple_Signup_visible: true});}}>
                                                    <img
                                                        src={Topple_Signup}
                                                        alt="Signup page prototype, a singup form
                                                        with inputs for name, contact info,
                                                        organization info, and pin"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.Topple_Signup_visible}
                                                    onClose={() => {this.setState({Topple_Signup_visible: false});}}
                                                    images={[
                                                        {src: Topple_LogoSketches},
                                                        {src: Topple_Sketches},
                                                        {src: Topple_WFFeed},
                                                        {src: Topple_WFEvent},
                                                        {src: Topple_Main},
                                                        {src: Topple_Signup},
                                                        {src: Topple_Feed},
                                                        {src: Topple_Event},
                                                        {src: Topple_NewEvent},
                                                        {src: Topple_Profile}
                                                    ]}
                                                    activeIndex={5}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="Topple_Feed_viewer">
                                                <button onClick={() => {this.setState({Topple_Feed_visible: true});}}>
                                                    <img
                                                        src={Topple_Feed}
                                                        alt="Feed prototype, with posts for
                                                        each event containing event info"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.Topple_Feed_visible}
                                                    onClose={() => {this.setState({Topple_Feed_visible: false});}}
                                                    images={[
                                                        {src: Topple_LogoSketches},
                                                        {src: Topple_Sketches},
                                                        {src: Topple_WFFeed},
                                                        {src: Topple_WFEvent},
                                                        {src: Topple_Main},
                                                        {src: Topple_Signup},
                                                        {src: Topple_Feed},
                                                        {src: Topple_Event},
                                                        {src: Topple_NewEvent},
                                                        {src: Topple_Profile}
                                                    ]}
                                                    activeIndex={6}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="Topple_Event_viewer">
                                                <button onClick={() => {this.setState({Topple_Event_visible: true});}}>
                                                    <img
                                                        src={Topple_Event}
                                                        alt="Event page prototype, which displays
                                                        all the event's info including name,
                                                        organization, organizers, location, date,
                                                        time, description, and messages"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.Topple_Event_visible}
                                                    onClose={() => {this.setState({Topple_Event_visible: false});}}
                                                    images={[
                                                        {src: Topple_LogoSketches},
                                                        {src: Topple_Sketches},
                                                        {src: Topple_WFFeed},
                                                        {src: Topple_WFEvent},
                                                        {src: Topple_Main},
                                                        {src: Topple_Signup},
                                                        {src: Topple_Feed},
                                                        {src: Topple_Event},
                                                        {src: Topple_NewEvent},
                                                        {src: Topple_Profile}
                                                    ]}
                                                    activeIndex={7}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="Topple_NewEvent_viewer">
                                                <button onClick={() => {this.setState({Topple_NewEvent_visible: true});}}>
                                                    <img
                                                        src={Topple_NewEvent}
                                                        alt="New event page prototype, a form
                                                        requesting all the necessary info for
                                                        an event"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.Topple_NewEvent_visible}
                                                    onClose={() => {this.setState({Topple_NewEvent_visible: false});}}
                                                    images={[
                                                        {src: Topple_LogoSketches},
                                                        {src: Topple_Sketches},
                                                        {src: Topple_WFFeed},
                                                        {src: Topple_WFEvent},
                                                        {src: Topple_Main},
                                                        {src: Topple_Signup},
                                                        {src: Topple_Feed},
                                                        {src: Topple_Event},
                                                        {src: Topple_NewEvent},
                                                        {src: Topple_Profile}
                                                    ]}
                                                    activeIndex={8}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="Topple_Profile_viewer">
                                                <button
                                                    onClick={() => {this.setState({Topple_Profile_visible: true});}}
                                                    className="LastBtn"
                                                >
                                                    <img
                                                        src={Topple_Profile}
                                                        alt="Profile overlay prototype, which
                                                        displays organizer and organization
                                                        contact info"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.Topple_Profile_visible}
                                                    onClose={() => {this.setState({Topple_Profile_visible: false});}}
                                                    images={[
                                                        {src: Topple_LogoSketches},
                                                        {src: Topple_Sketches},
                                                        {src: Topple_WFFeed},
                                                        {src: Topple_WFEvent},
                                                        {src: Topple_Main},
                                                        {src: Topple_Signup},
                                                        {src: Topple_Feed},
                                                        {src: Topple_Event},
                                                        {src: Topple_NewEvent},
                                                        {src: Topple_Profile}
                                                    ]}
                                                    activeIndex={9}
                                                    noImgDetails={true}
                                                />
                                            </div>           
                                        </div>
                                    </Col>
                                </Row>
                            </Modal>
                        </Row>
                        <Row className="Project Project3">
                            <button onClick={this.handleOpenModal3}>Second Sight Design</button>
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
                                        <h1>SSD</h1>
                                        <p>
                                            Second Sight Design is a small business website.
                                        <hr/>
                                            The owner asked me to design a user-friendly site, so I
                                            kept that in mind throughout the process. I started by
                                            learning about her background and her vision for the
                                            business, which then inspired her brand's identity and
                                            style. After creating a style guide, I designed simple
                                            wireframes. Finally, I created hi-fidelity prototypes
                                            and presentation graphics in Adobe XD and Photoshop.
                                        </p>
                                    </Col>
                                    <Col xl={8} className="Content">
                                        <div className="ScrollArea" id="SSDSA">
                                            <div className="SSD_WireframeDItem_viewer">
                                                <button onClick={() => {this.setState({SSD_WireframeDItem_visible: true});}}>
                                                    <img
                                                        src={SSD_WireframeDItem}
                                                        alt="Item page desktop wireframe, which
                                                        shows placeholders for product images,
                                                        name, descrption, and price"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.SSD_WireframeDItem_visible}
                                                    onClose={() => {this.setState({SSD_WireframeDItem_visible: false});}}
                                                    images={[
                                                        {src: SSD_WireframeDItem},
                                                        {src: SSD_WireframeMMenu},
                                                        {src: SSD_WireframeMItem},
                                                        {src: SSD_PrototypeDLanding},
                                                        {src: SSD_PrototypeDItem},
                                                        {src: SSD_PrototypeMLanding},
                                                        {src: SSD_PrototypeMMenu},
                                                        {src: SSD_PrototypeMItem},
                                                        {src: SSD_DisplayD},
                                                        {src: SSD_DisplayM}
                                                    ]}
                                                    activeIndex={0}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="SSD_WireframeMMenu_viewer">
                                                <button onClick={() => {this.setState({SSD_WireframeMMenu_visible: true});}}>
                                                    <img
                                                        src={SSD_WireframeMMenu}
                                                        alt="Menu overlay mobile wireframe, which
                                                        lists pages and social icons under a menu
                                                        icon"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.SSD_WireframeMMenu_visible}
                                                    onClose={() => {this.setState({SSD_WireframeMMenu_visible: false});}}
                                                    images={[
                                                        {src: SSD_WireframeDItem},
                                                        {src: SSD_WireframeMMenu},
                                                        {src: SSD_WireframeMItem},
                                                        {src: SSD_PrototypeDLanding},
                                                        {src: SSD_PrototypeDItem},
                                                        {src: SSD_PrototypeMLanding},
                                                        {src: SSD_PrototypeMMenu},
                                                        {src: SSD_PrototypeMItem},
                                                        {src: SSD_DisplayD},
                                                        {src: SSD_DisplayM}
                                                    ]}
                                                    activeIndex={1}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="SSD_WireframeMItem_viewer">
                                                <button
                                                    onClick={() => {this.setState({SSD_WireframeMItem_visible: true});}}
                                                >
                                                    <img
                                                        src={SSD_WireframeMItem}
                                                        alt="Item page mobile wireframe, which
                                                        shows placeholders for a carousel of
                                                        images, title, description, and
                                                        price of a product"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.SSD_WireframeMItem_visible}
                                                    onClose={() => {this.setState({SSD_WireframeMItem_visible: false});}}
                                                    images={[
                                                        {src: SSD_WireframeDItem},
                                                        {src: SSD_WireframeMMenu},
                                                        {src: SSD_WireframeMItem},
                                                        {src: SSD_PrototypeDLanding},
                                                        {src: SSD_PrototypeDItem},
                                                        {src: SSD_PrototypeMLanding},
                                                        {src: SSD_PrototypeMMenu},
                                                        {src: SSD_PrototypeMItem},
                                                        {src: SSD_DisplayD},
                                                        {src: SSD_DisplayM}
                                                    ]}
                                                    activeIndex={2}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="SSD_PrototypeDLanding_viewer">
                                                <button onClick={() => {this.setState({SSD_PrototypeDLanding_visible: true});}}>
                                                    <img
                                                        src={SSD_PrototypeDLanding}
                                                        alt="Landing page desktop prototype, which
                                                        shows the name of the business over a
                                                        pendant made by the owner"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.SSD_PrototypeDLanding_visible}
                                                    onClose={() => {this.setState({SSD_PrototypeDLanding_visible: false});}}
                                                    images={[
                                                        {src: SSD_WireframeDItem},
                                                        {src: SSD_WireframeMMenu},
                                                        {src: SSD_WireframeMItem},
                                                        {src: SSD_PrototypeDLanding},
                                                        {src: SSD_PrototypeDItem},
                                                        {src: SSD_PrototypeMLanding},
                                                        {src: SSD_PrototypeMMenu},
                                                        {src: SSD_PrototypeMItem},
                                                        {src: SSD_DisplayD},
                                                        {src: SSD_DisplayM}
                                                    ]}
                                                    activeIndex={3}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="SSD_PrototypeDItem_viewer">
                                                <button onClick={() => {this.setState({SSD_PrototypeDItem_visible: true});}}>
                                                    <img
                                                        src={SSD_PrototypeDItem}
                                                        alt="Item page desktop prototype, which
                                                        displays a carousel of images, name,
                                                        description, and price of the
                                                        product"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.SSD_PrototypeDItem_visible}
                                                    onClose={() => {this.setState({SSD_PrototypeDItem_visible: false});}}
                                                    images={[
                                                        {src: SSD_WireframeDItem},
                                                        {src: SSD_WireframeMMenu},
                                                        {src: SSD_WireframeMItem},
                                                        {src: SSD_PrototypeDLanding},
                                                        {src: SSD_PrototypeDItem},
                                                        {src: SSD_PrototypeMLanding},
                                                        {src: SSD_PrototypeMMenu},
                                                        {src: SSD_PrototypeMItem},
                                                        {src: SSD_DisplayD},
                                                        {src: SSD_DisplayM}
                                                    ]}
                                                    activeIndex={4}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="SSD_PrototypeMLanding_viewer">
                                                <button onClick={() => {this.setState({SSD_PrototypeMLanding_visible: true});}}>
                                                    <img
                                                        src={SSD_PrototypeMLanding}
                                                        alt="Landing page mobile prototype, which
                                                        displays the name ofvthe business over a
                                                        pendant made by the owner"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.SSD_PrototypeMLanding_visible}
                                                    onClose={() => {this.setState({SSD_PrototypeMLanding_visible: false});}}
                                                    images={[
                                                        {src: SSD_WireframeDItem},
                                                        {src: SSD_WireframeMMenu},
                                                        {src: SSD_WireframeMItem},
                                                        {src: SSD_PrototypeDLanding},
                                                        {src: SSD_PrototypeDItem},
                                                        {src: SSD_PrototypeMLanding},
                                                        {src: SSD_PrototypeMMenu},
                                                        {src: SSD_PrototypeMItem},
                                                        {src: SSD_DisplayD},
                                                        {src: SSD_DisplayM}
                                                    ]}
                                                    activeIndex={5}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="SSD_PrototypeMMenu_viewer">
                                                <button onClick={() => {this.setState({SSD_PrototypeMMenu_visible: true});}}>
                                                    <img
                                                        src={SSD_PrototypeMMenu}
                                                        alt="Menu overlay mobile prototype, which
                                                        shows a list of pages and social icons
                                                        under a menu icon"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.SSD_PrototypeMMenu_visible}
                                                    onClose={() => {this.setState({SSD_PrototypeMMenu_visible: false});}}
                                                    images={[
                                                        {src: SSD_WireframeDItem},
                                                        {src: SSD_WireframeMMenu},
                                                        {src: SSD_WireframeMItem},
                                                        {src: SSD_PrototypeDLanding},
                                                        {src: SSD_PrototypeDItem},
                                                        {src: SSD_PrototypeMLanding},
                                                        {src: SSD_PrototypeMMenu},
                                                        {src: SSD_PrototypeMItem},
                                                        {src: SSD_DisplayD},
                                                        {src: SSD_DisplayM}
                                                    ]}
                                                    activeIndex={6}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="SSD_PrototypeMItem_viewer">
                                                <button onClick={() => {this.setState({SSD_PrototypeMItem_visible: true});}}>
                                                    <img
                                                        src={SSD_PrototypeMItem}
                                                        alt="Item page mobile prototype, which is a
                                                        carousel of images over the name,
                                                        description, and price of the
                                                        product"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.SSD_PrototypeMItem_visible}
                                                    onClose={() => {this.setState({SSD_PrototypeMItem_visible: false});}}
                                                    images={[
                                                        {src: SSD_WireframeDItem},
                                                        {src: SSD_WireframeMMenu},
                                                        {src: SSD_WireframeMItem},
                                                        {src: SSD_PrototypeDLanding},
                                                        {src: SSD_PrototypeDItem},
                                                        {src: SSD_PrototypeMLanding},
                                                        {src: SSD_PrototypeMMenu},
                                                        {src: SSD_PrototypeMItem},
                                                        {src: SSD_DisplayD},
                                                        {src: SSD_DisplayM}
                                                    ]}
                                                    activeIndex={7}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="SSD_DisplayD_viewer">
                                                <button onClick={() => {this.setState({SSD_DisplayD_visible: true});}}>
                                                    <img
                                                        src={SSD_DisplayD}
                                                        alt="Landing page desktop prototype
                                                        displayed on a laptop"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.SSD_DisplayD_visible}
                                                    onClose={() => {this.setState({SSD_DisplayD_visible: false});}}
                                                    images={[
                                                        {src: SSD_WireframeDItem},
                                                        {src: SSD_WireframeMMenu},
                                                        {src: SSD_WireframeMItem},
                                                        {src: SSD_PrototypeDLanding},
                                                        {src: SSD_PrototypeDItem},
                                                        {src: SSD_PrototypeMLanding},
                                                        {src: SSD_PrototypeMMenu},
                                                        {src: SSD_PrototypeMItem},
                                                        {src: SSD_DisplayD},
                                                        {src: SSD_DisplayM}
                                                    ]}
                                                    activeIndex={8}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="SSD_DisplayM_viewer">
                                                <button
                                                    onClick={() => {this.setState({SSD_DisplayM_visible: true});}}
                                                    className="LastBtn"
                                                >
                                                    <img
                                                        src={SSD_DisplayM}
                                                        alt="Landing page mobile prototype
                                                        displayed on a phone"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.SSD_DisplayM_visible}
                                                    onClose={() => {this.setState({SSD_DisplayM_visible: false});}}
                                                    images={[
                                                        {src: SSD_WireframeDItem},
                                                        {src: SSD_WireframeMMenu},
                                                        {src: SSD_WireframeMItem},
                                                        {src: SSD_PrototypeDLanding},
                                                        {src: SSD_PrototypeDItem},
                                                        {src: SSD_PrototypeMLanding},
                                                        {src: SSD_PrototypeMMenu},
                                                        {src: SSD_PrototypeMItem},
                                                        {src: SSD_DisplayD},
                                                        {src: SSD_DisplayM}
                                                    ]}
                                                    activeIndex={9}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                        </div>
                                        <a
                                            href="https://github.com/brennannewton/secondsightdesign"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="Link d-inline-block"
                                        >
                                            GitHub Repository 
                                        </a>
                                    </Col>
                                </Row>
                            </Modal>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}