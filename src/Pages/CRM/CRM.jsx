import React, { useEffect, useState } from 'react';
import './CRM.css'
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Counsellorform, Paymentlink } from '../Modals/Modals'
import { useNavigate, Link } from 'react-router-dom';
import { MdEdit } from "react-icons/md";

import img from '../../Img/img33.png'

// Modals 


import {
    CRMFilterModal,
    MYDEALSModal,
    AddFieldModal,
    CRMNeWLead,
    CRMNewTask,
    History,
    NeWLead,
    SMS,
    Email,
    Whatsapp,
    CRMAdmissionFollowUp,
    CRMFieldModal,
    History1,
    FilterModalhistory,
    AddNewEvent,
    AddNewFilter
} from '../Modals/Modals.jsx'

const CRM = () => {
    const navigate = useNavigate()
    const [state, setState] = useState(null);

    const handleState = (index) => {
        setState(index);
    };


    const [state1, setState1] = useState(null);

    const handleState1 = (index) => {
        setState1(index);
    };


    const tableData = [
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            university: 'Lorem epsom',
            course: 'Engineering',
            createdDate: 'DD/MM/YYYY',
            Admissionform: 'Form',
            counsellorform: 'Form',
            Payment: 'Link'
        },

        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            university: 'Lorem epsom',
            course: 'Engineering',
            createdDate: 'DD/MM/YYYY',
            Admissionform: 'Form',
            counsellorform: 'Form',
            Payment: 'Link'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            university: 'Lorem epsom',
            course: 'Engineering',
            createdDate: 'DD/MM/YYYY',
            Admissionform: 'Form',
            counsellorform: 'Form',
            Payment: 'Link'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            university: 'Lorem epsom',
            course: 'Engineering',
            createdDate: 'DD/MM/YYYY',
            Admissionform: 'Form',
            counsellorform: 'Form',
            Payment: 'Link'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            university: 'Lorem epsom',
            course: 'Engineering',
            createdDate: 'DD/MM/YYYY',
            Admissionform: 'Form',
            counsellorform: 'Form',
            Payment: 'Link'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            university: 'Lorem epsom',
            course: 'Engineering',
            createdDate: 'DD/MM/YYYY',
            Admissionform: 'Form',
            counsellorform: 'Form',
            Payment: 'Link'
        },

    ];

    // Counsellorform Modal 

    const [modalShow, setModalShow] = React.useState(false);

    // Counsellorform Modal 

    const [modalShow1, setModalShow1] = React.useState(false);


    // Filter Modal 

    const [modalShow2, setModalShow2] = React.useState(false);

    // mydeals Modal
    const [modalShow3, setModalShow3] = React.useState(false);

    // add field Modal
    const [modalShow4, setModalShow4] = React.useState(false);



    // Admission Follow Up Modal

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // New Lead Modal

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // History Modal

    const [modalShow5, setModalShow5] = React.useState(false);


    // PaymentFieldModal
    const [modalShow6, setModalShow6] = React.useState(false);


    // AddNewFilter Modal

    const [modalShow7, setModalShow7] = React.useState(false);



    // NewTask Modal

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    // SMS Modal
    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);




    // Email Modal
    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);



    // Whatsapp Modal
    const [show5, setShow5] = useState(false);

    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    // Whatsapp Modal
    const [show6, setShow6] = useState(false);

    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);

    return (
        <>
            <Counsellorform
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <Paymentlink
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <CRMFilterModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
                setModalShow1={setModalShow3}
                setModalShow2={setModalShow4}
                setModalShow7={setModalShow7}
            />
            <MYDEALSModal
                show={modalShow3}
                onHide={() => setModalShow3(false)}
                setModalShow={setModalShow2}
                setModalShow2={setModalShow4}
            />
            <AddFieldModal
                show={modalShow4}
                onHide={() => setModalShow4(false)}
            />
            <AddNewFilter
                show={modalShow7}
                onHide={() => setModalShow7(false)}
            />
            <CRMFieldModal
                show={modalShow6}
                onHide={() => setModalShow6(false)}
            />
            <CRMNeWLead
                show={show}
                onHide={handleClose}
                setModalShow3={setModalShow5}
                handleShow1={handleShow1}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
                handleShow6={handleShow6}
                title={"Admission"}
            />
            <CRMAdmissionFollowUp
                show={show6}
                onHide={handleClose6}
                setModalShow3={setModalShow5}
                handleShow1={handleShow1}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
                title={"Admission"}
            />
            <NeWLead
                show={show1}
                onHide={handleClose1}
                setModalShow3={setModalShow5}
                handleShow={handleShow}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
            />
            <History
                show={modalShow5}
                onHide={() => setModalShow5(false)}
            />
            <CRMNewTask
                show={show2}
                onHide={handleClose2}
            />
            <SMS
                show={show3}
                onHide={handleClose3}
                setModalShow3={setModalShow5}
            />
            <Email
                show={show4}
                onHide={handleClose4}
            />
            <Whatsapp
                show={show5}
                onHide={handleClose5}
            />
            <div className='admission'>
                <div className='crm'>
                    <p>Lorem</p>
                </div>

                <div className='admission8' >
                    <div>
                        <p>Leads</p>
                    </div>
                    <div className='admission9' onClick={() => setModalShow2(true)}>
                        <div className='admission10'>
                            <p>My leads</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>

                    <div className='crm1'>
                        <button onClick={handleShow}>CREATE</button>
                    </div>
                </div>

                <div className='crm2'>
                    <div className="crm3">
                        {["List", "Activities", "Calender"].map((bank, index) => (
                            <div
                                key={index}
                                className={state === index ? "crm4" : "crm5"}
                                onClick={() => handleState(index)}
                            >
                                {bank}
                            </div>
                        ))}
                    </div>
                </div>

                <div className='crm6'>
                    <div className="crm7">
                        {["General Info", "Follow Up"].map((bank, index) => (
                            <div
                                key={index}
                                className={state1 === index ? "crm8" : "crm9"}
                                onClick={() => handleState1(index)}
                            >
                                {bank}
                            </div>
                        ))}
                    </div>

                    <div className='admission2'>
                        <Link to={'/whatsapp'} className='link'>
                            <div className='admission3'>
                                <p>What’s App</p>
                            </div>
                        </Link>
                        <Link to={'/email'} className='link'>
                            <div className='admission4'>
                                <p>Email</p>
                            </div>
                        </Link>
                        <Link to={'/telegram'} className='link'>
                            <div className='admission5'>
                                <p>Telegram</p>
                            </div>
                        </Link>
                        <Link to={'/zoommeeting'} className='link'>
                            <div className='admission6'>
                                <p>Zoom</p>
                            </div>
                        </Link>
                        <Link to={'/voicecall'} className='link'>
                            <div className='admission7'>
                                <p>Voice Call</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th><IoSettings size={20} onClick={() => setModalShow6(true)} /></th>
                                    <th>Student Name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>University/College</th>
                                    <th>Course name</th>
                                    <th>Created Date</th>
                                    <th>Admission form</th>
                                    <th>Counsellor form</th>
                                    <th>Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td><img src={img} alt="" /></td>
                                        <td>
                                            <p className='admission202'><button onClick={handleShow}><MdEdit size={20} /> Edit</button></p>
                                            {data.name}
                                        </td>
                                        <td>{data.email}</td>
                                        <td>{data.contact}</td>
                                        <td>{data.university}</td>
                                        <td>{data.course}</td>
                                        <td>{data.createdDate}</td>
                                        <td style={{ color: '#2155CD', textDecoration: "underline" }} onClick={() => navigate('/admission_details')}>{data.Admissionform}</td>
                                        <td style={{ color: '#2155CD', textDecoration: "underline" }} onClick={() => setModalShow(true)}>{data.counsellorform}</td>
                                        <td style={{ color: '#2155CD', textDecoration: "underline" }} onClick={() => setModalShow1(true)}>{data.Payment}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='pendingpayment6'>
                    <div className='pendingpayment7'>
                        <h6>Total:</h6>
                        <span>Show quantity</span>
                    </div>

                    <div className='pendingpayment8'>
                        <p>Page :1</p>
                    </div>

                    <div className='pendingpayment9'>
                        <p>Records</p>
                        <div className='pendingpayment10'>
                            <p>20</p>
                            <IoIosArrowDown color='#3F3F3F' />
                        </div>
                    </div>
                </div>
                <div className='crm10'>
                    <div className='admission16'>
                        <p>START DIALING</p>
                    </div>
                    <div className='admission16'>
                        <select name="" id="">
                            <option value="">Select Action</option>
                            <option value="">Assign Responsible Person</option>
                            <option value="">Assign Service Manager</option>
                            <option value="" onClick={() => navigate('/paymentreceived')}>Assign Backend Person</option>
                        </select>
                    </div>
                    <div className='admission17'>
                        <input type="checkbox" />
                        <p>For All</p>
                    </div>
                </div>

                <div className='admission18'>
                    <button>Previous</button>
                    <button>Next</button>
                </div>
                {/* <div className='admission11'>
                </div> */}
            </div>
        </>
    )
}

export default HOC(CRM)