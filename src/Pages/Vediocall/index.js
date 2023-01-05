import React,{useState,useEffect,useRef} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar';
import Image3 from '../../images/user.jpg';
import {Link,useParams } from "react-router-dom";
import {useSelector} from 'react-redux'
import { Col, Row,Button  } from 'antd';
import Peer from 'simple-peer';
import "./styles.css"
import "font-awesome/css/font-awesome.min.css";

const Vediocall = ({socket}) => {
  const myvedioRef = useRef(null);
  const userVideo = useRef();
  const connectionRef = useRef();
  const userData = useSelector((state)=>state.userData);
  const vediocallSomeOne = useSelector((state)=>state.videocallCome.data);
  const CALLUSERNAME = useSelector((state)=>state.videocallCome.callingUserName);
  console.log("vediocallSomeOne",vediocallSomeOne);
  let {userId,socketId } = useParams();

  const [stream,setStream] = useState(null);
  const [me,setMe] = useState(userId);
  const [call,setCall] = useState(vediocallSomeOne && vediocallSomeOne.from ? {...vediocallSomeOne,isReceivingCall:true}: {});
  const [name, setName] = useState(userData.userinfo.data.name);
  const [callAccepted,setCallAccepted] = useState(false);
  const [callEnded,setCallEnded] = useState(false);
  const [myVdoStatus, setMyVdoStatus] = useState(true);
  const [userVdoStatus, setUserVdoStatus] = useState();
  const [myMicStatus, setMyMicStatus] = useState(true);
  const [userMicStatus, setUserMicStatus] = useState();

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
    socket.on("updateUserMedia", ({ type, currentMediaStatus }) => {
      if (currentMediaStatus !== null || currentMediaStatus !== []) {
        switch (type) {
          case "video":
            setUserVdoStatus(currentMediaStatus);
            break;
          case "mic":
            setUserMicStatus(currentMediaStatus);
            break;
          default:
            setUserMicStatus(currentMediaStatus[0]);
            setUserVdoStatus(currentMediaStatus[1]);
            break;
        }
      }
    });
  },[])
  socket.on("endCall",() => {
    console.log("calll end !!!!!!!!!!")
    setCall({})
    setCallEnded(true);

    connectionRef.current?.destroy();
    window.location.href = "http://localhost:3000/message";
  })

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name,to:socketId });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
      socket.emit("updateMyMedia", {
        type: "both",
        currentMediaStatus: [myMicStatus, myVdoStatus],
      });
    });

    connectionRef.current = peer;
  };
const answerCall = () => {
  // setCallAccepted(true);
  setCallAccepted(true);

  const peer = new Peer({ initiator: false, trickle: false, stream });

  peer.on('signal', (data) => {
    socket.emit('answerCall', { signal: data, to: call.from,
      type: "both",
      myMediaStatus: [myMicStatus, myVdoStatus] });
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
  socket.emit('endCall', { id: socketId });
  window.location.href = "http://localhost:3000/message";
};
const updateVideo = () => {
  setMyVdoStatus((currentStatus) => {
    socket.emit("updateMyMedia", {
      type: "video",
      currentMediaStatus: !currentStatus,
    });
    stream.getVideoTracks()[0].enabled = !currentStatus;
    return !currentStatus;
  });
};

const updateMic = () => {
  setMyMicStatus((currentStatus) => {
    socket.emit("updateMyMedia", {
      type: "mic",
      currentMediaStatus: !currentStatus,
    });
    stream.getAudioTracks()[0].enabled = !currentStatus;
    return !currentStatus;
  });
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
                
                     <Row>

                     <Col  
                        xs={{span: 24}}
                        sm={{span: 24}}
                        md={{span: 24}}
                        lg={{span: 12}}
                        xl={{span: 12}}
                        xxl={{span: 12}}
                        >
                            <h3>{userData.userinfo.data.name}:</h3>
                            {
                        
                          stream ? 
                          <div className='VedioFrame'>
                              <video ref={myvedioRef} autoPlay /> 
                              <div className='mic'  onClick={() => {
                                    updateMic();
                                  }}>
                              <i
                                className={`fa fa-microphone${myMicStatus ? "" : "-slash"}`}
                                style={{ transform: "scaleX(-1)" }}
                                aria-label={`${myMicStatus ? "mic on" : "mic off"}`}
                                aria-hidden="true"
                              ></i>
                              </div>
                          </div>:
                          null
                        }
                         
                      </Col>
                      <Col  
                        xs={{span: 24}}
                        sm={{span: 24}}
                        md={{span: 24}}
                        lg={{span: 12}}
                        xl={{span: 12}}
                        xxl={{span: 12}}
                        >
                         {
                            callAccepted && !callEnded ? 
                            <>
                              <h3>{vediocallSomeOne && vediocallSomeOne.name ? vediocallSomeOne.name+":" 
                              :CALLUSERNAME  ? CALLUSERNAME : ""}</h3>
                            <div className='VedioFrame'>
                                <video ref={userVideo} autoPlay /> 
                            </div>
                            </>:
                          null
                        }
                      </Col>
                     </Row>


                 {
                   stream ? 
                   <>
                     <h5>My vedio id  `{'->'}` {me}</h5>
                     <h5>
                     {
                   callAccepted && !callEnded ? 
                   <><Button type="primary" onClick={leaveCall}>End Call</Button></>:
                   <><Button type="primary" onClick={() => callUser(socketId)}>Call</Button></>
                   
                   }
                     </h5>

                     <h5>
                       {
                         call.isReceivingCall && !callAccepted ? 
                         <>
                         <Button type="primary" onClick={answerCall}>Answer Call</Button>
                         </> : null
                       }
                     </h5>
              
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