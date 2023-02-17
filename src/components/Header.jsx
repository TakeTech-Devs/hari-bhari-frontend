
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { BiSearch } from 'react-icons/bi';
import { FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import logo from '../images/Logo1st.png';

const Header = () => {
  const {
    onAddProduct,
    onRemoveProduct,
    cartItems,
    setCartItems,
    handelLogout,
    handleRefresh,
    billingInfo,
    setbillingInfo,
    getMyCart,
    UserInfo,
    setUserInfo,
    getUserDetails,
    categoryAll
  } = useAuth()
  const [eyeShow, setEyeShow] = useState(false)
  const [loadings, setloadings] = useState(false)
  const [show, setShow] = useState(
    {
      firstModal: false,
      loginModal: false,
      registerModal: false,
      otpModal: false,
      forgetPassModal: false,
      showEye: false,
      profileInfoModel: false,
      changePassModel: false,
      addressModel: false,
      addAddressModel: false,
      userUpdateModel: false,
    }
  );

  const [formState, setFormState] = useState({
    values: {
     
    },
  });

  const handleChange = (event) => {
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      },
    }));
  };

  const handleClose = () => setShow({
    firstModal: false,
    loginModal: false,
    registerModal: false,
    otpModal: false,
    forgetPassModal: false,
    showEye: false,
    profileInfoModel: false,
    changePassModel: false,
    addressModel: false,
    addAddressModel: false,
    userUpdateModel: false,
  });
  const handleShow = (modalItem) => setShow({

    [modalItem]: true,
  });

 


  const handleLoginApi = (e) => {
    e.preventDefault();
    setloadings(true)
    if (Boolean(formState.values?.email) && Boolean(formState.values?.password)) {
      axios
        .post(
          "https://apidevelopment.hari-bhari.com/auth/login",
          // "http://localhost:4000/auth/login",
          formState.values,

        )
        .then((res) => {
          getUserDetails(res.data.info.token)
          localStorage.setItem("token", JSON.stringify(res.data.info.token));
          handleClose()
          toast.success('Login success')
          setloadings(false)
        }).catch(err=>{
          console.log('err', err)
          toast.error(err?.response?.data?.errors?.error)
          setloadings(false)

        })
    };

  }

  // console.log('UserInfo', UserInfo)
  const handleOtpVer = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:4000/auth/signup",
        formState.values,
        {}
      )
      .then((res) => {
        // setcategories(res.data.info)
        setFormState({
          ...formState,
          values: {
            ...formState?.values ,
            ...res.data?.info,
          },
        });

      });
    setShow({ otpModal: true })
  };

  
  const handleApiSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://apidevelopment.hari-bhari.com/auth/verifyotp/${formState?.values?.user_id}`,
        formState.values,
        
      )
      .then((res) => {
        // toggle();
        // handleRefresh();
      });
  };

  useEffect(() => {

    if (formState?.values?.rememberme) {
      localStorage.setItem("rememberme",JSON.stringify({email: formState.values?.email,password: formState.values?.password,rememberme: formState.values?.rememberme}));
    }

  }, [formState?.values]);
  useEffect(() => {

   
    setFormState({values:JSON.parse(localStorage.getItem("rememberme"))})
    

  }, []);

  useEffect(() => {
   
    if (formState?.values?.rememberme==false) {
      localStorage.removeItem("rememberme");

    }
  }, [formState?.values?.rememberme]);


  return (

    <>
      <nav className="navbar navbar-expand-md bg-light sticky-top">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand nav__logo" href="#">
            <img src={logo} alt="" />
          </Link>
          <form className="d-flex border header__search rounded-pill" role="search">
            <input className=" me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn " type="submit"><BiSearch /></button>
          </form>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {
              UserInfo?.email ?
                <>


                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle custom__btn  custom__btn-transparent  px-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Select Vendor
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Retail</a></li>
                      <li><a className="dropdown-item" href="#">Wholesaler</a></li>



                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle custom__btn  custom__btn-transparent  px-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Account
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#" onClick={()=>handleShow("profileInfoModel")}>Profile</a></li>
                      <li><a className="dropdown-item" href="#">My Orders</a></li>
                      <li><a className="dropdown-item" href="#">Saved Address</a></li>
                      <li><a className="dropdown-item" href="#">FAQ's</a></li>
                      <li onClick={handelLogout}><a className="dropdown-item" href="#" >Logout</a></li>

                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle custom__btn  custom__btn-transparent  px-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Location <span> <FaMapMarkerAlt /> </span>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#"> <FaMapMarkerAlt /> Action</a></li>
                      <li><a className="dropdown-item" href="#">  <FaMapMarkerAlt /> Change your location</a></li>

                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to='/cart' className="nav-link  custom__btn px-5 py-2" aria-current="page" href="#"> Cart <span><FaShoppingCart /></span> {cartItems?.length >0 && cartItems?.length} </Link>
                  </li>
                </>

                : <li className="nav-item ">
                  <a className="nav-link custom__btn px-5 py-2" href="#" onClick={() => handleShow("firstModal")}>Login</a>
                </li>}


            </ul>

          </div>
        </div>


      </nav>



      <Modal show={show.firstModal} onHide={handleClose} size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

        <Modal.Body>

          <div className="d-flex flex-column modal__custom text-white  justify-content-center items-center text-center p-4">

            <div className="">
              <button type="button" class="btn btn-outline-success rounded-pill px-5" onClick={() => handleShow("loginModal")}>Login</button>
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

      <Modal show={show.loginModal} onHide={handleClose} size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

        <Modal.Body>
          <form className='text-white p-4' onSubmit={handleLoginApi}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" name='email' onChange={(e) => handleChange(e)} value={formState.values?.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type={eyeShow ? "text" : "password"} className="form-control" onChange={(e) => handleChange(e)} value={formState.values?.password} name='password' id="exampleInputPassword1" />
              {eyeShow ? <AiOutlineEye onClick={() => setEyeShow(!eyeShow)} className='position-absolute  eye__icon ' />
                :
                <AiOutlineEyeInvisible onClick={() => setEyeShow(!eyeShow)} className='position-absolute  eye__icon ' />}

            </div>
            <div className="mb-3 form-check position-relative">
              <input type="checkbox"  onChange={(e) => handleChange(e)}  name='rememberme' checked={formState.values?.rememberme} className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
            </div>
            <div className="text-center d-flex flex-column ">
              <button type="submit" disabled={loadings} className="btn btn-primary "> { loadings && <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> }Login</button>
             
              <a href="">Forget Password</a>
            </div>

          </form>



        </Modal.Body>

      </Modal>
      <Modal show={show.registerModal} onHide={handleClose} size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

        <Modal.Body>
          <form className='text-white p-4' onSubmit={handleOtpVer}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" name='name' value={formState.values?.name} onChange={(e) => handleChange(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" name='email' onChange={(e) => handleChange(e)} value={formState.values?.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type={"password"} className="form-control" onChange={(e) => handleChange(e)} value={formState.values?.password} name='password' id="exampleInputPassword1" />
              {/* {eyeShow? <AiOutlineEye onClick={()=>setEyeShow(!eyeShow)} className='position-absolute  eye__icon '/>
   :
    <AiOutlineEyeInvisible onClick={()=>setEyeShow(!eyeShow)} className='position-absolute  eye__icon '/>} */}

            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
              <input type={"password"} className="form-control" onChange={(e) => handleChange(e)} value={formState.values?.confirm_password}  name="confirm_password" id="exampleInputPassword1" />
              {/* {eyeShow? <AiOutlineEye onClick={()=>setEyeShow(!eyeShow)} className='position-absolute  eye__icon '/>
   :
    <AiOutlineEyeInvisible onClick={()=>setEyeShow(!eyeShow)} className='position-absolute  eye__icon '/>} */}

            </div>

            <div className="text-center d-flex flex-column ">
              <button type="submit" className="btn btn-primary ">Next</button>

            </div>

          </form>



        </Modal.Body>

      </Modal>

      <Modal show={show.otpModal} onHide={handleClose} size="md"
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
      <Modal show={show.profileInfoModel} onHide={handleClose} size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

        <Modal.Body className='bg-white'>
          <form className='text-white p-4' onSubmit={handleApiSubmit}>
            <div className="mb-3">
              <h2 className='text-success text-center'>Profile</h2>
            <ul class="list-group list-group-flush">
  <li class="list-group-item">Name : </li>
  <li class="list-group-item">Email : </li>
  <li class="list-group-item">Phone Number : </li>
  <li class="list-group-item">Alernative Phone Number : </li>
  
</ul>
            </div>
         
          

            <div className="text-center d-flex">
              <button type="button" className="btn btn-white text-black ">Update Profile</button>
              <button type="button" className="btn btn-white  text-black">Change Password</button>

            </div>

          </form>



        </Modal.Body>

      </Modal>
    </>
  )
}

export default Header