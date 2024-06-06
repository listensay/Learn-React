const { createStore } = require('redux')

// 初始化的数据
const initialState = {
    name: 'milk',
    price: 10
}

// 定义一个reducer  纯函数
function reducer(state = initialState, action) {
    if(action.type === 'change_price') {
        return { ...state, price: state.price + action.price }
    } else if(action.type === 'change_name') {
        return { ...state, name: action.name }
    }

    return state
}

// 创建store
const store = createStore(reducer)

module.exports = store