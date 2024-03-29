import React,{useState,useEffect,useRef} from 'react'
import Header from '../../components/Header'
import {useParams,Link,useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SmileOutlined } from '@ant-design/icons';
import Sidebar from '../../components/Sidebar';
import {WithTokenApi} from '../../Helpers/axios';
import {faPaperPlane,faVideoCamera} from '@fortawesome/free-solid-svg-icons'
import { Avatar, List,Button,Col, Row ,Input ,Result,Form  } from 'antd'
import Image  from '../../images/userp.png';
import {setCallingUserName} from "../../Store/reducers/vediocallReducers";
import {useSelector,useDispatch} from 'react-redux'
import Onlineusers from '../../components/Onlineusers'
import MessageUsers from '../../components/MessageUsers'
import './message.css'
import { format } from 'timeago.js';
import Footer from '../../components/Footer'

const Messagesection = ({socket,getmessage,onlineUser}) => {
  let {userId } = useParams();
  const dispatch = useDispatch()
  const listItems = useRef(null);
  const navigate = useNavigate()
  const [form] = Form.useForm();
  const userData = useSelector((state)=>state.userData);
  const [messageList,setMessagelist] = useState([]);
  const [userProfile,setUserProfile] = useState({});
  const [message,setMessage] = useState("");
 useEffect(()=>{
 	  if(getmessage.senderId == userId){
   if (messageList.some(e => e.id != getmessage.id)) {
              setMessagelist([...messageList,getmessage])
            }
        }
 },[getmessage]);
 console.log("onlineUser",onlineUser)
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
      setMessagelist(result.data.messages)
      setUserProfile(result.data.userData[0])
    }
  }
   useEffect(()=>{
  const lastItem = listItems.current?.lastElementChild;
  if (lastItem) {
    lastItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  },[messageList])
  const onFinish = (values) => {
  //  console.log("onFinish",values)
   sendMessage()
  }

  const sendMessage = async() => {
    if(message){

      const today = new Date();
        let payload = {
          "senderId":userData.userinfo.data.id,
          "reciverId":userId,
          "message_text":message
        }
      
        const result= await WithTokenApi.post("/message/send",payload)
        // console.log("result",result);
       
       
        payload.id =result.data.message.insertId
        socket.emit("sendMessage",{...payload,
          createdDate: today.getTime()})
        payload.createdDate = today.getTime()
          form.resetFields();
        setMessagelist([...messageList,payload])
      }    
  }
  const setNameCaller = async(name) => {
    await dispatch(setCallingUserName(name))
    navigate("/vediocall/"+onlineUser.find(item => item.id == userData.userinfo.data.id).socketId+"/"+onlineUser.find(item => item.id == userId).socketId)
  }
  return (
 

     
     <div className='main-message'>
     {userId? 
     <>
            <div>
                  <div>
                          <div className='image-div'> 
                         {onlineUser && onlineUser.length > 0  && onlineUser.some(i => i.id == userId) ?<label className='message-online-label'></label> :null } <img src={userProfile.photo ? "http://localhost:8080/Images/"+userProfile.photo : Image } alt="logo" className="message-user-image"></img>   
                          </div>
                          <div className='span-text'>
                          {<Link to= {"/userprofile/"+userProfile.id+ ""}><span style={{color: "black"}}>{userProfile.name} </span></Link>}
                              <span> {onlineUser && onlineUser.length > 0  && onlineUser.some(i => i.id == userId)?
                                // <Link to={"/vediocall/"+onlineUser.find(item => item.id == userData.userinfo.data.id).socketId+"/"+onlineUser.find(item => item.id == userId).socketId}>
                                  <Button type="primary" shape="circle"
                                   onClick={() => setNameCaller(onlineUser.find(item => item.id == userId).name)}
                                  icon={ <FontAwesomeIcon icon={ faVideoCamera} />} /> 
                                  // </Link>
                              :null}</span>
                              <br />
                              {/* <span style={{color: " #ffc5c5"}}> active now</span> */}
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
             <Form
               form={form}
      name="customized_form_controls"
      layout="inline"
      onFinish={onFinish}
    >
      <Form.Item
        name="message"
        className="messageinput"
         rules={[
          {
            required: true,
            message: 'Please input your message!',
          },
        ]}
      >
        <Input   onChange = {(e) => setMessage(e.target.value)} placeholder='Message type here' />
      </Form.Item>
      <Form.Item
        className="messagebtnn"
      >
        <Button type="primary" htmlType="submit">
        <FontAwesomeIcon icon={ faPaperPlane} />
        </Button>
      </Form.Item>
    </Form>
            

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