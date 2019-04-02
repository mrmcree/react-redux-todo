import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, CHANGE_STATE, INIT_LIST_ACTION } from './actionTypes'
import axios from 'axios'
import store from './index'
import { message } from 'antd'
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
export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('./api/list.json')//上面已经引入地址
            .then((res) => {
                const data = res.data;
                const action = initListAction(data);
                dispatch(action);//转发给调用此方法的常量
            })

    }


}
export const changeInputValue = (e) => {
    return (dispatch) => {
        const action = {
            type: CHANGE_INPUT_VALUE,
            value: e.target.value
        }
        dispatch(action)
    }
}
export const handleClick = () => {
    return (dispatch) => {
        if (store.getState().inputValue === null) {
            message.warning('This inputValue is empty');
            return
        }
        const action = {
            type: ADD_TODO_ITEM
        }
        dispatch(action)
    }
}
export const handleItemDelete = (index) => {
    return (dispatch) => {
        const action = {
            type: DELETE_TODO_ITEM,
            index
        }
        dispatch(action)
    }



}
export const handleStateChange = (index) => {
    return (dispatch) => {

        const action = {
            type: CHANGE_STATE,
            index
        }
        dispatch(action)
    }
}