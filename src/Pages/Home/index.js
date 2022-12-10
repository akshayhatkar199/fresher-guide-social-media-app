
import React,{ useEffect, useState }  from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'
import { Col, Row  } from 'antd';
import { Avatar, List,Button, } from 'antd'
import {Link } from "react-router-dom";
import Onlineusers from '../../components/Onlineusers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles, faGraduationCap ,faDiploma,faPen ,faLaptop, faTrophy ,faCalendarDays,faMicrophone,faPersonWalking,faP,faStar,faUserGraduate} from '@fortawesome/free-solid-svg-icons'
import {  faHome,faMessage,faBell, faBars, faUser, faAnchor} from '@fortawesome/free-solid-svg-icons' 
import Postcard from "../../components/Postcard"
import Aboutus from "../../components/Aboutus"
import './Home.css'




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
      <Onlineusers/>

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
     
   <Aboutus />


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