function loginAuth(WrappedComponent) {
    
    return props => {
        const token = localStorage.getItem('token')
        return token ? <WrappedComponent {...props} /> : <h2>请登录</h2>
    }
}

export default loginAuth;