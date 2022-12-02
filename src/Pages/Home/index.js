
import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Col, Row  } from 'antd';
import Postcard from "../../components/Postcard"
import './Home.css'

const Home = () => {
  return (
    <div> 
    <Header />
    <div className='main-home-container'>
    <Row>

      <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 24}}
      lg={{span: 4}}
      xl={{span: 4}}
      xxl={{span: 4}}
      >
      <div className='home-container-1'>

      152454
      
      </div>
      </Col>

      <Col  
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 24}}
      lg={{span: 14}}
      xl={{span: 14}}
      xxl={{span: 14}}
      >
      <div className='home-container-2'>
      <Postcard/>
      <Postcard/>
      <Postcard/>
      <Postcard/>
      <Postcard/>
     










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
      <div className='home-container-3' >
      41111

      </div>
      </Col>
    
    </Row>

    </div>
    <Footer />
    </div>
  )
}

export default Home