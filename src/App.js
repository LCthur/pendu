import React, { Component } from 'react'
import './App.css';
import Letter from './Letter'
import RestartButton from './RestartButton'

const PHRASES = ["pendu", "test", "open", "classroom", "entrainement"];

class App extends Component {

  
  constructor(props) {
    super(props)

    this.state = {
      phrase: PHRASES[Math.floor(Math.random()*PHRASES.length)],
      firstHalfAlphabet: ("abcdefghijklm").split(""),
      secondHalfAlphabet: ("nopqrstuvwxyz").split(""),
      usedLetters: "",
      count: 0,
    }
  }

  // besoin de re render à chaque clic donc on bind this en tranformant cette fonction en fat arrow func
  computeDisplay = (phrase, usedLetters) => {
    return phrase.replace(/\w/g,
      (letter) => (usedLetters.includes(letter) ? ` ${letter} ` : ' _ ')
    )
  }

  restartGame = () => {
    this.setState({
      phrase: PHRASES[Math.floor(Math.random()*PHRASES.length)],
      firstHalfAlphabet: ("abcdefghijklm").split(""),
      secondHalfAlphabet: ("nopqrstuvwxyz").split(""),
      usedLetters: "",
      count: 0,
    })
  }

  handleLetterClick = (letter) => {
    this.setState({
      usedLetters: `${this.state.usedLetters}${letter}`,
      count: this.state.count + 1
    }) 
  }

  won = (phrase) => {
    if (!phrase.includes('_')){
      return true
    }
  }

  render() {
    return (
      <div>
        <div className="display">
          <h1 className="title">Mot à trouver</h1>
          <h2>{this.computeDisplay(this.state.phrase, this.state.usedLetters )}</h2>
          <h3>Nombre de tentatives: {this.state.count}</h3>
        </div>
        <div className="alphabet">
          <div>
            {this.state.firstHalfAlphabet.map((letter) => 
              <Letter className={this.state.usedLetters.includes(letter) ? "clicked" : "not-clicked"} letter={letter} key={letter} onClick={this.handleLetterClick} />
            )}
          </div>
          <div>
            {this.state.secondHalfAlphabet.map((letter) => 
              <Letter className={this.state.usedLetters.includes(letter) ? "clicked" : "not-clicked"} letter={letter} key={letter} onClick={this.handleLetterClick} />
            )}
          </div>
        </div>
        <div>
          <h1 className="win">{this.won(this.computeDisplay(this.state.phrase, this.state.usedLetters)) && <div>Bravo ! Vous avez gagné en {this.state.count} coups<p><RestartButton onClick={this.restartGame}/></p></div>}</h1>
        </div>
      </div>
    );
  }
}

export default App