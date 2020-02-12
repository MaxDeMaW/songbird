import React from 'react';
import './selectorAnswer__btn.scss';

class SelectorAnswerBtn extends React.PureComponent {
  constructor(props) {
    super();
    this.onLabelClick = () => {this.checkAnswer()};
  }

  checkAnswer() {
    // console.log('Нажата:'+this.props.birdName);
    this.props.clickAnswer();
  };

  render() {
    let classNames = 'selector-answer__btn';
    // if (this.state.isClicked) classNames += ' correct';
    return <div className={classNames} onClick={this.onLabelClick}> <p>{this.props.birdName} </p></div>;
  }
}

export default SelectorAnswerBtn;