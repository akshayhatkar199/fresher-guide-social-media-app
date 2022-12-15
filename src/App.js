
import Home from './Pages/Home';
import Login from './Pages/Login';
import Notification from './Pages/Notification';
import Registration from './Pages/Registration';
import Creatpost from './Pages/Creatpost'
import Userprofile from './Pages/Userprofile'
import Updateprofile from './Pages/Updateprofile'
import Message from './Pages/Message';
import Myfriends from './Pages/Myfriends';
import MyfriendRequests from './Pages/MyfriendRequests'
import Searchuser from './Pages/Searchuser';

import {BrowserRouter, Route, Routes, } from "react-router-dom";


function App() {
  return (
   
      <BrowserRouter>
      <>
       <Routes>
          <Route exact path="/" element= { <Login />}/>
          <Route path="/home" element={<Home />} />
          <Route  path="/login" element= { <Login />}/>
          <Route  path="/registration" element= {<Registration />}/>
          <Route path="/message" element={<Message />}/>
          <Route path="/notification" element={< Notification/>}/> 
          <Route path="/creatpost" element={<Creatpost/>}/>
          <Route path="/userprofile" element={<Userprofile/>}/>
          <Route path="/updateprofile" element={<Updateprofile/>}/>
          <Route path="/myfriends" element={<Myfriends/>}/>
          <Route path='/myfriendRequests' element={<MyfriendRequests/>}/>
          <Route path='/searchuser/:searchinput' element={<Searchuser/>}/>
        </Routes>
     
      </>
    </BrowserRouter> 
    
  )
  
}

export default App;
