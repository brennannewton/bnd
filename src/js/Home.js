// Components
import React from 'react';

// Images
import Logo from '../img/bnd_logo_transparent.png';

// Styles
import '../css/Home.css';

export default class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <img src={Logo} alt="bnDesigns logo, which reads Brennan Newton Designs" className="Logo"/>
            </div>
        )
    }
}