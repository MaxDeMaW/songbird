import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './birdDescription.scss';

class BirdDescription extends React.PureComponent {
  render() {
    let classNameInformer = 'bird-description__informer';
    let classNameDescription = 'bird-description__description';
    
    if (this.props.attemptGuess===0) {
      classNameDescription += ' disabled';
    } else {
      classNameInformer += ' disabled';
    }
    return (
      <div className="bird-description">
        <div className={classNameInformer}>
          <p>Прослушайте плеер и выберите название птицы</p>
        </div>

        <div className={classNameDescription}>
          <div className="quize-task">
          <img className="qiuze-task__image" src={this.props.quizeAnswerBirdInfo.image} alt="quize bird" />
          <div className="quize-task__name">
            <p>{this.props.quizeAnswerBirdInfo.name}</p>
            <p>{this.props.quizeAnswerBirdInfo.species}</p>
          </div>
        </div>
        <AudioPlayer 
            src={this.props.quizeAnswerBirdInfo.audio}
            autoPlayAfterSrcChange={false}
            />
        <p>{this.props.quizeAnswerBirdInfo.description}</p>
        </div>
      </div>
    );
  }
}

export default BirdDescription;
