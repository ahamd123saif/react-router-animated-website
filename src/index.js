import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import {BrowserRouter } from 'react-router-dom';
import App from './App';
ReactDom.render (

  <>
  <BrowserRouter>
  <App/>
  {/* <Routes> */}
      {/* <Route path ='/about' element ={<About/>}/> */}
      {/* <Route path ='/contat' element={<Contact/>}/> */}
    {/* </Routes> */}
  </BrowserRouter> 
  </>
  ,document.getElementById('root')
)
