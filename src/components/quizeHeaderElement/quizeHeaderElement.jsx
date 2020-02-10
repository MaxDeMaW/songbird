import React from 'react';
import './quizeHeaderElement.scss';


class QuizeHeaderElement extends React.Component {
  constructor() {
    super();
    this.onLabelClick = () => {console.log(this.props.name)};
  }
  render() {
    return (
    <div className="qiuze-header__element"
    onClick={this.onLabelClick}>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default QuizeHeaderElement;
