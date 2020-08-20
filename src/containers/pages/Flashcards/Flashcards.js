import React, { Component } from 'react';

import Flashcard from '../../../components/Flashcard/Flashcard';

const MINIMUM_FLASHCARDS = 5;
const MAXIMUM_FLASHCARDS = 30;

class Flashcards extends Component {

  state = {
    numFlashcards: MINIMUM_FLASHCARDS
  }

  componentDidMount () {
    // fetch from server the number of vocab words user has in database
  }

  increaseFlashcardsHandler = () => {
    if (this.state.numFlashcards < MAXIMUM_FLASHCARDS) {
      this.setState(prevState => {
        return { numFlashcards: prevState.numFlashcards + 1 }
      })
    }
  }

  decreaseFlashcardsHandler = () => {
    if (this.state.numFlashcards > MINIMUM_FLASHCARDS) {
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
