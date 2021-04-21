import React, { Component } from 'react';
import './MainDisplay.css';
import MenuSelect from './MenuSelect';


class MainDisplay extends Component{
  render() {
    return(
      <div className="MainDisplay">
        <p className='text-center'>-------------------------------------------------------------------</p>
        <br /> <br />
        <p>MainDisplay</p>
        <p>Money: {this.props.money}</p> 
        <p>Income: {this.props.income}</p>
        <br /> <br />
        <p className='text-center'>-------------------------------------------------------------------</p>
        <MenuSelect />
      </div>
    )
  }
}

export default MainDisplay;