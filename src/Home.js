import React from "react";

import web from './image/img1.jpg'

import Commn from "./Commn";

const Home = () => {
  return (
   <>
   <Commn 
     name="Grow your business with "
     imgsrc={web}
     visit="/service"
     btname="Get Started"
   />
   </>
  );
};
export default Home;

