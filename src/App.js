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
      <SocialBar className="SocialBar"/>
      <img src={Logo} alt="Brennan Newton Designs logo" className="Logo mt-5"/>
      <br/>
      <img src={DownArrow} alt="Downward arrow" className="DownArrow mb-3"/>
    </div>
  );
}

export default App;
