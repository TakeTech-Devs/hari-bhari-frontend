import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import CustomLayoutSlider from '../components/CustomLayoutSlider';
import { useAuth } from '../context/authContext';

const ProductsDetails = () => {
    const { id: productId } = useParams();

    const [productAll, setproductsAll] = useState([]);



    
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
    
            setproductsAll(res.data.info);
          }).catch((err) => {
           
          })
      };
    
    
      useEffect(() => {
        
          
          getProducts('63b9a5b0b9b50b493d0ef162', 'best_deals');
  
         
        
    
      }, [])

    const { onAddProduct, onRemoveProduct, cartItems, setCartItems,getMyCart, UserInfo } = useAuth();
    const [ProductDetails, setProductDetails] = useState({});
    const [imgDefault, setimgDefault] = useState("");
    const [pdCount, setPdCount] = useState(1)
    useEffect(() => {
        getSingleProduct();
    }, [productId]);
    const token = JSON.parse(localStorage.getItem("token"));
    const getSingleProduct = () => {

        axios
            .get(`https://apidevelopment.hari-bhari.com/product/${productId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setProductDetails({
                    ...res.data?.info,
                    ...res.data?.metaData,
                    similarProduct: res.data?.similarProduct,
                });
            });
    };

    const [cartSinglePd, setCartSinglePd] = useState(0)
    useEffect(() => {

        setCartSinglePd(cartItems.find(c => c?._id == productId)?.qty ? cartItems.find(c => c?._id == productId)?.qty : 0)
    }, [cartItems, onAddProduct, productId])
    const addToCartHandle = () => {
        if (!UserInfo?.email) {


        


            toast.error(`Please login to add product in your cart`)
        } else {

            axios.post(
                "https://apidevelopment.hari-bhari.com/cart/",
                { qty: pdCount, product_id: productId },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              ).then(res => {
             
                getMyCart()
                  toast.success(`${ProductDetails?.name} product added successfully  in your cart`)
      
              }).catch(err => {
             
      
              })

        }
    }
    return (
        <>

            <main>
                <section className='singleProduct__details container-fluid my-5'>
                    <div className="row">
                        <div className="col-md-5 overflow-hidden">
                            <img  src={
                    imgDefault
                      ? `https://apidevelopment.hari-bhari.com/${imgDefault}`
                      : `https://apidevelopment.hari-bhari.com/${ProductDetails?.images?.[0]}`
                  }className="card-img-top img-fluid w-100" alt="..." />

                            <div className="row my-4">
                             
                              {ProductDetails?.images?.map((pimg) => (
                                  
                                  <div className="col galary-img"><img
                                    className=' img-fluid'
                                        src={`https://apidevelopment.hari-bhari.com/${pimg}`}
                                        alt=""
                                        onClick={() => setimgDefault(pimg)}
                                    />
                                     </div>
                                ))}
                             
                            </div>
                        </div>
                        <div className="col-md-7">
                            <h2>{ProductDetails?.name}</h2>
                            <p>{ProductDetails?.description}</p>
                            <p>
                                <strike>&#8377;{ProductDetails?.actual_price}</strike>{" "}
                                <ins>&#8377;{ProductDetails?.price}</ins>{" "}

                                <button className="btn btn-primary">{ProductDetails?.discount}% off</button>

                            </p>



                            <div className="d-flex align-items-center">
                                <button className="nav-link custom__btn px-5 py-2 " href="#" onClick={addToCartHandle}>Add</button>
                                <div className="bg-success rounded  py-1 ms-3 text-white px-3">
                                    <button className='btn' onClick={() => setPdCount((pdCount == 1) ? pdCount : pdCount - 1)}>-</button>
                                    <span>{pdCount}</span>
                                    <button className='btn' onClick={() => setPdCount(pdCount + 1)}>+</button>
                                </div>
                            </div>

                            <h3 className="mt-5">Product Details</h3>
                            <h5>Disclaimer</h5>
                            <p>
                                Every effort is made to maintain the accuracy of all
                                information. However, actual product packaging and materials
                                may contain more and/or different information. It is
                                recommended not to solely rely on the information presented.
                            </p>
                            <h5>Shelf Life</h5>
                            <p>{ProductDetails?.shelfLife}</p>
                            <h5>Customer Care Details</h5>
                            <p>
                                Email:{" "}
                                <a href="mailto:company@gmail.com">company@gmail.com</a>
                            </p>
                            <p>
                                Customer Care Number: <a href="tel:">18**_***_*88</a>
                            </p>
                            <h5>Product Class</h5>
                            <p>Packaged Goods</p>
                            <h5>Expiry Date</h5>
                            <p>25-05-2024</p>

                        </div>
                    </div>

                </section>
            <div className="container-fluid">
            <h3 className='mb-3'>Similar Product</h3>

<CustomLayoutSlider products={productAll}/>
            </div>
            </main>


        </>
    )
}

export default ProductsDetails