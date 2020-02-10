import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import QuizeTypes from './components/quizeTypes/quizeTypes';
import QuizeTask from './components/quizeTask';
import SelectorAnswer from './components/selectorAnswer/selectorAnswer';
import BirdDescription from './components/birdDescription';

import QuizeNext from './components/quizeNext/quizeNext';
import birdsData from './assets/birdData'
import './sass/main.scss';


class App extends React.Component {
  constructor() {
    super();
    this.stage = 0;
    this.maxStages = 0;
    this.score = 0;
    this.data = birdsData;
    this.typesOfQuize = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
    this.state = {
      points: 0,
      birds: this.getBirdsListToQuize(0)
    };
    this.initializeNewGame();
  }

  initializeNewGame() {
    console.log('NewGame Start!');

      this.maxStages = this.data.length-1;

      this.getBirdsListToQuize(this.stage);
      console.log( this.getBirdsListToQuize(this.stage));

  }

  getBirdsListToQuize(stageQuize) {
    // let quizeNumber;
    // if (stageQuize>this.data.length-1) {
    //   quizeNumber = 1;
    // } else {
    //   quizeNumber = stageQuize;
    // }

    //получить количество квизов
    // console.log("Количество птиц " + this.data.length);

    //птицы в нужном квизе
    const listBirdsNameInQuize = this.data[stageQuize].birds.map(({name})=>name);

    return listBirdsNameInQuize;
  }

  nextQuize() {
    if (this.stage<this.maxStages) { 
      this.stage++;
    } else {
      this.stage=0;
    }
  console.log(this.stage);
  console.log( this.getBirdsListToQuize(this.stage));

    //поменять массив названий птиц в стейт
    this.setState((state) => {
      return {
        birds: this.getBirdsListToQuize(this.stage)
      };
    });

    // console.log('from state: '+this.state.birds);
  }

  addScore() {
    this.setState((state) => {
      return {points: state.points + 1};
    });
    this.score++;
    this.getBirdsListToQuize(1);

  }

  render() {
    return (
      <div className="main">
        <Header points={this.state.points}/>
        <QuizeTypes quizesTypes={this.typesOfQuize} />
        <QuizeTask />
        <div className="answer-container">
          <SelectorAnswer birdName={this.state.birds}/>
          <BirdDescription />
        </div>
        <QuizeNext score={1} nextQuize={()=> this.nextQuize()}/>
      </div>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App name="SONGBIRD" />, mountNode);
