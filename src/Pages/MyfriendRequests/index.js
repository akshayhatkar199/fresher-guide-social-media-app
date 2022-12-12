import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar';
import {Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHome,faMessage,faBell ,faUser,faBars ,faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import { Avatar, List,Button, Form, } from 'antd'
import Image3 from '../../images/user.jpg';
import { Col, Row , Menu,Input } from 'antd';
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
        dataSource={data}
        renderItem={(item ) => (
          <List.Item>
            <List.Item.Meta
              avatar={<div ><label className='online-label'></label><Avatar src="https://randomuser.me/api/portraits/men/10.jpg" /></div>}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"  
            />
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