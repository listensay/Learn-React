import React, { Component } from 'react'
import HomeInfo from './HomeInfo'
import HomeBanner from './HomeBanner'

export class Home extends Component {
  render() {
    const info = this.props

    return (
      <div>
        <h2>Home - name: {info.name} - age: {info.age}</h2>
        <HomeInfo />
        <HomeBanner />
      </div>
    )
  }
}

export default Home