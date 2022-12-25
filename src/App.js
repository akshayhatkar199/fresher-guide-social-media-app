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
import Vediocall from "./Pages/Vediocall/Home";
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
    console.log("localStorage.getItem(token)",localStorage.getItem("token"))
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
  // if(loading){
  //   return(
  //     <div>
  //       Loading...
  //     </div>
  //   )
  // }
  
return (
       <BrowserRouter>
      <Routes>
        {
          isLogin ? 
          <>
             <Route exact path="/" element= { <Home />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/message" element={<Message socket={socket} />}/>
          <Route path="/messages/:userId" element={<Message socket={socket} />}/>
          <Route path="/notification" element={< Notification/>}/> 
          <Route path="/creatpost" element={<Creatpost/>}/>
          <Route path="/updatepost/:postId" element={<Creatpost/>}/>
          <Route path="/userprofile" element={<Userprofile/>}/>
          <Route path="/userprofile/:userId" element={<Userprofile/>}/>
          <Route path="/updateprofile" element={<Updateprofile/>}/>
          <Route path="/myfriends" element={<Myfriends/>}/>
          <Route path='/myfriendRequests' element={<MyfriendRequests/>}/>
          <Route path='/searchuser/:searchinput' element={<Searchuser/>}/>
          </>
          :
            <> 
             <Route exact path="/" element= { <Login />}/>
              <Route  path="/login" element= { <Login />}/>
          <Route  path="/registration" element= {<Registration />}/>
          </>
        }
       
           <Route  path="/vediocall" element= { <Vediocall />}/>
         
          <Route path='*'  element={<Navigate to="/" />} />
        </Routes>
     </BrowserRouter>
    ) 



 
  // if(isLogin){
  //   return (
  //      <BrowserRouter>
  //     <Routes>
  //         <Route exact path="/" element= { <Home />}/>
  //         <Route path="/home" element={<Home />} />
  //         <Route path="/message" element={<Message socket={socket} />}/>
  //         <Route path="/messages/:userId" element={<Message socket={socket} />}/>
  //         <Route path="/notification" element={< Notification/>}/> 
  //         <Route path="/creatpost" element={<Creatpost/>}/>
  //         <Route path="/updatepost/:postId" element={<Creatpost/>}/>
  //         <Route path="/userprofile" element={<Userprofile/>}/>
  //         <Route path="/userprofile/:userId" element={<Userprofile/>}/>
  //         <Route path="/updateprofile" element={<Updateprofile/>}/>
  //         <Route path="/myfriends" element={<Myfriends/>}/>
  //         <Route path='/myfriendRequests' element={<MyfriendRequests/>}/>
  //         <Route path='/searchuser/:searchinput' element={<Searchuser/>}/>
  //          <Route  path="/vediocall" element= { <Vediocall />}/>
  //         <Route path='*'  element={<Navigate to="/" />} />
  //       </Routes>
  //    </BrowserRouter>
  //   ) 
  // }else{
  //   return (
  //   <BrowserRouter>
  //     <Routes>
  //         <Route exact path="/" element= { <Login />}/>
  //         <Route  path="/login" element= { <Login />}/>
  //         <Route  path="/registration" element= {<Registration />}/>
  //         <Route path='*' element={<Navigate to="/" />} />
  //       </Routes>
  //    </BrowserRouter> 
  //   )
  // }
  
  
}

export default App;
