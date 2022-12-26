import React,{useState,useEffect} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar';
import {Link } from "react-router-dom";
import {WithTokenApi} from '../../Helpers/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHome,faMessage,faBell ,faUser,faBars ,faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import { Avatar, List,Button, } from 'antd'
import Image3 from '../../images/user.jpg';
import Image  from '../../images/userp.png';
import { Col, Row , Menu,Input } from 'antd';
import './myfriends.css'

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



const Myfriends = () => {
const [myfriendslist,setmyfriendlist] = useState([]);

useEffect(()=>{
  friends()
},[])

const friends =async()=>{
  const result = await WithTokenApi.get("/friends/myfriendlist")
  // console.log("result",result);
  setmyfriendlist(result.data)
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
        
     <div className='main-Myfriends'>
    
         <div className='Myfriends-div' >
          <h3 className='title-Myfriends'>Myfriends</h3>
        
          <hr />
          <List
        itemLayout="horizontal"
        dataSource={myfriendslist}
        renderItem={(item ) => (
          <List.Item>
            <List.Item.Meta
              avatar={<div ><label className='online-label'></label><Avatar src={item.photo ? "http://localhost:8080/Images/"+item.photo : Image } /></div>}
              title={<Link to= {"/userprofile/"+item.id+ ""}>{item.name}</Link>}
              description={item.email} 
            />
             <Link to={"/messages/"+item.id+""}><FontAwesomeIcon icon={faMessage}  className="friend-message-icon"/></Link>
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

export default Myfriends