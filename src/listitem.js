import React from 'react'
import { List, Tag, Switch, Icon } from 'antd'
import store from './store/index.js'
import { deleteTodoAction, changeState } from './store/actionCreators'
class ListItem extends React.Component {
   
  
    handleItemDelete(index) {
        const action = deleteTodoAction(index)
        store.dispatch(action)

    }
    handleStateChange(index) {
        const action = changeState(index)
        store.dispatch(action)
    }

    render() {
        return (

            <div>
                
                <List
                    dataSource={this.props.list}
                    
                    renderItem={(item, index) => (
                        <List.Item style={{ "textDecorationLine": item.complete ? 'line-through' : 'none' }}
                       
                        >
                        
                            <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} defaultChecked onChange={this.handleStateChange.bind(this, index)} checked={!item.complete ? false : true} />
                            {item.ctx}
                            <Tag>{item.time}</Tag>
                            <Icon type="delete" theme="twoTone" onClick={this.handleItemDelete.bind(this, index)} />
                        </List.Item>)}
                        
                    bordered

                />
            </div>
        )
    }
}
export default ListItem
