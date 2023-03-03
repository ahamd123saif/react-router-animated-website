import React from 'react'
import Commn from './Commn';
import web1 from './image/img6.jpg'

export const About = () => {
  return (
    <>
    <Commn name="Welcome to about page"
     imgsrc={web1}
     visit="/contact"
     btname="Contact now"/>
    </> 
  )
}
export default About;
