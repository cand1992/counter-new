import { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {

  render() {
    return(
      <>
      <Counter color="blue" />
      <Counter color="red" />
      <Counter color="yellow" />
      </>
    )
  }
}

export default App;
