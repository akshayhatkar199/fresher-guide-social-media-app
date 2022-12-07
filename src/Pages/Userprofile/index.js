import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer'
import {Link } from "react-router-dom";
import Image from '../../images/profile-img.jpg';
import Postcard from "../../components/Postcard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHome,faMessage,faBell ,faUser,faBars ,faPaperPlane,faAnchor} from '@fortawesome/free-solid-svg-icons'
import { Avatar, List,Button, } from 'antd'
import Image3 from '../../images/user.jpg';

import { Col, Row , Menu,Input } from 'antd';
import './userprofile.css'


const dataAbout = [
    {
      title: 'UX Desginer At Google',
    },
    {
      title: 'Studied Computer Science',
    },
    {
      title: 'Relationship Status',
    },
    {
      title: 'Lived In London',
    },
    {
      title: 'Blood Group',
    }
  ];
  

const Userprofile = () => {
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
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 22}}
      lg={{span: 22}}
      xl={{span: 22}}
      xxl={{span: 22}}
      >
    
 <div className='profole-div'>
 <img src={Image} alt="img" className="main-profileimg "></img>
    <div className='user-box'>
    <img src={Image3} alt="logo" className="profile-user-image"></img>
    <div className='text-div'>
   <span style={{color: "black"}}>Josephin water </span><br />
   <span style={{color: "#8e8c8c", fontSize: "smaller"}}> ahsgddgbb@876gmail.com</span>
   </div>
   <div className='cover-button'>
        <Button type="primary" size={25} className="edit-button">
           
        Edit Cover
                    
          </Button>
   </div>
   </div>

 
     
  </div>
  <div>
<Row>
     

     <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 8}}
      lg={{span: 8}}
      xl={{span: 8}}
      xxl={{span: 8}}
      >
      <div className='profile-about' >
      <h3 className='home-head'>About Us</h3>
      <List
    itemLayout="horizontal"
    dataSource={dataAbout}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<div className='about-icon'>  <FontAwesomeIcon icon={faAnchor} /></div>}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications"
        />
      </List.Item>
    )}

  />

      </div>
      </Col>

      
     <Col  
     xs={{span: 24}}
     sm={{span: 24}}
     md={{span: 16}}
     lg={{span: 16}}
     xl={{span: 16}}
     xxl={{span: 16}}
     >
      <div className='profil-post'>
      <Postcard/>
      <Postcard/>
      </div>
     </Col>

</Row>

</div>
      </Col>

      
      
    </Row>
 

    </div>
    
    <Footer />
    </div>
    </div>
  )
}

export default Userprofile





