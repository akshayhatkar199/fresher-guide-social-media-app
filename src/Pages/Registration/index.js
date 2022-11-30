import React from 'react'
import { Button} from 'antd';
import {Link } from "react-router-dom";

const Registration = () => {
  return (
    <>
    <h1>Registration</h1>
    
    <br/>
    <Link to= "/login"><Button type="primary">Login Button</Button> </Link>
     
    <Link to= "/home"> <Button type="primary">Home Button</Button></Link>
    </>
  )
}

export default Registration