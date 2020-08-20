import React from 'react';
import classes from './Flashcard.module.css';

const Flashcard = (props) => {

  const flashcardClasses = () => {
    let updatedClasses = [ classes.Flashcard ]
    if (props.flipped ) {
      updatedClasses.push(classes.Flipped)
    }
    if (props.transition) {
      updatedClasses.push(classes.Transition)
    }
    return updatedClasses.join(" ");
  }

  return(
    <div className={classes.Container}>
      <div className={flashcardClasses()} onClick={props.clicked}>
        <div className={`${classes.Pattern} ${classes.Front}`}>
          <div className={classes.Content}>
            <h4>{props.front}</h4>
          </div>
        </div>
        <div className={`${classes.Pattern} ${classes.Back}`}>
          <div className={classes.Content}>
            <h4>{props.back}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
