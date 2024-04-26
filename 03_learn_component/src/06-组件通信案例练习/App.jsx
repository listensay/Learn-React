import React, { Component } from 'react'
import TabControl from './TabControl'

export class App extends Component {
    constructor() {
        super()
        this.state = {
            titles: ['流行', '经典', '爆款'],
            currentIndex: 0
        }
    }

    changeTab(index) {
        this.setState({
            currentIndex: index
        })
    }
    
  render() {
    const { titles, currentIndex } = this.state

    return (
      <div>
        <TabControl titles={titles} tabClick={ (i) => this.changeTab(i) }/>
        <div>
            <h2>{titles[currentIndex]}</h2>
        </div>
      </div>
    )
  }
}

export default App