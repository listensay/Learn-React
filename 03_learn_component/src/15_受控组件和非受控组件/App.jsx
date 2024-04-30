import React, { PureComponent } from 'react'

export class App extends PureComponent {

    constructor() {
        super()

        this.state = {
            username: '',
            password: '',
            isAgree: true,
            hobbys: [
                { value: '1', key: '唱', checked: true },
                { value: '2', key: '跳', checked: true },
                { value: '3', key: 'rap', checked: true },
                { value: '4', key: '篮球', checked: true },
            ]
        }
    }

    formHandle = (e) => {
        // 阻止表单默认行为
        e.preventDefault()

        // 获取表单数据
        const hobbys = this.state.hobbys.filter(item => item.checked).map(item => item.value)

        const form = {
            ...this.state
        }
        // 替换数据
        form.hobbys = hobbys

        console.log(form)
        // 发起网络请求
    }  

    // 用户名输入框的change事件处理
    setFormValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
       })
    }

    // agree
    changeAgreeHandle = (e) => {
        this.setState({
            isAgree: e.target.checked
        })
    }

    // 多选处理
    changeHobbyHandle = (e, index) => {
        const hobbys = [...this.state.hobbys]
        hobbys[index].checked = e.target.checked

        this.setState({
            hobbys
        })
    }

  render() {
    const { username, password, isAgree, hobbys } = this.state

    return (
      <div>
        <form onSubmit={ e => this.formHandle(e) }>
            
            <div>
                <label htmlFor="username">
                    用户名：
                    <input id='username' type="text" name='username' onChange={ e => this.setFormValue(e) } value={ username } placeholder='请输入用户名' autoComplete='off'/>
                </label>
                <label htmlFor="password">
                    密码：
                    <input id='password' type="password" name='password' onChange={ e => this.setFormValue(e) } value={ password } placeholder='请输入密码' autoComplete='off'/>
                </label>
            </div>

            <div>
                爱好：
                {
                    hobbys.map((item, index) => {
                        return (
                            <label htmlFor={ item.value } key={ item.value }>
                                { item.key}

                                <input type="checkbox" id={ item.value } onChange={ e => this.changeHobbyHandle(e, index) } checked={ item.checked } />
                            </label>
                        )
                    })
                }
            </div>

            <div>
                <label htmlFor="agree">
                    同意
                    <input type="checkbox" id='agree' onChange={ e => this.changeAgreeHandle(e) } checked={ isAgree } />
                </label>
            </div>

            <button type='submit'>注册</button>
        </form>
      </div>
    )
  }
}

export default App