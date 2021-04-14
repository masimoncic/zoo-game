import React, { Component } from 'react';
import '../styles/Zoo.css';
import MainDisplay from './MainDisplay';
import MenuSelect from './MenuSelect';

class Zoo extends Component{
  render() {
    return(
      <div className="Zoo">
        <p>zoo</p>
        <MainDisplay />
        <MenuSelect />
      </div>
    )
  }
}

export default Zoo;