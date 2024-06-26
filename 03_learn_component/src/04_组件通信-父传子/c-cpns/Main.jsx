import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'
import axios from 'axios'

export class Main extends Component {
  constructor() {
    super()

    this.state = {
      banners: [],
      products: []
    }
  }

  componentDidMount() {
    axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
      const banners = res.data.data.banner.list
      const recommend = res.data.data.recommend.list

      this.setState({
        banners,
        products: recommend
      })
    })
  }

  render() {
    const { banners, products } = this.state

    return (
      <div>
        <MainBanner banners={banners} title="轮播图" />
        <MainBanner />
        <MainProductList products={products} />
      </div>
    )
  }
}

export default Main