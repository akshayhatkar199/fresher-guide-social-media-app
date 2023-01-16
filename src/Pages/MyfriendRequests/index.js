import React,{useEffect,useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar';
import {Link } from "react-router-dom";
import {WithTokenApi} from '../../Helpers/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHome,faMessage,faBell ,faUser,faBars ,faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import { Avatar, List,Button, Form, message, } from 'antd'
import Image3 from '../../images/user.jpg';
import Image  from '../../images/userp.png';
import { Col, Row , Menu,Input, } from 'antd';
import './myfriendRequests.css'


const MyfriendRequests = ({socket}) => {
 const [myfriendrequests, setmyfriendrequest] = useState([])


 useEffect(()=>{
  friendsrequest()
 },[])

const friendsrequest=async()=>{
  const result= await WithTokenApi.get("/friends/myrequests")
  // console.log("result",result);
  setmyfriendrequest(result.data)
}

const accept=async(id,frienduserId)=>{
//  console.log("id",id);
const payload={
  "requestId": id
}
// console.log("payload",payload)
 const result = await WithTokenApi.post("/friends/requestaccept",payload)
//  console.log("result",result)
socket.emit("newNotification", {
  id: frienduserId
});
 message.success("Request Accepted Successfully")
 friendsrequest()
}


    return (
        <div> 
       <Header socket={socket} />
        <div className='body-container'>
        <div className='main-home-container'>
        
    
       
        <Row>
      
        <Col          
          xs={{span: 24}}
          sm={{span: 24}}
          md={{span: 24}}
          lg={{span: 2}}
          xl={{span: 2}}
          xxl={{span: 2}}
          >
                <Sidebar />
          </Col> 
         
    
         <Col  
          xs={{span: 24}}
          sm={{span: 24}}
          md={{span: 24}}
          lg={{span: 22}}
          xl={{span: 22}}
          xxl={{span: 22}}
          >
        
     <div className='main-MyfriendRequests'>
    
         <div className='MyfriendRequests-div' >
          <h3 className='title-MyfriendRequests'>My Friend Requests</h3>
          <hr />
          <List
        itemLayout="horizontal"
        dataSource={myfriendrequests}
        renderItem={(item ) => (
          <List.Item>
            <List.Item.Meta
              // avatar={<div ><label className='online-label'></label><Avatar src={item.photo ? "http://localhost:8080/Images/"+item.photo : Image }/></div>}
              avatar={<div ><Avatar src={item.photo ? "http://localhost:8080/Images/"+item.photo : Image }/></div>}
              title={<Link to= {"/userprofile/"+item.id+ ""}>{item.name}</Link>}
              description={item.email}  
            />
             <Button type="primary" style={{marginRight: "-18px"}} htmlType="submit" onClick={()=>accept(item.requestId,item.id)}  >Accept </Button>
          </List.Item>
        )}
      />
    
          </div>
    
     <br/>   
     
         
         </div>
          </Col>
          
        </Row>
     <br/>
     <br/>
    
        </div>
        
        <Footer />
        </div>
        </div>
      )
}

export default MyfriendRequests