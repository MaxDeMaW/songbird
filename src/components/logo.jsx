import React from 'react';
import img from '../assets/images/logo.svg';


class Logo extends React.PureComponent {
  render() {
    return <img className="header__logo" src={img} alt="img" />;
  }
}

export default Logo;
