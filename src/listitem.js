import React from 'react'
import { List, Tag, Switch, Icon } from 'antd'
import store from './store'

const ListItem = (props) => {
    return (
        <div>
            <List
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item style={{ "textDecorationLine": item.complete ? 'line-through' : 'none' }}

                    >
                        <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} defaultChecked onChange={() => { props.handleStateChange(store.getState().list.indexOf(item)) }} checked={!item.complete ? false : true} />
                        {item.ctx}

                        <Tag>{item.time}</Tag>
                        <Icon type="delete" theme="twoTone" onClick={() => { props.handleItemDelete(store.getState().list.indexOf(item)) }} />
                    </List.Item>)}

                bordered

            />
        </div>
    )
}


export default ListItem
