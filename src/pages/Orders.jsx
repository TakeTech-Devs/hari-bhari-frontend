import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Orders = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [orders,setOrders]=useState([])

useEffect(() => {
(()=>{
  axios.get(
    "https://apidevelopment.hari-bhari.com/order",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then(res => {
    setOrders(res?.data?.info)
  }).catch(err => {
 

  })
})()
}, [])

  return (
    <>
 <div className="container order__page mt-5">
{/* <div className="d-flex justify-content-between mb-5 mt-5">
<form className="d-flex border header__search rounded-pill  " role="search">
            <input className=" me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn " type="submit"><BiSearch /></button>
          </form>
          <div className="d-flex align-items-center">
            <p className='mb-0 me-2'>Filters</p>
            <BsFilter/>
          </div>
</div> */}


<div className="">


 { 
 orders?.map(order=>(
  <div className="card mb-3 d-flex align-items-center" >
 <div className="row g-0 align-items-center oderItem">
 <div className="col-md-4">
  
   <img   src={`https://apidevelopment.hari-bhari.com//${order?.orderItems
[0]?.product?.images
[0]}`} className="img-fluid rounded-start" alt="..." />
 </div>
 <div className="col-md-8">
   <div className="card-body d-flex align-items-center justify-content-center">
     <div className="">

     <h6 className="card-title">Order Status
: {order?.orderStatus}</h6>
<div className="d-flex">
<h6 className="card-title">Address Info
: </h6>
     <p className="card-text">{`${order?.shippingInfo?.address?.resident_name
}  ${order?.shippingInfo?.address?.resident_no
}`}</p>
</div>

     </div>
     <Link to={`/order/${order?._id}`} className='btn arrow'>    <IoMdArrowDropright/></Link>
   </div>
 </div>
 </div>
</div>))
 }



</div>
 </div>
    </>
  )
}

export default Orders