import React from 'react'
import './PaymentNow.css'
import { useNavigate } from 'react-router-dom'

import img from '../../Img/img99.png'

const EasebuzzPayment = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='paymentnow1'>
                <div className='easebuzzpayment'>
                    <div className='paymentnow5'>
                        <div className='easebuzzpayment1'>
                            <div className='easebuzzpayment2'>
                                <img src={img} alt="" />
                            </div>
                            <div className='easebuzzpayment3'>
                                <h6>EASEBUZZ PAYMENT</h6>
                            </div>

                            <div className='easebuzzpayment4'>
                                <div className='easebuzzpayment5'>
                                    <label htmlFor="">Name</label>
                                    <input type="text"  placeholder='LOREM IPSUM'/>
                                </div>
                                <div className='easebuzzpayment5'>
                                    <label htmlFor="">Email</label>
                                    <input type="text" placeholder='loremipsum@gmail.com'/>
                                </div>
                                <div className='easebuzzpayment5'>
                                    <label htmlFor="">Phone Number</label>
                                    <input type="text" placeholder='+91-1234567890'/>
                                </div>
                                <div className='easebuzzpayment5'>
                                    <label htmlFor="">Amount</label>
                                    <input type="text" placeholder='₹ 100.00'/>
                                </div>
                            </div>

                            <div className='easebuzzpayment6'>
                                <button onClick={()=>navigate('/dashboard')}>CONFIRM PAYMENT</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default EasebuzzPayment