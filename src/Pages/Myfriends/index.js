import React,{useState,useEffect} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar';
import {Link,useNavigate } from "react-router-dom";
import {WithTokenApi} from '../../Helpers/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHome,faMessage,faBell ,faUser,faBars ,faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import { Avatar, List,Button, } from 'antd'
import Image3 from '../../images/user.jpg';
import Image  from '../../images/userp.png';
import { Col, Row , Menu,Input } from 'antd';
import './myfriends.css'
const { Search } = Input;


const Myfriends = ({socket}) => {
const [myfriendslist,setmyfriendlist] = useState([]);
const [searchinput,setSearchinputs] =  useState("");
const navigate = useNavigate()

useEffect(()=>{
  friends()
},[])

const friends =async()=>{
  const result = await WithTokenApi.get("/friends/myfriendlist")
  // console.log("result",result);
  setmyfriendlist(result.data)
}
const onSearch = () => {
  
  if(searchinput !==""){
    navigate("/searchuser/"+ searchinput)
   }
  
  }


    return (
        <div> 
       <Header socket={socket} />
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
       
      <div className='main-Myfriends'>
      <div  className='mobile-input'>
      <Search  value={searchinput} placeholder="input search text"    className= "myfriend-input"  onSearch={onSearch}z onChange ={(e)=> setSearchinputs(e.target.value)} enterButton 
     />
        </div>   
          <div className='Myfriends-div' >
          <h3 className='title-Myfriends'>Myfriends</h3>
          <hr />
          <List
        itemLayout="horizontal"
        dataSource={myfriendslist}
        renderItem={(item ) => (
          <List.Item>
            <List.Item.Meta
              // avatar={<div ><label className='online-label'></label><Avatar src={item.photo ? "http://localhost:8080/Images/"+item.photo : Image } /></div>}
              avatar={<div ><Avatar src={item.photo ? "http://localhost:8080/Images/"+item.photo : Image } /></div>}
              title={<Link to= {"/userprofile/"+item.id+ ""}>{item.name}</Link>}
              description={item.email} 
            />
             <Link to={"/messages/"+item.id+""}><FontAwesomeIcon icon={faMessage}  className="friend-message-icon"/></Link>
          </List.Item>
        )}
      />
    
          </div>
    
     <br/>   
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

export default Myfriends