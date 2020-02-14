import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './quizeTask.scss';

class QuizeTask extends React.PureComponent {
  render() {
    return (
      <div className="quize-task">
        <img className="qiuze-task__image" src={this.props.quizeBirdImage} alt="quize bird" />
        <div className="quize-task__rightWrapper">
          <p>{this.props.quizeBirdName}</p>
          <AudioPlayer 
          src={this.props.voiceBirds}
          autoPlayAfterSrcChange={false}
           />
        </div>
      </div>
    );
  }
}

export default QuizeTask;
