import React from 'react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import axios from "axios";
import { toast } from "react-hot-toast";
// import "./styles.css";
import { Navigation } from "swiper";

import { useNavigate } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAuth } from '../context/authContext';
const CustomLayoutSlider = ({products=[]}) => {
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
        cartIId,
    } = useAuth();


const navigate =useNavigate();

    const token = JSON.parse(localStorage.getItem("token"));

    const addToCartHandle = (product) => {
      if (!UserInfo?.email) {
  
  
  
  
  
        toast.error(`Please login to add product in your cart`)
      } else {
  
        axios.post(
          "https://apidevelopment.hari-bhari.com/cart/",
          { qty: 1, product_id: product?._id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ).then(res => {
  
          getMyCart()
          toast.success(`${product?.name} product added successfully  in your cart`)
  
        }).catch(err => {
  
  
        })
  
      }
    }

  return (
    <>

<section className='text-black home__banner-section container-fluid py-5 home_productwith_category' >


<>

<div className="">




<>
<Swiper
slidesPerView={4}
spaceBetween={30}
loop={true}
pagination={{
  clickable: true,
}}
navigation={true}
breakpoints={{
  450: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
}}
modules={[Navigation]}
className="mySwiper mb-5"

>



<>

  {products.map(banner => (


    <SwiperSlide className="mb-5"  onClick={()=>navigate(`/products/${banner?._id}`)}  style={{cursor:'pointer'}}>

      <div class="card " >
        <img style={{
          display: "block", width: "100%",
          height: "140px",
          objectFit: "contain"
        }} src={`https://apidevelopment.hari-bhari.com/${banner?.images[0]}`} class="card-img-top img-fluid" alt="..." />

        <div class="card-body text-start">
          <h5 class="card-title">{banner?.name}</h5>
          <p style={{ height: "70px" }} class="card-text">{banner?.description?.slice(0, 50)}{banner?.description?.length > 50 && "..."} </p>

          <div className="d-flex justify-content-between align-items-center">
            <h5>$ 20</h5>


            <button className="nav-link custom__btn px-4 py-1" onClick={() => addToCartHandle(banner)} >Add</button>

          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</>






</Swiper>
</>
</div>
</>






</section>
    
</>
  )
}

export default CustomLayoutSlider