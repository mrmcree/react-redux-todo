import React, { Component } from 'react'
import 'antd/dist/antd.css'
import './todolist.scss'
import { connect } from 'react-redux'

import {
   
    changeInputValue,
    handleClick,
    handleItemDelete,
    handleStateChange
}
    from './store/actionCreators'
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes'
import TodoListUi from './TodoListUi'

@connect(state => ({
    inputValue: state.inputValue,
    list: state.list
}),  {changeInputValue,
handleClick,
handleItemDelete,
handleStateChange})
class TodoList extends Component {
    componentDidMount() {
        // console.log(this.state,this.props)     
    }
   
    render() {
        const { inputValue, list, changeInputValue, handleClick, handleStateChange, handleItemDelete } = this.props
        return (
            <TodoListUi
                inputValue={inputValue}
                handleChange={changeInputValue}
                handleClick={handleClick}
                list={list}
                handleStateChange={handleStateChange}
                handleItemDelete={handleItemDelete}
            />
        )
    }
}

export default TodoList