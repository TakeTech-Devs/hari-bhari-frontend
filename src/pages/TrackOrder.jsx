import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import chikl from "../images/chikl.png";

const TrackOrder = () => {
  return (
    <div className='container order__track'>

<div className="card mb-3 border-0" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={chikl} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body d-flex align-items-center">
        <div className="">

        <h5 className="card-title">Ladies’ Finger</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p>
                                <strike>&#8377;3455</strike>{" "}
                                <span>&#8377;55</span>{" "}

                             

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