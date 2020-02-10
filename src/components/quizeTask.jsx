import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import QuizeTaskImage from './quizeTaskImage';

class QuizeTask extends React.PureComponent {
  render() {
    return (
      <div className="quize-task">
        <QuizeTaskImage />
        <div>
          <p>Ястреб</p>
          <AudioPlayer 
          src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
          autoPlayAfterSrcChange={false}
           />
        </div>
      </div>
    );
  }
}

export default QuizeTask;
