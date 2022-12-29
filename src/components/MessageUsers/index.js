import React,{useEffect,useState} from 'react'
import './onlineuser.css'
import { Avatar, List } from 'antd';
import {WithTokenApi} from '../../Helpers/axios';
import { Link,useParams } from "react-router-dom";
import Listitem from "./Listitem"

const MessageUsers = ({getmessage}) => {
  let {userId } = useParams()
  const [myfriend, setmyfriend] = useState([])
  useEffect(()=>{
   friends()
  },[])
  useEffect(()=>{
    if(getmessage.senderId != userId){
      const newMyFriend = myfriend.map((e) => {
        if(e.id == getmessage.senderId ) {
          e.messageCount = e.messageCount + 1
          return e
        }else{
          return e
        }
      })
      setmyfriend(newMyFriend)
       }
},[getmessage]);

  useEffect(() => {
   const newMyFriend = myfriend.map((e) => {
     if(e.id == userId ) {
       e.messageCount = 0
       return e
     }else{
       return e
     }
   })
   setmyfriend(newMyFriend)
  },[userId])
  const friends=async()=>{
   const result= await WithTokenApi.get("/friends/myfriendlistMessage")
  //  console.log("result",result);
   setmyfriend(result.data)
 }
  return (
   
      <List 
    itemLayout="horizontal"
    dataSource={myfriend}
    renderItem={(item ) => (
      <List.Item>
        <Listitem item={item} />
      </List.Item>
    )}
  />

    
  )
}

export default MessageUsers