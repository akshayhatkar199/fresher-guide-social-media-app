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

const Messagesection = ({socket,getmessage}) => {
  let {userId } = useParams();
   const listItems = useRef(null);
  const userData = useSelector((state)=>state.userData);
  const [messageList,setMessagelist] = useState([]);
  const [userProfile,setUserProfile] = useState({});
  const [message,setMessage] = useState("");
 useEffect(()=>{
 	  if(getmessage.senderId == userId){
   if (messageList.some(e => e.id != getmessage.id)) {
              setMessagelist([...messageList,getmessage])
              /* vendors contains the element we're looking for */
            }
        }
 },[getmessage]);

  useEffect(() => {
    getMessagelist();
  },[userId]);
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
   useEffect(()=>{
  //  scrollRef.current?.scrollIntoView({
  //   behavior: "smooth"
  //  });
  const lastItem = listItems.current?.lastElementChild;
  if (lastItem) {
    lastItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  },[messageList])


  const sendMessage = async() => {
    // console.log("message",message)
    if(message){

      const today = new Date();
        let payload = {
          "senderId":userData.userinfo.data.id,
          "reciverId":userId,
          "message_text":message
        }
        socket.emit("sendMessage",{...payload,
          createdDate: today.getTime(),
          id: Math.floor(Math.random() * 1000)})
        const result= await WithTokenApi.post("/message/send",payload)
        // console.log("result",result);
       
       
        payload.id =result.data.message.insertId
        payload.createdDate = today.getTime()
       
        // console.log("...messageList,payload",[...messageList,payload])
        setMessagelist([...messageList,payload])
      }    
  }
  return (
 

     
     <div className='main-message'>
     {userId? 
     <>
            <div>
                  <div>
                          <div className='image-div'> 
                          <label className='message-online-label'></label> <img src={Image3} alt="logo" className="message-user-image"></img>   
                          </div>
                          <div className='span-text'>
                              <span style={{color: "black"}}>{userProfile.name} </span><br />
                              <span style={{color: " #ffc5c5"}}> active now</span>
                          </div>
                  </div>
                  <br/>
                  <br/>
                  <hr  className='hr-message'/>
                  <div  className='messagedivList'  >
                  <ul ref={listItems}>{
                     messageList.length > 0 ? 
                        messageList.map((e) => {
                           return  <li key={e.id} 
                           className={e.senderId ==  userData.userinfo.data.id ? 'text-message message-right' :'text-message' }>
                             <div >
                              <div className={e.senderId ==  userData.userinfo.data.id ? 'message-right-div' :'message-left-div' }>{e.message_text} </div> 
                              <span
                              className={e.senderId ==  userData.userinfo.data.id ? 'message-time message-time-right' :' message-time' }
                              >{format(e.createdDate)}</span>
                             </div>
                             
                             </li>
                        })
                     : null
                    }
                  
                      {/* <li className='send-me'> hii</li>
                      <li className='another-send'>hello</li> */}
                  </ul>
                  </div>
            </div>
            <hr className='message-hr'/>
            <div style={{margin: "20px",    marginBottom:"10px"}}>
                <Input.Group compact>
                  <Input
                    style={{
                      width: 'calc(100% - 45px)',
                     }}
                    onChange = {(e) => setMessage(e.target.value)}
                    placeholder='message type here'
                  />
                  <Button type="primary" onClick={sendMessage}><FontAwesomeIcon icon={ faPaperPlane} /></Button>
                </Input.Group>

            </div>
            <br/>   
        </>
        :
        <>
          <Result
            icon={<SmileOutlined />}
            title="Please select user for message!"
           
          />
        </>
        }


     </div>
   

   
  )
}

export default Messagesection