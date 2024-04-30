import React from 'react'
import './Automation.css'
import HOC from '../../Components/HOC/HOC'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import img from '../../Img/img34.png'
import img1 from '../../Img/img35.png'
import img2 from '../../Img/img36.png'
import img3 from '../../Img/img37.png'
import img4 from '../../Img/img38.png'
import img5 from '../../Img/img39.png'
import { Link, useNavigate } from 'react-router-dom'



const Automation = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const navigate = useNavigate()

    function SosStatusModal(props) {

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
                        <div className='template18' onClick={() => navigate('/watiautomation')}>
                            <h6>Wati</h6>
                            <h6>Template</h6>
                        </div>
                        <div className='template18' onClick={() => navigate('/interaktautomation')}>
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
            <SosStatusModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className='template'>
                <div className='admission1'>
                    <p>Automation Logs</p>
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
                    <div className='template2' onClick={() => navigate('/telegramautomation')}>
                        <div className='template5'>
                            <img src={img1} alt="" />
                        </div>

                        <div className='template4'>
                            <p>Telegram</p>
                        </div>

                    </div>

                    <div className='template2' onClick={() => navigate('/emailautomation')}>
                        <div className='template6'>
                            <img src={img2} alt="" />
                        </div>

                        <div className='template4'>
                            <p>E-mail</p>
                        </div>

                    </div>

                    <div className='template2' onClick={() => navigate('/smsautomation')}>
                        <div className='template7'>
                            <img src={img3} alt="" />
                        </div>

                        <div className='template4'>
                            <p>SMS</p>
                        </div>
                    </div>
                    <div className='template2' onClick={() => navigate('/zoomautomation')}>
                        <div className=''>
                            <img src={img4} alt="" />
                        </div>

                        <div className='template4'>
                            <p>Zoom</p>
                        </div>
                    </div>
                    <div className='template2' onClick={() => navigate('/meetingautomation')}>
                        <div className=''>
                            <img src={img5} alt="" />
                        </div>

                        <div className='template4'>
                            <p>Meeting</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default HOC(Automation)