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
import { Col, Row , Menu,Input, } from 'antd';
import './myfriendRequests.css'


const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];


const MyfriendRequests = () => {
 const [myfriendrequests, setmyfriendrequest] = useState([])


 useEffect(()=>{
  friendsrequest()
 },[])

const friendsrequest=async()=>{
  const result= await WithTokenApi.get("/friends/myrequests")
  console.log("result",result);
  setmyfriendrequest(result.data)
}

const accept=async(id)=>{
 console.log("id",id);
const payload={
  "requestId": id
}
console.log("payload",payload)
 const result = await WithTokenApi.post("/friends/requestaccept",payload)
 console.log("result",result)

 message.success("Request Accepted Successfully")
 friendsrequest()
}


    return (
        <div> 
        <Header />
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
              avatar={<div ><label className='online-label'></label><Avatar src={item.photo}/></div>}
              title={<a href="https://ant.design">{item.name}</a>}
              description={item.email}  
            />
             <Button type="primary" htmlType="submit" onClick={()=>accept(item.id)}  >Accept Request</Button>
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