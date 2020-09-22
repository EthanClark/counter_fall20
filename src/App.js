import React, { Component }  from 'react';
class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { counterValue: 0 }
  // }
  state = { counterValue: 0 }
  render() {
    return (
      <div>
        <h1>This is our counter</h1>
        <p>{this.state.counterValue}</p>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}
export default App;