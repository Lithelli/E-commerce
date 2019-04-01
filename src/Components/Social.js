import React, { Component } from 'react'
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.png';
import Instagram from '../assets/instagram.png';

export default class Social extends Component {
  render() {
    return (
      <div className="SocialInfo">
        <img src={Facebook} alt="facebook logo"/>
        <img src={Twitter} alt="twitter logo"/>
        <img src={Instagram} alt="instagram logo"/>
      </div>
    )
  }
}
