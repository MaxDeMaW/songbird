import React from 'react';

import Logo from './logo';


class Header extends React.PureComponent {
  constructor(props) {
    super();
  }


  
  render() {
    return (
      <div className="header">
        <Logo />
        <p className="score">Score:{this.props.points}</p>
      </div>
    );
  }
}

export default Header;
