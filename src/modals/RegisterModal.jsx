import React from 'react';
import Modal from 'react-bootstrap/Modal';

const RegisterModal = ({modalName,handleClose,handleOtpVer,formState,handleChange}) => {
  return (
    <Modal show={modalName} onHide={handleClose} size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

        <Modal.Body>
          <form className='text-white p-4' onSubmit={handleOtpVer}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" name='name' value={formState?.name} onChange={(e) => handleChange(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" name='email' onChange={(e) => handleChange(e)} value={formState?.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type={"password"} className="form-control" onChange={(e) => handleChange(e)} value={formState?.password} name='password' id="exampleInputPassword1" />
        

            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
              <input type={"password"} className="form-control" onChange={(e) => handleChange(e)} value={formState?.confirm_password}  name="confirm_password" id="exampleInputPassword1" />
            

            </div>

            <div className="text-center d-flex flex-column ">
              <button type="submit" className="btn btn-primary ">Next</button>

            </div>

          </form>



        </Modal.Body>

      </Modal>
  )
}

export default RegisterModal