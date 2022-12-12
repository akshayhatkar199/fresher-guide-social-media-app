
import React from 'react'
import Header from '../../components/Header'
import {Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Sidebar from '../../components/Sidebar';
import {  faHome,faMessage,faBell ,faUser,faBars ,faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import { Avatar, List,Button, } from 'antd'
import Image3 from '../../images/user.jpg';
import { Col, Row , Menu,Input } from 'antd';
import './notification.css'
import Footer from '../../components/Footer'



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

const Notification = () => {
  return (
    <div> 
    <Header />
    <div className='body-container'>
    <div className='main-home-container'>
    

   
    <Row>
  
    <Col          
      xs={{span: 2}}
      sm={{span: 2}}
      md={{span: 2}}
      lg={{span: 2}}
      xl={{span: 2}}
      xxl={{span: 2}}
      >
            <Sidebar />
      </Col> 
     

     <Col  
      xs={{span: 22}}
      sm={{span: 22}}
      md={{span: 22}}
      lg={{span: 22}}
      xl={{span: 22}}
      xxl={{span: 22}}
      >
    
 <div className='main-notification'>

     <div className='notification-div' >
      <h3 className='title-notification'>Notification</h3>
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

export default Notification 