import React,{useState,useEffect} from 'react'
import { Button, message} from 'antd';
import {Link } from "react-router-dom";
import { Col, Row } from 'antd';
import { useNavigate } from "react-router-dom";
import { Card } from 'antd';
import api from '../../Helpers/axios'
import {  Form, Input, Select } from 'antd';
import "./Registration.css";
import Image1 from '../../images/registr-removebg.png';

const Registration = ({socket}) => {
  const [College , setColleges] = useState([]);
  const navigate = useNavigate();


  useEffect(()=>{
    getcollege();
  
  },[])
  
  const getcollege =async() =>{
    const result = await api.get('/colleges');
    // console.log("result", result)
    setColleges(result.data)
   
  }
  // console.log("college",College)

  
  const onFinish = async(values) => {
    // console.log('Success:', values);

    const payload ={
           "name":values.name,
         "email":values.email,
         "password": values.password,
       "collageId":values.collageId,
      "passoutYear":values.passoutYear

   }
  const result = await api.post('/auth/register',payload);
  // console.log("result", result)
    


   if(result.data.token){
    //  console.log("register is success full")
     message.success("register is success full")
      navigate("/login");
   }else{
    //  console.log("Email is already exits.")
     message.error('Email is already exits.');
   }
     

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
      name='collageId'
       label="College" >
        <Select>
        {College.map((item, index) => {
              return(
                 <Select.Option key={item.id} value={item.id}>{item.collegeName}</Select.Option>
                
              )
            })}
          {/* <Select.Option value="KIT College">KIT College</Select.Option>
          <Select.Option value=">D Y Patil Polytechnic, Kolhapur College">D Y Patil Polytechnic, Kolhapur College</Select.Option>
          <Select.Option value="Bharati Vidyapeeth  College">Bharati Vidyapeeth  College</Select.Option>
          <Select.Option value="Sanjay Ghodawat College">Sanjay Ghodawat College</Select.Option> */}

        </Select>
        
      </Form.Item>
       

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>


      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
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

        {/* <Link to= "/home"> <Button type="link">Home</Button></Link> */}

      </Form.Item>
    </Form>

    <p style={{fontSize:"7px",fontStyle: "oblique",float: "right"}}> Designed & Developed by Akshay s Hatkar @ 2023 </p>
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