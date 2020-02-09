import React from 'react';

import QuizeTaskImage from './quizeTaskImage';

class QuizeTask extends React.PureComponent {
  render() {
    return (
      <div className="quize-task">
        <QuizeTaskImage />
        <div>
          <p>Ястреб</p>
          <p>Музыка</p>
        </div>
      </div>
    );
  }
}

export default QuizeTask;
