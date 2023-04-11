import axios from 'axios';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { List } from 'react-content-loader';
import { toast } from 'react-hot-toast';
import { BiMap } from 'react-icons/bi';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

const AddressModal = ({ modalName, handleClose,setFormState, addressList, setShow, show, formState, getMyAddress }) => {


    const[loading,setLoading]=useState(false)
    const handleDeleteAddress = (id) => {
        setLoading(true)
        const token = JSON.parse(localStorage.getItem("token"));

        axios
            .delete(`https://apidevelopment.hari-bhari.com/address/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
        setLoading(false)

                if (res.status == 200) {
                    if (res?.data?.info?.message) {

                        toast.success(res?.data?.info?.message)
                    } else {
                        toast.success(res?.data?.info?.success)

                    }
                }


                getMyAddress()
            }).catch(err=>{
        setLoading(false)

            })
    };
    const handleEditAddress = (id) => {

       
  
        const token = JSON.parse(localStorage.getItem("token"));
    
        axios
            .put(
                `https://apidevelopment.hari-bhari.com/address/${id}`,
                {default:true},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((res) => {
             

            });
    };



    return (
        <Modal show={modalName} onHide={handleClose} size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered>

            <Modal.Body className='bg-white'>
{!loading ?
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="row align-items-center ">

                            <div className="col">
                                <button className='btn' onClick={() => {
                                    setFormState({values:{}})
                                    setShow({ ...show, addressModel: false, addAddressModel: true })}}>
                                    <div className="d-flex align-items-center ">
                                        <BiMap className='mb-2 me-2' />  <h5 >  Add New Address</h5></div>
                                </button>

                                <table className="table">
                                    <tbody>
                                        {addressList?.map(address => (
                                            <tr>
                                                <th scope="row" className='p-0 pt-2'> <div className="d-flex align-items-center"><BiMap /> {address?.address_type}  </div>   </th>
                                                <td>{address?.receiver_name}- {address?.resident_name}, {address?.resident_no}</td>
                                                <td onClick={()=>{ 
                                                    setShow({ ...show, addressModel: false, addAddressModel: true })
                                                    setFormState({values:address})}}> <button className='btn p-0 m-0'> <FaRegEdit className='cursor-pointer'  /></button> </td>
                                                <td> <button className='btn p-0 m-0'>< FaRegTrashAlt onClick={() => handleDeleteAddress(address._id)} className='cursor-pointer' /></button></td>
                                                <td><div className="form-check mt-1">
                                                    <input className="form-check-input" onChange={()=>handleEditAddress(address?._id)} type="radio" name="flexRadioDefault" id="flexRadioDefault2"  />
sdsadsadsdsads
                                                </div></td>

                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </li>

                </ul>
             :   <List />}
            </Modal.Body>

        </Modal>

    )
}

export default AddressModal