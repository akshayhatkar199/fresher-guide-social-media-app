import React from 'react'
import { Button} from 'antd';
import {Link } from "react-router-dom";

const Login = () => {
  return (
    <>
    <h1>Login</h1>
    <br/>
    <Link to= "/home"> <Button type="primary">Home Button</Button> </Link>
     
    <Link to= "/registration"> <Button type="primary">Registration Button</Button></Link>
</>
  )
}

export default Login