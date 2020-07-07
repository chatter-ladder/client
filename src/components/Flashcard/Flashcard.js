import React, { Component } from 'react';
import classes from './Flashcard.module.css';

class Flashcard extends Component {

  state = {
    flipped: false,
  }

  flipHandler = () => {
    this.setState(prevState => ({
      flipped: !prevState.flipped
    }));
  };

  flashcardClasses = () => {
    if (this.state.flipped) {
      return `${classes.Flashcard} ${classes.Flipped}`
    }
    return classes.Flashcard
  }

  render() {
    return(
      <div className={classes.Container}>
        <div className={this.flashcardClasses()} onClick={this.flipHandler}>
          <div className={`${classes.Pattern} ${classes.Front}`}>
            <div className={classes.Content}>
              <h4>This is the front</h4>
            </div>
          </div>
          <div className={`${classes.Pattern} ${classes.Back}`}>
            <div className={classes.Content}>
              <h4>And this is the Back</h4>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Flashcard;
