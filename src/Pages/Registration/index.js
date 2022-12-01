import React from 'react'
import { Button} from 'antd';
import {Link } from "react-router-dom";
import { Col, Row } from 'antd';
import { Card } from 'antd';
import {  Form, Input, Select } from 'antd';
import "./Registration.css";
import Image1 from '../../images/registr-removebg.png';

const Registration = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='registrationcontainer'>

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
      <img src= {Image1} className ="registr-logo"/> 
     
     
     
       <Form
       layout="vertical"
      name="basic"
      labelCol={{
        span: 8,
      }}
     
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
   <Form.Item
        label="Name"
        name="name"
        
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input style={{  width: "100%" }} />
      </Form.Item>

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
        <Input style={{  width: "100%"  }} />
      
      
      </Form.Item>
      <Form.Item label="College" >
        <Select>
          <Select.Option value="KIT College">KIT College</Select.Option>
          <Select.Option value="KIT College">D Y Patil Polytechnic, Kolhapur College</Select.Option>
          <Select.Option value="KIT College">Bharati Vidyapeeth  College</Select.Option>
          <Select.Option value="KIT College">Sanjay Ghodawat College</Select.Option>

        </Select>
        
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>

        <Link to= "/home"> <Button type="link">Home</Button></Link>
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

export default Registration