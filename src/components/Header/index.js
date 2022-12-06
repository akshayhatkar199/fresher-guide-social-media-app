import React from 'react'
import { Button} from 'antd';
import {Link } from "react-router-dom";
import { Col, Row } from 'antd';
import {HomeOutlined} from '@ant-design/icons'
import { Input, Space } from 'antd';
import{MessageOutlined}from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHome,faMessage,faBell} from '@fortawesome/free-solid-svg-icons'
import {NotificationOutlined } from '@ant-design/icons'
import Image2 from '../../images/he-logo.png';
import Image4  from '../../images/logo-college-removebg-preview.png';
import Image3 from '../../images/user.jpg';
import './header.css'
const { Search } = Input;
const onSearch = (value) => console.log(value);

const Header = () => {
  return (
    <div className='mean-header'> 
    <div>
    <Row>

      <Col  
      xs={{span: 20}}
      sm={{span: 20}}
      md={{span: 16}}
      lg={{span: 12}}
      xl={{span: 12}}
      xxl={{span: 12}}
      >
      <div className='header'>
    
      <img src={Image4} alt="logo" className="img-fluid " style={{height: "57px" ,width: "163px"}}></img> 

      
      <Search placeholder="input search text" className= "header-input" onSearch={onSearch} enterButton style={{
        width: "50%", margin: "18px"
      }}/>   

  <Link to="/home"> <FontAwesomeIcon icon={faHome} className="header-home-icons" /></Link>
  
      </div>
      </Col>

      <Col 
      xs={{span: 4}}
      sm={{span: 4}}
      md={{span: 8}}
      lg={{span: 12}}
      xl={{span: 12}}
      xxl={{span: 12}}
      >
      
      <div className='col2-header'>
      <Link to ="/message"> <FontAwesomeIcon icon={ faMessage} className="message-icon"  /></Link>
      <Link to= '/notification'> <FontAwesomeIcon icon={ faBell} className="bell-icon"  /></Link>
       
      <label className='header-online-label'></label> <img src={Image3} alt="logo" className="user-image"></img>   
      <div className='header-span-text'>
      <span style={{color: "white"}}>Josephin water </span><br />
      <span style={{color: " #ffc5c5"}}> active now</span>
      </div>

      </div></Col>
    </Row>

</div>

    </div>
  )
}

export default Header