import React, { Component } from 'react';
import './App.css';
import Zoo from './main/components/Zoo';

class App extends Component{
  render() {
    return(
      <div className="App">
        <div className='container'>
          <Zoo />
        </div>
      </div>
    )
  }
}

export default App;