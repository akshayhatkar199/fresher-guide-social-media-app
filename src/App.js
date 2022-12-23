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
import {BrowserRouter, Route, Routes,Navigate} from "react-router-dom";


function App() {
  const dispatch = useDispatch()  
  const [isLogin,setIsLogin] = useState(false);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    checkIsLogin();
  },[]);
  const checkIsLogin = async() => {
    console.log("localStorage.getItem(token)",localStorage.getItem("token"))
    const token = localStorage.getItem("token");
    if(token){
      await dispatch(checkLogin(token))
      setIsLogin(true);
    }
    setLoading(false);
  }


  if(loading){
    return(
      <div>
        Loading...
      </div>
    )
  }
  
  if(isLogin){
    return (
       <BrowserRouter>
      <Routes>
          <Route exact path="/" element= { <Home />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/message" element={<Message />}/>
          <Route path="/messages/:userId" element={<Message />}/>
          <Route path="/notification" element={< Notification/>}/> 
          <Route path="/creatpost" element={<Creatpost/>}/>
          <Route path="/updatepost/:postId" element={<Creatpost/>}/>
          <Route path="/userprofile" element={<Userprofile/>}/>
          <Route path="/updateprofile" element={<Updateprofile/>}/>
          <Route path="/myfriends" element={<Myfriends/>}/>
          <Route path='/myfriendRequests' element={<MyfriendRequests/>}/>
          <Route path='/searchuser/:searchinput' element={<Searchuser/>}/>
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
