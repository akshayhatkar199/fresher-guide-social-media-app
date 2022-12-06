
import Home from './Pages/Home';
import Login from './Pages/Login';
import Notification from './Pages/Notification';
import Registration from './Pages/Registration';
import Message from './Pages/Message';

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
       
        </Routes>
     
      </>
    </BrowserRouter> 
    
  )
  
}

export default App;
