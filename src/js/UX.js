// Components
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Viewer from 'react-viewer';

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

// Styles
import '../css/UX.css';

export default class UX extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bnDesigns_Home_visible: false,
            bnDesigns_UX_visible: false,
            bnDesigns_Contact_visible: false,
            ELECTRA_Profile_visible: false,
            ELECTRA_Comments_visible: false,
            Topple_Main_visible: false,
            Topple_Signup_visible: false,
            Topple_Feed_visible: false,
            Topple_Event_visible: false,
            Topple_NewEvent_visible: false,
            Topple_Profile_visible: false,
        }
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
                            <button>bnDesigns 1.0</button>
                        </Row>
                        <Row className="Project Project2">
                            <button>ELECTRA</button>
                        </Row>
                        <Row className="Project Project3">
                            <button>Topple</button>
                        </Row>
                        <Row className="Project Project4">
                            <button>Second Sight Design</button>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}