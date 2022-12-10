import React from 'react'
import './onlineuser.css'
import { Avatar, List } from 'antd'

const data = [
    {
      title: 'Akshay Hatkar 1',
    },
    {
      title: 'Akshay Hatkar 2',
    },
    {
      title: 'Akshay Hatkar 3',
    },
    {
      title: 'Akshay Hatkar 4',
    },
    {
      title: 'Akshay Hatkar 1',
    },
    {
      title: 'Akshay Hatkar 2',
    },
    {
      title: 'Akshay Hatkar 3',
    },
    {
      title: 'Akshay Hatkar 4',
    },
    {
      title: 'Akshay Hatkar 2',
    },
    {
      title: 'Akshay Hatkar 3',
    },
    {
      title: 'Akshay Hatkar 4',
    },
  ];

const Onlineusers = () => {

  return (
  
      <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item ) => (
      <List.Item>
        <List.Item.Meta
          avatar={<div > <label className='online-label'></label><Avatar src="https://randomuser.me/api/portraits/men/10.jpg" /></div>}
          title={<a href="https://ant.design">{item.title}</a>}
          
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />

    
  )
}

export default Onlineusers