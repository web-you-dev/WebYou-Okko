import React, { Component } from 'react';
import NameAndJobTitle from './NameAndJobTitle';
import AboutMe from './AboutMe';
import logo1 from '../../../Assets/Images/Logo/logo.webp';
import logo2 from '../../../Assets/Images/Logo/okkoLogo.webp';

class Hero extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Логотип компании 1 */}
        <img
          src={logo1}
          alt="Логотип Компании 1"
          style={{
            position: 'absolute',
            bottom: '2%',
            left: '7%',
            width: '10%',  // Регулируйте размер относительно ширины экрана
            height: 'auto', // Сохраняйте пропорции
          }}
        />

        {/* Логотип компании 2 */}
        <img
          src={logo2}
          alt="Логотип Компании 2"
          style={{
            position: 'absolute',
            bottom: '2%',
            left: '2%',
            width: '4%',  // Регулируйте размер относительно ширины экрана
            height: 'auto', // Сохраняйте пропорции
          }}
        />

        {/* Логотип компании 2 */}
       

        <NameAndJobTitle />
        <AboutMe />
      </React.Fragment>
    );
  }
}

export default Hero;
