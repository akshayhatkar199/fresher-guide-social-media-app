
import React from 'react'
import { Col, Row,  } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faComment, faThumbsUp,faEllipsis} from '@fortawesome/free-solid-svg-icons'
import Image1 from '../../images/user.jpg';
import Image2 from '../../images/post-image.jpg';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const Postcard = () => {
  return (
    <div> 
      <Card
    className='post-card'
  >
  <div className='post'>
    <Row>
      <Col  
      xs={{span: 7}}
      sm={{span: 5}}
      md={{span: 4}}
      lg={{span: 4}}
      xl={{span:3 }}
      xxl={{span:3}}
      >
        <img src={Image1} alt="logo" className="post-image "></img> 

      </Col>

      <Col  
      xs={{span: 17 }}
      sm={{span: 19}}
      md={{span: 20}}
      lg={{span: 20 }}
      xl={{span: 21}}
      xxl={{span:21}}
      >
        <h3 className='post-name'> Sufiya Eliza <br />
        <span className='post-time'> 30 Mins Ago</span>
        </h3>
        

      </Col>
    </Row>
    </div>
  <hr/>

  <img src={Image2} alt="logo" className="user-post"></img> 
  <div className='post-desc'>
    <h4>Today Our Three Cute Puppy Dog Birthday !!!!</h4>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been the industry's standard dummy text ever since the 1500s</p>
  </div>
  <hr/>
<div className='like-comment'>
      <Row>
      <Col
            xs={{span: 8}}
            sm={{span: 8}}
            md={{span: 8}}
            lg={{span: 8}}
            xl={{span: 8}}
            xxl={{span: 8}}
      >
      <FontAwesomeIcon icon={faThumbsUp} className="card-like"/>Like 
      </Col>

        <Col
            xs={{span: 8}}
            sm={{span: 8}}
            md={{span: 8}}
            lg={{span: 8}}
            xl={{span: 8}}
            xxl={{span: 8}}
      >
      <FontAwesomeIcon icon={ faComment} className="card-comment"/> 
      Coment

      </Col>
      <Col
            xs={{span: 8}}
            sm={{span: 8}}
            md={{span: 8}}
            lg={{span: 8}}
            xl={{span: 8}}
            xxl={{span: 8}}
      >
      <Link to="/creatpost" ><FontAwesomeIcon icon={faEllipsis} className="dott-comment"/></Link>
      </Col>

      </Row>

</div>

  </Card> <br/>
      </div>
  )
}

export default Postcard