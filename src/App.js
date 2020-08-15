import React from 'react';
import './App.css';
import Question from './components/Question';
import Answers from './components/Answers';
import Description from './components/Description';
import Button from './components/Button';
import birdsData from './data/birdsData';
import correctAnswer from './data/correctAnswer.mp3';
import wrongAnswer from './data/wrongAnswer.mp3';
import victorySound from './data/victory.mp3';
import getRandomInteger from './utils/getRandomInteger';
import img from './images/logo-grad.png'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.lastDataItem = birdsData.length - 1;
    this.clickedItems = [];
    this.firstStateOfItems = Array(birdsData.length).fill('grey');
    this.state = {
      currentScore: 0,
      scoreIncrement: 5,
      level: '0',
      rightAnswer: String(getRandomInteger(0, this.lastDataItem)),
      chosenOption: null,
      isAnswerVisible: false,
      isActiveButton: false,
      stateOfItems: this.firstStateOfItems
    }
  }

  levelUp = () => {
    if (this.state.isActiveButton) {
      this.setState({
        level: String(+this.state.level + 1),
        rightAnswer: String(getRandomInteger(0, this.lastDataItem)),
      }, () => {
        this.clickedItems = [];
        this.setState({
          chosenOption: null,
          isActiveButton: false,
          isAnswerVisible: false,
          scoreIncrement: 5,
          stateOfItems: this.firstStateOfItems
        })
      })
    }
  }

  makeColored = (line, color) => {
    const newStateOfItems = this.state.stateOfItems.map(el => el);
    newStateOfItems[line] = "#d62c1a";
    (color === '#d62c1a') ? newStateOfItems[line] = "#d62c1a" : newStateOfItems[line] = "#00bc8c";
    this.setState({
      stateOfItems: newStateOfItems
    })
  }

  checkCorrectAnswer = (line) => {
    if (this.state.chosenOption === this.state.rightAnswer) {
      this.playAudio(correctAnswer);
      this.makeColored(line, '#00bc8c');
      this.setState({
        isActiveButton: true,
        isAnswerVisible: true,
        currentScore: this.state.currentScore + this.state.scoreIncrement,
      })
    } else {
      this.playAudio(wrongAnswer);
      this.makeColored(line, '#d62c1a');
      this.setState({
        scoreIncrement: this.state.scoreIncrement - 1,
      })
    }
  }

  handleClick = (line) => {
    this.setState({
      chosenOption: line,
    });
    if (!this.clickedItems.includes(line)) {
      this.clickedItems.push(line);
      this.setState({
        chosenOption: line,
      }, () => {
        this.checkCorrectAnswer(line);
      })
    }
  }

  updateApp = () => {
    this.setState({
      scoreIncrement: 5,
      level: '0',
      rightAnswer: String(getRandomInteger(0, this.lastDataItem)),
      currentScore: 0,
      chosenOption: null,
      isAnswerVisible: false,
      isActiveButton: false,
      stateOfItems: this.firstStateOfItems
    })
  }

  playAudio = (file) => {
    let audio = new Audio(file);
    audio.play();
  }

  render() {
    console.log('Для проверки Extra Scope: правильный вариант:', +this.state.rightAnswer + 1);
    if (+this.state.level === birdsData.length) {
      return (
        <div className='app-container'>
          <div>
            <h1>Поздравляем!</h1>
            <p>Вы прошли викторину и набрали {this.state.currentScore} из 30 возможных баллов</p>
          </div>
          <Button
            cb={this.updateApp}
            isActive='true'
            message='Попробовать ещё раз'
          />
        </div>
      )
    } else if (+this.state.currentScore === 30) {
      return (
        <div className='app-container'>
          <div>
            <h1>Поздравляем!</h1>
            <p>Вы прошли викторину и набрали максимальное количество баллав</p>
            <h2>Отличный результат</h2>
          </div>
          {this.playAudio(victorySound)}
        </div>
      )
    } else {
      return (
        <div className='app-container'>
          <Question
            level={this.state.level}
            visibility={this.state.isAnswerVisible}
            rightAnswer={this.state.rightAnswer}
          />
          <Answers
            level={this.state.level}
            cb={this.handleClick}
            currentState={this.state.stateOfItems}
          />
          <Description
            level={this.state.level}
            choise={this.state.chosenOption}
          />
          <Button
            cb={this.levelUp}
            isActive={this.state.isActiveButton}
            message='Следующий вопрос'
          />
          <section className="logo">
            <img className="logo-img" src={img} alt="logo-white"/>
            <h1>Егор Бадмаев</h1>
          </section>
        </div>
      )
    }
  }
}

export default App;
