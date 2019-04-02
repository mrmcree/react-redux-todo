import React from 'react'
import ListItem from './listitem'
import {  Input, Button, Tabs } from 'antd'

const TabPane = Tabs.TabPane;
const TodoListUi = (props) => {
    return (
        <div className='todoList'>
            <Input
                placeholder='todo info'
                value={props.inputValue}
                onChange={props.handleChange}
            />
            <Button type='primary' onClick={props.handleClick}>提交</Button>
            <Tabs defaultActiveKey="1" >
                <TabPane tab="all" key="1"> <ListItem handleStateChange={props.handleStateChange} list={props.list} handleItemDelete={props.handleItemDelete} /></TabPane>
                <TabPane tab="active" key="2"> <ListItem handleStateChange={props.handleStateChange} list={props.list.filter(item => item.complete === false)} handleItemDelete={props.handleItemDelete} /></TabPane>
                <TabPane tab="complete" key="3"><ListItem handleStateChange={props.handleStateChange} list={props.list.filter(item => item.complete === true)} handleItemDelete={props.handleItemDelete} /></TabPane>
            </Tabs>

        </div>
    )
}

export default TodoListUi