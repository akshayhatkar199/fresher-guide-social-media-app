import React from 'react'
import Header from '../../components/Header'
import {Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Sidebar from '../../components/Sidebar';
import {  faHome,faMessage,faBell ,faUser,faBars ,faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import { Avatar, List,Button, } from 'antd'
import Image3 from '../../images/user.jpg';
import { Col, Row , Menu,Input } from 'antd';
import './message.css'
import Footer from '../../components/Footer'



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
  
  const dataAbout = [
    {
      title: 'UX Desginer At Google',
    },
    {
      title: 'Studied Computer Science',
    },
    {
      title: 'Relationship Status',
    },
    {
      title: 'Lived In London',
    },
    {
      title: 'Blood Group',
    }
  ];
  

const Message = () => {

  return (
    <div> 
    <Header />
    <div className='body-container'>
    <div className='main-home-container'>
    

   
    <Row>
  
    <Col          
      xs={{span: 2}}
      sm={{span: 2}}
      md={{span: 2}}
      lg={{span: 2}}
      xl={{span: 2}}
      xxl={{span: 2}}
      >
            <Sidebar />
      </Col> 
     

     <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 6}}
      lg={{span: 6}}
      xl={{span: 6}}
      xxl={{span: 6}}
      >
      <div className='message-div' >
      <h3 className='home-head'>Online users</h3>
      <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<div ><label className='online-label'></label><Avatar src="https://randomuser.me/api/portraits/men/10.jpg" /></div>}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />

      </div>

      <div className='mobile-online-users'>

      <div className='mobile-label-main'><label className='online-mobile-label'></label><Avatar className='mobile-active-user-img' src="https://randomuser.me/api/portraits/men/10.jpg" /></div>
      <div className='mobile-label-main'><label className='online-mobile-label'></label><Avatar className='mobile-active-user-img' src="https://randomuser.me/api/portraits/men/10.jpg" /></div>
      <div className='mobile-label-main'><label className='online-mobile-label'></label><Avatar className='mobile-active-user-img' src="https://randomuser.me/api/portraits/men/10.jpg" /></div>
      <div className='mobile-label-main'><label className='online-mobile-label'></label><Avatar className='mobile-active-user-img' src="https://randomuser.me/api/portraits/men/10.jpg" /></div>

      </div>

      </Col>

      
     <Col  
     xs={{span: 24}}
     sm={{span: 24}}
     md={{span: 16}}
     lg={{span: 16}}
     xl={{span: 16}}
     xxl={{span: 16}}
     >
     <div className='main-message'>
     
     <div style={{height:"600px"}}>
     <div>
     <div className='image-div'> 
     <label className='message-online-label'></label> <img src={Image3} alt="logo" className="message-user-image"></img>   
    </div>

             <div className='span-text'>
   <span style={{color: "black"}}>Josephin water </span><br />
   <span style={{color: " #ffc5c5"}}> active now</span>
   </div>
   </div>
   <br/>
   <br/>
<hr  className='hr-message'/>
     
    

     <ul>
         <li className='send-me'> hii</li>
         <li className='another-send'>hello</li>
     </ul>

     </div>
     <hr className='message-hr'/>
<div style={{margin: "20px"}}>
     <Input.Group compact>
      <Input
        style={{
          width: 'calc(100% - 45px)',
        // width:"72%",
        // marginLeft: "64px"
        }}
        defaultValue=""
        placeholder='message type here'
      />
      <Button type="primary"><FontAwesomeIcon icon={ faPaperPlane} /></Button>
    </Input.Group>

    </div>
 <br/>   
 








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

export default Message