import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link, useNavigate } from "react-router-dom";
import {  faHome,faMessage,faBell ,faUser,faBars ,fauserGroup,faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { Col, Row ,  } from 'antd';
import './sidebar.css'

const Sidebar = () => {
  const navigate = useNavigate();

const logout =()=>{
  // alert("hiii")
  localStorage.removeItem("token");
  navigate("/login");
}

  return (
    <>
  
      <div className='home-container-1'>
      <div className="left-side-icone">
    
    <FontAwesomeIcon icon={faBars}  className="icone-size" />
    
    
    <div style={{marginRight: "21px"}}>
    <hr />
    </div>
    
    </div>
     
      {/* <Col   
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 24}}
      lg={{span: 24}}
      xl={{span: 24}}
     xxl={{span: 24}} 
      >
      
     
      </Col> */}
      
      
      <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 24}}
      lg={{span: 24}}
      xl={{span: 24}}
      xxl={{span: 24}}
      >
      <div className="left-side-icone">
      <div className='icone-back'>
     <Link to="/home"> <FontAwesomeIcon icon={faHome} className="icone-size" /></Link>
      </div>
      </div>

      </Col>

      <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 24}}
      lg={{span: 24}}
      xl={{span: 24}}
      xxl={{span: 24}}
      >
      <div className="left-side-icone">
      <div className='icone-back'>
      <Link to="/userprofile"> <FontAwesomeIcon icon={faUser} className="icone-size" /></Link>
      </div>
      </div>

      </Col>

      <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 24}}
      lg={{span: 24}}
      xl={{span: 24}}
      xxl={{span: 24}}
      >
      <div className="left-side-icone">
      <div className='icone-back'>
      <Link to ="/message"> <FontAwesomeIcon icon={faMessage}  className="icone-size"/></Link>
    </div>
      </div>

      </Col>

      <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 24}}
      lg={{span: 24}}
      xl={{span: 24}}
      xxl={{span: 24}}
      >
      <div className="left-side-icone">
      <div className='icone-back'>
     <Link to= '/notification'> <FontAwesomeIcon icon={faBell} className="icone-size" /></Link>
      </div>
      </div>

      </Col>


     
      <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 24}}
      lg={{span: 24}}
      xl={{span: 24}}
      xxl={{span: 24}}
      >
      <div className="left-side-icone">
      <div className='icone-back'>
     <Link to="/myfriends"> <FontAwesomeIcon icon={faMessage} className="icone-size" /></Link>
      </div>
      </div>

      </Col>

      <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 24}}
      lg={{span: 24}}
      xl={{span: 24}}
      xxl={{span: 24}}
      >
      <div className="left-side-icone">
      <div className='icone-back'>
     <Link to="/myfriendRequests"> <FontAwesomeIcon icon={faMessage} className="icone-size" /></Link>
      </div>
      </div>

      </Col>

      <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 24}}
      lg={{span: 24}}
      xl={{span: 24}}
      xxl={{span: 24}}
      >
      <div className="left-side-icone">
      <div className='icone-back' onClick={logout}>
           <FontAwesomeIcon icon={faRightFromBracket} className="icone-size" />
      </div>
      </div>

      </Col>

      
      </div>
    
   

    </>
  )
}

export default Sidebar