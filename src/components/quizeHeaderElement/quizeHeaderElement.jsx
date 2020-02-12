import React from 'react';
import './quizeHeaderElement.scss';


class QuizeHeaderElement extends React.Component {
  render() {
    const classNames = !(this.props.currentStage===this.props.name) ? 'qiuze-header__element' : 'qiuze-header__element active';
    return (
    <div className={classNames}>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default QuizeHeaderElement;
