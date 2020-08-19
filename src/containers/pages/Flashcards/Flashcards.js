import React, { Component } from 'react';

import Flashcard from '../../../components/Flashcard/Flashcard';

class Flashcards extends Component {

  state = {
    numFlashcards: 5
  }

  render () {
    return (
      <>
        <h1>Flashcards page</h1>
    <div>{this.state.numFlashcards}</div>
        <button>+</button>
        <button>-</button>
        <Flashcard />
      </>
    )
  }
}

export default Flashcards;
