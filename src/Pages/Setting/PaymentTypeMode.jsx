import React, { useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom'




const PaymentTypeMode = () => {
    const navigate = useNavigate()

    return (
        <>


            <div className='admission'>
                <div className='paymenttypemode1'>
                    <p>Payment Type Mode</p>
                </div>
                <div className='paymenttypemode'>
                    <div className='couriersectiontemplate2'>
                        <div className='couriersectiontemplate3' onClick={() => navigate('/forinternalpayment')}>
                            <h6>For Internal</h6>
                        </div>
                        <div className='couriersectiontemplate3' onClick={() => navigate('/forpublicPayment')}>
                            <h6>For Public</h6>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HOC(PaymentTypeMode)