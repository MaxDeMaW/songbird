import React from 'react';
import SelectorAnswerBtn from '../selectorAnswerBtn/selectorAnswerBtn';
import './selectorAnswer.scss';

class SelectorAnswer extends React.PureComponent {

  render() {
    return (
      <div className="selector-answer">
        <SelectorAnswerBtn birdName={this.props.birdName[0].toString()}/>
        <SelectorAnswerBtn birdName={this.props.birdName[1].toString()}/>
        <SelectorAnswerBtn birdName={this.props.birdName[2].toString()}/>
        <SelectorAnswerBtn birdName={this.props.birdName[3].toString()}/>
        <SelectorAnswerBtn birdName={this.props.birdName[4].toString()}/>
      </div>
    );
  }
}

export default SelectorAnswer;
