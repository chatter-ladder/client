import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navigation from '../components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Flashcard from '../components/Flashcard/Flashcard';


// import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Route path='/' component={Home} />
        <Flashcard />
      </>
    );
  }
}

export default App;
