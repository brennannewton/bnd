// Components
import React from 'react';

// Styles
import '../css/Graphics.css';

export default class Graphics extends React.Component {
  render() {
    return (
      <div className="Graphics d-flex justify-content-center">
        <div id="outer-box" className="d-flex justify-content-center mb-4">
          <div id="inner-box" className="d-flex justify-content-center p-3 pt-4">
            <h1>Graphics</h1>
          </div>
        </div>
      </div>
    )
  }
}