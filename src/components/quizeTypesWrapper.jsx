import React from 'react';
import QuizeHeader from './quizeHeader';

class QuizeTypesWrapper extends React.PureComponent {
  render() {
    return (
      <div className="qiuze-types">
        <QuizeHeader txt="11" />
        <QuizeHeader txt="22" />
        <QuizeHeader txt="33" />
        <QuizeHeader txt="44" />
        <QuizeHeader txt="55" />
      </div>
    );
  }
}

export default QuizeTypesWrapper;
