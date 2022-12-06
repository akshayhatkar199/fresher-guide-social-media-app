
import React,{ useEffect, useState }  from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'
import { Col, Row  } from 'antd';
import { Avatar, List,Button, } from 'antd'
import {Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHome,faMessage,faBell, faBars, faUser, faAnchor} from '@fortawesome/free-solid-svg-icons' 
import Postcard from "../../components/Postcard"
import './Home.css'

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

const Home = () => {
  return (
    <div > 
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
      lg={{span: 6}}
      xl={{span: 6}}
      xxl={{span: 6}}
      >
      <div className='home-container-3' >
      <h3 className='home-head'>Online users</h3>
      <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<div><label className='online-label'></label><Avatar src="https://randomuser.me/api/portraits/men/10.jpg" /></div>}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />

      </div>
      </Col>
     
   


      <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 24}}
      lg={{span: 11}}
      xl={{span: 11}}
      xxl={{span: 11}}
      >
      <div className='home-container-2'>
      <Postcard/>
      
      <Postcard/>
      <Postcard/>
      <Postcard/>
      <Postcard/>
      










      </div>
      </Col>
      <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 24}}
      lg={{span: 5}}
      xl={{span: 5}}
      xxl={{span: 5}}
      >
      <div className='home-container-3' >
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
    
    </Row>

    </div>
    <Footer />
    </div>
    </div>
  )
}

export default Home