import React, { PureComponent } from 'react'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1 style={{ color: 'red', fontSize: '20px'}}>我是标题</h1>
        <h2 style={{ color: 'blue', fontSize: '18px'}}>我是副标题</h2>
      </div>
    )
  }
}

export default App