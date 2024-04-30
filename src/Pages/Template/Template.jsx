import React from 'react'
import './Template.css'
import HOC from '../../Components/HOC/HOC'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import img from '../../Img/img34.png'
import img1 from '../../Img/img35.png'
import img2 from '../../Img/img36.png'
import img3 from '../../Img/img37.png'
import { Link, useNavigate } from 'react-router-dom'



const Template = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const navigate = useNavigate()

    function WhatsappModal(props) {

        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            ><Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className='template17'>
                        <div className='template18' onClick={() => navigate('/watitemplate')}>
                            <h6>Wati</h6>
                            <h6>Template</h6>
                        </div>
                        <div className='template18' onClick={() => navigate('/interakttemplate')}>
                            <h6>Interakt</h6>
                            <h6>Template</h6>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
    return (
        <>
            <WhatsappModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className='template'>
                <div className='admission1'>
                    <p>Template</p>
                </div>

                <div className='template1'>
                    <div className='template2' onClick={() => setModalShow(true)}>
                        <div className='template3'>
                            <img src={img} alt="" />
                        </div>
                        <div className='template4'>
                            <p>Whatsapp</p>
                        </div>

                    </div>
                    <div className='template2' onClick={() => navigate('/telegramtemplate')}>
                        <div className='template5'>
                            <img src={img1} alt="" />
                        </div>

                        <div className='template4'>
                            <p>Telegram</p>
                        </div>

                    </div>

                    <div className='template2' onClick={() => navigate('/emailtemplate')}>
                        <div className='template6'>
                            <img src={img2} alt="" />
                        </div>

                        <div className='template4'>
                            <p>E-mail</p>
                        </div>

                    </div>

                    <div className='template2' onClick={() => navigate('/smstemplate')}>
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