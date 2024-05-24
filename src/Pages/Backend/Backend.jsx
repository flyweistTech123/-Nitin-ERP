import React, { useState } from 'react'
import HOC from '../../Components/HOC/HOC'
import {
    CallRecoding,
    Remarks,
    AdmissionStatus,
    FilterModal,
    MYDEALSModal,
    AddFieldModal,
    AdmissionFollowUp,
    NewTask,
    History,
    NeWLead,
    SMS,
    Email,
    Whatsapp,
    History1,
    FilterModalhistory,
    AddNewEvent,
    PropertiesModal,
    NewViewModal,
    Counsellorform
} from '../Modals/Modals'

import { useNavigate, Link } from 'react-router-dom';



import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { MdEdit } from "react-icons/md";


import img from '../../Img/img33.png'

import './Backend.css'
const Backend = () => {
    const navigate = useNavigate()
    const tableData = [
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },

        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },

    ];

    // call Recoding Modal 
    const [modalShow, setModalShow] = React.useState(false);

    // Remarks Modal 
    const [modalShow1, setModalShow1] = React.useState(false);


    // AdmissionStatus Modal 
    const [modalShow2, setModalShow2] = React.useState(false);



    // Filter Modal 

    const [modalShow3, setModalShow3] = React.useState(false);

    // mydeals Modal
    const [modalShow4, setModalShow4] = React.useState(false);

    // add field Modal
    const [modalShow5, setModalShow5] = React.useState(false);
    // Admission Follow Up Modal

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // New Lead Modal

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    // History Modal


    const [modalShow6, setModalShow6] = React.useState(false);


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


    // History Modal

    const [modalShow7, setModalShow7] = React.useState(false);


    // FilterModalhistory Modal

    const [modalShow8, setModalShow8] = React.useState(false);


    // AddNewEvent Modal

    const [modalShow9, setModalShow9] = React.useState(false);


    // property modal
    const [modalShow10, setModalShow10] = React.useState(false);

    // NewView Modal
    const [modalShow11, setModalShow11] = React.useState(false);

    // counsler Modal
    const [modalShow12, setModalShow12] = React.useState(false);

    return (
        <>
            <CallRecoding
                show={modalShow}
                onHide={() => setModalShow(false)}
                setModalShow1={setModalShow1}
            />
            <Remarks
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <AdmissionStatus
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <FilterModal
                show={modalShow3}
                onHide={() => setModalShow3(false)}
                setModalShow1={setModalShow4}
                setModalShow2={setModalShow5}
            />
            <MYDEALSModal
                show={modalShow4}
                onHide={() => setModalShow4(false)}
                setModalShow={setModalShow}
                setModalShow2={setModalShow5}
            />
            <AddFieldModal
                show={modalShow5}
                onHide={() => setModalShow5(false)}
            />
            <AdmissionFollowUp
                show={show}
                onHide={handleClose}
                setModalShow3={setModalShow6}
                handleShow1={handleShow1}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
                setModalShow8={setModalShow10}
                setModalShow9={setModalShow11}
                setModalShow10={setModalShow12}
                title={"Backend"}
            />
            <NeWLead
                show={show1}
                onHide={handleClose1}
                setModalShow3={setModalShow6}
                handleShow={handleShow}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
                setModalShow8={setModalShow12}
            />
            <History
                show={modalShow6}
                onHide={() => setModalShow6(false)}
            />
            <NewTask
                show={show2}
                onHide={handleClose2}
            />
            <SMS
                show={show3}
                onHide={handleClose3}
                setModalShow3={setModalShow6}
                setModalShow8={setModalShow12}
                handleShow={handleShow}
                handleShow2={handleShow2}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
            />
            <Email
                show={show4}
                onHide={handleClose4}
            />
            <Whatsapp
                show={show5}
                onHide={handleClose5}
            />
            <History1
                show={modalShow7}
                onHide={() => setModalShow7(false)}
                setModalShow5={setModalShow8}
                setModalShow6={setModalShow9}
            />
            <FilterModalhistory
                show={modalShow8}
                onHide={() => setModalShow8(false)}
            />
            <AddNewEvent
                show={modalShow9}
                onHide={() => setModalShow9(false)}
            />
            <PropertiesModal
                show={modalShow10}
                onHide={() => setModalShow10(false)}
            />
            <NewViewModal
                show={modalShow11}
                onHide={() => setModalShow11(false)}
            />
            <Counsellorform
                show={modalShow12}
                onHide={() => setModalShow12(false)}
            />
            <div className='backend'>
                <div className='admission1'>
                    <p>Backend</p>
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
                <div className='admission8' onClick={() => setModalShow3(true)}>
                    <div>
                        <p>Filter</p>
                    </div>
                    <div className='admission9'>
                        <div className='admission10'>
                            <p>My filter</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>
                </div>

                <div className='service3'>
                </div>

                <div className='backend1'>
                    <p>Pending Admission</p>
                </div>


                <div className='backend2'>
                    <div className='backend3'>
                        <button onClick={() => setModalShow(true)}>Call Recoding</button>
                        <button>Call Summary</button>
                    </div>
                    <div className='backend4'>
                        <button>Import</button>
                        <button>Export</button>
                    </div>
                </div>



                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th><IoSettings size={20} onClick={() => setModalShow5(true)} /></th>
                                    <th>Student Name</th>
                                    <th>Contact_no</th>
                                    <th>Email_ID</th>
                                    <th>Address</th>
                                    <th>Course</th>
                                    <th>Total Fees</th>
                                    <th>Call Recording</th>
                                    <th>Status</th>
                                    <th>Reverification</th>
                                    <th>Free Date fpr Verification</th>
                                    <th>History</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td onClick={handleShow}><img src={img} alt="" /></td>
                                        <td>
                                            <p className='admission202'><button onClick={() => navigate('/admission_details')}><MdEdit size={20} /> Edit</button></p>
                                            {data.name}
                                        </td>
                                        <td>{data.contact}</td>
                                        <td>{data.email}</td>
                                        <div className='admission19'>
                                            <p>{data.address}</p>
                                        </div>
                                        <td>{data.course}</td>
                                        <td>{data.feesPaid}</td>
                                        <td style={{ color: "#2155CD", textDecoration: "underline" }}>{data.callrecording}</td>
                                        <td>
                                            <div className='admission14'>
                                                <button>{data.status}</button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='backend5' onClick={() => setModalShow2(true)}>
                                                <button>N/A</button>
                                            </div>
                                        </td>
                                        <td>{data.verificationdate}</td>
                                        <td>
                                            <div className='admission14'>
                                                <button onClick={() => setModalShow7(true)}>History</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>



                <div className='admission15'>
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
            </div>
        </>
    )
}

export default HOC(Backend)