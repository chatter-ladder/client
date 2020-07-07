import React from 'react';
import classes from './Flashcard.module.css';

const Flashcard = () => {
  return(
    <div className={classes.Flashcard}>
      <div className={classes.Pattern}>
        <div className={classes.Content}>
          <h4>hola</h4>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
