import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles, faGraduationCap ,faDiploma,faPen ,faLaptop, faTrophy ,faCalendarDays,faMicrophone,faPersonWalking,faP,faStar,faUserGraduate} from '@fortawesome/free-solid-svg-icons'
import {  faHome,faMessage,faBell, faBars, faUser, faAnchor} from '@fortawesome/free-solid-svg-icons' 
import { Avatar, List,Button, } from 'antd'

const dataAbout = [
    {
      title: 'College Name',
      icons:  faGraduationCap
    },
    {
      title: 'Date of Birth',
      icons: faCakeCandles
    },
    {
      title: 'Passout Year',
      icons:  faUserGraduate 
    },
    {
      title: 'Skills',
      icons: faPen
    },
    {
      title: 'Technical Knowledge',
      icons: faLaptop
    }
    ,
    {
      title: 'Achievement',
      icons: faTrophy 
    }
    ,
    {
      title: 'Year of Experience',
      icons: faCalendarDays 
    }
    ,
    {
      title: 'Publication',
      icons: faMicrophone
    }
    ,
    {
      title: 'Area of Expertise',
      icons: faPersonWalking
    }
    ,
    {
      title: 'Worked Projects',
      icons: faP
    }
    ,
    {
      title: 'Ratings',
      icons: faStar
    }
   
  ];
  

const Aboutus = () => {
  return (
    <List
    itemLayout="horizontal"
    dataSource={dataAbout}
    renderItem={(item ) => (
      <List.Item>
        <List.Item.Meta
          avatar={<div className='about-icon' >  <FontAwesomeIcon icon={item.icons} /></div>}
          title={<a href="https://ant.design">{item.title}</a>}
          description=" Design, a design language for background applications"
        />
      </List.Item>
    )}
  />
  )
}

export default Aboutus