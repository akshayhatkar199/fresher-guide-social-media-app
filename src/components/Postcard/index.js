
import React,{useState,useEffect} from 'react'
import { Col, Row,  } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faComment, faThumbsUp,faEllipsis} from '@fortawesome/free-solid-svg-icons'
import {useSelector} from 'react-redux'
import {WithTokenApi} from '../../Helpers/axios';
import Image1 from '../../images/user.jpg';
import Image2 from '../../images/post-image.jpg';
import Image  from '../../images/userp.png';
import { useParams,Link } from 'react-router-dom';
import {Card, Button, Dropdown } from 'antd';
import { format } from 'timeago.js';
import { Collapse } from 'antd';
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


const Postcard = (props) => {
  const [likecount,setlikecount] = useState(0);
  const [count,setcount] = useState({});
  const userData = useSelector((state)=>state.userData);
  // console.log("Image",Image)
  useEffect(()=>{

  },[])
  const likes=async()=>{
    setlikecount(likecount+1)
    setcount(count+props.data.isLike)
console.log("click likes")
const payload={
  "isLike":1,
   "postId": props.data.id,
   "likeuserId":userData.userinfo.data.id 
}
const result= await WithTokenApi.post("/post/like",payload)
// console.log("result=>",result)
count(props.data.isLike)
  }

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: '1',
      label: (
        <Link to={"/updatepost/"+props.data.id+ ""}>Update Post</Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to={"/postdetail/"+props.data.id+ ""}>Post details</Link>
        
      ),
    }
  ];
  // console.log("postId",postId)
  // console.log("props",props)
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
        {/* <img src={Image1} alt="logo" className="post-image "></img> */}

        {(props.data.photo) ? <img src={"http://localhost:8080/Images/"+props.data.photo} alt="logo" className="post-image "></img> : <img src={Image} className="post-image"/> }
         

      </Col>

      <Col  
      xs={{span: 17 }}
      sm={{span: 19}}
      md={{span: 20}}
      lg={{span: 20 }}
      xl={{span: 21}}
      xxl={{span:21}}
      >
       <Link to= {"/userprofile/"+userData.userinfo.data.id+ ""}><h3 className='post-name'> {props.data.name} <br />
        <span className='post-time'> {format(props.data.createdDate)}</span>
        </h3></Link>
        

      </Col>
    </Row>
    </div>
  <hr/>
{(props.data.image) ? <img src={"http://localhost:8080/Images/"+props.data.image} alt="logo" className="user-post"></img> 
 : null
}
  <div className='post-desc'>
    <h4>{props.data.postTitle}</h4>

    <p>{props.data.description} </p>  
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
      {(props.data.isLike == 1) ? <FontAwesomeIcon icon={faThumbsUp} className="card-like" style={{color:"red"}}  onClick={likes}/>  
                                : <FontAwesomeIcon icon={faThumbsUp} className="card-like"  onClick={likes}/> }
      {/* <span style={{marginRight:"4px"}}>{props.data.totalLike ? likecount : null}</span>  */}
      <span style={{marginRight:"4px"}}>{props.data.totalLike ? props.data.totalLike : null}</span>
      Like 
    
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
       {/* <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="Coment" key="1">
        <p>{text}</p>
      </Panel> 
    </Collapse> */}
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
      <Dropdown
      menu={{
        items,
      }}
      placement="bottomLeft"
      arrow
    >
      <label ><FontAwesomeIcon icon={faEllipsis} className="dott-comment" /></label>
    </Dropdown>
      {/* <Link to={"/updatepost/"+props.data.id+ ""}><FontAwesomeIcon icon={faEllipsis} className="dott-comment" /></Link> */}
  
      </Col>

      </Row>

</div>

  </Card> <br/>
      </div>
  )
}

export default Postcard