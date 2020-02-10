import React from 'react';
import './quizeNext.scss';

class QuizeNext extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isActive : "false" 
    };

  }

  nextQuizeClick = () => {
    this.props.nextQuize();
  } 

  render() {
    
    const classNames = (this.state.isActive) ? 'qiuze-nextLevel' : 'qiuze-nextLevel isDisabled';

    return <div className={classNames}
                onClick = {this.nextQuizeClick}>
      Next Level
      </div>;
  }
}

export default QuizeNext;