import React from 'react';
import Modal from 'react-bootstrap/Modal';

const FirstModal = ({ handleShow, modalName, handleClose }) => {
    return (
        <Modal show={modalName} onHide={handleClose} size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered>

            <Modal.Body>

                <div className="d-flex flex-column modal__custom text-white  justify-content-center items-center text-center p-4">

                    <div className="">
                        <button type="button" className="btn btn-outline-success rounded-pill px-5" onClick={() => handleShow("loginModal")}>Login</button>
                    </div>
                    <div className="d-flex or__section items-center  justify-content-center ">
                        <span className='left'></span>
                        <span>OR</span>
                        <span className='right'></span>
                    </div>
                    <h5 className='text-center cursor-pointer' onClick={() => handleShow("registerModal")}>Sign Up With Email</h5>
                </div>
            </Modal.Body>

        </Modal>
    )
}

export default FirstModal