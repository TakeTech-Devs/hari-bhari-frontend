import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper React components


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useAuth } from "../context/authContext";

// import "./styles.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import { useGetCategoryQuery } from "../features/category/categoryApiSlice";

const HomeProductsSlider = () => {
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
    
    banners
  } = useAuth();

  const {data:categoryData,isLoading:categoryLoading}=useGetCategoryQuery();


  const [productAll, setproductsAll] = useState({

  });
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

  const getProducts = (categoryId, slugName) => {


    const url = `https://apidevelopment.hari-bhari.com/product/find/${categoryId}`

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

        setproductsAll(prev=>  ({ ...prev, [slugName.split(" ").join("-")]: res.data.info }));
      }).catch((err) => {
       
      })
  };


  useEffect(() => {
    if (categoryData) {
      categoryData?.info?.map((category) => {
        getProducts(category._id, category?.slug);

      })
    }

  }, [categoryData])
console.log('productAll',  productAll)

  return (
    <section className='text-black home__banner-section container-fluid py-5 home_productwith_category' >

      {categoryData?.info?.length > 0 && categoryData?.info?.map((category, ind) => (
        <>

     { productAll[category?.slug?.split(" ").join("-")]?.length > 0  &&  <div className="">

         
          {productAll[category?.slug?.split(" ").join("-")]?.length > 0 && <div className="d-flex justify-content-between  mb-4">


            <button className="nav-link custom__btn px-5 py-2" >{category?.name}</button>
            <Link to={`/shop/${category?._id}`} className="nav-link custom__btn px-5 py-2" href="#" >See more</Link>


          </div>}

          <Link to={'/'}><>
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

                {productAll[category?.slug?.split(" ").join("-")]?.map(banner => (


                  <SwiperSlide className="mb-5">

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
          </></Link>
        </div>}
        </>


      ))}



    </section>
  )
}

export default HomeProductsSlider