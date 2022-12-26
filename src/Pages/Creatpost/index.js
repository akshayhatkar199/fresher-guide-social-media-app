import React,{useState} from 'react'
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
import { Avatar, List,Button, message} from 'antd'
import Image3 from '../../images/user.jpg';
import { Col, Row , Select  } from 'antd';
import './creatpost.css'



const Creatpost = () => {
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const userData = useSelector((state)=>state.userData)

  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };
  const onFinish = async(values) => {
    const formData = new FormData();
    formData.append("postTitle",  values.postTitle);
    formData.append("userId",  userData.userinfo.data.id);
    formData.append("description",  values.description);
    if(values.image){
      formData.append("image",  values.image.file);
    }
  
    console.log("formData",formData)
    const result= await WithTokenApi.post("/post",formData)
    setFileList([]);
    message.success('upload successfully.');
    setUploading(false);
    console.log('Success:', values);
   
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

      <Form.Item
      label=" Image"
        name='image'
      
      >
           <Upload {...props}>
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
      
      </Form.Item>
    
    

    <Form.Item
        // wrapperCol={{
        //   offset: 5,
        //   span: 16,
        // }}
      >
        <Button type="primary" loading={uploading} htmlType="submit">
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
    <br/>
    <Footer />
    </div>
    </div>
  )
}

export default Creatpost
