import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><NavLink activeClassName={classes.active} to='/'>HOME</NavLink></li>
        <li><NavLink activeClassName={classes.active} to='flashcards'>FLASHCARDS</NavLink></li>
        <li><NavLink activeClassName={classes.active} to='vocabulary'>VOCABULARY</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation;
