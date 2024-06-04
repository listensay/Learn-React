import React, { PureComponent } from 'react'
import { AppWraper } from './style'

export class App extends PureComponent {
  render() {
    return (
      <AppWraper>
        <header className='header'>
            <h1>Logo</h1>
        </header>
        <main className='main'>
            <section>
                main
            </section>
        </main>
        <footer className='footer'>
            <p>Footer</p>
        </footer>
      </AppWraper>
    )
  }
}

export default App