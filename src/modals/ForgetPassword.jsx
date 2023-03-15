import axios from 'axios';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const ForgetPassword = ({ getMyAddress,setShow,show, modalName, handleClose, addressList, formState, handleChange, handleOtpVer }) => {

    const [email,setEmail]=useState('')

  const handleForgetPass = (e) => {
    e.preventDefault()

    
const url= `https://apidevelopment.hari-bhari.com/auth/forgotpassword`;

  axios
  .post(
    url,
    {email},
    {
      headers: {
        
      },
    }
  )
  .then((res) => {
   
    setShow({

        ...Object.keys(show).reduce((acc, key) => ({ ...acc, [key]: false }), {otpModal:true})}) 
    // if(res?.status ===201){
    //   setShow({
    //     ...Object.keys(show).reduce((acc, key) =>({...acc, [key]:false},{})),addressModel:true
    //   })
    // }

  });

  

   
  };



  return (
    <Modal show={modalName} onHide={handleClose} size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered>

    <Modal.Body>
      <form className='text-white p-4' onSubmit={handleForgetPass}>
       
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

        </div>
       

        <div className="text-center d-flex flex-column ">
          <button type="submit" className="btn btn-primary ">Next</button>

        </div>

      </form>



    </Modal.Body>

  </Modal>
  )
}

export default ForgetPassword