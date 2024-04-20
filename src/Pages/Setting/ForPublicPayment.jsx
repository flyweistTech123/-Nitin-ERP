import React, { useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'

import img13 from '../../Img/img41.png'
import img14 from '../../Img/img42.png'
import img15 from '../../Img/img43.png'
import img16 from '../../Img/img44.png'
import img17 from '../../Img/img45.png'
import img18 from '../../Img/img46.png'


const ForPublicPayment = () => {
    const navigate = useNavigate()

    return (
        <>


            <div className='admission'>
                <div className='paymenttypemode1'>
                    <p>For Public</p>
                </div>
                <div className='paymenttypemode2'>
                    <p>Select the list of the Payment methods you want to show for <span>‘Internal Employee Login User’</span> Only.</p>
                </div>
                
                <div className='paymenttypemode4'>
                    <div className='paymenttypemode3'>
                        <div className='dashboard62'>
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                        </div>

                        <div className='dashboard63'>
                            <img src={img13} alt="" />
                            <img src={img14} alt="" />
                            <img src={img15} alt="" />
                            <img src={img16} alt="" />
                            <img src={img17} alt="" />
                            <img src={img18} alt="" />
                        </div>

                        <div className='dashboard64'>
                            <p>EaseBuzz Online Payment</p>
                            <p>Cash Payment</p>
                            <p>NEFT Payment</p>
                            <p>DD Payment</p>
                            <p>Bank Deposit</p>
                            <p>CCAvenue Online Payment</p>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default HOC(ForPublicPayment)