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
                    <Col className="Text">
                        <h1>humanity</h1>
                        <h1>x</h1>
                        <h1>technology</h1>
                        <p>My designs bring a sense of warmth & humanity to technology - something
                            we see as cold & unfeeling. By focusing on the user throughout the
                            design process, I create both accessible & engaging user experiences.
                        </p>
                    </Col>
                    <Col className="Prototypes-Web">
                        <h1>bnDesigns 1.0</h1>
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
                            <button onClick={() => {this.setState({bnDesigns_Contact_visible: true});}}>
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
                        <h1 className="ELECTRA-Title">ELECTRA</h1>
                        <div className="ELECTRA_Comments_viewer">
                            <button onClick={() => {this.setState({ELECTRA_Comments_visible: true});}}>
                                <img src={ELECTRA_Comments} alt=""/>
                            </button>
                            <Viewer
                                visible={this.state.ELECTRA_Comments_visible}
                                onClose={() => {this.setState({ELECTRA_Comments_visible: false});}}
                                images={[
                                    {src: ELECTRA_Comments},
                                    {src: ELECTRA_Profile}
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
                                    {src: ELECTRA_Profile}
                                ]}
                                activeIndex={1}
                                noImgDetails={true}
                            />
                        </div>
                    </Col>
                    <Col className="Prototypes-Mobile">
                        <h1 className="Topple-Title">Topple</h1>
                        <Row className="Topple-Container">
                            <Col className="Topple-Prototypes-1">
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
                                            {src: Topple_Profile}
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
                                            {src: Topple_Profile}
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
                                            {src: Topple_Profile}
                                        ]}
                                        activeIndex={4}
                                        noImgDetails={true}
                                    />
                                </div>
                            </Col>
                            <Col className="Topple-Prototypes-2">
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
                                            {src: Topple_Profile}
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
                                            {src: Topple_Profile}
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
                                            {src: Topple_Profile}
                                        ]}
                                        activeIndex={5}
                                        noImgDetails={true}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}