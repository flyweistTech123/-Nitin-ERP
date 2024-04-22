import React, { useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom'




const FeeReceiptFormat = () => {
    const navigate = useNavigate()

    return (
        <>


            <div className='admission'>
                <div className='paymenttypemode1'>
                    <p>Fee Receipt Format</p>
                </div>
                <div className='paymenttypemode'>
                    <div className='couriersectiontemplate2'>
                        <div className='feeReceiptFormat' onClick={() => navigate('/studentedittemplate')}>
                            <h6>STUDENT</h6>
                        </div>
                        <div className='feeReceiptFormat' onClick={() => navigate('/Internaledittemplate')}>
                            <h6>INTERNAL</h6>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HOC(FeeReceiptFormat)