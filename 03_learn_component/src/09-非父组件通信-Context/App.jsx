import React, { Component } from 'react'
import Home from './Home'
import ThemeContext from './context/theme'

export class App extends Component {
    constructor() {
        super()

        this.state = {
            info: {
                name: 'coderwhy',
                age: '18',
            }
        }
    }

  render() {
    const { info } = this.state

    return (
      <div>
        <div>App</div>
        <ThemeContext.Provider value={{color: 'red', size: 23}}>
            <Home {...info}/>
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App