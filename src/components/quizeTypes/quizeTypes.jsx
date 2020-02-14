import React from 'react';
import './quizeTypes.scss';
import QuizeTypesElement from '../quizeTypesElement/quizeTypesElement';

class QuizeTypes extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const namesOfQuizes = this.props.quizesTypes.map((item, indx) => {
      return (
        <QuizeTypesElement name={item} currentStage={this.props.currentStage} key={indx} />
      );
    });

    return (
      <div className="quize-types">
        { namesOfQuizes }
      </div>
    );
  }
}

export default QuizeTypes;
