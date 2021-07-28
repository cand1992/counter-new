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
    const { color } = this.props
    const { counterVal } = this.state
    return(
      <>
        <h1>{ color.toUpperCase() } Counter!</h1>
        <p style={{background: color}}>Counter: { counterVal }</p>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
      </>
    )
  }
}

export default Counter;