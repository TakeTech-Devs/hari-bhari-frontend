import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { useParams } from 'react-router-dom';

const TrackOrder = () => {
  const [orderInfo,setOrderInfo]=useState([]);
  const {id:orderTrackId}=useParams()
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
  (()=>{
    axios.get(
      `https://apidevelopment.hari-bhari.com/order/${orderTrackId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then(res => {
      setOrderInfo(res?.data)
    }).catch(err => {
   
  
    })
  })()
  }, [])

  return (
    <div className='container order__track'>

<div className="card mb-3 border-0" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img  src={`https://apidevelopment.hari-bhari.com//${orderInfo?.info?.orderItems?.[0]?.product?.images?.[0]}`} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body d-flex align-items-center">
        <div className="">

        <h5 className="card-title">{orderInfo?.info?.orderItems?.[0]?.product?.name}</h5>
        <p className="card-text">{orderInfo?.info?.orderItems?.[0]?.product?.description}</p>
        <p>
                                <strike>&#8377;{orderInfo?.info?.orderItems?.[0]?.actual_price}</strike>{" "}
                                <span>&#8377;{orderInfo?.info?.orderItems?.[0]?.price}</span>{" "}

                             

                            </p>
        </div>
     
      </div>
    </div>
  </div>
</div>

<div className="">
<div className="py-4  d-flex border-start border-4">
<span className='dot__icon'><GoPrimitiveDot/></span>

<div className=""><h5 className="card-title">Ladies’ Finger</h5>
<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p></div>

</div>
<div className="py-4   d-flex  border-start border-4">
<span className='dot__icon'><GoPrimitiveDot/></span>

<div className=""><h5 className="card-title">Ladies’ Finger</h5>
<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p></div>

</div>
<div className="py-4 d-flex  border-start border-4">
<span className='dot__icon'><GoPrimitiveDot/></span>

<div className=""><h5 className="card-title">Ladies’ Finger</h5>
<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p></div>

</div>
</div>
    </div>
  )
}

export default TrackOrder