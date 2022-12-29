import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link ,useNavigate } from "react-router-dom";
import Image2 from '../../images/he-logo.png';
import Image4  from '../../images/logo-college-removebg-preview.png';
import {  faHome,faMessage,faBell ,faUser,faRightFromBracket,faSquarePlus} from '@fortawesome/free-solid-svg-icons'
import { Col, Row , Menu } from 'antd';


const Footer = () => {

  const navigate = useNavigate();

  const logout =()=>{
  
    localStorage.removeItem("token");
    alert("Conform for Logout ")
    navigate("/login");
  }
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
      {/* <img src={Image2} alt="logo" className="img-fluid "></img>  */}
      <Link to="/home"><img src={Image4} alt="logo" className="img-fluid " style={{height: "57px" ,width: "163px"}}></img> 
      </Link>
      
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
      <div className='' >
      <Menu className='footer-menu'>

      <Menu.Item key="1"><span className='footer-heading'>Quick link</span></Menu.Item> 
     <Link to="/home" className='footer-tex-color'><Menu.Item key="2">Home</Menu.Item></Link>
     <Link to="/message" className='footer-tex-color'><Menu.Item key="3">message</Menu.Item></Link>
     <Link to="/notification" className='footer-tex-color'><Menu.Item key="4">notification</Menu.Item></Link>
  
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

      <Link to="" className='footer-tex-color'><Menu.Item key="5"> <span className='footer-heading'>Service</span></Menu.Item></Link>
      <Link to="/myfriendRequests" className='footer-tex-color'> <Menu.Item key="6">MyfriendRequests</Menu.Item></Link>
      <Link to="/myfriends" className='footer-tex-color'><Menu.Item key="7">Myfriends</Menu.Item></Link>
    
  
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

      <Link to="/creatpost" className='footer-tex-color'><Menu.Item key="8"><span className='footer-heading'>Create post</span></Menu.Item></Link>
      <Link to="/updateprofile" className='footer-tex-color'><Menu.Item key="9">update Profile</Menu.Item></Link>
      <Link to="/userprofile" className='footer-tex-color'><Menu.Item key="10">user Profile</Menu.Item></Link>

      </Menu>
      </div>
      </Col>

     
      
    
    </Row>


 </div>
 
    <div className='main-footer'> 
    <div>
    <Row>

      <Col  
      xs={{span: 4}}
      sm={{span: 4}}
      md={{span: 4}}
      lg={{span: 4}}
      xl={{span: 4}}
      xxl={{span: 4}}
      >
      <div className=''>
      <Link to="/home"><FontAwesomeIcon icon={faHome} className="footer-icon" /></Link>
      
      
      </div>
      </Col>

      <Col  
      xs={{span: 4}}
      sm={{span: 5}}
      md={{span: 4}}
      lg={{span: 4}}
      xl={{span: 4}}
      xxl={{span: 4}}
      >
      <div className=''>

      <Link to="/message"> <FontAwesomeIcon icon={ faMessage} className="footer-icon"  /></Link>
     
      
  
      </div>
      </Col>

      <Col  
      xs={{span: 4}}
      sm={{span: 5}}
      md={{span: 4}}
      lg={{span: 4}}
      xl={{span: 4}}
      xxl={{span: 4}}
      >
      <div className=''>
      <Link to= '/notification'>  <FontAwesomeIcon icon={ faBell} className="footer-icon"  /></Link>
  
      </div>
      </Col>

      <Col  
      xs={{span: 4}}
      sm={{span: 5}}
      md={{span: 4}}
      lg={{span: 4}}
      xl={{span: 4}}
      xxl={{span: 4}}
      >
      <div className=''>
      
      <Link to="/userprofile"><FontAwesomeIcon icon= {faUser}  className="footer-icon"/></Link>
  
      </div>
      </Col>

      <Col  
      xs={{span: 4}}
      sm={{span: 5}}
      md={{span: 4}}
      lg={{span: 4}}
      xl={{span: 4}}
      xxl={{span: 4}}
      >
      <div className=''>
      <Link to="/creatpost" ><FontAwesomeIcon icon={faSquarePlus} className="footer-icon" /></Link>
      {/* <Link to="/myfriends"> <FontAwesomeIcon icon={faMessage} className="footer-icon" /></Link> */}
  
      </div>
      </Col>


      {/* <Col  
      xs={{span: 3}}
      sm={{span: 3}}
      md={{span: 3}}
      lg={{span: 3}}
      xl={{span: 3}}
      xxl={{span: 3}}
      >
      <div className=''>
      
      <Link to="/myfriendRequests"> <FontAwesomeIcon icon={faMessage} className="footer-icon" /></Link>
  
      </div>
      </Col> */}

      {/* <Col  
      xs={{span: 3}}
      sm={{span: 3}}
      md={{span: 3}}
      lg={{span: 3}}
      xl={{span: 3}}
      xxl={{span: 3}}
      >
      <div className=''>
      <div onClick={logout}>
           <FontAwesomeIcon icon={faRightFromBracket} className="footer-icon" />
      </div>
     
  
      </div>
      </Col> */}

      
    
    </Row>

</div>

    </div>
    </>
  )
}

export default Footer