import React, { PureComponent } from 'react'
import './App.css'
import Home from './Home'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1 className='title'>我是App 我是标题1</h1>
        <div className='content'>我是App 我是内容</div>
        <Home />
      </div>
    )
  }
}

export default App