import React, { useState } from 'react'
import './contact.css'

export const Contact = () => {

    const [Data ,setData]=useState({
    Fullname :"",
    phone :"",
    email :"",
    msg  :""

    })
   const InputEvent =(event)=>{
     const {name,value} =event.target;
     setData((prevlue)=>{
       return {
        ...prevlue,
        [name]:value,
       }
     })
   }
    const formsubmit=(e)=>{
      e.preventDefault()
      alert(` my name 👍 :${Data.Fullname } phone no :${Data.phone} email : ${Data.email} msg is :${Data.msg}`)
    };

  return (
    <>
    <div className="my-5">
      <h1 className='contact'>Contact Us</h1>
    </div>
    <div className="container contact_div">
      <div className="row">
        <div className='col-md-6 col-10 mx-auto'>
        <form onSubmit={formsubmit}>
  <div class="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" class="form-control" 
    value={ Data.Fullname}
    name="Fullname"
    onChange={InputEvent}
    placeholder="Enter Your Name"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Phone</label>
    <input type="number" class="form-control" 
     value={Data.phone}
     name="phone"
     onChange={InputEvent}
    placeholder="Mobile Number"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control"
     value={Data.email}
     name="email"
     onChange={InputEvent}
    placeholder="name@example.com"/>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
    value={Data.msg}
    name="msg"
    onChange={InputEvent}
    ></textarea>
  </div>
  <div class="col-12 my-3">
      <button type="submit" className="form-btn">Submit</button>
    </div>
</form>
         </div>
      </div>
    </div>
    </>
  )
}
export default Contact;
