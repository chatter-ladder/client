import React, { Component } from 'react';

import Flashcard from '../../../components/Flashcard/Flashcard';

const MINIMUM_FLASHCARDS = 5;
const MAXIMUM_FLASHCARDS = 30;

class Flashcards extends Component {

  state = {
    numFlashcards: MINIMUM_FLASHCARDS,
    countVocabList: 0,
    flashcardsVocab: [],
    showFlashcards: false,
    showFlashcardNumber: 0,
    progress: {
      numCorrect: 0,
      numIncorrect: 0,
      numRemaining: 0
    },
    flipped: false,
    transition: true
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

  startFlashcardsHandler = () => {

    const flashcardRequirements = {
      user_id: 1,
      number: this.state.numFlashcards
    }

    fetch('http://localhost:3001/flashcards', {
      method: 'POST',
      headers: {'Content-Type':'application/json', 'Accept': 'application/json'},
      body:JSON.stringify(flashcardRequirements)
    })
    .then(response => {
      console.log(response)
      if (response.ok) {
        return(response.json())
      }
      throw new Error("Network response wasn't ok")
    })
    .then(data => {
      let vocabData = []
      data.map(vocab => {
        let updatedVocab = {
          ...vocab,
          seen: false,
          correct: false,
          incorrect: false
        }
        vocabData.push(updatedVocab)
      })
      const updatedProgress = this.updateProgress(vocabData)
      this.setState({ flashcardsVocab: vocabData, showFlashcards: true, progress: updatedProgress })
    })
  }
  updateProgress = (vocabList) => {
    let updatedProgress = {
      numCorrect: 0,
      numIncorrect: 0,
      numRemaining: this.state.numFlashcards
    }
    vocabList.map(vocab => {
      if (vocab.seen) {
        updatedProgress.numRemaining--
      }
      if (vocab.correct) {
        updatedProgress.numCorrect++
      }
      if (vocab.incorrect) {
        updatedProgress.numIncorrect++
      }
    })
    return updatedProgress
  }

  correctHandler = () => {
    const updatedVocabList = this.state.flashcardsVocab.map((vocab, index) => {
      if (index === this.state.showFlashcardNumber) {
        return {
          ...vocab,
          seen: true,
          correct: true,
          incorrect: false
        }
      }
      return vocab
    })
    const updatedProgress = this.updateProgress(updatedVocabList)
    this.setState({ flashcardsVocab: updatedVocabList, progress: updatedProgress })
  }

  incorrectHandler = () => {
    const updatedVocabList = this.state.flashcardsVocab.map((vocab, index) => {
      if (index === this.state.showFlashcardNumber) {
        return {
          ...vocab,
          seen: true,
          correct: false,
          incorrect: true
        }
      }
      return vocab
    })
    const updatedProgress = this.updateProgress(updatedVocabList)
    this.setState({ flashcardsVocab: updatedVocabList, progress: updatedProgress })
  }

  nextFlashcardHandler = () => {
    this.setState(prevState => {
      return { showFlashcardNumber: prevState.showFlashcardNumber + 1, flipped: false, transition: false }
    })
  }

  previousFlashcardHandler = () => {
    this.setState(prevState => {
      return { showFlashcardNumber: prevState.showFlashcardNumber - 1, flipped: false, transition: false }
    })
  }

  flipHandler = () => {
    this.setState(prevState => ({
      flipped: !prevState.flipped,
      transition: true
    }));
  };

  render () {

    const nextDisabled = this.state.numFlashcards === this.state.showFlashcardNumber + 1;
    const previousDisabled = this.state.showFlashcardNumber === 0;

    return (
      <>
        <h1>Flashcards page</h1>
        {
          this.state.countVocabList > 5 && !this.state.showFlashcards
          ?
          <>
            <div>{this.state.numFlashcards}</div>
            <button onClick={this.decreaseFlashcardsHandler}>-</button>
            <button onClick={this.increaseFlashcardsHandler}>+</button>
            <button onClick={this.startFlashcardsHandler}>start</button>
          </>
          :
            this.state.showFlashcards
          ?
            <>
              <p>{this.state.progress.numCorrect} correct, {this.state.progress.numIncorrect} incorrect. {this.state.progress.numRemaining} Flashcards to go</p>
              <Flashcard 
                front={this.state.flashcardsVocab[this.state.showFlashcardNumber].word}
                back={this.state.flashcardsVocab[this.state.showFlashcardNumber].translation}
                flipped={this.state.flipped}
                clicked={this.flipHandler}
                transition={this.state.transition}
              />
              <button onClick={this.correctHandler}>Correct</button>
              <button onClick={this.incorrectHandler}>Incorrect</button>
              <button onClick={this.previousFlashcardHandler} disabled={previousDisabled}>Previous</button>
              <button onClick={this.nextFlashcardHandler} disabled={nextDisabled || !this.state.flashcardsVocab[this.state.showFlashcardNumber].seen}>Next</button>
              <button>Finish</button>
            </>
          :
          <p>You need to have at least 5 words in your vocab list. Please add more words on the Vocabulary page</p>
        }

      </>
    )
  }
}

export default Flashcards;
