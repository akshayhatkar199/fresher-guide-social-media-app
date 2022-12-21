import React,{useState,useEffect} from 'react'
import Header from '../../components/Header'
import {useParams} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SmileOutlined } from '@ant-design/icons';
import Sidebar from '../../components/Sidebar';
import {WithTokenApi} from '../../Helpers/axios';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import { Avatar, List,Button, } from 'antd'
import Image3 from '../../images/user.jpg';
import {useSelector} from 'react-redux'
import Onlineusers from '../../components/Onlineusers'
import { Col, Row ,Input ,Result } from 'antd';
import './message.css'
import Footer from '../../components/Footer'


const Message = () => {
  let {userId } = useParams();
  const userData = useSelector((state)=>state.userData);
  console.log("userId",userId)
  const [messageList,setMessagelist] = useState([]);
  const [userProfile,setUserProfile] = useState({});
  const [message,setMessage] = useState("");
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
      console.log("result",result);
      setMessagelist(result.data.messages)
      setUserProfile(result.data.userData[0])
    }
  }
  const sendMessage = async() => {
    console.log("message",message)
    if(message){

    
        let payload = {
          "senderId":userData.userinfo.data.id,
          "reciverId":userId,
          "message_text":message
        }
        const result= await WithTokenApi.post("/message/send",payload)
        console.log("result",result);
        const today = new Date();
        payload.id =result.data.message.insertId
        payload.createdDate = today.getTime()
        console.log("...messageList,payload",[...messageList,payload])
        setMessagelist([...messageList,payload])
      }    
  }
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
      lg={{span: 6}}
      xl={{span: 6}}
      xxl={{span: 6}}
      >
      <div className='message-div' >
      <h3 className='home-head'>Online users</h3>
     <Onlineusers />

      </div>


      <div className='mobile-online-users'>

      <div className='mobile-label-main'><label className='online-mobile-label'></label><Avatar className='mobile-active-user-img' src="https://randomuser.me/api/portraits/men/10.jpg" /></div>
      <div className='mobile-label-main'><label className='online-mobile-label'></label><Avatar className='mobile-active-user-img' src="https://randomuser.me/api/portraits/men/10.jpg" /></div>
      <div className='mobile-label-main'><label className='online-mobile-label'></label><Avatar className='mobile-active-user-img' src="https://randomuser.me/api/portraits/men/10.jpg" /></div>
      <div className='mobile-label-main'><label className='online-mobile-label'></label><Avatar className='mobile-active-user-img' src="https://randomuser.me/api/portraits/men/10.jpg" /></div>

      </div>

      </Col>

      
     <Col  
     xs={{span: 24}}
     sm={{span: 24}}
     md={{span: 16}}
     lg={{span: 16}}
     xl={{span: 16}}
     xxl={{span: 16}}
     >
     <div className='main-message'>
     {userId? 
     <>
            <div className='messagedivList'>
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
                  <ul>{
                     messageList.length > 0 ? 
                        messageList.map((e) => {
                           return  <li key={e.id} 
                           className={e.senderId ==  userData.userinfo.data.id ? 'text-message message-right' :'text-message' }>
                             <div className={e.senderId ==  userData.userinfo.data.id ? 'message-right-div' :'message-left-div' }>{e.message_text}</div>
                             </li>
                        })
                     : null
                    }
                      {/* <li className='send-me'> hii</li>
                      <li className='another-send'>hello</li> */}
                  </ul>

            </div>
            <hr className='message-hr'/>
            <div style={{margin: "20px"}}>
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