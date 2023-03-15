import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';


const ProfileInfoModal = ({ modalName, handleClose, handleApiSubmit, UserInfo, setUserInfo, handleLoginApi, eyeShow, handleChange, formState, setEyeShow, handleUpdateUser, setFormState, show, setShow }) => {
    return (
        <Modal show={modalName} onHide={handleClose} size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered>

            <Modal.Body className='bg-white'>
                <form className='text-white p-4' onSubmit={handleApiSubmit}>
                    <div className="mb-3">
                        <h2 className='text-success text-center'>Profile</h2>
                        <ul className="list-group list-group-flush">


                            {!show.isUpdatePassword && <>
                                <li className="list-group-item">
                                    <div className="row align-items-center ">
                                        <div className="col-3">
                                            <label for="inputPassword6" className="col-form-label">Name</label>
                                        </div>
                                        <div className="col-9">
                                            {show.iSEditableUserInfo ? <input type="text" name='name' onChange={(e) => setUserInfo({ ...UserInfo, name: e.target.value })} value={UserInfo?.name} className="form-control" aria-describedby="passwordHelpInline" /> : UserInfo?.name}
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row ">
                                        <div className="col-3">
                                            <label for="inputPassword6" className="col-form-label">Email</label>
                                        </div>
                                        <div className="col-9">
                                            {show.iSEditableUserInfo ? <input type="email" disabled value={UserInfo?.email} className="form-control" aria-describedby="passwordHelpInline" /> : UserInfo?.email}
                                        </div>
                                    </div>
                                </li>

                                <li className="list-group-item">
                                    <div className="row align-items-center ">
                                        <div className="col-3">
                                            <label for="inputPassword6" className="col-form-label">Phone Number</label>
                                        </div>
                                        <div className="col-9">
                                            {show.iSEditableUserInfo ? <input type="number" id="inputPassword6" value={UserInfo?.phone} onChange={(e) => setUserInfo({ ...UserInfo, phone: e.target.value })} className="form-control" name='phone' aria-describedby="passwordHelpInline" /> : UserInfo?.phone ? UserInfo?.phone : "N/A"}
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row align-items-center ">
                                        <div className="col-3">
                                            <label for="inputPassword6" className="col-form-label">Alernative Number</label>
                                        </div>
                                        <div className="col-9">
                                            {show.iSEditableUserInfo ? <input type="number" id="inputPassword6" onChange={(e) => setUserInfo({ ...UserInfo, alternatephone: e.target.value })} className="form-control" aria-describedby="passwordHelpInline" /> : UserInfo?.alterphone ? UserInfo?.alterphone : "N/A"}
                                        </div>
                                    </div>
                                </li>

                            </>}

                            <>




                                {show.isUpdatePassword && <li className="resetpassword__modal">

                                    <form className='text-white ' onSubmit={handleLoginApi}>

                                        <div className="mb-3 position-relative">
                                            <label htmlFor="exampleInputPassword1" className="form-label theme__text">Old Password</label>
                                            <input type={eyeShow?.oldpasswordEye ? "text" : "password"} className="form-control" onChange={(e) => handleChange(e)} value={formState.values?.old_password} name='old_password' id="exampleInputPassword1" />
                                            {eyeShow?.oldpasswordEye ? <AiOutlineEye onClick={() => setEyeShow({ ...eyeShow, oldpasswordEye: !eyeShow.oldpasswordEye })} className='position-absolute  eye__icon ' />
                                                :
                                                <AiOutlineEyeInvisible onClick={() => setEyeShow({ ...eyeShow, oldpasswordEye: !eyeShow.oldpasswordEye })} className='position-absolute  eye__icon ' />}

                                        </div>
                                        <div className="mb-3  position-relative">
                                            <label htmlFor="exampleInputPassword1" className="form-label theme__text">New Password</label>
                                            <input type={eyeShow?.newpasswordEye ? "text" : "password"} className="form-control" onChange={(e) => handleChange(e)} value={formState.values?.newpassword} name='newpassword' id="exampleInputPassword1" />
                                            {eyeShow?.newpasswordEye ? <AiOutlineEye onClick={() => setEyeShow({ ...eyeShow, newpasswordEye: !eyeShow.newpasswordEye })} className='position-absolute  eye__icon ' />
                                                :
                                                <AiOutlineEyeInvisible onClick={() => setEyeShow({ ...eyeShow, newpasswordEye: !eyeShow.newpasswordEye })} className='position-absolute  eye__icon ' />}

                                        </div>
                                        <div className="mb-3  position-relative">
                                            <label htmlFor="exampleInputPassword1" className="form-label theme__text">Confirm Password</label>
                                            <input type={eyeShow?.confirmpasswordEye ? "text" : "password"} className="form-control" onChange={(e) => handleChange(e)} value={formState.values?.confirmpassword} name='confirmpassword' id="exampleInputPassword1" />
                                            {eyeShow?.confirmpasswordEye ? <AiOutlineEye onClick={() => setEyeShow({ ...eyeShow, confirmpasswordEye: !eyeShow.confirmpasswordEye })} className='position-absolute  eye__icon ' />
                                                :
                                                <AiOutlineEyeInvisible onClick={() => setEyeShow({ ...eyeShow, confirmpasswordEye: !eyeShow.confirmpasswordEye })} className='position-absolute  eye__icon ' />}

                                        </div>


                                    </form>





                                </li>}

                            </>
                        </ul>
                    </div>



                    <div className="text-center d-flex gap-2">

                        {(show.iSEditableUserInfo || show.isUpdatePassword) ? <button className="nav-link  custom__btn  px-3 py-1" aria-current="page" href="#" onClick={handleUpdateUser}> Submit  </button> : <>  <button className="nav-link  custom__btn px-3 py-1" aria-current="page" href="#" onClick={() => setShow({ ...show, iSEditableUserInfo: true })}> Update Profile  </button>
                            <button onClick={() => {
                                setFormState({ values: {} })
                                setShow({ ...show, isUpdatePassword: true })
                            }} className="nav-link  custom__btn  px-3 py-1" aria-current="page" href="#"> Change Password  </button> </>}
                    </div>

                </form>



            </Modal.Body>

        </Modal>

    )
}

export default ProfileInfoModal