import React,{useState,useEffect,useRef} from 'react'
import Header from '../../components/Header'
import {useParams,Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SmileOutlined } from '@ant-design/icons';
import Sidebar from '../../components/Sidebar';
import {WithTokenApi} from '../../Helpers/axios';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import { Avatar, List,Button, } from 'antd'
import Image3 from '../../images/user.jpg';
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
  const listItems = useRef(null);
  const userData = useSelector((state)=>state.userData);
  // console.log("userId",userId)
  const [messageList,setMessagelist] = useState([]);
  const [userProfile,setUserProfile] = useState({});
  const [onlineUser,setOnlineUser] = useState([]);
  const [reciveMessage,setMessage] = useState("");
  useEffect(() => {
    getMessagelist();
  },[userId]);
  useEffect(()=>{
  //  scrollRef.current?.scrollIntoView({
  //   behavior: "smooth"
  //  });
  const lastItem = listItems.current?.lastElementChild;
  if (lastItem) {
    lastItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  },[messageList])


   useEffect(() => {
      socket.emit("addUser", userData.userinfo.data);
    }, []);

    socket.on("getOnlineUsers",(data) => {
             console.log("getOnlineUsers",data)
             setOnlineUser(data)
    })
    socket.on("getMessage",(data) => {
            console.log("getMessage",data)
            console.log("userId",userId)
            if(data.senderId == userId){
              setMessage(data)
            //   if (messageList.some(e => e.id != data.id)) {
            //   setMessagelist([...messageList,data])
            //   /* vendors contains the element we're looking for */
            // }
            }
    })  
 
 
  const getMessagelist = async() => {
    if(userId){ 
      const payload = {
        "loginuserId": userData.userinfo.data.id,
        "userId" : userId
      }
      const result= await WithTokenApi.post("/message/getmessages",payload)
      // console.log("result",result);
      setMessagelist(result.data.messages)
      setUserProfile(result.data.userData[0])
    }
  }
  // const sendMessage = async() => {
  //   // console.log("message",message)
  //   if(message){

  //     const today = new Date();
  //       let payload = {
  //         "senderId":userData.userinfo.data.id,
  //         "reciverId":userId,
  //         "message_text":message
  //       }
  //       socket.emit("sendMessage",{...payload,
  //         createdDate: today.getTime(),
  //         id: Math.floor(Math.random() * 1000)})
  //       const result= await WithTokenApi.post("/message/send",payload)
  //       // console.log("result",result);
       
       
  //       payload.id =result.data.message.insertId
  //       payload.createdDate = today.getTime()
       
  //       // console.log("...messageList,payload",[...messageList,payload])
  //       setMessagelist([...messageList,payload])
  //     }    
  // }
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
     <MessageUsers />

      </div>

      {onlineUser && onlineUser.length > 0 ? 
     
      <div className='mobile-online-users'>
      {
        onlineUser.map((e) => {
          return ( e.id != userData.userinfo.data.id ?
          
          <div className='mobile-label-main'><Link to={"/messages/"+e.id}>
            <label className='online-mobile-label'></label>
            <Avatar className='mobile-active-user-img' src="https://randomuser.me/api/portraits/men/10.jpg" />
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
      messageList.length > 0 ?  <Messagesection
        socket = {socket}
        getmessage = {reciveMessage}
       /> : null
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
    
    <Footer />
    </div>
    </div>
  )
}

export default Message