import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, CHANGE_STATE } from './actionTypes'
import getTime from './getTime.js'
const defaultState = {
    inputValue: '',
    list:[]
};



//reducer可以接受state 不能修改
export default (state = defaultState, action)=> {

    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push({
            ctx:newState.inputValue,
            time:getTime()[1],
            complete:false
        })
        newState.inputValue = ''
        return newState
    }

    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    if (action.type === CHANGE_STATE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list[action.index].complete = !newState.list[action.index].complete
        return newState
    }
    return state
}