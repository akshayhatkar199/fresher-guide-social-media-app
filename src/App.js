
import Home from './Pages/Home';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
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
       
        </Routes>
     
      </>
    </BrowserRouter> 
    
  )
  
}

export default App;
