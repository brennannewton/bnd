// Components
import React from 'react';
import LinkedIn from '../img/linkedin.png';
import GitHub from '../img/github.png';
import YouTube from '../img/youtube.png';
import Instagram from '../img/instagram.png';
import SoundCloud from '../img/soundcloud.png';
import Spotify from '../img/spotify.png';

// Styles
import '../css/SocialBar.css';

export default class SocialBar extends React.Component {
  render() {
    return (
      <div className="SocialBar w-100">
        <img src={LinkedIn} alt="LinkedIn icon"/>
        <img src={GitHub} alt="GitHub icon"/>
        <img src={YouTube} alt="YouTube icon"/>
        <img src={Instagram} alt="Instagram icon"/>
        <img src={SoundCloud} alt="SoundCloud icon"/>
        <img src={Spotify} alt="Spotify icon"/>
      </div>
    )
  }
}