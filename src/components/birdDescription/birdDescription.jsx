import React from 'react';

import QuizeTask from '../quizeTask/quizeTask';
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
        <QuizeTask />
        </div>
      </div>
    );
  }
}

export default BirdDescription;
