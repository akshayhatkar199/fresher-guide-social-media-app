import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link, useNavigate } from "react-router-dom";
import {  faHome,faMessage,faBell ,faUser,faBars ,fauserGroup,faRightFromBracket,faRegistered,faF,faSquarePlus} from '@fortawesome/free-solid-svg-icons'
import { Col, Row ,Button, Modal, Space  } from 'antd';
import {useSelector} from 'react-redux'
import { ExclamationCircleFilled } from '@ant-design/icons';
import './sidebar.css'
const { confirm } = Modal;
const Sidebar = () => {
  const navigate = useNavigate();
  const userData = useSelector((state)=>state.userData);
const logout =()=>{
  confirm({
    title: 'Do you want to Conform for Logout?',
    icon: <ExclamationCircleFilled />,
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        localStorage.removeItem("token");
        window.location.href = "http://localhost:3000/";
       setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() =>{
      //  console.log('Oops errors!')
      });
    },
    onCancel() {},
  });

  // localStorage.removeItem("token");
  // alert("Conform for Logout ")
  // window.location.href = "http://localhost:3000/";
}

  return (
    <>
  
      <div className='home-container-1'>
      <div className="left-side-icone">
    
     <Link to="/vediocall"> <FontAwesomeIcon icon={faBars}  className="icone-size" />
    
     </Link>
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
     <Link to= '/notification'> <FontAwesomeIcon icon={faBell} className="icone-size" /> {userData.userinfo.notificationCount ? <span className='notificationLabel'>{userData.userinfo.notificationCount}</span> : null}</Link>
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
     <Link to="/myfriends"> <FontAwesomeIcon icon={faF} className="icone-size" /></Link>
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
     <Link to="/myfriendRequests"> <FontAwesomeIcon icon={faRegistered} className="icone-size" /></Link>
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
      <Link to="/creatpost" ><FontAwesomeIcon icon={faSquarePlus} className="icone-size" /></Link>
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