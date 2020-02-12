import React from 'react';
import './quizeHeaderElement.scss';


class QuizeHeaderElement extends React.Component {
  constructor() {
    super();
    this.onLabelClick = () => {console.log(this.props.name)};
  }
  render() {
    console.log(this.props.currentStage);
    const classNames = !(this.props.currentStage===this.props.name) ? 'qiuze-header__element' : 'qiuze-header__element active';
 
    return (
    <div className={classNames}
    onClick={this.onLabelClick}>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default QuizeHeaderElement;
