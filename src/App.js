import React, { Component } from 'react';
import Slide from './slide'
import AutoPlay from './slickOne'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Slider 1, na klikanie, bez pętli</p>
        <Slide />
        <p>Slider 2, ze slick slider</p>
        <div style={{marginBottom: '100px'}}>
        <AutoPlay />
        </div>
      </div>
    );
  }
}

export default App;
