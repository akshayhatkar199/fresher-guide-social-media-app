import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer'
import {Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import api,{WithTokenApi}  from '../../Helpers/axios'
import Onlineusers from '../../components/Onlineusers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ApiFilled, InboxOutlined, UploadOutlined } from '@ant-design/icons';
import {  Checkbox, Form, Input,DatePicker, Upload ,PlusOutlined } from 'antd';
import {  faHome,faMessage,faBell ,faUser,faBars ,faPaperPlane,faImage} from '@fortawesome/free-solid-svg-icons'
import { Avatar, List,Button, } from 'antd'
import Image3 from '../../images/user.jpg';
import { Col, Row , Select  } from 'antd';
import './creatpost.css'



const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const Creatpost = () => {
  const userData = useSelector((state)=>state.userData)

  const onFinish = async(values) => {
    console.log('Success:', values);
    const payload={
      "postTitle":  values.postTitle,
      "description": values.description,
      "userId":  userData.userinfo.data.id
    }
    console.log("payload",payload)
    const result= await WithTokenApi.post("/post",payload)
    console.log("result",result)
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
      lg={{span: 16}}
      xl={{span: 16}}
      xxl={{span: 16}}
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
      autoComplete="off"
     
    >
   <Form.Item
        label="Creat Title"
        name="postTitle"
        
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
      label=" Description"
        name='description'
        
        rules={[
          {
            required: true,
            message: 'Please input your Description!',
          
          },
        ]}
      >
          <Input.TextArea />
      
      </Form.Item>

      {/* <Form.Item label="Image">
        <Form.Item name="Image" valuePropName="fileList"  noStyle>
          <Upload.Dragger name="files" action="/upload.do">
            <FontAwesomeIcon icon= {faImage} />
              <InboxOutlined />
            
            <p className="ant-upload-text">Click or Image file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item> */}


      {/* <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <Upload />
              <div
                style={{
                  // marginTop: 8,
                  width:"100%"
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item> */}
    


    <Form.Item
        // wrapperCol={{
        //   offset: 5,
        //   span: 16,
        // }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>

       
      </Form.Item>
 
      </Form>
     </div> 
 
     
      </Col>
      <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 24}}
      lg={{span: 6}}
      xl={{span: 6}}
      xxl={{span: 6}}
      >
      <div className='main-creatpost'>
      <h3 className='home-head'>Online users</h3>
      
      <Onlineusers />

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
