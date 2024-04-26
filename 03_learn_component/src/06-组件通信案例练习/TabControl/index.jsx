import React, { Component } from 'react'
import './style.css'

export class TabControl extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currentIndex: 0
        }
    }

    changeTab(index) {
        this.setState({
            currentIndex: index
        })

        this.props.tabClick(index)
    }

  render() {
    const { titles } = this.props
    const { currentIndex } = this.state

    return (
      <div className='tab-control'>
        <ul className='list'>
            {
                titles.map((item, index) => {
                    return (
                        <li 
                            key={item}
                            className={`item ${currentIndex === index ? 'active' : ''}`}
                            onClick={ e => this.changeTab(index)}
                        >
                            <span>{ item }</span>
                        </li>
                    )
                })
            }
        </ul>
      </div>
    )
  }
}

export default TabControl