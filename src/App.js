import React, { Component } from 'react';
import Slide from './slide'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Slider 1, na klikanie, bez pętli</p>
        <Slide />
        <p>Slider 2, ze slick slider</p>
      </div>
    );
  }
}

export default App;
