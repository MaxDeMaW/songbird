import React from 'react';
import birdImage from '../assets/images/bird.jpg';


class QuizeTaskImage extends React.PureComponent {
  render() {
    return <img className="qiuze-task__image" src={birdImage} alt="quize bird" />;
  }
}

export default QuizeTaskImage;
