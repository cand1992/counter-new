import { Component } from 'react';

class Counter extends Component {
  state = { counterVal: 0 }

  plus = () => {
    this.setState({ counterVal: this.state.counterVal + 1 })
  }

  minus = () => {
    this.setState({ counterVal: this.state.counterVal - 1 })
  }

  render() {
    return(
      <>
        <h1>My Counter!</h1>
        <p>Counter: {this.state.counterVal}</p>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
      </>
    )
  }
}

export default Counter;