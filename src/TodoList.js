import React, { Component } from 'react'
import 'antd/dist/antd.css'
import './todolist.scss'
import { Input, Button, message, Tabs } from 'antd'
import store from './store/index.js'

import { getInputChangeAction, addTodoAction } from './store/actionCreators'
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes'
import ListItem from './listitem'
const TabPane = Tabs.TabPane;
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()

        // console.log(this.state)
        this.handleChange = this.handleChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        store.subscribe(this.handleStoreChange)
        this.state.newList = []
    }
    handleStoreChange() {

        this.setState(
            store.getState()
        )
    }
    handleChange(e) {

        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleClick() {

        if (this.state.inputValue === '') {
            message.warning('input value is null');
            return
        }
        const action = addTodoAction()
        store.dispatch(action)
    }



    render() {


        return (
            <div className='todoList'>
                <Input
                    placeholder='todo info'
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <Button type='primary' onClick={this.handleClick}>提交</Button>
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="all" key="1">

                        <ListItem list={this.state.list} />


                    </TabPane>
                    <TabPane tab="active" key="2"> <ListItem list={this.state.list.filter(item => item.complete === false)} /></TabPane>
                    <TabPane tab="complete" key="3"><ListItem list={this.state.list.filter(item => item.complete === true)} /></TabPane>
                </Tabs>

            </div>
        )
    }
}

export default TodoList