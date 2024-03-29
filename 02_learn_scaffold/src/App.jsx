import React from 'react'
import HelloWorld from './components/HelloWorld'

class App extends React.Component {
    constructor() {
        super()
        
        this.state = {
            message: 'Hello React'
        }
    }

    render() {
        const { message } = this.state

        return (
            <div>
                <HelloWorld />
                <h2>{ message }</h2>
            </div>
        )
    }
}

export default App