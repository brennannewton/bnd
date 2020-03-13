// Components
import React from 'react';
import SocialBar from './js/SocialBar';
import Logo from './img/bnd_logo_transparent.png';
import DownArrow from './img/down_arrow.png';
import Graphics from './js/Graphics';
import Prototypes from './js/Prototypes';
import Animations from './js/Animations';
import Footer from './js/Footer';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <SocialBar className="SocialBar"/>
      <img src={Logo} alt="Brennan Newton Designs logo" className="Logo"/>
      <br/>
      <img src={DownArrow} alt="Downward arrow" className="DownArrow mb-5"/>
      <Graphics/>
      <Prototypes/>
      <Animations/>
      <Footer/>
    </div>
  );
}

export default App;
