
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import toast from 'react-hot-toast';

import { BiSearch } from 'react-icons/bi';
import { FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import logo from '../images/Logo1st.png';
import AddAddress from '../modals/AddAddress';
import AddressModal from '../modals/AddressModal';
import FirstModal from '../modals/FirstModal';
import ForgetPassword from '../modals/ForgetPassword';
import LoginModal from '../modals/LoginModal';
import OtpModal from '../modals/OtpModal';
import ProfileInfoModal from '../modals/ProfileInfoModal';
import RegisterModal from '../modals/RegisterModal';

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

  const [addresses, setaddresses] = useState([])
  const [eyeShow, setEyeShow] = useState({
    passwordEye: false,
    oldpasswordEye: false,
    newpasswordEye: false,
    confirmpasswordEye: false,
  })
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
      iSEditableUserInfo: false,
      isUpdatePassword: false,

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

    ...Object.keys(show).reduce((acc, key) => ({ ...acc, [key]: false }), {})


    // firstModal: false,
    // loginModal: false,
    // registerModal: false,
    // otpModal: false,
    // forgetPassModal: false,
    // showEye: false,
    // profileInfoModel: false,
    // changePassModel: false,
    // addressModel: false,
    // addAddressModel: false,
    // userUpdateModel: false,
    // iSEditableUserInfo: false,
    // isUpdatePassword: false,

  });
  const handleShow = (modalItem) => {

    if (modalItem == "loginModal") {
      setFormState({ values: JSON.parse(localStorage.getItem("rememberme")) })

    }

    return setShow({

      [modalItem]: true,
    })
  };




  const handleLoginApi = (e) => {
    e.preventDefault();
    setloadings(true)
    if (Boolean(formState.values?.email) && Boolean(formState.values?.password)) {
      axios
        .post(
          `https://apidevelopment.hari-bhari.com/auth/login`,
          // "http://localhost:4000/auth/login",
          formState.values,

        )
        .then((res) => {
          getUserDetails(res.data.info.token)
          localStorage.setItem("token", JSON.stringify(res.data.info.token));
          handleClose()
          toast.success('Login success')
          setloadings(false)
        }).catch(err => {
          if (err?.response?.data?.errors?.error) {

            toast.error(err?.response?.data?.errors?.error)
          } else {
            toast.error('Something went wrong')

          }
          setloadings(false)

        })
    };

  }
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
            ...formState?.values,
            ...res.data?.info,
          },
        });

      });
    setShow({ otpModal: true })
  };


  console.log('formState', formState)
  const handleApiSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://apidevelopment.hari-bhari.com/auth/verifyotp/${formState?.forgetUser ?formState?.forgetUser :formState?.values?.user_id}`,
        formState.values,

      )
      .then((res) => {
        // toggle();
        // handleRefresh();
      });
  };

  useEffect(() => {

    if (formState?.values?.rememberme) {
      localStorage.setItem("rememberme", JSON.stringify({ email: formState.values?.email, password: formState.values?.password, rememberme: formState.values?.rememberme }));
    }

  }, [formState?.values]);


  useEffect(() => {

    if (formState?.values?.rememberme == false) {
      localStorage.removeItem("rememberme");

    }
  }, [formState?.values?.rememberme]);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    const { password, ...rest } = UserInfo;
   
    axios
      .put(
        `https://apidevelopment.hari-bhari.com/auth/${show.isUpdatePassword ? 'changepassword' : 'updateprofile'}`,
        { ...rest, ...formState?.values, password: formState?.values?.newpassword, confirm_password: formState?.values?.confirmpassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status == 200) {
          if (res?.data?.info?.message) {

            toast.success(res?.data?.info?.message)
          } else {
            toast.success(res?.data?.info?.success)

          }


          setShow({ ...show, iSEditableUserInfo: false, isUpdatePassword: false })

        }

      }).catch((err) => {
        toast.error(err?.response?.data?.errors?.error)

      });
  };



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
        setaddresses(res?.data?.info)

        setShow({
          ...Object.keys(show).reduce((acc, key) => ({ ...acc, [key]: false }), {}), addressModel: true
        })
      }).catch(err => {


      })
  };




  const [products, setProducts] = useState([]);
  const[windowWidth,setWindowWidth] = useState(0)

  const getProducts = (searchKey) => {
    const url = `https://apidevelopment.hari-bhari.com/product?keyword=${searchKey}`;

    axios
      .get(
        url,
        {
          headers: {
            // Authorization: `Bearer ${token}`639a0c0e56faa05e018e85ec
          },
        }
      )
      .then((res) => {

        setProducts(res.data?.info);

      }).catch((err) => {
        setProducts([])
      })
  };
