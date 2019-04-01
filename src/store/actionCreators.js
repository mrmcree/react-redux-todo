import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, CHANGE_STATE } from './actionTypes'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const addTodoAction = () => ({
    type: ADD_TODO_ITEM
})
export const changeState = (index) => ({
    type: CHANGE_STATE,
    index
})
export const deleteTodoAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})