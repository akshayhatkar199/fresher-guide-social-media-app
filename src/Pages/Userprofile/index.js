import React,{useState,useEffect} from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer'
import {Link,useParams } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import Api, {WithTokenApi} from '../../Helpers/axios';
import Image from '../../images/profile-img.jpg';
import Image1  from '../../images/userp.png';
import coverimage1 from '../../images/cover2.jpg'
import Postcard from "../../components/Postcard"
import Aboutus from "../../components/Aboutus"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles, faGraduationCap ,faDiploma,faPen ,faCamera,faLaptop, faTrophy ,faCalendarDays,faMicrophone,faPersonWalking,faP,faStar,faUserGraduate} from '@fortawesome/free-solid-svg-icons'
import { Avatar, List,Button,Form,Upload } from 'antd'
import Image3 from '../../images/user.jpg';
import {checkLogin} from '../../Store/reducers/userReducer'
import { SmileOutlined ,UploadOutlined } from '@ant-design/icons';
import { Col, Row , Menu,Input,Modal ,Result,message  } from 'antd';
import './userprofile.css'

 

  

const Userprofile = ({socket}) => {
  const dispatch = useDispatch()
  const [profileimage, setprofileimage] = useState([]);
  const [updatecover, setupdatecover] = useState([]);
  const [postdata,setpostdata] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coverphoto,setcoverphoto] = useState(false);
  let {userId } = useParams();
  const userData = useSelector((state)=>state.userData);
  const [profile,setprofile] = useState(userData.userinfo)
   console.log("profile",profile)
useEffect(()=>{
  if(!userId) {
    post()
  }
 
},[])

const post = async()=>{
  // console.log("----------------------------------calllll",userId)
 
  var url = userId ? "post/byuserId/"+userId : "post/byuserId/"+userData.userinfo.data.id
  const result = await WithTokenApi.get(url) 
  setpostdata(result.data)
  
}

const showModal = () => {
  // if()
  setIsModalOpen(true);
};
const handleOk = () => {
  setIsModalOpen(false);
};
const handleCancel = () => {
  setIsModalOpen(false);
};

const popup = () =>{
  setcoverphoto(true)
}
const Updateok = () =>{
  setcoverphoto(false)
}
const Updatecancel = () =>{
  setcoverphoto(false)
}

useEffect(()=>{
  useres()
  
},[userId])

const useres =async()=>{ 
  // console.log("hii")
  if(userId){
  const result = await WithTokenApi.get("/users/"+userId+"")
  console.log("result...",result)
 await setprofile(result.data)
 if(userId == userData.userinfo.data.id || result.data.isFriend == true && result.data.isBlock == false || result.data.blockuserData.length > 0 && result.data.blockuserData[0].userId  == userData.userinfo.data.id){
 console.log("hello")
  post()
 }
  }else{
   await setprofile(userData.userinfo)
    post()
  }
}

const props = {
  onRemove: (file) => {
    const index = profileimage.indexOf(file);
    const newFileList = profileimage.slice();
    newFileList.splice(index, 1);
    setprofileimage(newFileList);
  },
  beforeUpload: (file) => {
    setprofileimage([...profileimage, file]);
    return false;
  },
  profileimage,
};

const onformsubmit = async(values)=>{
  const formData = new FormData();
  formData.append("userId",  userData.userinfo.data.id);
  formData.append("image",  values.image.file);
  // console.log("formData",formData)
  
 
  const profileresult = await WithTokenApi.patch("/updateprofilephoto",formData)  
  var profilee = {};
  profilee = {...profilee,...profile.data};
  profilee.photo = ""+profileresult.data?.image+"";
  setprofile({...profile,data:profilee})
  await dispatch(checkLogin(localStorage.getItem("token")))
  message.success('Update Profile Image success full')
  setprofileimage([])
  setIsModalOpen(false)
  
}

const propss = {
  onRemove: (file) => {
    const index = updatecover.indexOf(file);
    const newFileList = updatecover.slice();
    newFileList.splice(index, 1);
    setupdatecover(newFileList);
  },
  beforeUpload: (file) => {
    setupdatecover([...updatecover, file]);
    return false;
  },
  updatecover,
};

