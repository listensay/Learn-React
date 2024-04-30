import React, { PureComponent } from 'react'
import with_theme from '../hoc/with_theme'

export class Home extends PureComponent {
  render() {
    const { primary, size } = this.props

    return (
      <div>
        <h2>Home Primary: { primary } - { size }</h2>
      </div>
    )
  }
}

export default with_theme(Home)