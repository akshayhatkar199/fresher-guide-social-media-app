import React,{useEffect, useState,useRef}from 'react'
import {Link } from "react-router-dom";
import { Col, Row,Modal, Input, Space ,Drawer,Button } from 'antd';
import {HomeOutlined,ExclamationCircleFilled} from '@ant-design/icons'
import{MessageOutlined}from '@ant-design/icons'
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHome,faMessage,faBell,faBars,faUser,faRightFromBracket,faF,faRegistered,faSquarePlus} from '@fortawesome/free-solid-svg-icons'
import {NotificationOutlined } from '@ant-design/icons'
import Image2 from '../../images/he-logo.png';
import Image4  from '../../images/logo-college-removebg-preview.png';
import Image3 from '../../images/userp.png';
import { SomeOnCall } from "../../Store/reducers/vediocallReducers"
import {updateNotificationCount} from "../../Store/reducers/userReducer";
import Teams from "../../Pages/Vediocall/assests/teams.mp3";
import './header.css'
const { Search } = Input;
const { confirm } = Modal;

const Header = ({socket}) => {
  const dispatch = useDispatch()
const [searchinput,setSearchinputs] =  useState("");
const [open, setOpen] = useState(false);
const navigate = useNavigate()
const [callData,setCallData] = useState({});
const [openCall, setCallOpen] = useState(false);
const userData = useSelector((state)=>state.userData);
const Audio = useRef();
// console.log("userData",userData);
// console.log("searchinput",searchinput)
useEffect(() => {
  if (callData) {
    Audio?.current?.play();
  } else Audio?.current?.pause();
}, [callData]);

useEffect(() => {
  socket.on("callUser",async (data) => {
    console.log("data",data)
    setCallData(data)
    await dispatch(SomeOnCall(data))
    setCallOpen(true)

  })
  socket.on("newNotification",async (data) => {
    console.log("data",data)
    var newData = userData.userinfo;
    await dispatch(updateNotificationCount({...newData,notificationCount:userData.userinfo.notificationCount + 1}))
    

  })
}) 
const callFutherProceed = () => {
  navigate("/vediocall/"+callData.to+"/"+callData.from)
}

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
      }).catch(() => {// console.log('Oops errors!')
      });
    },
    onCancel() {},
  });
  // localStorage.removeItem("token");
  // alert("Conform for Logout ")
  // window.location.href = "http://localhost:3000/";
}

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


const onSearch = () => {
  
  if(searchinput !==""){
    navigate("/searchuser/"+ searchinput)
   }
  
  }


  return (
    <div className='mean-header'> 
     <Modal
        title="Vedio Call Notification"
        open={openCall}
        onOk={callFutherProceed}
        onCancel={() => setCallOpen(false)}
        okText="Goto Video Call page"
        cancelText="Cancel"
      >
         <audio src={Teams} loop ref={Audio} />
      <h3>{callData.name} is calling you !!</h3>
      </Modal>
    <div>
    <Row>

      <Col  
      xs={{span: 20}}
      sm={{span: 20}}
      md={{span: 16}}
      lg={{span: 12}}
      xl={{span: 12}}
      xxl={{span: 12}}
      >
      <div className='header'>
    
      <Link to="/home"><img src={Image4} alt="logo" className="img-fluid " style={{height: "57px" ,width: "163px"}}></img></Link>

    
      <Search  value={searchinput} placeholder="input search text"   className= "header-input"  onSearch={onSearch}z onChange ={(e)=> setSearchinputs(e.target.value)} enterButton style={{
        width: "50%", margin: "18px"
      
      }}/>   

      
      

  <Link to="/home"> <FontAwesomeIcon icon={faHome} className="header-home-icons" /></Link>
  
      </div>
      </Col>

      <Col 
      xs={{span: 4}}
      sm={{span: 4}}
      md={{span: 8}}
      lg={{span: 12}}
      xl={{span: 12}}
      xxl={{span: 12}}
      >
      
      <div className='col2-header'>
      <Link to ="/message"> <FontAwesomeIcon icon={ faMessage} className="message-icon"  /></Link>
      <Link to= '/notification'> <FontAwesomeIcon icon={ faBell} className="bell-icon"  />{userData.userinfo.notificationCount ? <span className='notificationLabel'>{userData.userinfo.notificationCount}</span> : null}</Link>
      <label onClick={showDrawer} >
      <label className='header-online-label'></label> <img src={userData.userinfo.data.photo ? "http://localhost:8080/Images/"+userData.userinfo.data.photo :Image3} alt="logo" className="user-image"></img> 
      {/* <FontAwesomeIcon icon={faBars} className ="baricon-header" /> */}
      </label>
      <Drawer title="Pages" placement="right" onClose={onClose} open={open}>
        <Link to="/home"><FontAwesomeIcon icon={faHome} className="header-drawer-icon"/> <span className='pages-name'>Home</span></Link>
        <Link to="/message"> <FontAwesomeIcon icon={ faMessage}  className="header-drawer-icon"/> <span className='pages-name'>Message</span></Link>
        <Link to= '/notification'>  <FontAwesomeIcon icon={ faBell}  className="header-drawer-icon"/> <span className='pages-name'>Notification</span></Link>
        <Link to="/userprofile"><FontAwesomeIcon icon= {faUser}  className="header-drawer-icon"/><span className='pages-name'>Userprofile</span></Link>
        <Link to="/myfriends"> <FontAwesomeIcon icon={faF}  className="header-drawer-icon"/><span className='pages-name'>Myfriends</span></Link>
        <Link to="/creatpost" ><FontAwesomeIcon icon={faSquarePlus}  className="header-drawer-icon" /><span className='pages-name'>Creat Post</span></Link>
        <Link to="/myfriendRequests"> <FontAwesomeIcon icon={faRegistered}  className="header-drawer-icon"/><span className='pages-name'>MyfriendRequests</span></Link>
        <div onClick={logout}>
           <FontAwesomeIcon icon={faRightFromBracket} className="header-drawer-icon"/> <span className='pages-name'>Logout</span>
      </div>
     
      </Drawer>
        {/* <label className='header-online-label'></label> <img src={Image3} alt="logo" className="user-image"></img>  */}
      <div className='header-span-text'>
      <span style={{color: "white"}}>{userData.userinfo.data.name}</span><br />
      <span style={{color: " #ffc5c5"}}> active now</span>
      </div>

      </div></Col>
    </Row>

</div>

    </div>
  )
}

export default Header