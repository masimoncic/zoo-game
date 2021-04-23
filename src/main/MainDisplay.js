import React, { Component } from 'react';
import './MainDisplay.css';
import MenuSelect from './MenuSelect';
import Time from './Time';
import Money from './Money';


class MainDisplay extends Component{
  /*constructor(props){
    super(props);
    this.state = {
      hour: 5,
      peroid: 'a.m.',
      day: 1,
    }
    //this.timer = this.timer.bind(this);
  }*/
  /*componentDidMount() {
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
  }*/
  render() {
    return(
      <div className="MainDisplay mt-3">
        <div className='row'>
        <div className='col-3 col-lg-2'>
          <Time setMoney = {this.props.setMoney} />
        </div>
        <div className='col-6 col-lg-5 offset-lg-1'>
          <p>MainDisplay</p>
        </div>
        <div className="col-3 food-and-money">
          <Money
          money={this.props.money}
          income={this.props.income}
          foodQty={this.props.foodQty}
          foodCost={this.props.foodCost} />
        </div>
      </div>
        <MenuSelect />
      </div>
    )
  }
}

export default MainDisplay;