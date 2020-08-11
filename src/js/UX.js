// Components
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-modal';

// Images
import bnDesigns_Home from '../img/Prototypes/bnDesigns_Home.png';
import bnDesigns_UX from '../img/Prototypes/bnDesigns_UX.png';
import bnDesigns_Contact from '../img/Prototypes/bnDesigns_Contact.png';
import ELECTRA_Sketches from '../img/Prototypes/ELECTRA_ProfileSketches.png';
import ELECTRA_Comments from '../img/Prototypes/ELECTRA_Comments.png';
import ELECTRA_Profile from '../img/Prototypes/ELECTRA_Profile.png';
import Topple_Main from '../img/Prototypes/Topple_Main.png';
import Topple_Signup from '../img/Prototypes/Topple_Signup.png';
import Topple_Feed from '../img/Prototypes/Topple_Feed.png';
import Topple_Event from '../img/Prototypes/Topple_Event.png';
import Topple_NewEvent from '../img/Prototypes/Topple_NewEvent.png';
import Topple_Profile from '../img/Prototypes/Topple_Profile.png';

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
                                        <p>bnDesigns is both a way to showcase my work as a
                                            designer and create a user experience in the process.
                                            The concept behind my first iteration was to create an
                                            emotionally engaging experience that was hospitable
                                            and encouraged exploration. To create the prototypes I
                                            used Adobe XD and Photoshop. Next I built the site in
                                            React. Finally I deployed the site with Netlify. 
                                        </p>
                                    </Col>
                                    <Col xl={8} className="Content">
                                        <Carousel>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={bnDesigns_Home}
                                                    alt="bnDesigns Home prototype"
                                                />
                                                <Carousel.Caption>
                                                    <h3>Home Prototype</h3>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={bnDesigns_UX}
                                                    alt="bnDesigns UX prototype"
                                                />
                                                <Carousel.Caption>
                                                    <h3>UX Prototype</h3>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={bnDesigns_Contact}
                                                    alt="bnDesigns Contact prototype"
                                                />
                                                <Carousel.Caption>
                                                    <h3>Contact Prototype</h3>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
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
                                        <p>ELECTRA is where digital artists
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
                                        <Carousel>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={ELECTRA_Sketches}
                                                    alt="ELECTRA Profile sketches"
                                                />
                                                <Carousel.Caption>
                                                    <h3>Profile Sketches</h3>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={ELECTRA_Profile}
                                                    alt="ELECTRA Profile prototype"
                                                />
                                                <Carousel.Caption>
                                                    <h3>Profile Prototype</h3>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={ELECTRA_Comments}
                                                    alt="ELECTRA Comments prototype"
                                                />
                                                <Carousel.Caption>
                                                    <h3>Comments Prototype</h3>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
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
                                <p>Modal content 3</p>
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