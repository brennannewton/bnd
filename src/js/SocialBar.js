// Components
import React from 'react';
import LinkedIn from '../img/SocialBar/linkedin.png';
import GitHub from '../img/SocialBar/github.png';
import YouTube from '../img/SocialBar/youtube.png';
import Instagram from '../img/SocialBar/instagram.png';
import SoundCloud from '../img/SocialBar/soundcloud.png';
import Spotify from '../img/SocialBar/spotify.png';
import Row from 'react-bootstrap/Row';

// Styles
import '../css/SocialBar.css';

export default class SocialBar extends React.Component {
  render() {
    return (
      <div className="SocialBar w-100">
        <a href="https://www.linkedin.com/in/brennan-newton-075238145/"
          target="_blank"
        >
          <img src={LinkedIn} alt="LinkedIn icon"/>
        </a>
        <a href="https://github.com/brennannewton" target="_blank">
          <img src={GitHub} alt="GitHub icon"/>
        </a>
        <a href="https://www.youtube.com/channel/UCdbh95QEtoahUYoLvq586-A"
          target="_blank"
        >
          <img src={YouTube} alt="YouTube icon"/>
        </a>
        <a href="https://www.instagram.com/newtonbrennan/" target="_blank">
          <img src={Instagram} alt="Instagram icon"/>
        </a>
        <a href="https://soundcloud.com/brennannewton" target="_blank">
          <img src={SoundCloud} alt="SoundCloud icon"/>
        </a>
      </div>
    )
  }
}