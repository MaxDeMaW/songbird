import React from 'react';

import img from '../../assets/images/logo.svg';

import './header.scss';

class Header extends React.PureComponent {
  constructor(props) {
    super();
  }
  
  render() {
    return (
      <div className="header">
        <img className="header__logo" src={img} alt="img" />
        <p className="score">Score:{this.props.points}</p>
      </div>
    );
  }
}

export default Header;
