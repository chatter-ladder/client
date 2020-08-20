import React, { Component } from 'react';

import Flashcard from '../../../components/Flashcard/Flashcard';

const MINIMUM_FLASHCARDS = 5;
const MAXIMUM_FLASHCARDS = 30;

class Flashcards extends Component {

  state = {
    numFlashcards: MINIMUM_FLASHCARDS,
    countVocabList: 0
  }

  componentDidMount () {
    const user_id = 1;
    fetch(`http://localhost:3001/users/${user_id}/vocabulary/count`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error("Network response wasn't ok")
      })
      .then(data => this.setState({ countVocabList: data }))
  }

  increaseFlashcardsHandler = () => {
    if (this.state.numFlashcards < Math.min(MAXIMUM_FLASHCARDS, this.state.countVocabList)) {
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
        {
          this.state.countVocabList > 5
          ?
          <>
            <div>{this.state.numFlashcards}</div>
            <button onClick={this.increaseFlashcardsHandler}>+</button>
            <button onClick={this.decreaseFlashcardsHandler}>-</button>
          </>
          :
          <p>You need to have at least 5 words in your vocab list. Please add more words on the Vocabulary page</p>
        }

        <Flashcard />
      </>
    )
  }
}

export default Flashcards;
