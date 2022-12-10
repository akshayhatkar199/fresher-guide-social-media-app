import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer'
import {Link } from "react-router-dom";
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
    {/* <div className='user-box'>
    <img src={Image3} alt="logo" className="profile-user-image"></img>
    <div className='text-div'>
   <span style={{color: "black"}}>Josephin water </span><br />
   <span style={{color: "#8e8c8c", fontSize: "smaller"}}> ahsgddgbb@876gmail.com</span>
<div className='button-profile'>
   <Button type="primary" size={25} className="">
           
        Edit Profile
                    
          </Button>
</div>

   </div>
   <div className='cover-button'>
        <Button type="primary" size={25} className="edit-button">
           
        Edit Cover
                    
          </Button>
   </div>
   </div> */}

   <Link to="/updateprofile">update profile</Link>
   <br />
   <Link to="/creatpost" >creat post</Link>
     
  </div>

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