const handleSearchbar=(e)=>{
  
}

  useEffect(() => {
window.addEventListener('resize',handleSearchbar)
return ()=>{

window.removeEventListener('resize',handleSearchbar)

}
  },[])

  const [isFocused, setIsFocused] = useState(false)

  return (

    <>
      <nav className="navbar navbar-expand-lg bg-light sticky-top">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand nav__logo me-5" href="#">
            <img src={logo} alt="" />
          </Link>

          <div className="position-relative"   >
            <form   className="d-flex border header__search rounded-pill " role="search" onSubmit={(e) => {
              e.preventDefault()
            }}>
              <input className=" me-2" onFocus={() => setIsFocused(true)} type="search" onChange={e => getProducts(e.target.value)} placeholder="Search" aria-label="Search" />
              <button className="btn " type="submit"><BiSearch /></button>
                </form>
          {isFocused && products?.length > 0 &&   <div className="card position-absolute  mt-2" style={{ width: '100%' }}>
              <ul className="list-group list-group-flush">
               {
                products?.slice(0,7)?.map(product=>(
                  <Link onClick={() => setIsFocused(false)} key={product?.id} to={`/products/${product?._id}`} className="list-group-item d-flex"> 
                  <img  src={`https://apidevelopment.hari-bhari.com/${product?.images[0]}`}       className="card-img-top img-fluid" alt="..." style={{flex:1,width: "40px",
    height: "40px",
    objectFit: "cover"}}  />  <span style={{flex:2}} className='ps-3'> {product?.name}</span> </Link>
                ))
               }
           
              </ul>
            </div>}
          </div>



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
                        <li><a className="dropdown-item" href="#" onClick={() => handleShow("profileInfoModel")}>Profile</a></li>
                        <li><Link to='/order' className="dropdown-item" href="#">My Orders</Link></li>
                        <li><a className="dropdown-item" href="#" onClick={getMyAddress}>Saved Address</a></li>
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
                      <Link to='/cart' className="nav-link  custom__btn px-5 py-2" aria-current="page" href="#"> Cart <span><FaShoppingCart /></span> {cartItems?.length > 0 && cartItems?.length} </Link>
                    </li>
                  </>

                  : <li className="nav-item ">
                    <a className="nav-link custom__btn px-5 py-2" href="#" onClick={() => handleShow("firstModal")}>Login</a>
                  </li>}


            </ul>

          </div>
        </div>


      </nav>



      <FirstModal  handleShow={handleShow} modalName={show.firstModal} handleClose={handleClose} />

      <LoginModal  show={show} setShow={setShow}  handleShow={handleShow} modalName={show.loginModal} handleClose={handleClose} handleLoginApi={handleLoginApi} handleChange={handleChange} inputType={eyeShow?.passwordEye} formState={formState.values} loadings={loadings} setEyeShow={setEyeShow} eyeShow={eyeShow} />


      <RegisterModal modalName={show.registerModal} handleClose={handleClose} handleOtpVer={handleOtpVer} formState={formState.values} handleChange={handleChange} />

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

      <OtpModal modalName={show.otpModal} handleClose={handleClose} handleApiSubmit={handleApiSubmit} formState={formState} handleChange={handleChange} />

      <ProfileInfoModal modalName={show.profileInfoModel} handleClose={handleClose} handleApiSubmit={handleApiSubmit} UserInfo={UserInfo} setUserInfo={setUserInfo} handleLoginApi={handleLoginApi} eyeShow={eyeShow} handleChange={handleChange} formState={formState} setEyeShow={setEyeShow} handleUpdateUser={handleUpdateUser} setFormState={setFormState} show={show} setShow={setShow} />

      <AddressModal setFormState={setFormState} getMyAddress={getMyAddress} setShow={setShow} show={show} formState={formState} addressList={addresses} modalName={show.addressModel} handleClose={handleClose} />
      <ForgetPassword  setFormState={setFormState} getMyAddress={getMyAddress} setShow={setShow} show={show} formState={formState} addressList={addresses} modalName={show.forgetPassModal} handleClose={handleClose} />


      <AddAddress getMyAddress={getMyAddress} formState={formState} addressList={addresses} modalName={show.addAddressModel} handleClose={handleClose} handleChange={handleChange} />


    </>


  )
}

export default Header