import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import categoryImg from '../images/category.jpeg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

const HomeProductsSlider = () => {
    const cateryies=[3,5,6,6,7,0]
  return (
 <section className="home__products-slider">
     <div className="container-fluid position-relative">
      <Swiper
    slidesPerView={3}
    spaceBetween={30}
    loop={true}
   
    navigation={true}
    modules={[  Navigation]}
    className="mySwiper"
  >
   {cateryies?.map(cat=>(
    <SwiperSlide> <div className="col">
    <div className="card">
      <img src={categoryImg} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        
      </div>
    </div>
  </div></SwiperSlide>
   )) }
    
   
  </Swiper>
  </div>
 </section>
  )
}

export default HomeProductsSlider