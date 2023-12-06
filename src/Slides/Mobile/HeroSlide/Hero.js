import React, { Component } from 'react';
import NameAndJobTitle from './NameAndJobTitle';
import AboutMe from './AboutMe';
import logo1 from '../../../Assets/Images/Logo/logo.webp';
import logo2 from '../../../Assets/Images/Logo/okkoLogo.webp';

class Hero extends Component {
  render() {
    return (
      <React.Fragment>
       <img
          src={logo1}
          alt="web-you"
          style={{ position: 'absolute', top: 5, right: 5, width: '112px', height: '32px' }}
        />
        <img
          src={logo2}
          alt="Okko"
          style={{ position: 'absolute', top: 7, right: 130, width: '30px', height: '30px' }}
        />
        <NameAndJobTitle />
        <AboutMe />
      </React.Fragment>
    );
  }
}

export default Hero;
