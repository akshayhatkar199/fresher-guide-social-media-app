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
const ENDPOINT = "http://localhost:8080/";
 
function App() {


 
  const dispatch = useDispatch()  
  const [isLogin,setIsLogin] = useState(false);
  const [loading,setLoading] = useState(true);
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    checkIsLogin();
  },[]);
  useEffect(() => {
    const newSocket = socketIOClient(ENDPOINT, { transports : ['websocket'] });
    setSocket(newSocket);
    // return () => newSocket.close();
  }, []);
  const checkIsLogin = async() => {
    //console.log("localStorage.getItem(token)",localStorage.getItem("token"))
    const token = localStorage.getItem("token");
    if(token){
      await dispatch(checkLogin(token))
      setIsLogin(true);
    }
    setLoading(false);
  }
 //   return (
 // <BrowserRouter>
 //      <Routes>
 //       <Route exact path="/vediocall" element= { <Vediocall />}/>
 //         </Routes>
 //     </BrowserRouter> 

 //  );
  if(loading){
    return(
      <div>
        Loading...
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
          <Route exact path="/" element= { <Home  socket={socket} />}/>
          <Route path="/home" element={<Home  socket={socket} />} />
          <Route path="/message" element={<Message socket={socket} />}/>
          <Route path="/messages/:userId" element={<Message socket={socket} />}/>
          <Route path="/notification" element={< Notification  socket={socket}/>}/> 
          <Route path="/creatpost" element={<Creatpost  socket={socket}/>}/>
          <Route path="/updatepost/:postId" element={<Creatpost  socket={socket}/>}/>
          <Route path="/userprofile" element={<Userprofile  socket={socket}/>}/>
          <Route path="/userprofile/:userId" element={<Userprofile  socket={socket}/>}/>
          <Route path="/updateprofile" element={<Updateprofile  socket={socket}/>}/>
          <Route path="/myfriends" element={<Myfriends  socket={socket}/>}/>
          <Route path='/myfriendRequests' element={<MyfriendRequests  socket={socket}/>}/>
          <Route path='/searchuser/:searchinput' element={<Searchuser  socket={socket}/>}/>
           <Route  path="/vediocall/:userId/:socketId" element= { <Vediocall  socket={socket} />}/>
           <Route  path="/Vediocall2" element= { <Vediocall2 />}/>
           <Route path='/postdetail/:postId' element={<Postdetail  socket={socket}/>}/>
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
