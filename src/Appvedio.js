import React , {useEffect} from "react";
import {BrowserRouter, Route, Routes,Navigate} from "react-router-dom";
import Home from "./Pages/Vediocall/Home";
import "font-awesome/css/font-awesome.min.css";
import Footer from "./Pages/Vediocall/components/Footer/Footer";
const App = () => {
  
  return (

  <BrowserRouter>
      <Routes>
       <Route exact path="/vediocall" element= { <Home />}/>
         </Routes>
     </BrowserRouter> 

  );
};

export default App;
