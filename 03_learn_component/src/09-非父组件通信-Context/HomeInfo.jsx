import React, { Component } from 'react'
import ThemeContext from './context/theme'

export class HomeInfo extends Component {
  render() {
    const context =this.context

    return (
      <div>HomeInfo: { context.color }</div>
    )
  }
}

HomeInfo.contextType = ThemeContext

export default HomeInfo