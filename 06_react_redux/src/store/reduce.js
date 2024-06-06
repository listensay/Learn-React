import * as actionTypes from './constanst'

const initialState = {
    counter: 1000
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NUMBER:
            return { ...state, counter: state.counter + action.num }

        case actionTypes.SUB_NUMBER:
            return { ...state, counter: state.counter - action.num }

        default:
            return state
    }
}

export default reducer