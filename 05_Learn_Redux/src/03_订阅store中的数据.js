const store = require('./store')

// 订阅store中的数据
store.subscribe(() => {
    const state = store.getState()
    console.log(state)
})

// 修改store中的数据
store.dispatch({ type: 'change_price', price: 10 })
store.dispatch({ type: 'change_name', name: 'tomotal'})
