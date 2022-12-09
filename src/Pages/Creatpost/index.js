import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer'
import {Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
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
      label=" description"
        name={['user', ' description']}
        
        rules={[
          {
            required: true,
            message: 'Please input your description!',
          
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


      <Form.Item label="Upload" valuePropName="fileList">
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
        </Form.Item>
    
     
      
    </Form>

    


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
      <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item ) => (
      <List.Item>
        <List.Item.Meta
          avatar={<div > <label className='online-label'></label><Avatar src="https://randomuser.me/api/portraits/men/10.jpg" /></div>}
          title={<a href="https://ant.design">{item.title}</a>}
          
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />

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
