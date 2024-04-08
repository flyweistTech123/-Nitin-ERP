import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { IoMdSearch } from "react-icons/io";
import img1 from '../../Img/img4.png'
import img2 from '../../Img/img5.png'
import img3 from '../../Img/img48.png'
import img4 from '../../Img/img49.png'
import img5 from '../../Img/img50.png'
import img6 from '../../Img/img51.png'
import img7 from '../../Img/img52.png'
import img8 from '../../Img/img53.png'
import img9 from '../../Img/img54.png'
import img10 from '../../Img/img55.png'
import img11 from '../../Img/img56.png'
import img12 from '../../Img/img57.png'
import img13 from '../../Img/img58.png'

import { Link, useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { LuHistory } from "react-icons/lu";



const Navbar = () => {

    // profile Modal


    const [modalShow, setModalShow] = React.useState(false);
    const navigate = useNavigate()



    function AddNoticeModal(props) {
        const [step, setStep] = useState(0);


        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                // centered
                style={{ position: "absolute", top: "9%", right: "10%", transform: "translateX(30%)" }}
            >
                <Modal.Body>
                    <div className='profileModal'>
                        <div className='profileModal1'>
                            <div className='profileModal111'>
                                <div className='profileModal2'>
                                    <div className='profileModal3'>
                                        <FaUser color='#FFFFFF' />
                                    </div>
                                    <div className='profileModal4'>
                                        <h6>Loren Epsom</h6>
                                        <p>Designation</p>
                                    </div>
                                </div>

                                <div className='profileModal5'>
                                    <p>See Profile</p>
                                </div>
                            </div>

                        </div>

                        <div className='profileModal1'>
                            <div className='profileModal6' onClick={()=>navigate('/loginhistory')}>
                                <LuHistory color='#444444' size={30} />
                                <h6>Login History</h6>
                            </div>
                        </div>

                        <div className='profileModal1'>
                            <div className='profileModal6' onClick={()=>navigate('/attendee')}>
                                <img src={img3} alt="" />
                                <h6>Attendees</h6>
                            </div>
                        </div>
                        <div className='profileModal1'>
                            <div className='profileModal6'>
                                <img src={img4} alt="" />
                                <h6>Notification</h6>
                            </div>
                        </div>
                        <div className='profileModal1'>
                            <div className='profileModal6'>
                                <img src={img5} alt="" />
                                <div className='profileModal7'>
                                    <button>Task</button>
                                    <div className='profileModal8'>
                                        <h6 style={{ color: '#FFB800' }}>Pending  04</h6>
                                        <h6 style={{ color: '#40AF0C' }}>Resolved  14</h6>
                                        <h6 style={{ color: '#FF0000' }}>Rejected  20</h6>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='profileModal9'>
                            <div className={step === 0 ? "profileModal20" : "profileModal22"} onClick={() => setStep(0)}>
                                <div className='profileModal21'>
                                    <img src={img6} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                            <div className={step === 1 ? "profileModal20" : "profileModal22"} onClick={() => setStep(1)}>
                                <div className='profileModal21'>
                                    <img src={img7} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                            <div className={step === 2 ? "profileModal20" : "profileModal22"} onClick={() => setStep(2)}>
                                <div className='profileModal21'>
                                    <img src={img8} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                            <div className={step === 3 ? "profileModal20" : "profileModal22"} onClick={() => setStep(3)}>
                                <div className='profileModal21'>
                                    <img src={img9} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                            <div className={step === 4 ? "profileModal20" : "profileModal22"} onClick={() => setStep(4)}>
                                <div className='profileModal21'>
                                    <img src={img10} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                            <div className={step === 5 ? "profileModal20" : "profileModal22"} onClick={() => setStep(5)}>
                                <div className='profileModal21'>
                                    <img src={img11} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                            <div className={step === 6 ? "profileModal20" : "profileModal22"} onClick={() => setStep(6)}>
                                <div className='profileModal21'>
                                    <img src={img12} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                            <div className={step === 7 ? "profileModal20" : "profileModal22"} onClick={() => setStep(7)}>
                                <div className='profileModal21'>
                                    <img src={img13} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                        </div>

                        <div className='profileModal23'>
                            <p>Load More</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }

    return (
        <>

            <AddNoticeModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div class='navbar'>
                <div class='navbar-left'>
                    <div class='logo' onClick={()=>navigate('/dashboard')}>
                        <p>Logo</p>
                    </div>
                </div>
                <div class='navbar-center'>
                    <div class='search'>
                        <div class='search-icon'>
                            <IoMdSearch color='#3F3F3F' size={20} />
                        </div>
                        <input type="search" placeholder='Search' />
                    </div>
                </div>
                <div class='navbar-right'>
                    <div class='navbar2'>
                        <button>Payment</button>
                    </div>
                    <div class='profile-img1'>
                        <img src={img1} alt="" />
                    </div>
                    <div class='profile-img' onClick={() => setModalShow(true)}>
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar