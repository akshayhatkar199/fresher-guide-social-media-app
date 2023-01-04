import React,{useState,useEffect,useRef} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar';
import Image3 from '../../images/user.jpg';
import {Link,useParams } from "react-router-dom";
import {useSelector} from 'react-redux'
import { Col, Row,Button  } from 'antd';
import Peer from 'simple-peer';
// import Home from "./Home"
import "font-awesome/css/font-awesome.min.css";

const Vediocall = ({socket}) => {
  const myvedioRef = useRef(null);
  const userVideo = useRef();
  const connectionRef = useRef();
  const userData = useSelector((state)=>state.userData);
  let {userId,socketId } = useParams();

  const [stream,setStream] = useState(null);
  const [me,setMe] = useState(userId);
  const [call,setCall] = useState({});
  const [name, setName] = useState(userData.userinfo.data.name);
  const [callAccepted,setCallAccepted] = useState(false);
  const [callEnded,setCallEnded] = useState(false);

  console.log("userId",userId);
  console.log("socketId",socketId);


  useEffect(() => {
    navigator.mediaDevices
    .getUserMedia({ video: true, audio:true })
    .then(stream => {
      setStream(stream)
      let video = myvedioRef.current;
      video.srcObject = stream;
      // video.play();
    })
    .catch(err => {
      console.error("error:", err);
    });

    socket.on("callUser",({from,name: callerName,signal}) => {
      setCall({isReceivingCall:true,from,name: callerName,signal})
    })
  },[])

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };
const answerCall = () => {
  setCallAccepted(true);
  setCallAccepted(true);

  const peer = new Peer({ initiator: false, trickle: false, stream });

  peer.on('signal', (data) => {
    socket.emit('answerCall', { signal: data, to: call.from });
  });

  peer.on('stream', (currentStream) => {
    userVideo.current.srcObject = currentStream;
  });

  peer.signal(call.signal);

  connectionRef.current = peer; 
}
const leaveCall = () => {
  setCallEnded(true);

  connectionRef.current.destroy();

  window.location.reload();
};
 

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
        
     <div className='home-container-2'>
    
                 <h1>Vedio call</h1>   
                 {/* <Home/> */}
                 <br/><br/>
                 {
                   stream ? 
                   <>
                     <h5>My vedio id  `{'->'}` {me}</h5>
                     <h5>
                     {
                   callAccepted && !callEnded ? 
                   <><Button type="primary" onClick={leaveCall}>End Call</Button></>:
                   <><Button type="primary" onClick={() => callUser(socketId)}>Call</Button></>}
                     </h5>
                 <video ref={myvedioRef} autoPlay /> 
                 </> 
                 : null
                 }


                    {
                   callAccepted && !callEnded ? 
                   <>
                   <h5>user vedio</h5>
                 <video ref={userVideo} autoPlay /> 
                 </> 
                 : null
                 }

               
                
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

export default Vediocall