 import React from 'react'
import './PaymentNow.css'
import { useNavigate } from 'react-router-dom'

import img from '../../Img/img99.png'
import img1 from '../../Img/img101.png'
import img2 from '../../Img/img102.png'
import img3 from '../../Img/img103.png'
import img4 from '../../Img/img104.png'

const PaymentNow = () => {
    const navigate  = useNavigate()
    return (
        <>
            <div className='paymentnow1'>
                <div className='paymentnow2'>
                    <div className='paymentnow3'>
                        <img src={img} alt="" />
                    </div>

                    <div className='paymentnow4'>
                        <div className='paymentnow5'>
                            <div className='paymentnow6'>
                                <h6>Validate Admission</h6>
                            </div>
                            <div className='paymentnow7'>
                                <label htmlFor=""><span>*</span>Admission No.</label>
                                <input type="text" placeholder='Enter Email' />
                            </div>

                            <div className='paymentnow8'>
                                <button onClick={()=>navigate('/paymentdetails')}>SUBMIT</button>
                            </div>

                            <div className='paymentnow9'>

                            </div>

                            <div className='paymentnow10'>
                                <h6>Contact Us</h6>
                                <div className='paymentnow14'>
                                    <div className='paymentnow11'>
                                        <div className='paymentnow12'>
                                            <img src={img2} alt="" />
                                            <p>Mobile Number</p>
                                        </div>

                                        <div className='paymentnow13'>
                                            <p>+91-1234567890</p>
                                        </div>
                                    </div>
                                    <div className='paymentnow11'>
                                        <div className='paymentnow12'>
                                            <img src={img1} alt="" />
                                            <p>Email</p>
                                        </div>

                                        <div className='paymentnow13'>
                                            <p>loremipsum@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className='paymentnow11'>
                                        <div className='paymentnow12'>
                                            <img src={img4} alt="" />
                                            <p>Website</p>
                                        </div>

                                        <div className='paymentnow13'>
                                            <p>www.loremipsum.com</p>
                                        </div>
                                    </div>
                                    <div className='paymentnow11'>
                                        <div className='paymentnow12'>
                                            <img src={img3} alt="" />
                                            <p>Address</p>
                                        </div>

                                        <div className='paymentnow13'>
                                            <p>XYZ Street, Lorem Ipsum City</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentNow