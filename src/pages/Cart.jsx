import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { IoMdArrowDropright } from 'react-icons/io';
import { useAuth } from '../context/authContext';
import OrderModal from '../modals/OrderModal';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";
import axios from "axios";
import CustomLayoutSlider from '../components/CustomLayoutSlider';
import { useGetCategoryQuery } from '../features/category/categoryApiSlice';
const Cart = () => {



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
        
        getProducts('63b9a5b0b9b50b493d0ef162', 'best_deals');

       
      }
  
    }, [categoryData])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
const[modalOrder,setModalOrder]=useState(false)
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
        cartIId,
    } = useAuth();
    const [pdCount, setPdCount] = useState(1)

   

    useEffect(() => {
        setPdCount()
    }, [cartItems]);

    console.log('productAll', productAll)
    return (
        <>
         { cartItems?.length > 0 ?  <main className='container-fluid'>

                <section className="container-fluid">
                    <h3 className="pt-4">My Cart</h3>
                    <div className="items-info">
                        <p>{billingInfo?.totalQty}items</p>
                        <p>Order ID- 0ID54211874</p>
                    </div>
                    {cartItems?.map(ct => (<div className="row">
                        <div classname="col">
                            <div className="card mb-3" style={{ maxWidth: 540 }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={`https://apidevelopment.hari-bhari.com//${ct?.productId?.images[0]}`} className="img-fluid rounded-start" alt="..." />

                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{ct?.productId?.name} </h5>

                                        </div>
                                        <div className="d-flex align-items-center ms-2">
                                            <button className="nav-link custom__btn px-3 py-2 " href="#" onClick={() => onAddProduct(ct,"addtodb")}>Add</button>
                                            <div className="bg-success rounded  py-1 mx-3 text-white px-3">

                                                <button className='btn' onClick={() => onRemoveProduct(ct)}>-</button>
                                                <span>{ct?.qty}</span>
                                                <button className='btn' onClick={() => onAddProduct(ct)}>+</button>
                                            </div>
                                            <button className="nav-link custom__btn px-2 py-2 " href="#" onClick={() => onRemoveProduct(ct,"addtodb")}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>))}
                </section>

<h3 className='mb-3'>Before you Checkout</h3>
             

<CustomLayoutSlider products={productAll?.best_deals}/>
               

<ul class="list-group list-group-flush">
 
  <li class="list-group-item  d-flex justify-content-between"><span> Product Charge</span> <span class="">{cartItems?.reduce((itm,curr)=>itm + curr?.actual_price, 0)}</span> </li>
  
  <li class="list-group-item  d-flex justify-content-between"> <span> Product Discount</span>  <span class="">{cartItems?.reduce((itm,curr)=>itm + (curr?.actual_price - curr?.price), 0)}</span> </li>
  <li class="list-group-item  d-flex justify-content-between"><span> Delivery Charge</span> <span class="">0</span> </li>
  <li class="list-group-item d-flex justify-content-between"> <span>Grand Total </span>  <span class="">{cartItems?.reduce((itm,curr)=>itm + curr?.price , 0)}</span></li>
</ul>

<section>
                
                <button onClick={handleShow} className="nav-link custom__btn px-5 py-2 mx-auto mb-5"> {cartItems?.length} items:{" "}    <strike className='mx-2'>&#8377; {cartItems?.reduce((itm,curr)=>itm + curr?.actual_price, 0)} </strike>{" "}
                {" "}   {cartItems?.reduce((itm,curr)=>itm + curr?.price , 0)}{" "} Proceed <h3 className='ms-3 mb-0'><IoMdArrowDropright/></h3> </button>
            </section>
            </main> :
            <>
            <h1 className='text-center my-5'>No Product in your Cart</h1>
            <CustomLayoutSlider products={productAll?.best_deals}/>

            
            </>
            

            
            }
<OrderModal  cartIId={cartIId} show={show} handleClose={handleClose} setShow={setShow} handleApiSubmit={{}} cartItems={cartItems} />

        </>
    )
}

export default Cart