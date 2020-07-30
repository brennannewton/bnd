// Components
import React from 'react';

// Styles
import '../css/Footer.css';

export default class Footer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      footerStyle: "",
    };
  }

  render() {
    return (
      <div className={`${this.state.footerStyle} w-100`}>
        <h1 id="Email">thebndesigns@gmail.com</h1>
      </div>
    )
  }
}