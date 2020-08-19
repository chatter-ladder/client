import React, { Component } from 'react';

import Flashcard from '../../../components/Flashcard/Flashcard';

class Flashcards extends Component {

  state = {
    numFlashcards: 5
  }

  increaseFlashcardsHandler = () => {
    if (this.state.numFlashcards < 30) {
      this.setState(prevState => {
        return { numFlashcards: prevState.numFlashcards + 1 }
      })
    }
  }

  decreaseFlashcardsHandler = () => {
    if (this.state.numFlashcards > 5) {
      this.setState(prevState => {
        return { numFlashcards: prevState.numFlashcards - 1 }
      })
    }
  }

  render () {
    return (
      <>
        <h1>Flashcards page</h1>
    <div>{this.state.numFlashcards}</div>
        <button onClick={this.increaseFlashcardsHandler}>+</button>
        <button onClick={this.decreaseFlashcardsHandler}>-</button>
        <Flashcard />
      </>
    )
  }
}

export default Flashcards;
