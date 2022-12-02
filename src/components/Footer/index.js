import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

      <Menu.Item><span className='footer-heading'>Quick link</span></Menu.Item> 
      <Menu.Item>Home</Menu.Item>
      <Menu.Item>About</Menu.Item>
      <Menu.Item>Products</Menu.Item>
  
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

      <Menu.Item><span className='footer-heading'>Service</span></Menu.Item>
      <Menu.Item>FAQ</Menu.Item>
      <Menu.Item>Contact</Menu.Item>
    
  
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

      <Menu.Item><span className='footer-heading'>Newsletter</span></Menu.Item>
      <Menu.Item>Subscribe newsletter to get updates.</Menu.Item>

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
      <FontAwesomeIcon icon={faHome} className="footer-icon" />
      
      
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
      <FontAwesomeIcon icon={ faMessage} className="footer-icon"  />
     
      
  
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
      <FontAwesomeIcon icon={ faBell} className="footer-icon"  />
  
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
      
      <FontAwesomeIcon icon= {faUser}  className="footer-icon"/>
  
      </div>
      </Col>

     
      
    
    </Row>

</div>

    </div>
    </>
  )
}

export default Footer