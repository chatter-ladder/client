import React, { Component } from 'react';
import classes from './Flashcard.module.css';

class Flashcard extends Component {

  flashcardClasses = () => {
    let updatedClasses = [ classes.Flashcard ]
    if (this.props.flipped ) {
      updatedClasses.push(classes.Flipped)
    }
    if (this.props.transition) {
      updatedClasses.push(classes.Transition)
    }
    return updatedClasses.join(" ");
  }

  render() {
    return(
      <div className={classes.Container}>
        <div className={this.flashcardClasses()} onClick={this.props.clicked}>
          <div className={`${classes.Pattern} ${classes.Front}`}>
            <div className={classes.Content}>
              <h4>{this.props.front}</h4>
            </div>
          </div>
          <div className={`${classes.Pattern} ${classes.Back}`}>
            <div className={classes.Content}>
              <h4>{this.props.back}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Flashcard;
