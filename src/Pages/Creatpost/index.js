import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer'
import {Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faHome,faMessage,faBell ,faUser,faBars ,faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import { Avatar, List,Button, } from 'antd'
import Image3 from '../../images/user.jpg';
import { Col, Row , Menu,Input } from 'antd';



const Creatpost = () => {
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
    
 <div className=''>

akshay 
 
     
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

export default Creatpost
