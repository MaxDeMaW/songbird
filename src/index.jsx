import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/header';
import QuizeTypes from './components/quizeTypes/quizeTypes';
import QuizeTask from './components/quizeTask/quizeTask';
import SelectorAnswer from './components/selectorAnswer/selectorAnswer';
import BirdDescription from './components/birdDescription/birdDescription';
import birdImage from './assets/images/bird.jpg';

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
    this.uncnownBird = null;
    this.typesOfQuize = ['Разминка', 'Воробьиные', 'Лесные', 'Певчие', 'Хищные', 'Морские'];
    this.state = {
      points: 0,
      birds: this.getBirdsListToQuize(0),
      currentStage: this.typesOfQuize[this.stage],
      voiceBirds: this.data[this.stage].birds[0].audio,
      quizeBirdName: '***',
      quizeBirdImage: birdImage,
      quizeAnswerBirdInfo: this.data[this.stage].birds[0],
      isActiveNextStage: false,
      attemptGuess: 0
    };
    this.initializeNewGame();
  }



  initializeNewGame() {
    console.log('NewGame Start!');

      this.maxStages = this.data.length-1;

      this.getBirdsListToQuize(this.stage);
      console.log( this.getBirdsListToQuize(this.stage));

      this.getRandomBird();
  

  }

  //рассекретить птицу
  showBird(bird) {
    // в стейте сохранить название угаданной птицы
    this.setState((state) => {
      return {
        quizeBirdName: this.data[this.stage].birds[bird].name,
        quizeBirdImage: this.data[this.stage].birds[bird].image
      };
    });

  }

  //показать инфо о птице в ответе
  showInfoAboutBird() {

  }

  getRandomBird() {
    //Получить
    this.uncnownBird = Math.floor(Math.random() * Math.floor(4));
    console.log('Задумана птица:'+this.data[this.stage].birds[this.uncnownBird].name);
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
    console.log(this.getBirdsListToQuize(this.stage));
    this.setState((state) => {
      return {
        //поменять массив названий птиц в стейт
        birds: this.getBirdsListToQuize(this.stage),
        //поменять
        currentStage: this.typesOfQuize[this.stage],
        // скрыть значение загаданной птицы
        quizeBirdName: '***',
        // сделать неактивным кнопку следующий уровень
        isActiveNextStage: false,
        // обнулить количество попыток угадывания
        quizeBirdImage: birdImage,
        attemptGuess: 0
      };
    });

    console.log('TODO скрытые значки птицы');
    console.log('TODO деактивация кнопки');

    // console.log('from state: '+this.state.birds);
  }

  clickAnswerBtn(bird) {
    this.setState((state) => {
      return {
        attemptGuess: this.state.attemptGuess + 1
      };
    });


    this.setState((state) => {
      return {
        quizeAnswerBirdInfo: this.data[this.stage].birds[bird]
      };
    });

    if (bird === this.uncnownBird) 
    {
      console.log('УГАДАЛИ!!!');

      this.showBird(bird);

      console.log('TODO показать птицу в верху');
    
      this.getRandomBird();

      console.log('TODO загрузить звук');  
      this.setState((state) => {
        return {
          isActiveNextStage : true,
          voiceBirds: this.data[this.stage].birds[this.uncnownBird].audio,
          points: state.points + 5 -state.attemptGuess
        };
      });
    }
    console.log(bird);
  };

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
        <QuizeTypes quizesTypes={this.typesOfQuize}  currentStage={this.state.currentStage} />
        <QuizeTask voiceBirds={this.state.voiceBirds} quizeBirdName={this.state.quizeBirdName} quizeBirdImage={this.state.quizeBirdImage}/>
        <div className="answer-container">
          <SelectorAnswer birdName={this.state.birds}
                          clickAnswer={(event) => this.clickAnswerBtn(event)}/>
          <BirdDescription attemptGuess={this.state.attemptGuess} quizeAnswerBirdInfo={this.state.quizeAnswerBirdInfo}/>
        </div>
        <QuizeNext score={1} isActiveNextStage={this.state.isActiveNextStage} nextQuize={()=> this.nextQuize()}/>
      <p>{this.state.voiceBirds}</p>
      </div>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App name="SONGBIRD" />, mountNode);
