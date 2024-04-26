import React, { Component } from 'react'

export class MainProductList extends Component {
  render() {
    const { products } = this.props

    return (
      <div>
        <h2>这是一个商品列表组件</h2>
        <ul>
            {
              products.map(item => <li key={item.acm}>{item.title}</li>)
            }
        </ul>
      </div>
    )
  }
}

export default MainProductList