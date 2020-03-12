// Components
import React from 'react';
import LinkedIn from '../img/SocialBar/linkedin.png';
import GitHub from '../img/SocialBar/github.png';
import YouTube from '../img/SocialBar/youtube.png';
import Instagram from '../img/SocialBar/instagram.png';
import SoundCloud from '../img/SocialBar/soundcloud.png';
import Spotify from '../img/SocialBar/spotify.png';

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