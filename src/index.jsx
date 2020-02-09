import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import QuizeTypesWrapper from './components/quizeTypesWrapper';
import QuizeTask from './components/quizeTask';
import SelectorAnswer from './components/selectorAnswer';
import BirdDescription from './components/birdDescription';

import QuizeNext from './components/quizeNext';
import './sass/main.scss';


function App() {

  return (
    <div className="main">
      <Header />
      <QuizeTypesWrapper />
      <QuizeTask />
      <div className="answer-container">
        <SelectorAnswer />
        <BirdDescription />
      </div>
      <QuizeNext />
    </div>
  );

}

const mountNode = document.getElementById('app');
ReactDOM.render(<App name="123123" />, mountNode);
