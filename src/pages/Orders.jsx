import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsFilter } from 'react-icons/bs';
import { IoMdArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';
import chikl from "../images/chikl.png";

const Orders = () => {
  return (
    <>
 <div className="container order__page">
<div className="d-flex justify-content-between mb-5 mt-5">
<form className="d-flex border header__search rounded-pill  " role="search">
            <input className=" me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn " type="submit"><BiSearch /></button>
          </form>
          <div className="d-flex align-items-center">
            <p className='mb-0 me-2'>Filters</p>
            <BsFilter/>
          </div>
</div>


<div className="">

<div className="card mb-3 d-flex align-items-center" >
  <div className="row g-0 align-items-center">
    <div className="col-md-4">
      <img src={chikl} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body d-flex align-items-center justify-content-center">
        <div className="">

        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

        </div>
        <Link to={`/order/${2}`} className='btn arrow'>    <IoMdArrowDropright/></Link>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={chikl} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body d-flex align-items-center">
        <div className="">

        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

        </div>
        <button className='btn arrow'>    <IoMdArrowDropright/></button>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={chikl} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body d-flex align-items-center">
        <div className="">

        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

        </div>
        <button className='btn arrow'>    <IoMdArrowDropright/></button>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={chikl} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body d-flex align-items-center">
        <div className="">

        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

        </div>
        <button className='btn arrow'>    <IoMdArrowDropright/></button>
      </div>
    </div>
  </div>
</div>

</div>
 </div>
    </>
  )
}

export default Orders