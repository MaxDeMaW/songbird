import React from 'react';
import './quizeNext.scss';

class QuizeNext extends React.Component {
  constructor(props) {
    super();
  }

  nextQuizeClick = () => {
    if (this.props.isActiveNextStage) this.props.nextQuize();
  } 

  render() {
    
    const classNames = (this.props.isActiveNextStage) ? 'qiuze-nextLevel' : 'qiuze-nextLevel isDisabled';

    return <div className={classNames}
                onClick = {this.nextQuizeClick}>
                Next Level
          </div>;
  }
}

export default QuizeNext;