import React ,{useState,useEffect} from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer'
import {Link } from "react-router-dom";
import Onlineusers from '../../components/Onlineusers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button} from 'antd';
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate,useParams } from "react-router-dom";
import { Card } from 'antd';
import {checkLogin} from '../../Store/reducers/userReducer'
import api, {WithTokenApi} from '../../Helpers/axios'
import {  Checkbox, Form, Input,DatePicker, } from 'antd';
import { Col, Row , Select ,message } from 'antd';
import {  faHome,faMessage,faBell ,faUser,faBars ,faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import Image3 from '../../images/user.jpg';
import { Avatar, List } from 'antd'
import './updateprofile.css'
import {  Space } from 'antd';

const { RangePicker } = DatePicker;

const Updateprofile = () => {
const [Collegedata,setcollegedata] = useState([]);
const [Skilles,setskilles] = useState([]);
const dispatch = useDispatch();
const navigate = useNavigate();
const userData = useSelector((state)=>state.userData)
// console.log("userData",userData)
var formDaata = {...userData.userinfo.data};
var skillss = userData.userinfo.skills;
if(skillss.length > 0){
   var data = skillss.map(function (item) {
    return item.id;
  });
  formDaata.skills = data
}
console.log("formDaata",formDaata)
useEffect(()=>{
  datacollege()
  Skillsdata()
},[])

const datacollege = async()=>{
    const result = await api.get("/colleges")
    // console.log("result",result)
    setcollegedata(result.data)
}

const Skillsdata = async()=> {
     const result = await WithTokenApi.get("/skills")
    //  console.log("result",result)
     setskilles(result.data)
}
    const onFinish = async(values) => {
        console.log('Success:', values);
        values.id = userData.userinfo.data.id
        const result = await WithTokenApi.patch("/users",values)
        // console.log("result",result)
        // message.success('Update profile successfully.');
        await dispatch(checkLogin(localStorage.getItem("token")))
        navigate("/userprofile")
       
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
 <h3 className='updateprofile-head'>Update Profile</h3>
 <Form
       layout="vertical"
      name="basic"
      labelCol={{
        span: 8,
      }}
     
      initialValues={formDaata}
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

      {/* <Form.Item
        label="Date of Birth"
        name="dateOfBirth"
        
        rules={[
          {
            required: true,
            message: 'Please input your Date of Birth!',
          
          },
        ]}
      >
         <DatePicker style={{  width: "100%"  }} />
      
      
      </Form.Item> */}


      <Form.Item
        label="College Name"
        name="collageId"
        
        rules={[
          {
            required: true,
            message: 'Please input your College Name!',
          
          },
        ]}
      >
      <Select>
      {Collegedata.map((item)=>{
        return(
        <Select.Option key={item.id} value={item.id}>{item.collegeName}</Select.Option>
        )
      })}
          {/* <Select.Option value="KIT College">KIT College</Select.Option>
          <Select.Option value="D Y Patil Polytechnic, Kolhapur College">D Y Patil Polytechnic, Kolhapur College</Select.Option>
          <Select.Option value="Bharati Vidyapeeth  College">Bharati Vidyapeeth  College</Select.Option>
          <Select.Option value="Sanjay Ghodawat College">Sanjay Ghodawat College</Select.Option> */}

        </Select>
      
      </Form.Item>


       
      <Form.Item
        label="Passout year"
        name="passoutYear"
        
        rules={[
          {
            required: true,
            message: 'Please input your Passout year!',
          
          },
        ]}
      >
      <Input type= "Number" style={{  width: "100%"  }} />
      
      </Form.Item>

      <Form.Item
      label=" About"
        name= 'about'
        
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
        name="skills"
       
       
      >
      <Select  mode="multiple"  >
      {Skilles.map((item)=>{
         return(
          <Select.Option key={item.id} value={item.id}>{item.skilsName}</Select.Option>
         )
      })}
         {/* <Select.Option value="IT ">IT</Select.Option>
          <Select.Option value="IT web">IT web</Select.Option>
          <Select.Option value="IT dev">IT dev</Select.Option>
          <Select.Option value="IT sof">IT sof</Select.Option> */}

        </Select>
      
      </Form.Item>

    

      <Form.Item
        label="Technical Knowledge"
        name='technicalKnowledge'
        
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
        name= 'achievement'
        
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
        name="yearOfExperience"
        
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
        name= 'workedProjects'
        
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

        {/* <Link to= "/home"> <Button type="link">Home</Button></Link> */}
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
      <div className='main-creatpost' >
      <h3 className='home-head'>Online users</h3>
   <Onlineusers/>

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

export default Updateprofile
