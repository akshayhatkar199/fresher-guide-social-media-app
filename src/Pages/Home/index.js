import React from 'react'
import { Button} from 'antd';
import {Link } from "react-router-dom";


const Home = () => {
  return (
    <> <h1>Home</h1>
     <br/>
    <Link to= "/login"> <Button type="primary">Login Button</Button> </Link>

    <Link to= "/registration"><Button type="primary">Registration Button</Button></Link>

    </>
  )
}

export default Home