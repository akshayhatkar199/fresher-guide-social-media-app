import React,{useEffect,useState} from 'react'
import './onlineuser.css'
import { Avatar, List } from 'antd';
import {WithTokenApi} from '../../Helpers/axios';
import { Link } from "react-router-dom";

const Onlineusers = () => {
  const [myfriend, setmyfriend] = useState([])
  useEffect(()=>{
   friends()
  },[])
  const friends=async()=>{
   const result= await WithTokenApi.get("/friends/myfriendlist")
   console.log("result",result);
   setmyfriend(result.data)
 }
  return (
   
      <List
    itemLayout="horizontal"
    dataSource={myfriend}
    renderItem={(item ) => (
      <List.Item>
        <List.Item.Meta
          avatar={<div > <label className='online-label'></label><Avatar src="https://randomuser.me/api/portraits/men/10.jpg" /></div>}
          title={<Link to={"/messages/"+item.id}>{item.name}</Link>}
          
          description={item.email}  
        />
      </List.Item>
    )}
  />

    
  )
}

export default Onlineusers