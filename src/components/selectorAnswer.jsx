import React from 'react';
import SelectorAnswerBtn from './selectorAnswerBtn';

class SelectorAnswer extends React.PureComponent {
  render() {
    return (
      <div className="selector-answer">
        <SelectorAnswerBtn />
        <SelectorAnswerBtn />
        <SelectorAnswerBtn />
        <SelectorAnswerBtn />
        <SelectorAnswerBtn />
      </div>
    );
  }
}

export default SelectorAnswer;
