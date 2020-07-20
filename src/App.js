// Components
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navigation from './js/Navigation';
import Footer from './js/Footer';

// Pages
import Home from './js/Home';
import UX from './js/UX';
import Fonts from './js/Fonts';
import Characters from './js/Characters';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
          <Route path="/" exact render={() => <Home/>}/>
          <Route path="/ux" exact render={() => <UX/>}/>
          <Route path="/fonts" exact render={() => <Fonts/>}/>
          <Route path="/characters" exact render={() => <Characters/>}/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
