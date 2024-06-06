import React, { PureComponent } from 'react'
import store from '../store'
import { decreatement } from '../store/actionCreators'

export class Profile extends PureComponent {
  constructor() {
    super()

    this.state = {
      counter: store.getState().counter
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }

  subNumber(num) {
    store.dispatch(decreatement(num))
  }  

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>Profile Counter: { counter }</h2>
        <div>
            <button onClick={ e => this.subNumber(1) }>-1</button>
            <button onClick={ e => this.subNumber(5) }>-5</button>
            <button onClick={ e => this.subNumber(10) }>-10</button>
            <button onClick={ e => this.subNumber(100) }>-100</button>

        </div>
      </div>
    )
  }
}

export default Profile