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

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isHome: true,
      homeStyle: "View",
      footerStyle: "Absolute",
    };
  }

  setIsHome = (x) => {
    this.setState({isHome: x});
  }

  setHomeStyle = (y) => {
    this.setState({homeStyle: y});
  }

  setFooterStyle = (z) => {
    this.setState({footerStyle: z});
  }

  onComponentDidMount() {
    if (this.state.isHome) {
      this.setHomeStyle("Veiw");
      this.setFooterStyle("Absolute");
    }
    else {
      this.setHomeStyle("Content");
      this.setFooterStyle("Relative");
    }
  }

  render() {
    return (
      <div className={`${this.state.homeStyle}`}>
        <BrowserRouter>
          <Navigation setIsHome={this.setIsHome}/>
            <Route path="/" exact render={() => <Home/>}/>
            <Route path="/ux" exact render={() => <UX/>}/>
            <Route path="/fonts" exact render={() => <Fonts/>}/>
            <Route path="/characters" exact render={() => <Characters/>}/>
          <Footer footerStyle={this.state.footerStyle}/>
        </BrowserRouter>
      </div>
    );
  }
}
