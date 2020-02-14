import React from 'react';
import SelectorAnswerBtn from '../selectorAnswerBtn/selectorAnswerBtn';
import './selectorAnswer.scss';

class SelectorAnswer extends React.PureComponent {
  constructor(props) {
    super();
  }

  render() {
    const namesOfQuizes = this.props.birdName.map((item, indx) => {
      return (
        <SelectorAnswerBtn birdName={item.toString()}
                           clickAnswer={() => this.props.clickAnswer(indx)}
                           stateButtons={this.props.stateButtons[indx]}
                           key={indx}/>
      );
    }
    );

    return (
      <div className="selector-answer">
        {namesOfQuizes}
      </div>
    );
  }
}

export default SelectorAnswer;