const onFinish =  async(values)=>{
  const formData = new FormData();
  formData.append("userId",  userData.userinfo.data.id);
  formData.append("image",  values.image.file);
  // console.log("formData",formData)

  const updatecoveresult = await WithTokenApi.patch("/updatecoverphoto",formData)  
  // console.log("updatecoveresult",updatecoveresult)
  var profilee = {};
  profilee = {...profilee,...profile.data};
  profilee.coverimage = ""+updatecoveresult.data?.image+"";
  setprofile({...profile,data:profilee})
  setupdatecover([])
  message.success('Update Profile Image success full')
     setcoverphoto(false)
}

const blockUser = async() => {
  const payload={
    blockUserId:profile.data.id
  }
  const profileresult = await WithTokenApi.post("/friends/blockuser",payload)
  message.success('Block user successfully')
  useres()
}
const unblockUser = async() => {
  const payload={
    blockUserId: profile.data.id
  }
  const profileresult = await WithTokenApi.post("/friends/unblockuser",payload)
  message.success('UnBlock user successfully')
  useres()
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
    
    <div className='profile-div'>
      {/* <img src={Image} alt="img" className="main-profileimg "></img> */}

      {(profile.data.coverimage) ? <img src={"http://localhost:8080/Images/"+profile.data.coverimage} className='main-profileimg'></img> 
                                      : <img src={coverimage1} className="main-profileimg"/>}

    { profile.data?.id === userData.userinfo.data.id ? 
       <div >
      <label type="primary" onClick={popup}>
      <FontAwesomeIcon icon={faPen} className="userprofile-udatecover-icon" />
      </label>
    
      <Modal title="Update Cover Photo "  open={coverphoto} onOk={Updateok} onCancel={Updatecancel} footer={<></>} destroyOnClose>
      <Form
       layout="vertical"
      name="basic"
      labelCol={{
        span: 8,
      }}
     
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
     
    >
    <Form.Item
    label=" Image"
      name='image'
    
    >
         <Upload {...propss}>
      <Button icon={<UploadOutlined/>}>Select File</Button>
    </Upload>
    
    </Form.Item>
  
  

  <Form.Item
      // wrapperCol={{
      //   offset: 5,
      //   span: 16,
      // }}
    >
      <Button type="primary"  htmlType="submit"  >
        Submit
      </Button>

     
    </Form.Item>



</Form>
 

      </Modal>

      </div>
      :null
      }
    

    <div className='sub-profile-div'>
    <label type="primary" onClick={showModal}>
    {(profile.data.photo) ? <img src={"http://localhost:8080/Images/"+profile.data.photo}  className='profile-user-IMG'></img> 
                          : <img src={Image1} className="profile-user-IMG"/>} 
                          { profile.data?.id === userData.userinfo.data.id ? <FontAwesomeIcon icon={faCamera} className="desktop-camera-icon-profileuser"/> 
                          : null}
      </label> 
     { profile.data?.id === userData.userinfo.data.id ?
      
      <Modal title="Update Profile Image " open={isModalOpen}  onOk={handleOk} onCancel={handleCancel} footer={<></>} destroyOnClose >
      <Form
       layout="vertical"
      name="basic"
      labelCol={{
        span: 8,
      }}
     
      initialValues={{
        remember: true,
      }}
      onFinish={onformsubmit}
      autoComplete="off"
     id='myForm'
    >
    <Form.Item
    label=" Image"
      name='image'
    
    >
         <Upload {...props}>
      <Button icon={<UploadOutlined />}>Select File</Button>
    </Upload>
    
    </Form.Item>
  
  

  <Form.Item
      // wrapperCol={{
      //   offset: 5,
      //   span: 16,
      // }}
    >
      <Button type="primary"  htmlType="submit" >
        Submit
      </Button>

     
    </Form.Item>



</Form>
      
      </Modal> 
   
    : null 
     }

    {/* <img src={Image3} alt="logo" className='profile-user-IMG'></img> */}
    <div className='text-div'>
   <span style={{color: "black",fontSize: "18px",fontWeight: "500"}}>{profile.data.name} </span><br />
   <span style={{color: "#8e8c8c", fontSize: "revert"}}> {profile.data.email} </span><br/>
   <span style={{color: "black",fontSize: "15px"}}>Followers: {profile.friends ? profile.friends[0].followers : 0} </span><br />
   <span style={{color: "black",fontSize: "15px"}}>Following: {profile.friends ? profile.friends[0].following : 0}</span><br />
    <div className='button-profile'>
    {
      profile.data?.id === userData.userinfo.data.id ?
      <Link to="/updateprofile">
        <Button type="primary" size={25} className="" >
           Update Profile
        </Button>
      </Link>
      :  profile.isFriend == true && profile.isBlock == false ?
      <Button type="primary" size={25} className="" onClick={blockUser}>
          Block
      </Button> :
      profile.blockuserData.length > 0 && profile.blockuserData[0].userId  == userData.userinfo.data.id ? 
       <Button type="primary" size={25} className="" onClick={unblockUser}>
           UnBlock
        </Button> :null
    }
     
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

<div className='mobile-view'>
  <Col          
      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 24}}
      lg={{span: 2}}
      xl={{span: 2}}
      xxl={{span: 2}}
      >
    
