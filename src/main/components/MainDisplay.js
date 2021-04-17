import React, { Component } from 'react';
import '../styles/MainDisplay.css';
import MenuSelect from './MenuSelect';


class MainDisplay extends Component{
  render() {
    return(
      <div className="MainDisplay">
        <p className='text-center'>-------------------------------------------------------------------</p>
        <br /> <br />
        <p>MainDisplay</p>
        <p>Placeholder</p> <br /> <br />
        <p className='text-center'>-------------------------------------------------------------------</p>
        <MenuSelect />
      </div>
    )
  }
}

export default MainDisplay;