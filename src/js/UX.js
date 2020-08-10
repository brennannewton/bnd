// Components
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-modal';

// Images
import bnDesigns_Home from '../img/Prototypes/bnDesigns_Home.png';
import bnDesigns_UX from '../img/Prototypes/bnDesigns_UX.png';
import bnDesigns_Contact from '../img/Prototypes/bnDesigns_Contact.png';
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
                        <p>My designs bring a sense of warmth & humanity to technology - something
                            we see as cold & unfeeling. By focusing on the user throughout the
                            design process, I create accessible & engaging user experiences.
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
                                        <p>bnDesigns is my portfolio website. Right now, I'm on my
                                            fourth iteration, but I think it's important to remember
                                            where we came from. I've kept the soft color palette and
                                            organized layout from the origin design.
                                        </p>
                                    </Col>
                                    <Col xl={8} className="Content">
                                        <p>Modal content</p>
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
                                <p>Modal content 2</p>
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