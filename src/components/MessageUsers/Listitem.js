import React,{useEffect,useState} from 'react'
import { Avatar, List } from 'antd';
import Image  from '../../images/userp.png';
import { Link,useParams } from "react-router-dom";
export default function Listitem({item}) {
    let {userId } = useParams()
  return (
    <List.Item.Meta
          avatar={<div ><Avatar src={item.photo ? "http://localhost:8080/Images/"+item.photo : Image } /></div>}
          title={<Link to={"/messages/"+item.id}>{item.name}</Link>}
          
          description={<div style={{display: "flex"}}>
            <div style={{width: "79%"}}>{item.email}</div>
         {item.messageCount   > 0   ? <div className='messageCount'><label>{item.messageCount}</label></div> : null} 
          </div>}  
        />
  )
}
