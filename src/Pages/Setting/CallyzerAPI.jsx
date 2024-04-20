import React, { useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'





const CallyzerAPI = () => {


    return (
        <>
            <div className='admission'>
                <div className='admission1'>
                    <p>Callyzer API</p>
                </div>

                <div className='callyzerapi'>
                    <div className='callyzerapi1'>
                        <textarea name="" id="" cols="30" rows="15" placeholder='Type your API Key Here....'></textarea>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(CallyzerAPI)