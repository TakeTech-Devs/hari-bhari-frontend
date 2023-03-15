import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, ModalHeader } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const OrderModal = ({ cartIId,modalName, handleClose, handleApiSubmit, UserInfo, setUserInfo, handleLoginApi, eyeShow, handleChange, cartItems, formState, proceedOrder, billingInfo, order, setEyeShow, handleUpdateUser, setFormState, show, setShow }) => {
  const showtab = 1;

  const[addresses,setaddresses]=useState({})
const placeOrder=(e)=>{

  const token = JSON.parse(localStorage.getItem("token"));
    
const url= `https://apidevelopment.hari-bhari.com/order/${cartIId}`;

axios
.post(
  url,
  {...cartItems,addressId:addresses?._id},
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
)
.then((res) => {
 


})
}

useEffect(()=>{
 
  getMyAddress()
},[])
const getMyAddress = () => {
  // e.preventDefault();
  const token = JSON.parse(localStorage.getItem("token"));

  axios
    .get(`https://apidevelopment.hari-bhari.com/address`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      setaddresses(res?.data?.info?.[0])

    
    }).catch(err => {


    })
};

console.log('addresses', addresses)

  return (
    <Modal
      show={show}
      onHide={handleClose}
      // backdrop="static"
      keyboard={false}
    >


      <Modal.Body className='bg-white'>

        <div className="row">
          <div className="col-md-6">
            <div className="left-modal-details">
              <ModalHeader>Payment</ModalHeader>
              <table>
                <tr>
                  <th>Lorem Ipsum MRP</th>
                  <td>&#8377; 80</td>
                </tr>
                <tr>
                  <th>Lorem Ipsum MRP</th>
                  <td>&#8377; 700</td>
                </tr>
                <tr>
                  <th>Product Discount</th>
                  <td>
                    <i className="fa fa-minus" />
                    &nbsp;&#8377; 15
                  </td>
                </tr>
                <tr>
                  <th>Delivery Charge </th>
                  <td>&#8377; 15 Free</td>
                </tr>
                <tr>
                  <th>Grand Total</th>
                  <td>&#8377; 765</td>
                </tr>
              </table>

         
              <div className="tab-content text-dark" id="pills-tabContent">
                <div
                  className={
                    showtab === 1
                      ? "tab-pane fade show active text-center"
                      : "tab-pane fade show"
                  }
                >
                  
                  <p>
                    Please pay &#8377;765 to the delivery executive <br />
                    When your order is delivered.
                  </p>
                  <Button className="nav-link custom__btn px-2 mt-3 py-1" onClick={placeOrder}>
                    Place Order
                  </Button>
                </div>

                <div
                  className={
                    showtab === 2
                      ? "tab-pane fade show active text-center"
                      : "tab-pane fade"
                  }
                >
                  <p className="text-left">UPI ID</p>
                  <p>
                    <input
                      type="text"
                      name="upiID"
                      placeholder="Enter UPI ID"
                      className="form-control"
                    />
                  </p>
                  <button className="btn btn-secondary text-center">
                    Pay Now
                  </button>
                </div>

                <div
                  className={
                    showtab === 3
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <form className="text-center">
                    <div className="form-group">
                      <label for="cardNumber">Card Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cardNumber"
                        aria-describedby=""
                        placeholder="Enter Card Number"
                      />
                    </div>
                    <div className="input-fields d-flex mt-3 mb-3">
                      <div className="form-group">
                        <label for="valid">Valid Through</label>
                        <div className="input-fields d-flex m-auto">
                          <input
                            type="number"
                            className="form-control"
                            id="valid"
                            placeholder="MM"
                          />
                          <input
                            type="number"
                            className="form-control"
                            id="valid"
                            placeholder="YY"
                          />
                        </div>
                      </div>
                      <div className="form-group m-auto">
                        <label for="cvv">CVV</label>
                        <input
                          type="number"
                          className="form-control"
                          id="cvv"
                          placeholder="CVV"
                        />
                      </div>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label" for="exampleCheck1">
                        Save this card for future use, it’s perfectly
                        secure.
                      </label>
                    </div>

                    <button type="submit" className="btn btn-secondary">
                      Pay Now
                    </button>
                  </form>
                </div>
                <div
                  className={
                    showtab === 4
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <form className="select-bank text-center">
                    <p className="text-left">All Banks</p>
                    <select className="form-control">
                      <option value="" selected>
                        Select Banks
                      </option>
                      <option value="">ABC Banks</option>
                      <option value="">DEF Banks</option>
                      <option value="">GHI Banks</option>
                      <option value="">JKL Banks</option>
                    </select>
                    <button type="submit" className="btn btn-secondary">
                      Pay Now
                    </button>
                  </form>
                </div>
              </div>
            </div></div>
          <div className="col-md-6">
            <div className="right-modal-details">
              <div className="info-container">
                <div className="delivery">
                  <h5>Delivery Address</h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Deleniti beatae recusandae similique modi
                  </p>
                </div>
                <div className="my-cart d-flex justify-content-between">
                  <h5>My Cart</h5>
                  <p>{cartItems?.length} Items</p>
                </div>
                <div className="cart-info">

                  {cartItems?.map((pd) => (

                    <div className="item-img d-flex align-items-center">
                      <img
                      className='me-3'
                       style={{width: "40px",
                       height: "40px",
                       objectFit: "cover"}} 
                        src={`https://apidevelopment.hari-bhari.com//${pd?.productId?.images[0]}`}
                        alt=""
                      />
                      <p>
                        {pd?.productId?.name}<br />
                        <h6>&#8377; {pd?.price}</h6>
                      </p>
                    </div>
                  ))}


                </div>
              </div>
            </div>
          </div>
        </div>

        
       

     
      </Modal.Body>

    </Modal>

  )
}

export default OrderModal