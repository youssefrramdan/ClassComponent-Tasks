import React, { Component } from 'react';
import './AddingComponent.css'; 

class AddingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }

  increment = () => {
    this.setState({
      quantity: this.state.quantity + 1
    });
  };

  decrement = () => {
    if (this.state.quantity > 1) {
      this.setState({
        quantity: this.state.quantity - 1
      });
    }
  };

  render() {
    return (
      <div className="container">
        <button onClick={this.decrement} className="button">
          -
        </button>
        <span className="quantity">{this.state.quantity}</span>
        <button onClick={this.increment} className="button">
          +
        </button>
      </div>
    );
  }
}

export default AddingComponent;
