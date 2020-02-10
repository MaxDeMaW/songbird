import React from 'react';
import './quizeTypes.scss';
import QuizeHeaderElement from '../quizeHeaderElement/quizeHeaderElement';

class QuizeTypes extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="quize-types">
        <QuizeHeaderElement name={this.props.quizesTypes[0]} />
        <QuizeHeaderElement name={this.props.quizesTypes[1]} />
        <QuizeHeaderElement name={this.props.quizesTypes[2]} />
        <QuizeHeaderElement name={this.props.quizesTypes[3]} />
        <QuizeHeaderElement name={this.props.quizesTypes[4]} />
        <QuizeHeaderElement name={this.props.quizesTypes[5]} />
      </div>
    );
  }
}

export default QuizeTypes;
