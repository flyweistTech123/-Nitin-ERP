import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CourierSectionTemplate = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='couriersectiontemplate'>
                <div className='couriersectiontemplate1'>
                    <h6>Select Your Template</h6>
                </div>
                <div className='couriersectiontemplate2'>
                    <div className='couriersectiontemplate3' onClick={() => navigate('/waticouriersectiontemplate')}>
                        <h6>Wati</h6>
                        <h6>Template</h6>
                    </div>
                    <div className='couriersectiontemplate3' onClick={() => navigate('/intakeouriersectiontemplate')}>
                        <h6>Interakt</h6>
                        <h6>Template</h6>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CourierSectionTemplate