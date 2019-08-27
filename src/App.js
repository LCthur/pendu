import React, { Component } from 'react'
import './App.css';
import Letter from './Letter'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      phrase: "pendu",
      alphabet: ("abcdefghijklmnopqrstuvwxyz").split(""),
      usedLetters: ""
    }
  }

  // besoin de re render à chaque clic donc on bind this en tranformant cette fonction en fat arrow func
  computeDisplay = (phrase, usedLetters) => {
    return phrase.replace(/\w/g,
      (letter) => (usedLetters.includes(letter) ? letter : ' _ ')
    )
  }

  handleLetterClick = (letter) => {
    this.setState({
      usedLetters: `${this.state.usedLetters}${letter}`
    })
  }

  render() {
    return (
      <div>
        <div className="display">
          {this.computeDisplay(this.state.phrase, this.state.usedLetters )}
        </div>
        <div className="alphabet">
          {this.state.alphabet.map((letter) => 
              <Letter letter={letter} key={letter} onClick={this.handleLetterClick} />
            )}
        </div>
      </div>
    );
  }
}

export default App