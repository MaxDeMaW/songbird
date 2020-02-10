import React from 'react';
import './selectorAnswer__btn.scss';

class SelectorAnswerBtn extends React.PureComponent {

  render() {
    return <div className="selector-answer__btn"> <p>{this.props.birdName} </p></div>;
  }
}

export default SelectorAnswerBtn;
