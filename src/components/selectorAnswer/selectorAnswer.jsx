import React from 'react';
import SelectorAnswerBtn from '../selectorAnswerBtn/selectorAnswerBtn';
import './selectorAnswer.scss';

class SelectorAnswer extends React.PureComponent {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="selector-answer">
        <SelectorAnswerBtn birdName={this.props.birdName[0].toString()} clickAnswer={() => this.props.clickAnswer(0)} />
        <SelectorAnswerBtn birdName={this.props.birdName[1].toString()} clickAnswer={() => this.props.clickAnswer(1)} />
        <SelectorAnswerBtn birdName={this.props.birdName[2].toString()} clickAnswer={() => this.props.clickAnswer(2)} />
        <SelectorAnswerBtn birdName={this.props.birdName[3].toString()} clickAnswer={() => this.props.clickAnswer(3)} />
        <SelectorAnswerBtn birdName={this.props.birdName[4].toString()} clickAnswer={() => this.props.clickAnswer(4)} />
        <SelectorAnswerBtn birdName={this.props.birdName[5].toString()} clickAnswer={() => this.props.clickAnswer(5)} />
      </div>
    );
  }
}

export default SelectorAnswer;
