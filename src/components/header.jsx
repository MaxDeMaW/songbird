import React from 'react';

import Logo from './logo';


class Header extends React.PureComponent {
  render() {
    return (
      <div className="header">
        <Logo />
        <p className="score">Score:0</p>
      </div>
    );
  }
}

export default Header;
