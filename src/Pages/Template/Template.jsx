import React from 'react'
import './Template.css'
import HOC from '../../Components/HOC/HOC'


import img from '../../Img/img34.png'
import img1 from '../../Img/img35.png'
import img2 from '../../Img/img36.png'
import img3 from '../../Img/img37.png'
import { Link } from 'react-router-dom'


const Template = () => {
    return (
        <>
            <div className='template'>
                <div className='admission1'>
                    <p>Template</p>
                </div>

                <div className='template1'>

                    <div className='template2'>
                        <div className='template3'>
                            <img src={img} alt="" />
                        </div>
                        <Link to={'/telegramtemplate'} className='link'>
                            <div className='template4'>
                                <p>Whatsapp</p>
                            </div>
                        </Link>
                    </div>
                    <div className='template2'>
                        <div className='template5'>
                            <img src={img1} alt="" />
                        </div>
                        <div className='template4'>
                            <p>Telegram</p>
                        </div>
                    </div>
                    <div className='template2'>
                        <div className='template6'>
                            <img src={img2} alt="" />
                        </div>
                        <div className='template4'>
                            <p>E-mail</p>
                        </div>
                    </div>
                    <div className='template2'>
                        <div className='template7'>
                            <img src={img3} alt="" />
                        </div>
                        <div className='template4'>
                            <p>SMS</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default HOC(Template)