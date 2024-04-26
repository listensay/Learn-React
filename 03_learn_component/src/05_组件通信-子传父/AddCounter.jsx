import React, { Component } from 'react'

export class AddCounter extends Component {

    changeCount(num) {
        this.props.addClick(num)
    }

  render() {
    return (
      <div>
        <button onClick={e => this.changeCount(1)}>+1</button>
        <button onClick={e => this.changeCount(5)}>+5</button>
        <button onClick={e => this.changeCount(10)}>+10</button>
      </div>
    )
  }
}

export default AddCounter