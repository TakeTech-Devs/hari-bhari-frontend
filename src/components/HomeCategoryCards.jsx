import React from 'react'
import { useAuth } from '../context/authContext'

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
    const cateryies=[3,5,6,6,7,0]
  return (
    <section className='container home__category mt-5'>

<div className="row ">
 
 
 
 
 {
categoryAll?.map((category,index)=>(
    <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
    <div className="card">
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