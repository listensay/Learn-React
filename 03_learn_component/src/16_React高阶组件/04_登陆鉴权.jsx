import React, { PureComponent } from 'react'
import Home from './pages/Home'
import ThemeContext from './context/theme_context'
import Cart from './pages/Cart'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      isLogin: false
    }
  }

  login() {
    localStorage.setItem('token', 'codermilk')
    this.setState({ isLogin: true })
  }

  render() {

    return (
      <div>
        <ThemeContext.Provider value={ { primary: 'red', size: '30' } }>
          <Home />
          <Cart />
        </ThemeContext.Provider>

        <button onClick={ e => this.login() }>登陆</button>
      </div>
    )
  }
}

export default App