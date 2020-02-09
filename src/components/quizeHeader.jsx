import React from 'react';

class QuizeHeader extends React.PureComponent {
  render() {
    return <div className="qiuze-types__header">
        {this.props.txt}
      </div>;
  }
}

export default QuizeHeader;
