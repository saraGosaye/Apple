import React, { Component } from "react";

class Rating extends Component {

  constructor(){
    super();
     this.state = {
      value: 0,
    };   
  }

  increment = () => {
      this.setState((state) => {
        return {
          value: state.value + 1,
        };
      });
  };
  decrement = () => {
    this.setState((state) => {
      return {
        value: state.value - 1,
      };
    });
  };


  render() {
    return (
      <div>
        <h2>Rating block</h2> 
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div>Your rated this product : {this.state.value}</div>
      </div>
    );
  }
}

export default Rating;