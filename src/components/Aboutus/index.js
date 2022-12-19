import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { faCakeCandles, faGraduationCap ,faDiploma,faPen ,faLaptop, faTrophy ,faCalendarDays,faMicrophone,faPersonWalking,faP,faStar,faUserGraduate} from '@fortawesome/free-solid-svg-icons'
import {  faHome,faMessage,faBell, faBars, faUser, faAnchor} from '@fortawesome/free-solid-svg-icons' 
import { Avatar, List,Button, } from 'antd'



const Aboutus = () => {
  const userData = useSelector((state)=>state.userData)
  console.log("userData",userData)

  const dataAbout = [
    {
      title: 'College Name',
      icons:  faGraduationCap,
      description: userData.userinfo.data.collegeName
    },
    {
      title: 'Date of Birth',
      icons: faCakeCandles,
      description: userData.userinfo.data.dateOfBirth
    },
    {
      title: 'Passout Year',
      icons:  faUserGraduate,
      description: userData.userinfo.data.passoutYear 
    },
    {
      title: 'Skills',
      icons: faPen,
      description:  userData.userinfo.Skills  
    },
    {
      title: 'Technical Knowledge',
      icons: faLaptop,
      description: userData.userinfo.data.technicalKnowledge
    }
    ,
    {
      title: 'Achievement',
      icons: faTrophy, 
      description: userData.userinfo.data.achievement
    }
    ,
    {
      title: 'Year of Experience',
      icons: faCalendarDays,
      description: userData.userinfo.data.yearOfExperience 
    }
    ,
  
    {
      title: 'Worked Projects',
      icons: faP,
      description: userData.userinfo.data.workedProjects
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
          title={<a href="https://ant.design">{item.title}</a>}
          description={
          Array.isArray(item.description)
          ? 
            <div>
          {
            item.description.length >  0 ?
            item.description.map((e)=>{
               return e.skilsName
            }) 
             : null
            }
          </div>
          : item.description
          }

        />
      </List.Item>
    )}
  />
  )
}

export default Aboutus