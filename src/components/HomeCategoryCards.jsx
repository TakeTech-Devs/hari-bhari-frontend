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
    <section className=' home__category'>

<div className="row  container mx-auto py-5">
 
 
 
 
 {
categoryAll?.map((category,index)=>(
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