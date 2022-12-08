import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer'
import {Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  Checkbox, Form, Input,DatePicker, } from 'antd';
import {  faHome,faMessage,faBell ,faUser,faBars ,faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import { Avatar, List,Button, } from 'antd'
import Image3 from '../../images/user.jpg';
import { Col, Row , Select  } from 'antd';



const Creatpost = () => {

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
 <h3 className='updateprofile-head'>Creat Post</h3>
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
        label="Creat Title"
        name="Creat Title"
        
        rules={[
          {
            required: true,
            message: 'Please input your Creat Title!',
          },
        ]}
      >
        <Input style={{  width: "100%" }} />
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

export default Creatpost
