import React,{useState,useEffect,useRef} from 'react'
import Header from '../../components/Header'
import {useParams,Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SmileOutlined } from '@ant-design/icons';
import Sidebar from '../../components/Sidebar';
import {WithTokenApi} from '../../Helpers/axios';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import { Avatar, List,Button, } from 'antd'
import Image  from '../../images/userp.png';
import {useSelector} from 'react-redux'
import Onlineusers from '../../components/Onlineusers'
import MessageUsers from '../../components/MessageUsers'
import { Col, Row ,Input ,Result } from 'antd';
import './message.css'
import { format } from 'timeago.js';
import Footer from '../../components/Footer'
import Messagesection from "./messagesection";

const Message = ({socket}) => {
  let {userId } = useParams();
  const userData = useSelector((state)=>state.userData);
  const [onlineUser,setOnlineUser] = useState([]);
  const [reciveMessage,setMessage] = useState("");
  const [reciveMessageCount,setreciveMessageCount] = useState("");
 

   useEffect(() => {
      socket.emit("addUser", userData.userinfo.data);
    }, []);

    socket.on("getOnlineUsers",(data) => {
            //  console.log("getOnlineUsers",data)
             setOnlineUser(data)
    })
    socket.on("getMessage",(data) => {
            // console.log("getMessage",data)
            // console.log("userId",userId)
            if(data.senderId == userId){
              setMessage(data)
           }
           setreciveMessageCount(data)
    })  
 
 
  return (
    <div> 
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
      md={{span: 8}}
      lg={{span: 5}}
      xl={{span:5}}
      xxl={{span: 5}}
      >
      <div className='message-div' >
      <h3 className='home-head'>All users</h3>
     <MessageUsers getmessage = {reciveMessageCount} />

      </div>

      {onlineUser && onlineUser.length > 1 ? 
     
      <div className='mobile-online-users'>
      {
        onlineUser.map((e) => {
          return ( e.id != userData.userinfo.data.id ?
          
          <div className='mobile-label-main'><Link to={"/messages/"+e.id}>
            <label className='online-mobile-label'></label>
            <Avatar className='mobile-active-user-img' src={e.photo ? "http://localhost:8080/Images/"+e.photo : Image }  />
            </Link></div>
           : null)
        })
      }
      {/* <div className='mobile-label-main'><label className='online-mobile-label'></label><Avatar className='mobile-active-user-img' src="https://randomuser.me/api/portraits/men/10.jpg" /></div>
      <div className='mobile-label-main'><label className='online-mobile-label'></label><Avatar className='mobile-active-user-img' src="https://randomuser.me/api/portraits/men/10.jpg" /></div>
      <div className='mobile-label-main'><label className='online-mobile-label'></label><Avatar className='mobile-active-user-img' src="https://randomuser.me/api/portraits/men/10.jpg" /></div> */}

      </div>
      : null
      }
     

      </Col>

      
     <Col  
     xs={{span: 24}}
     sm={{span: 24}}
     md={{span: 12}}
     lg={{span: 12}}
     xl={{span: 12}}
     xxl={{span: 12}}
     >
     {
      <Messagesection
        socket = {socket}
        getmessage = {reciveMessage}
        onlineUser = {onlineUser}
       /> 
     }
     
     </Col>

     <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 4}}
      lg={{span: 5}}
      xl={{span: 5}}
      xxl={{span:5}}
      >
      <div className='message-div' >
      <h3 className='home-head'>Online users</h3>
     <Onlineusers users={onlineUser}/>

      </div>
     </Col>
    </Row>
 <br/>
 <br/>


    </div>
    <br/>
    <br/>
    
    <Footer />
    </div>
    </div>
  )
}

export default Message