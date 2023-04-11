import React from 'react';
import { useAuth } from '../context/authContext';
import { useGetCategoryQuery } from '../features/category/categoryApiSlice';

const HomeCategoryCards = () => {
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
  } = useAuth()
const {data:categoryData,isLoading:categoryLoading}=useGetCategoryQuery();

  return (
    <section className=' home__category'>

<div className="row  container mx-auto py-5">
 
 
 
 
 {
categoryData?.info?.map((category,index)=>(
    <div className="col-md-3 col-lg-4 " key={index}>
    <div className="card my-3">
      <img src={`https://apidevelopment.hari-bhari.com/${category?.image}`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{category?.name}</h5>
        
      </div>
    </div>
  </div>
))
 }
 
  

</div>


    </section>
  )
}

export default HomeCategoryCards