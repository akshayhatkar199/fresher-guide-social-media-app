import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { faCakeCandles, faGraduationCap ,faDiploma,faPen ,faLaptop, faTrophy ,faCalendarDays,faMicrophone,faPersonWalking,faP,faStar,faUserGraduate} from '@fortawesome/free-solid-svg-icons'
import {  faHome,faMessage,faBell, faBars, faUser, faAnchor} from '@fortawesome/free-solid-svg-icons' 
import { Avatar, List,Button, } from 'antd'



const Aboutus = (props) => {
  const userData = useSelector((state)=>state.userData)
  // const [profile,setprofile] = useState(props.userData)
  //  console.log("props",props)
   var profile = props.userData ? props.userData : userData.userinfo
  //  console.log("profile",profile)
  var skills = "";
  profile.skills.map((e) => {
  skills += e.skilsName + " "
 })
// console.log("skills",skills)
//  console.log("skills",skills)
  var dataAbout = [
    {
      title: 'College Name',
      icons:  faGraduationCap,
      description: profile.data.collegeName
    },
    // {
    //   title: 'Date of Birth',
    //   icons: faCakeCandles,
    //   description: profile.data.dateOfBirth
    // },
    {
      title: 'Passout Year',
      icons:  faUserGraduate,
      description: profile.data.passoutYear 
    },
    {
      title: 'Skills',
      icons: faPen,
       description:skills
    },
    {
      title: 'Technical Knowledge',
      icons: faLaptop,
      description: profile.data.technicalKnowledge
    }
    ,
    {
      title: 'Achievement',
      icons: faTrophy, 
      description: profile.data.achievement
    }
    ,
    {
      title: 'Year of Experience',
      icons: faCalendarDays,
      description: profile.data.yearOfExperience 
    }
    ,
  
    {
      title: 'Worked Projects',
      icons: faP,
      description: profile.data.workedProjects
    },
    {
      title: 'Worked/Working Companies Info',
      icons: faP,
      description: profile.data.workedCompanies
    }
    
    
   
  ];
  
  return (
    <List
    itemLayout="horizontal"
    dataSource={dataAbout}
    renderItem={(item ) => (
      <List.Item>
        <List.Item.Meta
          avatar={<div className='about-icon' >  <FontAwesomeIcon icon={item.icons} /></div>}
          title={<a href="">{item.title}</a>}
          description={item.description}
          // Array.isArray(item.description)
          // ? 
          //   <div>
          // {
          //   item.description.length >  0 ?
          //   item.description.map((e)=>{
          //      return e.skilsName
          //   }) 
          //    : null
          //   }
          // </div>
          // : item.description
          // }

        />
      </List.Item>
    )}
  />
  )
}

export default Aboutus