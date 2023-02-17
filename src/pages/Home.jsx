import React, { useEffect, useState } from 'react';
import HomeCategoryCards from '../components/HomeCategoryCards';
import { useAuth } from '../context/authContext';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules





// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// Import Swiper React components


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper";

const Home = () => {



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
    categoryAll,
    banners
  } = useAuth();

  const [url,setUrl]=useState("")

  useEffect(()=>{
    setUrl(`https://apidevelopment.hari-bhari.com/${banners[0]?.banner_image}`)
  },[banners])

  // console.log('url', url)
  console.log('url', url)

  return (
    <main>
        <section className=' home__banner-section' >
        <>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
       {banners?.map(banner=>(
  <SwiperSlide>

  <img src={`https://apidevelopment.hari-bhari.com/${banner?.banner_image}`} className="card-img-top" alt="..." />
  
</SwiperSlide>
       ))}
      
      </Swiper>
    </>
        </section>
        <HomeCategoryCards/>
        {/* <HomeProductsSlider/> */}
        {/* <HomeFeature/> */}
    </main>
  )
}

export default Home