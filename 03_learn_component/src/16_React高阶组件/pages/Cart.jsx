import React, { PureComponent } from 'react'
import loginAuth from '../hoc/login_auth'

export class Cart extends PureComponent {
  render() {
    return (
      <div>购物车</div>
    )
  }
}

export default loginAuth(Cart)