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

  containerClasses = () => {
    if (this.state.flipped) {
      return `${classes.Flashcard} ${classes.Flipped}`
    }
    return classes.Flashcard
  }

  render() {
    return(
      <div className={classes.Container}>
        <div className={this.containerClasses()} onClick={this.flipHandler}>
          <div className={`${classes.Pattern} ${classes.Front}`}>
            <h4>Front</h4>
          </div>
          <div className={`${classes.Pattern} ${classes.Back}`}>
            <h4>Back</h4>
          </div>
        </div>
      </div>
    );
  };
};

export default Flashcard;
