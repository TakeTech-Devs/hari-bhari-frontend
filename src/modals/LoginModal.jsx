import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const LoginModal = ({ handleShow, show, modalName, handleClose ,handleLoginApi,handleChange,inputType,formState,loadings,setEyeShow,eyeShow,setShow}) => {
  return (
    <Modal show={modalName} onHide={handleClose} size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

        <Modal.Body>
          <form className='text-white p-4' onSubmit={handleLoginApi}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" name='email' onChange={(e) => handleChange(e)} value={formState?.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type={inputType ? "text" : "password"} className="form-control" onChange={(e) => handleChange(e)} value={formState?.password} name='password' id="exampleInputPassword1" />
              {inputType ? <AiOutlineEye onClick={() => setEyeShow({...eyeShow,passwordEye: !inputType})} className='position-absolute  eye__icon ' />
                :
                <AiOutlineEyeInvisible onClick={() => setEyeShow({...eyeShow,passwordEye: !inputType})}  className='position-absolute  eye__icon ' />}

            </div>
            <div className="mb-3 form-check position-relative">
              <input type="checkbox"  onChange={(e) => handleChange(e)}  name='rememberme' checked={formState?.rememberme} className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
            </div>
            <div className="text-center d-flex flex-column ">
              <button type="submit" disabled={loadings} className="btn btn-primary "> { loadings && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> }Login</button>
             
              <p className='mt-4' onClick={()=>{
                 setShow({

                  ...Object.keys(show).reduce((acc, key) => ({ ...acc, [key]: false }), {forgetPassModal:true})}) 
              }}>Forget Password</p>
            </div>

          </form>



        </Modal.Body>

      </Modal>
  )
}

export default LoginModal