import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const Shop = () => {
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
        categoryAll
    } = useAuth()
    const [products, setproducts] = useState([]);
    const getProducts = (id) => {
        // const token = JSON.parse(localStorage.getItem('token'))
        // console.log(token)
        axios
            .get(
                `https://apidevelopment.hari-bhari.com/product/find/63b9a5b0b9b50b493d0ef162`,
                {
                    headers: {
                        // Authorization: `Bearer ${token}`639a0c0e56faa05e018e85ec
                    },
                }
            )
            .then((res) => {

                setproducts(res.data.info);
            });
    };

    useEffect(() => {
        getProducts()
    }, [])
    console.log('activeCategory', products)
    return (
        <main className='shop__page'>

            <section className='container-fluid'>
                <div className="row">
                    <div className="col-md-3">
                        <ul class="nav flex-column category__shoppage">
                            {
                                categoryAll?.slice(0, 4)?.map(cat => (

                                    <a class=" active" aria-current="page" href="#">
                                        <div className="card" style={{ maxWidth: 540 }}>
                                            <div className="row g-0">
                                                <div className="col-md-4">

                                                    <img src={`https://apidevelopment.hari-bhari.com/${cat?.image}`} className="card-img-top" alt="..." />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Card title</h5>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </a>

                                ))
                            }

                        </ul>
                    </div>
                    <div className="col-md-9">

                        <div className="row ">




                            {
                                products?.map((product, index) => (

                                    <div className="col-md-6 col-lg-4 col-xl-3 product__card-shoppage pb-3">
                                        <Link to={`/products/${product?._id}`}>

                                        <div className="card h-100">
                                     
                                       <img src={`https://apidevelopment.hari-bhari.com/${product?.images[0]}`} className="card-img-top" alt="..." />
                                            

                                            <div className="card-body">
                                                <h5 className="card-title">{product?.name}</h5>
                                                <p className="card-text">{product?.description?.substring(0, 50)}...</p>
                                            </div>
                                            <div className="card-footer d-flex items-center justify-content-between">
                                                <small className="text-muted d-flex  items-centers justify-content-center mt-2">        <p>   $ {product?.price}</p>
                                                </small>
                                                <small className="text-muted">                  <a className="nav-link custom__btn px-5 py-2" href="#" >Add</a>
                                                </small>
                                            </div>
                                     
                                        </div>
                                    </Link>
                                    </div>

                                ))
                            }



                        </div>




                    </div>
                </div>
                <div className="row">

                    {
                        products?.map((category, index) => (


                            <div className="col-md-6 col-lg-3  product__card-shoppage pb-3">
                                <div className="card h-100">
                                    <img src={`https://apidevelopment.hari-bhari.com/${category?.images[0]}`} className="card-img-top" alt="..." />

                                    <div className="card-body">
                                        <h5 className="card-title">{category?.name}</h5>
                                        <p className="card-text">{category?.description?.substring(0, 50)}...</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">                  <a className="nav-link custom__btn px-5 py-2" href="#" >Login</a>
                                        </small>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>

            </section>
        </main>
    )
}

export default Shop