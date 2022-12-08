import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer'
import {Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button} from 'antd';
import { Card } from 'antd';
import {  Checkbox, Form, Input,DatePicker, } from 'antd';
import { Col, Row , Select  } from 'antd';
import {  faHome,faMessage,faBell ,faUser,faBars ,faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import Image3 from '../../images/user.jpg';
import './updateprofile.css'
import {  Space } from 'antd';
const { RangePicker } = DatePicker;


const Updateprofile = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

  return (
    <div> 
    <Header />
    <div className='body-container'>
    <div className='main-home-container'>
    

   
    <Row>
  
    <Col          
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 24}}
      lg={{span: 2}}
      xl={{span: 2}}
      xxl={{span: 2}}
      >
            <Sidebar />
      </Col> 
     

     <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 24}}
      lg={{span: 22}}
      xl={{span: 22}}
      xxl={{span: 22}}
      >
    
 <div className='main-updateprofile' >
 <h3 className='updateprofile-head'>Update Profile</h3>
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

      <Form.Item
        label="Date of Birth"
        name="email"
        
        rules={[
          {
            required: true,
            message: 'Please input your Date of Birth!',
          
          },
        ]}
      >
         <DatePicker style={{  width: "100%"  }} />
      
      
      </Form.Item>


      <Form.Item
        label="College Name"
        name="College Name"
        
        rules={[
          {
            required: true,
            message: 'Please input your College Name!',
          
          },
        ]}
      >
      <Select>
          <Select.Option value="KIT College">KIT College</Select.Option>
          <Select.Option value="D Y Patil Polytechnic, Kolhapur College">D Y Patil Polytechnic, Kolhapur College</Select.Option>
          <Select.Option value="Bharati Vidyapeeth  College">Bharati Vidyapeeth  College</Select.Option>
          <Select.Option value="Sanjay Ghodawat College">Sanjay Ghodawat College</Select.Option>

        </Select>
      
      </Form.Item>


       
      <Form.Item
        label="Passout year"
        name="Passout year"
        
        rules={[
          {
            required: true,
            message: 'Please input your Passout year!',
          
          },
        ]}
      >
        <DatePicker picker="Passout year" bordered={true} style={{  width: "100%"  }} />
      
      </Form.Item>

      <Form.Item
      label=" About"
        name={['user', ' About']}
        
        rules={[
          {
            required: true,
            message: 'Please input your About!',
          
          },
        ]}
      >
          <Input.TextArea />
      
      </Form.Item>

     
      <Form.Item
        label="Skills"
        name="Skills"
        
        rules={[
          {
            required: true,
            message: 'Please input your Skills!',
          
          },
        ]}
      >
      <Select>
         <Select.Option value="IT ">IT</Select.Option>
          <Select.Option value="IT web">IT web</Select.Option>
          <Select.Option value="IT dev">IT dev</Select.Option>
          <Select.Option value="IT sof">IT sof</Select.Option>

        </Select>
      
      </Form.Item>

    

      <Form.Item
        label="Technical Knowledge"
        name={['user', ' Technical Knowledge']}
        
        rules={[
          {
            required: true,
            message: 'Please input your Technical Knowledge!',
          
          },
        ]}
      >
         <Input.TextArea />
      
      </Form.Item>

     

      <Form.Item
        label=" Achievement"
        name={['user', ' Achievement']}
        
        rules={[
          {
            required: true,
            message: 'Please input your Achievement!',
          
          },
        ]}
      >
         <Input.TextArea />
      
      </Form.Item>

    
      <Form.Item
        label="Year of Experience"
        name="Year of Experience"
        
        rules={[
          {
            required: true,
            message: 'Please input your Year of Experience!',
          
          },
        ]}
      >
        <Input type= "Number" style={{  width: "100%"  }} /> 
      
      
      </Form.Item>

      <Form.Item
        label=" Worked Projects"
        name={['user', ' Worked Projects']}
        
        rules={[
          {
            required: true,
            message: 'Please input your Area of Expertise!',
          
          },
        ]}
      >
        <Input.TextArea />
      
      
     
        
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
 
     
     </div>
      </Col>

      
      
    </Row>
 <br/>
 <br/>

    </div>
    
    <Footer />
    </div>
    </div>
  )
}

export default Updateprofile