<div className='mobile-profile-div'>
<div style={{backgroundColor: "white", paddingBottom: "20px"}}>
      {/* <img src={Image} alt="img" className="main-profileimg "></img> */}
<div style={{height:"162px"}}>
      {(profile.data.coverimage) ? <img src={"http://localhost:8080/Images/"+profile.data.coverimage} className='mobile-maincover-profileimg'></img> 
                                      : <img src={coverimage1} className="mobile-maincover-profileimg"/>}
</div>
    { profile.data?.id === userData.userinfo.data.id ? 
       <div>
      <label type="primary" onClick={popup}>
      <FontAwesomeIcon icon={faPen} className="mobile-profilecover-changeicon" />
      </label>
      </div> 
      :null}  

    <div className='mobile-sub-profile-div'>
    <label type="primary" onClick={showModal}>
    {(profile.data.photo) ? <img src={"http://localhost:8080/Images/"+profile.data.photo}  className='mobile-view-profile-user-IMG'></img> 
                          : <img src={Image1} className="mobile-view-profile-user-IMG"/>}
                        
                         { profile.data?.id === userData.userinfo.data.id ? <FontAwesomeIcon icon={faCamera} className="camera-icon-profileuser" /> 
                                                                           : null} 
    </label>
    
    {/* <img src={Image3} alt="logo" className='profile-user-IMG'></img> */}
    <div className='mobile-text-div'>
   <span style={{color: "black",fontSize: "18px",fontWeight: "500"}}>{profile.data.name} </span><br />
   <span style={{color: "#8e8c8c", fontSize: "revert"}}> {profile.data.email} </span><br/>
   <br/>
   <span style={{color: "white",fontSize: "15px" ,backgroundColor: "#665c5c", padding: "6px",}}>Followers: {profile.friends ? profile.friends[0].followers : 0} </span>
   <span style={{color: "white",fontSize: "15px", marginLeft:"16px" ,backgroundColor: "#665c5c", padding: "6px"}}>Following: {profile.friends ? profile.friends[0].following : 0}</span><br />
    <div className='button-profile'>
    {
      profile.data?.id === userData.userinfo.data.id ?
      <Link to="/updateprofile">
        <Button type="primary" size={25} className="">
           Update Profile
        </Button>
      </Link>
      :  profile.isFriend == true && profile.isBlock == false ?
          <Button type="primary" size={25} className="" onClick={blockUser}>
              Block
          </Button> :
          profile.blockuserData.length > 0 && profile.blockuserData[0].userId  == userData.userinfo.data.id ? 
           <Button type="primary" size={25} className=""  onClick={unblockUser}>
               UnBlock
            </Button> :null
    }
     
    </div>

   </div>
   {/* <div className='cover-button'>
        <Button type="primary" size={25} className="edit-button">
           
        Edit Cover
                    
          </Button>
   </div> */}
   </div>


   
   
   </div>
   </div>
    </Col> 
    
</div>



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
       
       <Aboutus userData={profile}/>

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
      {
        postdata.length > 0  ?
        postdata.map((item) => {
          return   <Postcard data={item} socket={socket} />
        }) :
        <Result
        style={{background:"white"}}
          icon={<SmileOutlined />}
          title={profile.isFriend == false ? "Please send request to see post!!": "No posts are created yet!!!"}
        />
      }
      {/* <Postcard />
      <Postcard/> */}
      </div>
     </Col>

</Row>

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

export default Userprofile



