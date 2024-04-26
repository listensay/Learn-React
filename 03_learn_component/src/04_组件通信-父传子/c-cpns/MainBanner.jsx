import React, { Component } from 'react'

export class MainBanner extends Component {

  render() {
    const { banners, title } = this.props

    return (
      <div>
        <h2>这是一个轮播图组件: { title }</h2>
        <ul>
          {
            banners.map(item => <li key={item.acm}>{item.title}</li>)
          }
        </ul>
      </div>
    )
  }
}

MainBanner.defaultProps = {
  title: '默认标题',
  banners: []
}

export default MainBanner