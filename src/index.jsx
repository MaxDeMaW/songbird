import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/header';
import QuizeTypes from './components/quizeTypes/quizeTypes';
import QuizeTask from './components/quizeTask/quizeTask';
import SelectorAnswer from './components/selectorAnswer/selectorAnswer';
import BirdDescription from './components/birdDescription/birdDescription';
import birdImage from './assets/images/bird.jpg';

import AudioPlayer from 'react-h5-audio-player';

import QuizeNext from './components/quizeNext/quizeNext';
import birdsData from './assets/birdData'
import './sass/main.scss';

import guess from './assets/audio/guess.mp3';
import notguess from './assets/audio/notguess.mp3';


class App extends React.Component {
  constructor() {
    super();
    

    this.stage = 0;
    this.maxStages = 0;
    this.score = 0;
    this.data = birdsData;
    this.uncnownBird = null;
    this.typesOfQuize = ['Разминка', 'Воробьиные', 'Лесные', 'Певчие', 'Хищные', 'Морские'];
    this.isFinish = false;
    this.state = {
      points: 0,
      birds: this.getBirdsListToQuize(0),
      currentStage: this.typesOfQuize[this.stage],
      voiceBirds: this.data[this.stage].birds[this.getRandomBird()].audio,
      quizeBirdName: '***',
      quizeBirdImage: birdImage,
      quizeAnswerBirdInfo: this.data[this.stage].birds[0],
      isActiveNextStage: false,
      attemptGuess: 0,
      soundEffect: '',
      stateButtons: [0,0,0,0,0,0]
    };
    this.initializeNewGame();
  }

  initializeNewGame() {
      this.maxStages = this.data.length-1;
      this.getBirdsListToQuize(this.stage);
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
    return this.uncnownBird;
  }

  getBirdsListToQuize(stageQuize) {
    //птицы в нужном квизе
    const listBirdsNameInQuize = this.data[stageQuize].birds.map(({name})=>name);
    return listBirdsNameInQuize;
  }

  nextQuize() {
    if (this.stage<this.maxStages) { 
      this.stage++;
      this.getRandomBird();

    } else {
      this.isFinish = true;
      this.stage=0;
    }

    //обновить кнопки
    let eptyState = [0,0,0,0,0,0];
    this.setState((state) => {
      return {
        stateButtons: eptyState
      };
    });

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
        // загрузить звук птицы которую угадываем
        voiceBirds: this.data[this.stage].birds[this.uncnownBird].audio,
        // обнуляем количество попыток угадывания для вычисления очков
        attemptGuess: 0
      };
    });
  }

  setActiveButton(numberElement, stat) {
    let arrayState = [...this.state.stateButtons];
    arrayState[numberElement] = stat;

    //обновить state
    this.setState((state) => {
      return {
        stateButtons: arrayState
      };
    });
  }

  addPoints() {
    const addingScore = (this.state.attemptGuess>4) ? 0 : 5 - this.state.attemptGuess;
    return addingScore;
  }

  clickAnswerBtn(bird) {
    
    this.setState((state) => {
      return {
        attemptGuess: this.state.attemptGuess + 1,
        quizeAnswerBirdInfo: this.data[this.stage].birds[bird],
        soundEffect: guess
      };
    });

    if (bird === this.uncnownBird) 
    {
      this.setActiveButton(bird, 1);

      //показать угаданную птицу
      this.showBird(bird);
      
      // this.getRandomBird();
      this.setState((state) => {
        return {
          isActiveNextStage : true,
          // voiceBirds: this.data[this.stage].birds[this.uncnownBird].audio,
          points: state.points + this.addPoints(),
          attemptGuess: 6
        };
      });
    } else {
      this.setActiveButton(bird, 2);
    }
  };

  addScore() {
    this.setState((state) => {
      return {points: state.points + 1};
    });
    this.score++;
    this.getBirdsListToQuize(1);

  }

  restartGame() {
    document.location.reload(true);
  }

  render() {
    let classNameQuize = 'quize';
    let classNameCongratulate = 'quize-congratulate';
    let extraCongratilation = (this.state.points>24) ? 'AWESOME! Теперь ты знаешь кто чиркнул! 100% из 100!' : 'Совершенствуйся дальше :)';
    if (this.isFinish) {
      classNameQuize = ' hidden';
      classNameCongratulate = 'quize-congratulate';
    } else {
      classNameQuize = 'quize';
      classNameCongratulate = 'quize-congratulate hidden';
    }
    return (
      <div className="main">
        <Header points={this.state.points}/>
        <div className={classNameQuize}>
          <QuizeTypes quizesTypes={this.typesOfQuize}  currentStage={this.state.currentStage} />
          <QuizeTask voiceBirds={this.state.voiceBirds} quizeBirdName={this.state.quizeBirdName} quizeBirdImage={this.state.quizeBirdImage}/>
          <div className="answer-container">
            <SelectorAnswer birdName={this.state.birds}
                            clickAnswer={(event) => this.clickAnswerBtn(event)}
                            stateButtons={this.state.stateButtons}/>
            <BirdDescription attemptGuess={this.state.attemptGuess} quizeAnswerBirdInfo={this.state.quizeAnswerBirdInfo}/>
          </div>
          <QuizeNext score={1} isActiveNextStage={this.state.isActiveNextStage} nextQuize={()=> this.nextQuize()}/>
        </div>
        <div className={classNameCongratulate}>
          <p>Поздравляем! Вы выиграли!!! Вы набрали: {this.state.points} {extraCongratilation}</p>
          <p className='quize-restart' onClick = {() => this.restartGame()}>Начать игру заново</p>
        </div>
        <div style={{display: 'none'}}>
          {/* <AudioPlayer autoPlay src={this.state.soundEffect}/> */}
        </div>
      </div>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App name="SONGBIRD" />, mountNode);
