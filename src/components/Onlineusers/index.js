import React,{useEffect,useState} from 'react'
import './onlineuser.css'
import { Avatar, List ,Result } from 'antd';
import {WithTokenApi} from '../../Helpers/axios';
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

const Onlineusers = ({users}) => {
  const [myfriend, setmyfriend] = useState([])
  const userData = useSelector((state)=>state.userData);
  useEffect(()=>{
   friends()
  },[])
  const friends=async()=>{
   const result= await WithTokenApi.get("/friends/myfriendlist")
  //  console.log("result",result);
   setmyfriend(result.data)
 }
  return (
    users && users.length > 0 ?
       users.length === 1 && userData.userinfo.data.id === users[0].id ? 
          <Result
          title="No online users!"
        />:
        <List
        itemLayout="horizontal"
        dataSource={users}
        renderItem={(item ) => (
          userData.userinfo.data.id != item.id ? 
          <List.Item>
            <List.Item.Meta
              avatar={<div > <label className='online-label'></label><Avatar src="https://randomuser.me/api/portraits/men/10.jpg" /></div>}
              title={<Link to={"/messages/"+item.id}>{item.name}</Link>}
              
              description={item.email}  
            />
          </List.Item>
          :  null
        )}
      /> 
       
    : 

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