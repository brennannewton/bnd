// Components
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-modal';
import Viewer from 'react-viewer';

// bnDesigns images
import bnDesigns_Home from '../img/Prototypes/bnDesigns_Home.png';
import bnDesigns_UX from '../img/Prototypes/bnDesigns_UX.png';
import bnDesigns_Contact from '../img/Prototypes/bnDesigns_Contact.png';

// ELECTRA images
import ELECTRA_Comments from '../img/Prototypes/ELECTRA_Comments.png';
import ELECTRA_Profile from '../img/Prototypes/ELECTRA_Profile.png';
import ELECTRA_Sketches from '../img/Prototypes/ELECTRA_ProfileSketches.jpg';

// Topple images
import Topple_Main from '../img/Prototypes/Topple_Main.png';
import Topple_Signup from '../img/Prototypes/Topple_Signup.png';
import Topple_Feed from '../img/Prototypes/Topple_Feed.png';
import Topple_Event from '../img/Prototypes/Topple_Event.png';
import Topple_NewEvent from '../img/Prototypes/Topple_NewEvent.png';
import Topple_Profile from '../img/Prototypes/Topple_Profile.png';
import Topple_LogoSketches from '../img/Prototypes/Topple_LogoSketches.jpg';
import Topple_Sketches from '../img/Prototypes/Topple_Sketches.png';

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
        this.handleOpenModal4 = this.handleOpenModal4.bind(this);
        this.handleCloseModal1 = this.handleCloseModal1.bind(this);
        this.handleCloseModal2 = this.handleCloseModal2.bind(this);
        this.handleCloseModal3 = this.handleCloseModal3.bind(this);
        this.handleCloseModal4 = this.handleCloseModal4.bind(this);
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
    handleOpenModal4() {
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
        this.setState({showModal4: true});
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
    handleCloseModal4() {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
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
                            that mimic our physical world.
                        </p>
                        <p>Right now accessibiligy is a major issue
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
                                    <Col xl={4} xs={12} className="Text">
                                        <button onClick={this.handleCloseModal1}>
                                            <img src={Close} alt="Exit icon"/>
                                        </button>
                                        <h1>bnDesigns</h1>
                                        <p>
                                            bnDesigns is both a way to showcase my work as a
                                            designer and create a user experience in the process.
                                        <br/><br/>
                                            The concept behind my first iteration was to create an
                                            emotionally engaging experience that was both hospitable
                                            and encouraged exploration.
                                        <br/><br/>
                                            To create the prototypes I
                                            used Adobe XD and Photoshop. Next I built the site in
                                            React. Finally I deployed the site with Netlify. 
                                        </p>
                                    </Col>
                                    <Col xl={8} xs={12} className="Content">
                                        <div className="ScrollArea">
                                            <div className="bnDesigns_Home_viewer">
                                                <button onClick={() => {this.setState({bnDesigns_Home_visible: true});}}>
                                                    <img
                                                        src={bnDesigns_Home}
                                                        alt="bnDesigns 1.0 home prototype, which
                                                        displays a welcome message over a sunset
                                                        background"
                                                    />
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
                                                    <img
                                                        src={bnDesigns_UX}
                                                        alt="bnDesigns 1.0 UX prototype, which
                                                        shows a image carousel and some links
                                                        floating up in the clouds"
                                                    />
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
                                                    <img
                                                        src={bnDesigns_Contact}
                                                        alt="bnDesigns contact prototype, which
                                                        shows a profile image, some social icons,
                                                        and contact info over a sunrise background"
                                                    />
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
                                            collaborate and receive feedback on their work.
                                        <br/><br/>
                                            I was the Project Manager for ELECTRA, so I oversaw the
                                            product from concept to release.
                                        <br/><br/>
                                            We started by generating user flows and personas. Then we created the
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
                                                    <img
                                                        src={ELECTRA_Comments}
                                                        alt="ELECTRA comments prototype, a modal
                                                        with an image, post info, and comments
                                                        section"
                                                    />
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
                                                    <img
                                                        src={ELECTRA_Profile}
                                                        alt="ELECTRA profile prototype, which
                                                        displays the user's photo, name, pronouns,
                                                        location, username, bio, and posts (called
                                                        sparks)"
                                                    />
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
                                                    <img
                                                        src={ELECTRA_Sketches}
                                                        alt="Sketches of ELECTRA's, Instagram's,
                                                        and Behance's profile features"
                                                    />
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
                                            identities.
                                        <br/><br/>
                                            Inspired by the 2020 BLM protests and
                                            apps like Citizen and Signal, I designed this app
                                            independently.
                                        <br/><br/>
                                            I started by listing features,
                                            researching competitors, and creating the brand
                                            identity. Once I had a logo and an MVP, I began sketching
                                            out wireframes and user flows. Next I designed hi-fidelity
                                            prototypes in Adobe XD. Now the app is
                                            in development.
                                        </p>
                                    </Col>
                                    <Col xl={8} className="Content">
                                        <div className="ScrollArea">
                                            <div className="Topple_Main_viewer">
                                                <button onClick={() => {this.setState({Topple_Main_visible: true});}}>
                                                    <img
                                                        src={Topple_Main}
                                                        alt="Topple landing prototype, which
                                                        displays a welcome message, the logo,
                                                        slogan, and buttons for different users
                                                        (organizers and supporters)"
                                                    />
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
                                            <div className="Topple_Signup_viewer">
                                                <button onClick={() => {this.setState({Topple_Signup_visible: true});}}>
                                                    <img
                                                        src={Topple_Signup}
                                                        alt="Topple signup prototype, a singup form
                                                        with inputs for name, contact info,
                                                        organization info, and pin"
                                                    />
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
                                            <div className="Topple_Feed_viewer">
                                                <button onClick={() => {this.setState({Topple_Feed_visible: true});}}>
                                                    <img
                                                        src={Topple_Feed}
                                                        alt="Topple feed prototype, with posts for
                                                        each event containing an image and event
                                                        info"
                                                    />
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
                                            <div className="Topple_Event_viewer">
                                                <button onClick={() => {this.setState({Topple_Event_visible: true});}}>
                                                    <img
                                                        src={Topple_Event}
                                                        alt="Topple event prototype, which displays
                                                        all the event's info including name,
                                                        organization, organizers, location, date,
                                                        time, description, and messages"
                                                    />
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
                                            <div className="Topple_NewEvent_viewer">
                                                <button onClick={() => {this.setState({Topple_NewEvent_visible: true});}}>
                                                    <img
                                                        src={Topple_NewEvent}
                                                        alt="Topple new event prototype, a form
                                                        requesting all necessary info for an
                                                        event"
                                                    />
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
                                            <div className="Topple_Profile_viewer">
                                                <button onClick={() => {this.setState({Topple_Profile_visible: true});}}>
                                                    <img
                                                        src={Topple_Profile}
                                                        alt="Topple profile prototype, which
                                                        displays organizer and organization
                                                        contact info"
                                                    />
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
                                            <div className="Topple_LogoSketches_viewer">
                                                <button onClick={() => {this.setState({Topple_LogoSketches_visible: true});}}>
                                                    <img
                                                        src={Topple_LogoSketches}
                                                        alt="Sketches of ideas for Topple's logo,
                                                        including a pyramid's top falling off, a
                                                        fist holding a sign, a t, and some
                                                        people"
                                                    />
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
                                            <div className="Topple_Sketches_viewer">
                                                <button
                                                    className="LastBtn"
                                                    onClick={() => {this.setState({Topple_Sketches_visible: true});}}
                                                >
                                                    <img
                                                        src={Topple_Sketches}
                                                        alt="Sketches of Topple's layout, including
                                                        a welcome page, signup form, event feed,
                                                        and event page"
                                                    />
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
                                        </div>
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
                                <Row>
                                    <Col xl={4} className="Text">
                                        <button onClick={this.handleCloseModal4}>
                                            <img src={Close} alt="Exit icon"/>
                                        </button>
                                        <h1>SSD</h1>
                                        <p>
                                            Second Sight Design is a small business e-commerce site
                                            and the first project I landed as a
                                            freelance designer.
                                        <br/><br/>
                                            The owner needs a user-friendly
                                            website for her business, so I started by learning about
                                            her mission and vision, which I used
                                            to inspire the brand identity. After creating a style
                                            guide, I designed basic wireframes. Then I created
                                            hi-fidelity prototypes and presentation materials
                                            to show the client. Now the project is in
                                            development.
                                        </p>
                                    </Col>
                                    <Col xl={8} className="Content">
                                        <div className="ScrollArea">
                                            <div className="SSD_DisplayD_viewer">
                                                <button onClick={() => {this.setState({SSD_DisplayD_visible: true});}}>
                                                    <img
                                                        src={SSD_DisplayD}
                                                        alt="Secnd Sight Design landing page
                                                        displayed on a laptop"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.SSD_DisplayD_visible}
                                                    onClose={() => {this.setState({SSD_DisplayD_visible: false});}}
                                                    images={[
                                                        {src: SSD_DisplayD},
                                                        {src: SSD_PrototypeDLanding},
                                                        {src: SSD_PrototypeDItem},
                                                        {src: SSD_WireframeDItem},
                                                        {src: SSD_DisplayM},
                                                        {src: SSD_PrototypeMLanding},
                                                        {src: SSD_PrototypeMMenu},
                                                        {src: SSD_PrototypeMItem},
                                                        {src: SSD_WireframeMMenu},
                                                        {src: SSD_WireframeMItem},
                                                    ]}
                                                    activeIndex={0}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="SSD_PrototypeDLanding_viewer">
                                                <button onClick={() => {this.setState({SSD_PrototypeDLanding_visible: true});}}>
                                                    <img
                                                        src={SSD_PrototypeDLanding}
                                                        alt="Second Sight Design desktop landing
                                                        page prototype, which shows the name of the
                                                        business over a pendant made by the owner"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.SSD_PrototypeDLanding_visible}
                                                    onClose={() => {this.setState({SSD_PrototypeDLanding_visible: false});}}
                                                    images={[
                                                        {src: SSD_DisplayD},
                                                        {src: SSD_PrototypeDLanding},
                                                        {src: SSD_PrototypeDItem},
                                                        {src: SSD_WireframeDItem},
                                                        {src: SSD_DisplayM},
                                                        {src: SSD_PrototypeMLanding},
                                                        {src: SSD_PrototypeMMenu},
                                                        {src: SSD_PrototypeMItem},
                                                        {src: SSD_WireframeMMenu},
                                                        {src: SSD_WireframeMItem},
                                                    ]}
                                                    activeIndex={1}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="SSD_PrototypeDItem_viewer">
                                                <button onClick={() => {this.setState({SSD_PrototypeDItem_visible: true});}}>
                                                    <img
                                                        src={SSD_PrototypeDItem}
                                                        alt="Second Sight Design desktop item page
                                                        prototype, which displays a carousel of
                                                        images, name, description, and price of the
                                                        product"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.SSD_PrototypeDItem_visible}
                                                    onClose={() => {this.setState({SSD_PrototypeDItem_visible: false});}}
                                                    images={[
                                                        {src: SSD_DisplayD},
                                                        {src: SSD_PrototypeDLanding},
                                                        {src: SSD_PrototypeDItem},
                                                        {src: SSD_WireframeDItem},
                                                        {src: SSD_DisplayM},
                                                        {src: SSD_PrototypeMLanding},
                                                        {src: SSD_PrototypeMMenu},
                                                        {src: SSD_PrototypeMItem},
                                                        {src: SSD_WireframeMMenu},
                                                        {src: SSD_WireframeMItem},
                                                    ]}
                                                    activeIndex={2}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="SSD_WireframeDItem_viewer">
                                                <button onClick={() => {this.setState({SSD_WireframeDItem_visible: true});}}>
                                                    <img
                                                        src={SSD_WireframeDItem}
                                                        alt="Second Sight Design desktop item page
                                                        wireframe, which shows placeholders for
                                                        product images, name, descrption, and price"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.SSD_WireframeDItem_visible}
                                                    onClose={() => {this.setState({SSD_WireframeDItem_visible: false});}}
                                                    images={[
                                                        {src: SSD_DisplayD},
                                                        {src: SSD_PrototypeDLanding},
                                                        {src: SSD_PrototypeDItem},
                                                        {src: SSD_WireframeDItem},
                                                        {src: SSD_DisplayM},
                                                        {src: SSD_PrototypeMLanding},
                                                        {src: SSD_PrototypeMMenu},
                                                        {src: SSD_PrototypeMItem},
                                                        {src: SSD_WireframeMMenu},
                                                        {src: SSD_WireframeMItem},
                                                    ]}
                                                    activeIndex={3}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="SSD_DisplayM_viewer">
                                                <button onClick={() => {this.setState({SSD_DisplayM_visible: true});}}>
                                                    <img
                                                        src={SSD_DisplayM}
                                                        alt="Second Sight Design landing page
                                                        displayed on a phone"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.SSD_DisplayM_visible}
                                                    onClose={() => {this.setState({SSD_DisplayM_visible: false});}}
                                                    images={[
                                                        {src: SSD_DisplayD},
                                                        {src: SSD_PrototypeDLanding},
                                                        {src: SSD_PrototypeDItem},
                                                        {src: SSD_WireframeDItem},
                                                        {src: SSD_DisplayM},
                                                        {src: SSD_PrototypeMLanding},
                                                        {src: SSD_PrototypeMMenu},
                                                        {src: SSD_PrototypeMItem},
                                                        {src: SSD_WireframeMMenu},
                                                        {src: SSD_WireframeMItem},
                                                    ]}
                                                    activeIndex={4}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="SSD_PrototypeMLanding_viewer">
                                                <button onClick={() => {this.setState({SSD_PrototypeMLanding_visible: true});}}>
                                                    <img
                                                        src={SSD_PrototypeMLanding}
                                                        alt="second Sight Design mobile landing
                                                        page prototype, which displays the name of
                                                        the business over a pendant made by the
                                                        owner"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.SSD_PrototypeMLanding_visible}
                                                    onClose={() => {this.setState({SSD_PrototypeMLanding_visible: false});}}
                                                    images={[
                                                        {src: SSD_DisplayD},
                                                        {src: SSD_PrototypeDLanding},
                                                        {src: SSD_PrototypeDItem},
                                                        {src: SSD_WireframeDItem},
                                                        {src: SSD_DisplayM},
                                                        {src: SSD_PrototypeMLanding},
                                                        {src: SSD_PrototypeMMenu},
                                                        {src: SSD_PrototypeMItem},
                                                        {src: SSD_WireframeMMenu},
                                                        {src: SSD_WireframeMItem},
                                                    ]}
                                                    activeIndex={5}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="SSD_PrototypeMMenu_viewer">
                                                <button onClick={() => {this.setState({SSD_PrototypeMMenu_visible: true});}}>
                                                    <img
                                                        src={SSD_PrototypeMMenu}
                                                        alt="Second Sight Design mobile menu
                                                        prototype, which shows a list of pages and
                                                        social icons under a menu icon"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.SSD_PrototypeMMenu_visible}
                                                    onClose={() => {this.setState({SSD_PrototypeMMenu_visible: false});}}
                                                    images={[
                                                        {src: SSD_DisplayD},
                                                        {src: SSD_PrototypeDLanding},
                                                        {src: SSD_PrototypeDItem},
                                                        {src: SSD_WireframeDItem},
                                                        {src: SSD_DisplayM},
                                                        {src: SSD_PrototypeMLanding},
                                                        {src: SSD_PrototypeMMenu},
                                                        {src: SSD_PrototypeMItem},
                                                        {src: SSD_WireframeMMenu},
                                                        {src: SSD_WireframeMItem},
                                                    ]}
                                                    activeIndex={6}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="SSD_PrototypeMItem_viewer">
                                                <button onClick={() => {this.setState({SSD_PrototypeMItem_visible: true});}}>
                                                    <img
                                                        src={SSD_PrototypeMItem}
                                                        alt="Second Sight Design mobile item page
                                                        prototype, which is a carousel of images 
                                                        over the name, description, and price of
                                                        the product"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.SSD_PrototypeMItem_visible}
                                                    onClose={() => {this.setState({SSD_PrototypeMItem_visible: false});}}
                                                    images={[
                                                        {src: SSD_DisplayD},
                                                        {src: SSD_PrototypeDLanding},
                                                        {src: SSD_PrototypeDItem},
                                                        {src: SSD_WireframeDItem},
                                                        {src: SSD_DisplayM},
                                                        {src: SSD_PrototypeMLanding},
                                                        {src: SSD_PrototypeMMenu},
                                                        {src: SSD_PrototypeMItem},
                                                        {src: SSD_WireframeMMenu},
                                                        {src: SSD_WireframeMItem},
                                                    ]}
                                                    activeIndex={7}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="SSD_WireframeMMenu_viewer">
                                                <button onClick={() => {this.setState({SSD_WireframeMMenu_visible: true});}}>
                                                    <img
                                                        src={SSD_WireframeMMenu}
                                                        alt="Second Sight Design mobile menu
                                                        wireframe, which lists pages and social
                                                        icons under a menu icon"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.SSD_WireframeMMenu_visible}
                                                    onClose={() => {this.setState({SSD_WireframeMMenu_visible: false});}}
                                                    images={[
                                                        {src: SSD_DisplayD},
                                                        {src: SSD_PrototypeDLanding},
                                                        {src: SSD_PrototypeDItem},
                                                        {src: SSD_WireframeDItem},
                                                        {src: SSD_DisplayM},
                                                        {src: SSD_PrototypeMLanding},
                                                        {src: SSD_PrototypeMMenu},
                                                        {src: SSD_PrototypeMItem},
                                                        {src: SSD_WireframeMMenu},
                                                        {src: SSD_WireframeMItem},
                                                    ]}
                                                    activeIndex={8}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                            <div className="SSD_WireframeMItem_viewer">
                                                <button
                                                    className="LastBtn"
                                                    onClick={() => {this.setState({SSD_WireframeMItem_visible: true});}}
                                                >
                                                    <img
                                                        src={SSD_WireframeMItem}
                                                        alt="Second Sight Design mobile item
                                                        wireframe, which shows placeholders for a
                                                        carousel of images, title, description, and
                                                        price of a product"
                                                    />
                                                </button>
                                                <Viewer
                                                    visible={this.state.SSD_WireframeMItem_visible}
                                                    onClose={() => {this.setState({SSD_WireframeMItem_visible: false});}}
                                                    images={[
                                                        {src: SSD_DisplayD},
                                                        {src: SSD_PrototypeDLanding},
                                                        {src: SSD_PrototypeDItem},
                                                        {src: SSD_WireframeDItem},
                                                        {src: SSD_DisplayM},
                                                        {src: SSD_PrototypeMLanding},
                                                        {src: SSD_PrototypeMMenu},
                                                        {src: SSD_PrototypeMItem},
                                                        {src: SSD_WireframeMMenu},
                                                        {src: SSD_WireframeMItem},
                                                    ]}
                                                    activeIndex={9}
                                                    noImgDetails={true}
                                                />
                                            </div>
                                        </div>
                                        <a
                                            href="https://github.com/brennannewton/secondsightdesign"
                                            target="_blank"
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