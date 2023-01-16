
import React,{useState,useEffect} from 'react'
import Header from '../../components/Header'
import {Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Sidebar from '../../components/Sidebar';
import {  faHome,faMessage,faBell ,faUser,faBars ,faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import { Avatar, List,Button, } from 'antd'
import Image3 from '../../images/user.jpg';
import { Col, Row , Menu,Input } from 'antd';
import {updateNotificationCount} from "../../Store/reducers/userReducer"
import Image  from '../../images/userp.png';
import {WithTokenApi} from '../../Helpers/axios';
import './notification.css'
import {useSelector,useDispatch} from 'react-redux'
import Footer from '../../components/Footer'
import { format } from 'timeago.js';


const Notification = ({socket}) => {
  const dispatch = useDispatch()
  const userData = useSelector((state)=>state.userData);
  //notifications
  const [notifications,setNotifications] = useState([]);
   
useEffect(()=>{
  getotifications()
},[])

const getotifications =async()=>{
  const result = await WithTokenApi.get("/notifications")
  // console.log("result",result);
  setNotifications(result.data)
  var newData = userData.userinfo;
  await dispatch(updateNotificationCount({...newData,notificationCount:0}))
  
}
  return (
    <div> 
    <Header socket={socket} />
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
    
 <div className='main-notification'>

     <div className='notification-div' >
      <h3 className='title-notification'>Notification</h3>
      <hr />
      <List
    itemLayout="horizontal"
    dataSource={notifications}
    renderItem={(item ) => (
      <List.Item>
            <List.Item.Meta
              avatar={<div ><label className='online-label'></label><Avatar src={item.photo ? "http://localhost:8080/Images/"+item.photo : Image } /></div>}
              title={<Link to= {"/userprofile/"+item.id+ ""}>{item.name}</Link>}
              description={item.text + " " + format(item.createdDate) } 
            />
             <Link to={"/messages/"+item.id+""}><FontAwesomeIcon icon={faMessage}  className="friend-message-icon"/></Link>
          </List.Item>
    )}
  />

      </div>

 <br/>   
 
     
     </div>
      </Col>
      
    </Row>
 <br/>
 <br/>

    </div>
    <br/>
    <Footer />
    </div>
    </div>
  )
}

export default Notification 