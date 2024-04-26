import React, { Component } from 'react'

export class SubCounter extends Component {
    SubCounterHandle(num) {
        this.props.subClick(num)
    }

  render() {
    return (
      <div>
        <button onClick={ e => this.SubCounterHandle(-1) }>-1</button>
        <button onClick={ e => this.SubCounterHandle(-5) }>-5</button>
        <button onClick={ e => this.SubCounterHandle(-10) }>-10</button>
      </div>
    )
  }
}

export default SubCounter