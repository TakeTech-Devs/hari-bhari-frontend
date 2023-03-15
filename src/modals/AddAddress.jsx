import axios from 'axios';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { BiMap } from 'react-icons/bi';
import map from '../images/map.png';

const AddAddress = ({ getMyAddress, modalName, handleClose, addressList, formState, handleChange, handleOtpVer }) => {

  const handleAddAddress = () => {

    const token = JSON.parse(localStorage.getItem("token"));
const url= formState?.values?.createdAt ? `https://apidevelopment.hari-bhari.com/address/${formState?.values?._id}` :`https://apidevelopment.hari-bhari.com/address`;

if(formState?.values?.createdAt ){
  axios
  .put(
    url,
    formState.values,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  .then((res) => {
    getMyAddress()
    // if(res?.status ===201){
    //   setShow({
    //     ...Object.keys(show).reduce((acc, key) =>({...acc, [key]:false},{})),addressModel:true
    //   })
    // }

  });
}else{
  axios
  .post(
    url,
    formState.values,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  .then((res) => {
    getMyAddress()
    // if(res?.status ===201){
    //   setShow({
    //     ...Object.keys(show).reduce((acc, key) =>({...acc, [key]:false},{})),addressModel:true
    //   })
    // }

  });
}
   
  };



  return (
    <Modal show={modalName} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>

      <Modal.Body className='bg-white'>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="row align-items-center ">

              <div className="col-md-6">
                <img src={map} alt="" />
                <div className="d-flex align-items-center theme__text"><BiMap className='mb-2 me-2' />  <h5>  Your Location</h5></div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate quas vero sed iste magni ad doloribus nam laudantium delectus.</p>
              </div>
              <div className="col-md-6 border-start border-secondary">
                <form className=' p-4' onSubmit={handleOtpVer}>
                  <div className="mb-3">
                    <h5> Enter complete address</h5>




                    <p>This allow us to find you easily and give you timely delivery experience</p>
                    <input type="text" name="receiver_name" placeholder="Receiver's name" value={formState?.values
                      ?.receiver_name} onChange={(e) => handleChange(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                  </div>
                  <div className="mb-3">

                    <input type="text" name="resident_no" placeholder="Flat/House/Office No." onChange={(e) => handleChange(e)} value={formState?.values
                      ?.resident_no} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                  </div>
                  <div className="mb-3">

                    <input type="text" placeholder="Street/Society / Office Name" name='resident_name' onChange={(e) => handleChange(e)} value={formState?.values
                      ?.resident_name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                  </div>
                  <div className="mb-3">

                    <input type="number" placeholder="Pin Number" name="pin" onChange={(e) => handleChange(e)} value={formState?.values
                      ?.pin} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                  </div>



                  <div className="d-flex g-1">
                    <h6 className='me-3'>Save address as
                    </h6>

                    <div className='d-flex'>
                      <div className="form-check me-3">
                        <input className="form-check-input "
                         checked={formState?.values?.address_type == "home" } 
                         onChange={(e) => handleChange(e)} type="radio" name="address_type" value="home" id="flexRadioDefault1" />
                        <label className="form-check-label btn-outline-primary" htmlFor="address_type">
                          Home
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" 
                        checked={formState?.values?.address_type=="work"} 
                          onChange={(e) => handleChange(e)} type="radio" name="address_type" value="work" id="flexRadioDefault2"  />
                        <label className="form-check-label" htmlFor="address_type">
                          Work
                        </label>
                      </div>
                    </div>

                  </div>

                  <div className="text-center d-flex flex-column ">



                    <a onClick={handleAddAddress} className="nav-link custom__btn px-2 mt-3 py-1" href="#" >Save Address</a>
                  </div>

                </form>
              </div>
            </div>
          </li>

        </ul>


      </Modal.Body>

    </Modal>
  )
}

export default AddAddress