import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navigation from '../components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Flashcards from './pages/Flashcards/Flashcards';
import Vocabulary from './pages/Vocabulary/Vocabulary';

import Flashcard from '../components/Flashcard/Flashcard';


// import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
          <Route path='/' exact component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/flashcards' component={Flashcards} />
          <Route path='/vocabulary' component={Vocabulary} />
        <Flashcard />
      </>
    );
  }
}

export default App;
