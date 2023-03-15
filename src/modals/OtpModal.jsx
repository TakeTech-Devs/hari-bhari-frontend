import React from 'react';
import Modal from 'react-bootstrap/Modal';

const OtpModal = ({modalName,handleClose,handleApiSubmit,formState,handleChange}) => {
  return (
    <Modal show={modalName} onHide={handleClose} size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered>

    <Modal.Body>
      <form className='text-white p-4' onSubmit={handleApiSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Otp</label>
          <input type="text" name='otp' value={formState.values?.otp} onChange={(e) => handleChange(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

        </div>
     
      

        <div className="text-center d-flex flex-column ">
          <button type="submit" className="btn btn-primary ">Next</button>

        </div>

      </form>



    </Modal.Body>

  </Modal>
  )
}

export default OtpModal