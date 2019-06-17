import React, { Component } from 'react';
import './App.scss';
import './components/sites';
import Sites from './components/sites';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sites />

      </div>
    );
  }
}

export default App;
