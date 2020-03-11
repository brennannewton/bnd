// Components
import React from 'react';
import SocialBar from './js/SocialBar';
import Logo from './img/bnd_logo_transparent.png';
import DownArrow from './img/down_arrow.png';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <SocialBar/>
      <img src={Logo} alt="Brennan Newton Designs logo" className="Logo"/>
      <br/>
      <img src={DownArrow} alt="Downward arrow" className="DownArrow m-3"/>
    </div>
  );
}

export default App;
