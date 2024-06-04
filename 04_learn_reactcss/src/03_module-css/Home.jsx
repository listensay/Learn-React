import React, { PureComponent } from 'react'

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <h1 className='title'>我是Home 我是标题1</h1>
        <div className='content'>我是Home 我是内容</div>
      </div>
    )
  }
}

export default Home