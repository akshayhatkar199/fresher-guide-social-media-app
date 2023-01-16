
import React,{ useEffect, useState }  from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'
import { Col, Row  } from 'antd';
import {WithTokenApi} from '../../Helpers/axios';
import { Result } from 'antd'
import Onlineusers from '../../components/Onlineusers'
import Postcard from "../../components/Postcard"
import Aboutus from "../../components/Aboutus"
import {useSelector} from 'react-redux'
import { SmileOutlined , } from '@ant-design/icons';
import './Home.css'


const Home = ({socket}) => {
  const userData = useSelector((state)=>state.userData);
  const [posts,setposts] = useState([])
  // console.log("posts",posts)
  useEffect(()=>{
    postdata()
  },[])

  const postdata = async()=>{
    // const result = await WithTokenApi.get("post/byuserId/"+userData.userinfo.data.id) 
    const result = await WithTokenApi.post("/post/searchpost",{searchfield: ""}) 
    // console.log("result",result)
    setposts(result.data)
  }
 


  return (
    <div > 
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
      lg={{span: 6}}
      xl={{span: 6}}
      xxl={{span: 6}}
      >
      <div className='home-container-3' >
      <h3 className='home-head'>Users</h3>
      <Onlineusers/>

      </div>
     
      </Col>
     
   


      <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 24}}
      lg={{span: 11}}
      xl={{span: 11}}
      xxl={{span: 11}}
      >
      <div className='home-container-2'>
      {
        posts.length > 0  ?
        posts.map((item) => {
          return   <Postcard data={item} socket={socket} />
        }) :
        <Result
        style={{background:"white"}}
          icon={<SmileOutlined />}
          title="No posts yet!!!"
        />
      }
     
  
      {/* <Postcard/>
      <Postcard/>
      <Postcard/>
      <Postcard/>
      <Postcard/> */}
      










      </div>
      </Col>
      <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 24}}
      lg={{span: 5}}
      xl={{span: 5}}
      xxl={{span: 5}}
      >
      <div className='home-container-3' >
      <h3 className='home-head'>About Us</h3>
     
   <Aboutus />


      </div>
      </Col>
    
    </Row>

    </div>
    <br/>
    <br/>
    <Footer />
    </div>
    </div>
  )
}

export default Home