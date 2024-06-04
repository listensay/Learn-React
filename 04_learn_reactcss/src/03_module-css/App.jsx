import React, { PureComponent } from 'react'
import Home from './Home'
import AppModuleCss from './App.module.css'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1 className={AppModuleCss.title}>我是App 我是标题1</h1>
        <div className={AppModuleCss.content}>我是App 我是内容</div>
        <Home />
      </div>
    )
  }
}

export default App