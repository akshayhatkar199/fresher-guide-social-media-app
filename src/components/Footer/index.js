import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link } from "react-router-dom";
import Image2 from '../../images/he-logo.png';
import {  faHome,faMessage,faBell ,faUser} from '@fortawesome/free-solid-svg-icons'
import { Col, Row , Menu } from 'antd';


const Footer = () => {
  return (<>
 <div className='desktop-footer'>

 <Row>

      <Col  
      xs={{span: 6}}
      sm={{span: 6}}
      md={{span: 6}}
      lg={{span: 6}}
      xl={{span: 6}}
      xxl={{span: 6}}
      >
      <div className=''>
      <img src={Image2} alt="logo" className="img-fluid "></img> 

      
      
      </div>
      </Col>

      <Col  
      xs={{span: 6}}
      sm={{span: 6}}
      md={{span: 6}}
      lg={{span: 6}}
      xl={{span: 6}}
      xxl={{span: 6}}
      >
      <div className=''>
      <Menu className='footer-menu'>

      <Menu.Item key="1"><span className='footer-heading'>Quick link</span></Menu.Item> 
      <Menu.Item key="2">Home</Menu.Item>
      <Menu.Item key="3">About</Menu.Item>
      <Menu.Item key="4">Products</Menu.Item>
  
       </Menu>
     
      
  
      </div>
      </Col>

      <Col  
      xs={{span: 6}}
      sm={{span: 6}}
      md={{span: 6}}
      lg={{span: 6}}
      xl={{span: 6}}
      xxl={{span: 6}}
      >
      <div className=''>
      <Menu className='footer-menu'>

      <Menu.Item key="5"> <span className='footer-heading'>Service</span></Menu.Item>
      <Menu.Item key="6">FAQ</Menu.Item>
      <Menu.Item key="7">Contact</Menu.Item>
    
  
       </Menu>
      </div>
      </Col>

      <Col  
      xs={{span: 6}}
      sm={{span: 6}}
      md={{span: 6}}
      lg={{span: 6}}
      xl={{span: 6}}
      xxl={{span: 6}}
      >
      <div className=''>
      <Menu className='footer-menu'>

      <Menu.Item key="8"><span className='footer-heading'>Newsletter</span></Menu.Item>
      <Menu.Item key="9">Subscribe newsletter to get updates.</Menu.Item>

      </Menu>
      </div>
      </Col>

     
      
    
    </Row>


 </div>
 
    <div className='main-footer'> 
    <div>
    <Row>

      <Col  
      xs={{span: 6}}
      sm={{span: 6}}
      md={{span: 6}}
      lg={{span: 6}}
      xl={{span: 6}}
      xxl={{span: 6}}
      >
      <div className=''>
      <Link to="/home"><FontAwesomeIcon icon={faHome} className="footer-icon" /></Link>
      
      
      </div>
      </Col>

      <Col  
      xs={{span: 6}}
      sm={{span: 6}}
      md={{span: 6}}
      lg={{span: 6}}
      xl={{span: 6}}
      xxl={{span: 6}}
      >
      <div className=''>

      <Link to="/message"> <FontAwesomeIcon icon={ faMessage} className="footer-icon"  /></Link>
     
      
  
      </div>
      </Col>

      <Col  
      xs={{span: 6}}
      sm={{span: 6}}
      md={{span: 6}}
      lg={{span: 6}}
      xl={{span: 6}}
      xxl={{span: 6}}
      >
      <div className=''>
      <Link to= '/notification'>  <FontAwesomeIcon icon={ faBell} className="footer-icon"  /></Link>
  
      </div>
      </Col>

      <Col  
      xs={{span: 6}}
      sm={{span: 6}}
      md={{span: 6}}
      lg={{span: 6}}
      xl={{span: 6}}
      xxl={{span: 6}}
      >
      <div className=''>
      
      <Link to="/userprofile"><FontAwesomeIcon icon= {faUser}  className="footer-icon"/></Link>
  
      </div>
      </Col>

     
      
    
    </Row>

</div>

    </div>
    </>
  )
}

export default Footer