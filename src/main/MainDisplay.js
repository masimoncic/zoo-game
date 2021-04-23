import React, { Component } from 'react';
import './MainDisplay.css';
import MenuSelect from './MenuSelect';


class MainDisplay extends Component{
  constructor(props){
    super(props);
    this.state = {
      hour: 5,
      peroid: 'a.m.',
      day: 1,
    }
    this.timer = this.timer.bind(this);
  }
  componentDidMount() {
    this.timer(300);
  }
  setTime(st) {
    let newHour = st.hour +1;
    let newPeroid = st.peroid;
    let newDay = st.day;
    //call hungerTick
    if (newHour > 12) {
      newHour = 1;
    } 
    if(newHour === 12) {
      if (st.peroid === 'a.m.') {
        newPeroid = 'p.m.';
      } else {
        newPeroid = 'a.m.'
        newDay = st.day + 1;
      } 
    }
    return { hour: newHour, peroid: newPeroid, day: newDay};

  }
  timer(ms) {
    setInterval(() => {
      this.setState(this.setTime);
      if (this.state.hour === 12 && this.state.peroid === 'a.m.') {
        this.props.setMoney();
      }
    }, ms)
  }
  render() {
    return(
      <div className="MainDisplay">
        <p className='text-center'>-------------------------------------------------------------------</p>
        <p>MainDisplay</p>
        <p>Money: {this.props.money}</p> 
        <p>Income: {this.props.income}</p>
        <p>Food Owned: {this.props.foodQty}</p>
        <p>Food Cost: {this.props.foodCost}</p>
        <p>Time: {this.state.hour} {this.state.peroid}</p>
        <p>Day: {this.state.day}</p>
        <p className='text-center'>-------------------------------------------------------------------</p>
        <MenuSelect />
      </div>
    )
  }
}

export default MainDisplay;