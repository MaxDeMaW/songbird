import React from 'react';
import './quizeTypesElement.scss';


class QuizeTypesElement extends React.Component {
  render() {
    const classNames = !(this.props.currentStage===this.props.name) ? 'qiuze-types__element' : 'qiuze-types__element active';
    return (
    <div className={classNames}>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default QuizeTypesElement;
