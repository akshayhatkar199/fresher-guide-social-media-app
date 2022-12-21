import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer'
import {Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import Image from '../../images/profile-img.jpg';
import Postcard from "../../components/Postcard"
import Aboutus from "../../components/Aboutus"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles, faGraduationCap ,faDiploma,faPen ,faLaptop, faTrophy ,faCalendarDays,faMicrophone,faPersonWalking,faP,faStar,faUserGraduate} from '@fortawesome/free-solid-svg-icons'
import { Avatar, List,Button, } from 'antd'
import Image3 from '../../images/user.jpg';

import { Col, Row , Menu,Input } from 'antd';
import './userprofile.css'


const dataAbout = [
    {
      title: 'College Name',
      icons:  faGraduationCap
    },
    {
      title: 'Date of Birth',
      icons: faCakeCandles
    },
    {
      title: 'Passout Year',
      icons:  faUserGraduate 
    },
    {
      title: 'Skills',
      icons: faPen
    },
    {
      title: 'Technical Knowledge',
      icons: faLaptop
    }
    ,
    {
      title: 'Achievement',
      icons: faTrophy 
    }
    ,
    {
      title: 'Year of Experience',
      icons: faCalendarDays 
    }
    ,
    {
      title: 'Publication',
      icons: faMicrophone
    }
    ,
    {
      title: 'Area of Expertise',
      icons: faPersonWalking
    }
    ,
    {
      title: 'Worked Projects',
      icons: faP
    }
    ,
    {
      title: 'Ratings',
      icons: faStar
    }
   
  ];
  

const Userprofile = () => {
  const userData = useSelector((state)=>state.userData);
  console.log("userData",userData)

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
    
    <div className='profile-div'>
      <img src={Image} alt="img" className="main-profileimg "></img>
    <div>
    <Link to="/creatpost" ><Button type="primary" size={25} className=""> Creat Post </Button></Link>
    </div>
       
   

    <div className='sub-profile-div'>
    <img src={Image3} alt="logo" className='profile-user-IMG'></img>
    <div className='text-div'>
   <span style={{color: "black",fontSize: "18px",fontWeight: "500"}}>{userData.userinfo.data.name} </span><br />
   <span style={{color: "#8e8c8c", fontSize: "revert"}}> {userData.userinfo.data.email} </span><br/>
   <span style={{color: "black",fontSize: "15px"}}>Followers: {userData.userinfo.friends ? userData.userinfo.friends[0].followers : 0} </span><br />
   <span style={{color: "black",fontSize: "15px"}}>Following: {userData.userinfo.friends ? userData.userinfo.friends[0].following : 0}</span><br />
    <div className='button-profile'>
      <Link to="/updateprofile">
        <Button type="primary" size={25} className="">
           Update Profile
        </Button>
      </Link>
    </div>

   </div>
   {/* <div className='cover-button'>
        <Button type="primary" size={25} className="edit-button">
           
        Edit Cover
                    
          </Button>
   </div> */}
   </div>


   
   
   </div>
   <br />

     


  <div>
<Row>

<Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 24}}
      lg={{span: 8}}
      xl={{span: 8}}
      xxl={{span: 8}}
      >
      <div className='profile-about'  >
      <h3 className='profile-head'>About Us</h3>
       
       <Aboutus />

      </div>
      </Col>
   
   <Col  
     xs={{span: 24}}
     sm={{span: 24}}
     md={{span: 24}}
     lg={{span: 16}}
     xl={{span: 16}}
     xxl={{span: 16}}
     >
      <div className='profil-post'>
      <h3 className='profil-post-head'>Posts</h3>
      <Postcard/>
      <Postcard/>
      </div>
     </Col>

</Row>

</div>
      </Col>

      
      
    </Row>
 

    </div>
    
    <Footer />
    </div>
    </div>
  )
}

export default Userprofile



