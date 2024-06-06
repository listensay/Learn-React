const store = require('./store')

// 获取store中的数据
console.log(store.getState())

// 修改store中的数据
store.dispatch({ type: 'change_price', price: 10 })
console.log(store.getState())

store.dispatch({ type: 'change_name', name: 'tomotal'})
console.log(store.getState())
