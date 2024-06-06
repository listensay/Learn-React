import * as actionTypes from './constanst'

export function increment(num) {
    return {
        type: actionTypes.ADD_NUMBER,
        num
    }
}

export function decreatement(num) {
    return {
        type: actionTypes.SUB_NUMBER,
        num
    }
}
