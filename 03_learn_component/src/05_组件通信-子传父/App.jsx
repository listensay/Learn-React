import React, { Component } from 'react'
import AddCounter from './AddCounter'
import SubCounter from './SubCounter'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      counter: 100
    }
  }

  changeCount(num) {
    this.setState({
      counter: this.state.counter + num
    })
  }

  render() {
    const { counter } = this.state

    return (
        <div className='app'>
          <h2>当前计数: { counter }</h2>
          <AddCounter addClick={ count => this.changeCount(count) } />
          <SubCounter subClick={ count => this.changeCount(count) }/>
        </div>
    )
  }
}

export default App