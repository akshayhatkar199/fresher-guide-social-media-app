
import React,{useState,useEffect,useRef} from 'react'
import { Col, Row,  } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faComment, faThumbsUp,faEllipsis,faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {useSelector} from 'react-redux'
import {WithTokenApi} from '../../Helpers/axios';
import Image1 from '../../images/user.jpg';
import Image2 from '../../images/post-image.jpg';
import Image  from '../../images/userp.png';
import { useParams,Link } from 'react-router-dom';
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";
import {Card, Button, Dropdown,Input ,Result,Form } from 'antd';
import './postcard.css'
import { format } from 'timeago.js';
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";

const shareUrl = 'http://github.com';
const title = 'GitHub';
const Postcard = (props) => {
  const [form] = Form.useForm();
  const listcommentRef = useRef(null);
  const [likecount,setlikecount] = useState(props.data.totalLike);
  const[isLiked, setIsLiked] = useState(props.data.isLike);
  const [commentCount,setCommentCOunt] = useState(props.data.totalComments);
  const [isshowcoment,setisshowcoment] = useState(false);
  const [comment,setcomment] = useState("");
  const [commentlist,setcommentlist] = useState([]);
  const userData = useSelector((state)=>state.userData);
  // console.log("Image",Image)
  // console.log(comment)
 
  const likes=async()=>{
    var payload = {}

if(isLiked == 1){
  setIsLiked(0);
  payload={
   "isLike":0,
    "postId": props.data.id,
    "likeuserId":userData.userinfo.data.id 
 }
 setlikecount(likecount-1)
}else{
  setIsLiked(1);
   payload={
    "isLike":1,
     "postId": props.data.id,
     "likeuserId":userData.userinfo.data.id 
  }
  setlikecount(likecount+1)
 
}
const result =  await  WithTokenApi.post("/post/like",payload)

  }
  // useEffect(()=>{
  //   hideandshowcoment();
  // },[])
const getcomments = async() => {
  const result =  await WithTokenApi.get("/post/comments/"+props.data.id)
  //console.log("result",result)
  setcommentlist(result.data)
}
  const hideandshowcoment = async() => {
    setisshowcoment(isshowcoment === true ? false : true )
    if(isshowcoment !== true ){
    await  getcomments()
     }
     
  };

  const onFinish = async(values) => {
  const  payload={
       "commenttext":comment,
       "postId": props.data.id,
       "commentUserId":userData.userinfo.data.id 
    }
    form.resetFields();
    const commetresult =  await WithTokenApi.post("/post/comment",payload)
   // console.log("commetresult",commetresult)
    // getcomments()
    var today = new Date();
    var newComment = {
      "id": Math.random() * 100,
      "postId": props.data.id,
      "commentUserId": userData.userinfo.data.id ,
      "commet": comment,
      "createdDate": today.getTime(),
      "name": userData.userinfo.data.name,
      "photo": userData.userinfo.data.photo
    }
    setcommentlist([...commentlist,newComment])
    setCommentCOunt(commentCount+1)
   }

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
        <>
       <Link to={"/postdetail/"+props.data.id+ ""}>Post details</Link>
        </>
      
        
      ),
    },
    {
      key: '3',
      label: (
        <>
        <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <EmailShareButton
          style={{marginLeft: "10px"}}
            url={shareUrl}
            subject={title}
            body="body"
            className="Demo__some-network__share-button"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
          <LinkedinShareButton 
           style={{marginLeft: "10px"}}
           url={shareUrl} className="Demo__some-network__share-button">
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          {/* <FacebookShareCount url={"http://localhost:3000/postdetail/"+props.data.id+ ""} /> */}
       </>
      
        
      ),
    }
  ];
  useEffect(()=>{
    const lastItem = listcommentRef.current?.lastElementChild;
    if (lastItem) {
      lastItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    },[commentlist])

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
       <Link to= {"/userprofile/"+props.data.userId+ ""}><h3 className='post-name'> {props.data.name} <br />
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
      <label style={{cursor: "pointer"}}>
       { <FontAwesomeIcon icon={faThumbsUp} className={isLiked == 1 ? "color-icon card-like" : "card-like"}  onClick={likes}/> }
      <span style={{marginRight:"4px"}}>{likecount}</span></label>
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
      <label onClick={hideandshowcoment} style={{cursor: "pointer"}}>
      <FontAwesomeIcon icon={ faComment} className="card-comment" /> 
     {commentCount && commentCount > 0 ? commentCount : null} Coment
      </label>
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
      style={{cursor: "pointer"}}
    >
      <label ><FontAwesomeIcon icon={faEllipsis} className="dott-comment"  style={{cursor: "pointer"}}/></label>
    </Dropdown>
      {/* <Link to={"/updatepost/"+props.data.id+ ""}><FontAwesomeIcon icon={faEllipsis} className="dott-comment" /></Link> */}
  
      </Col>

      </Row>

</div>
<hr/>

<div className={isshowcoment === true ? "show-comment" : "hide-comment"}>
<div className='comentscroller' ref={listcommentRef}>
{commentlist.map((item) => {
  return(<div>
<Row>
      <Col  
      xs={{span: 5}}
      sm={{span: 4}}
      md={{span: 4}}
      lg={{span: 4}}
      xl={{span:3 }}
      xxl={{span:3}}
      >
        {/* <img src={Image1} alt="logo" className="post-image "></img> */}
     <div className='comment-profile-image-div'>
        {(item.photo) ? <img src={"http://localhost:8080/Images/"+item.photo} alt="logo" className="comment-user-image "></img>
                            : <img src={Image} className="comment-user-image"/> }

        </div>
      </Col>

      <Col  
      xs={{span: 19 }}
      sm={{span: 20}}
      md={{span: 20}}
      lg={{span: 20 }}
      xl={{span: 21}}
      xxl={{span:21}}
      >
      <div className='coment-name-coment-time'>
      
          <Link to= {"/userprofile/"+item.commentUserId+ ""}><h4 style={{color:"black"}}> {item.name} 
        <div className='comment-time'> {format(item.createdDate)}</div><p className='coments'>{item.commet}</p>
        </h4></Link>

     
    
        </div>
      </Col>
    </Row>
    <hr/>
    </div>
    )
  })}
  </div>
    <div className='comment-input'>
        <Form
         form={form}
      name="commet"
      layout="inline"
      onFinish={onFinish}
    >
      <Form.Item
        name="commet"
        className="messageinput"
         rules={[
          {
            required: true,
            message: 'Please input your coments!',
          },
        ]}
      >
        <Input   onChange = {(e) => setcomment(e.target.value)} placeholder='comment type here'/>
      </Form.Item>
      <Form.Item
        className="messagebtnn"
      >
        <Button type="primary" htmlType="submit">
        <FontAwesomeIcon icon={ faPaperPlane} />
        </Button>
      </Form.Item>
    </Form>
    </div>
</div>

  </Card> <br/>
      </div>
  )
}

export default Postcard