import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '../context/authContext';
import OrderModal from '../modals/OrderModal';

const Cart = () => {
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
    const addToCartHandle = (id) => {
        if (!UserInfo?.email) {

            toast.error(`Please login to add product in your cart`)
        } else {
            toast.success(`${id} product add successfully  in your cart`)

        }
    }
    const removeToCartHandle = (id) => {
        if (!UserInfo?.email) {

            toast.error(`Please login to add product in your cart`)
        } else {
            toast.success(`${id} product remove successfully  in your cart`)

        }
    }

    useEffect(() => {
        setPdCount()
    }, [cartItems])

    return (
        <>
            <main>

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

                <section>
                
                    <button onClick={handleShow} className="nav-link custom__btn px-5 py-2"> 2 items:{" "}    <strike className='mx-2'>&#8377; 477 </strike>{" "}
                    {" "}   455{" "} Proceed</button>
                </section>
            </main>
<OrderModal  cartIId={cartIId} show={show} handleClose={handleClose} setShow={setShow} handleApiSubmit={{}} cartItems={cartItems} />

        </>
    )
}

export default Cart