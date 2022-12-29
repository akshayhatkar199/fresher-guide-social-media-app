import React,{useEffect,useState} from 'react'
import { Avatar, List } from 'antd';
import { Link,useParams } from "react-router-dom";
export default function Listitem({item}) {
    let {userId } = useParams()
  return (
    <List.Item.Meta
          avatar={<div ><Avatar src="https://randomuser.me/api/portraits/men/10.jpg" /></div>}
          title={<Link to={"/messages/"+item.id}>{item.name}</Link>}
          
          description={<div style={{display: "flex"}}>
            <div style={{width: "79%"}}>{item.email}</div>
         {item.messageCount   > 0   ? <div className='messageCount'><label>{item.messageCount}</label></div> : null} 
          </div>}  
        />
  )
}
