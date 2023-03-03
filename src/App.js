import React from 'react'
import Home from './Home';
import About from "./About";
import Contact from "./Contact";
import Service from './Service';
import { Route, Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar';
import './index.css'
import Footer from './Footer';
export const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/About'element={<About/>}/>
     <Route path='/Contact'element={<Contact/>}/>
     <Route path='/Service'element={<Service/>}/>
     
    </Routes>
    <Footer/>
    
    
    </>
  )
}
export default App;
