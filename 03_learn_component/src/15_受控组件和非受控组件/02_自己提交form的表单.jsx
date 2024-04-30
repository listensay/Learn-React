import React, { PureComponent } from 'react'

export class App extends PureComponent {

    constructor() {
        super()

        this.state = {
            username: ''
        }
    }

    formHandle = (e) => {
        // 阻止表单默认行为
        e.preventDefault()

        // 获取表单数据
        console.log(this.state.username)

        // 发起网络请求
    }  

    // 用户名输入框的change事件处理
    usernameChangeHandle = (e) => {
        this.setState({
            username: e.target.value
       })
    }

  render() {
    const { username } = this.state

    return (
      <div>
        <form onSubmit={ e => this.formHandle(e) }>
            <div>
                <label htmlFor="username">用户名：</label>
                <input id='username' type="text" name='username' onChange={ e => this.usernameChangeHandle(e) } value={ username } placeholder='请输入用户名'/>
            </div>
            <button type='submit'>注册</button>
        </form>
      </div>
    )
  }
}

export default App