import React,{useState,useEffect} from "react"
import Home from './Pages/Home';
import Login from './Pages/Login';
import Notification from './Pages/Notification';
import Registration from './Pages/Registration';
import Creatpost from './Pages/Creatpost'
import Userprofile from './Pages/Userprofile'
import Updateprofile from './Pages/Updateprofile'
import Message from './Pages/Message';
import { useSelector, useDispatch } from 'react-redux'
import {checkLogin} from './Store/reducers/userReducer'
import Myfriends from './Pages/Myfriends';
import MyfriendRequests from './Pages/MyfriendRequests'
import Searchuser from './Pages/Searchuser';
import Postdetail from "./Pages/Postdetail";
import Vediocall from "./Pages/Vediocall";
import Vediocall2 from "./Pages/Vediocall/Home";
import socketIOClient from "socket.io-client";
import {BrowserRouter, Route, Routes,Navigate} from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { SyncOutlined} from '@ant-design/icons';
import { Space } from 'antd';
const ENDPOINT = "http://localhost:8080/";
const newSocket = socketIOClient(ENDPOINT, { transports : ['websocket'] });
function App() {


  const [onlineUser,setOnlineUser] = useState([]);
  const dispatch = useDispatch()  
  const userData = useSelector((state)=>state.userData);
  const [isLogin,setIsLogin] = useState(false);
  const [loading,setLoading] = useState(true);
  const [socket, setSocket] = useState(newSocket);
  useEffect(() => {
    checkIsLogin();
  },[]);
  // useEffect(() => {
    // const newSocket = socketIOClient(ENDPOINT, { transports : ['websocket'] });
    // setSocket(newSocket);
    // return () => newSocket.close();
  // }, []);
  const checkIsLogin = async() => {
    //console.log("localStorage.getItem(token)",localStorage.getItem("token"))
    const token = localStorage.getItem("token");
    if(token){
      const data=await dispatch(checkLogin(token))
      // console.log("userData.userinfo",data)
        socket.emit("addUser", data.payload?.info?.data);
     
    
      setIsLogin(true);
    }
    setLoading(false);
  }
  
  socket.on("getOnlineUsers",(data) => {
    //  console.log("getOnlineUsers",data)
     setOnlineUser(data)
})
 //   return (
 // <BrowserRouter>
 //      <Routes>
 //       <Route exact path="/vediocall" element= { <Vediocall />}/>
 //         </Routes>
 //     </BrowserRouter> 

 //  );
  if(loading){
    return(
      <div style={{gap: "8px",display: "grid",placeItems: "center", marginTop: "237px"}}>
        {/* Loading... */}
        <Space >
           <SyncOutlined spin style={{fontSize:"33px",padding: "10px" ,color:"black"}} className="loading-symbol"  />
          
        </Space>
      </div>
    )
  }
  
// return (
//        <BrowserRouter>
//       <Routes>
//         {
//           isLogin ? 
//           <>
//              <Route exact path="/" element= { <Home />}/>
//           <Route path="/home" element={<Home />} />
//           <Route path="/message" element={<Message socket={socket} />}/>
//           <Route path="/messages/:userId" element={<Message socket={socket} />}/>
//           <Route path="/notification" element={< Notification/>}/> 
//           <Route path="/creatpost" element={<Creatpost/>}/>
//           <Route path="/updatepost/:postId" element={<Creatpost/>}/>
//           <Route path="/userprofile" element={<Userprofile/>}/>
//           <Route path="/userprofile/:userId" element={<Userprofile/>}/>
//           <Route path="/updateprofile" element={<Updateprofile/>}/>
//           <Route path="/myfriends" element={<Myfriends/>}/>
//           <Route path='/myfriendRequests' element={<MyfriendRequests/>}/>
//           <Route path='/searchuser/:searchinput' element={<Searchuser/>}/>
//           <Route path='/postdetail/:postId' element={<Postdetail/>}/>
//           </>
//           :
//             <> 
//              <Route exact path="/" element= { <Login />}/>
//               <Route  path="/login" element= { <Login />}/>
//           <Route  path="/registration" element= {<Registration />}/>
//           </>
//         }
       
//            <Route  path="/vediocall" element= { <Vediocall />}/>
         
//           {/* <Route path='*'  element={<Navigate to="/" />} /> */}
//         </Routes>
//      </BrowserRouter>
//     ) 



 
  if(isLogin){
    return (
       <BrowserRouter>
      <Routes>
          <Route exact path="/" element= { <Home  socket={socket} onlineUser={onlineUser}/>}/>
          <Route path="/home" element={<Home  socket={socket} onlineUser={onlineUser} />} />
          <Route path="/message" element={<Message socket={socket} onlineUser={onlineUser} />}/>
          <Route path="/messages/:userId" element={<Message socket={socket} onlineUser={onlineUser} />}/>
          <Route path="/notification" element={< Notification  socket={socket} onlineUser={onlineUser}/>}/> 
          <Route path="/creatpost" element={<Creatpost  socket={socket} onlineUser={onlineUser}/>}/>
          <Route path="/updatepost/:postId" element={<Creatpost  socket={socket} onlineUser={onlineUser}/>}/>
          <Route path="/userprofile" element={<Userprofile  socket={socket} onlineUser={onlineUser}/>}/>
          <Route path="/userprofile/:userId" element={<Userprofile  socket={socket} onlineUser={onlineUser}/>}/>
          <Route path="/updateprofile" element={<Updateprofile  socket={socket} onlineUser={onlineUser}/>}/>
          <Route path="/myfriends" element={<Myfriends  socket={socket} onlineUser={onlineUser}/>}/>
          <Route path='/myfriendRequests' element={<MyfriendRequests  socket={socket} onlineUser={onlineUser}/>}/>
          <Route path='/searchuser/:searchinput' element={<Searchuser  socket={socket} onlineUser={onlineUser}/>}/>
           <Route  path="/vediocall/:userId/:socketId" element= { <Vediocall  socket={socket} onlineUser={onlineUser} />}/>
           <Route  path="/Vediocall2" element= { <Vediocall2 />}/>
           <Route path='/postdetail/:postId' element={<Postdetail  socket={socket} onlineUser={onlineUser}/>}/>
          <Route path='*'  element={<Navigate to="/" />} />
        </Routes>
     </BrowserRouter>
    ) 
  }else{
    return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element= { <Login />}/>
          <Route  path="/login" element= { <Login />}/>
          <Route  path="/registration" element= {<Registration />}/>
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
     </BrowserRouter> 
    )
  }
  
  
}

export default App;
