import React,{useState} from 'react'
import { Button} from 'antd';
import {Link } from "react-router-dom";
import { Col, Row } from 'antd';
import { useNavigate } from "react-router-dom";
import { Card } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import {checkLogin} from '../../Store/reducers/userReducer'
import api from '../../Helpers/axios'
import {  Checkbox, Form, Input } from 'antd';
import {  message, Space } from 'antd';

import Image from '../../images/logo-login.png';
import "./login.css";

    
const Login = () => {

  const dispatch = useDispatch()
  const [loading , setLoading] = useState(false);
  const navigate = useNavigate();

  // console.log("login Componet")

    const onformsubmit = async(values) => {
      setLoading(true)
      console.log('Success:', values);
     
      
      const payload ={
        "email":values.email,
        "password": values.password

    }
    const result = await api.post('/auth/login',payload);
    // console.log("result", result.data.token)

    if(result.data.token){
      // console.log("Login success full")
      message.success('Login success full');
     await localStorage.setItem("token", result.data.token );
      await dispatch(checkLogin(result.data.token))
      //navigate("/home");
       window.location.href = "http://localhost:3000/home";
    }else{
      // console.log("In valid Email and Password")
      message.error('In valid Email and Password');
    }
    setLoading(false)
        

      };
   

  return (
    <div className='logincontainer'>

    <Row>
    <Col

      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 6}}
      lg={{span: 6 }}
      xl={{span: 8}}
      xxl={{span: 8}}
    >
      

    </Col>
    <Col
     xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 12}}
      lg={{span: 12 }}
      xl={{span: 8}}
      xxl={{span: 8}}
    
    >
    
     <Card
    className='login-card'
      title=" "
      bordered={false}
           
    >
      <img src= {Image} className =" login-logo"/>
     
     
     
       <Form
       layout="vertical"
      name="basic"
      labelCol={{
        span: 8,
      }}
     
      initialValues={{
        remember: true,
      }}
      onFinish={onformsubmit}
   
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input style={{  width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        // wrapperCol={{
        //   offset: 5,
        //   span: 16,
        // }}
      >
        <Button type="primary" htmlType="submit" loading ={loading} >
          Submit
        </Button>

        <Link to= "/registration"> <Button type="link">Registration</Button></Link>
      </Form.Item>
    </Form>


    </Card>
    </Col>

    <Col
     xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 6}}
      lg={{span: 6 }}
      xl={{span: 8}}
      xxl={{span: 8}}
   
    >
    
    </Col>

  </Row>
</div>
  )
}

export default Login