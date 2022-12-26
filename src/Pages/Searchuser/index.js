import React,{useEffect,useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar';
import {useSelector} from 'react-redux'
import {Link,useParams } from "react-router-dom";
import {WithTokenApi} from '../../Helpers/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHome,faMessage,faBell ,faUser,faBars ,faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import { Avatar, List,Button, } from 'antd'
import Image3 from '../../images/user.jpg';
import Image  from '../../images/userp.png';
import { Col, Row , Menu,Input,message } from 'antd';
import './searchuser.css'
import { ApiFilled } from '@ant-design/icons';


const Searchuser = () => {
  const [searchuserlist,setserchuserlist] = useState([])
  let {searchinput } = useParams();
  const userData = useSelector((state)=>state.userData);
 console.log("searchinput",searchinput)



useEffect(()=>{
  search();
},[searchinput])

const search=async()=>{
  const payload ={
    searchfield: searchinput
  }
  console.log("localStorage.getItem('token')",localStorage.getItem('token'));
  // console.log(payload)
  const result = await WithTokenApi.post("/users/searchuser",payload);
  console.log("result", result) 
  setserchuserlist(result.data)
  
 }

 const friendrequest =async(id)=>{
console.log(id);

const payload={
   "friendId": id,
   "userId":userData.userinfo.data.id
}
// console.log("payload", payload)

const result = await WithTokenApi.post("/friends/request",payload)
// console.log("result",result);
message.success('Friends Request successfully Send');
search();

 }
 

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
        
     <div className='main-Searchuser'>
    
         <div className='Searchuser-div' >
          <h3 className='title-Searchuser'>Search User</h3>
          <hr />
          <List
        itemLayout="horizontal"
        dataSource={searchuserlist}
        renderItem={(item ) => (
          <List.Item>
            <List.Item.Meta
              avatar={<div ><label className='online-label'></label><Avatar src={item.photo ? "http://localhost:8080/Images/"+item.photo : Image } /> 
             </div>}
              title={<Link to= {"/userprofile/"+item.id+ ""}>{item.name}</Link> } 
              description={item.email}  
            />
             {(item.isRequest == 1)? <Button type="primary" htmlType="submit" onClick={()=> friendrequest(item.id)} >Request</Button> : null}
          </List.Item>
        )}
      />
   
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

export default Searchuser