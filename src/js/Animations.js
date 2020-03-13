/* eslint-disable jsx-a11y/iframe-has-title */

// Components
import React from 'react';

// Styles
import '../css/Animations.css';

export default class Animations extends React.Component {
  render() {
    return (
      <div className="Animations d-flex flex-column justify-content-center">
        <div id="outer-box" className="d-flex justify-content-center align-self-center mt-5 mb-4">
          <div id="inner-box" className="d-flex justify-content-center p-3 pt-4">
            <h1>Animations</h1>
          </div>
        </div>
        <div className="d-flex flex-column align-self-center">
          <iframe 
            width="854"
            height="480"
            src="https://www.youtube.com/embed/Yd04u_iSzXs"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
          <iframe 
            width="854"
            height="480"
            src="https://www.youtube.com/embed/G3rbz1-R8B0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
          <iframe
            width="854"
            height="480"
            src="https://www.youtube.com/embed/wwpHld7C7A0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    )
  }
}