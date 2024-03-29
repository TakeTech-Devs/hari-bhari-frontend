import React from 'react';

import HomeCategoryCards from '../components/HomeCategoryCards';
import HomeFeature from '../components/HomeFeature';
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
import ContentLoader from 'react-content-loader';
import { Navigation, Pagination } from "swiper";
import HomeProductsSlider from '../components/HomeProductsSlider';
import { useGetBannerQuery } from '../features/banner/bannerApiSlice';

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
   
  } = useAuth();

 
  const {data:bannerData,isLoading:bannerLoading}=useGetBannerQuery();

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
{
  bannerData?.info?.length > 0  ? 

  <>
  
  {bannerData?.info?.map(banner=>(


<SwiperSlide>

<img src={`https://apidevelopment.hari-bhari.com/${banner?.banner_image}`} className="card-img-top" alt="..." />

</SwiperSlide>
     ))}
  </> :
  <ContentLoader viewBox="0 0 380 70" speed={3}  height={360}>
  
    <rect x="0" y="0" rx="5" ry="5" width="70%" height="70" />
   
  </ContentLoader>

  
}

      
      
      </Swiper>
    </>
        </section>
        <HomeCategoryCards/>
        <HomeProductsSlider/>
        <HomeFeature/>
    </main>
  )
}

export default Home