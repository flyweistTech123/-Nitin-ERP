import React, { useState } from 'react'
import './PaymentReceived.css'
import HOC from '../../Components/HOC/HOC'
import {
    Remarkspayment, PaymentStatus,
    FilterModal,
    MYDEALSModal,
    AddFieldModal,
    AdmissionFollowUp,
    NewTask,
    History,
    NeWLead,
    SMS,
    Email,
    Whatsapp
} from '../Modals/Modals'

import { useNavigate, Link } from 'react-router-dom';

import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosMore } from "react-icons/io";

import img from '../../Img/img33.png'

const PaymentReceived = () => {
    const navigate = useNavigate();
    const tableData = [
        {
            id: 1,
            name: 'Loren Epsom',
            admissionNo: '123445',
            email: 'loren@epsomgmail.com',
            contact: '8665456321',
            admissionDate: 'DD/MM/YYYY',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            creditedbank: 'SBI',
            University: 'Loren Epsom',
            responsiblePerson: 'Loren Epsom',
            PpaymentDate: 'DD/MM/YYYY',
            amountPaid: '₹ 4563',
            paymenttype: 'Easebuzz Online',
            paymentID: 'IMTS - 123',
            paymentApprovedDate: 'DD/MM/YYYY',
            Remarks: 'Lorem Ipsum werewefew',
            status: 'Pending'
        },

        {
            id: 1,
            name: 'Loren Epsom',
            admissionNo: '123445',
            email: 'loren@epsomgmail.com',
            contact: '8665456321',
            admissionDate: 'DD/MM/YYYY',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            creditedbank: 'SBI',
            University: 'Loren Epsom',
            responsiblePerson: 'Loren Epsom',
            PpaymentDate: 'DD/MM/YYYY',
            amountPaid: '₹ 4563',
            paymenttype: 'Easebuzz Online',
            paymentID: 'IMTS - 123',
            paymentApprovedDate: 'DD/MM/YYYY',
            Remarks: 'Lorem Ipsum werewefew',
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            admissionNo: '123445',
            email: 'loren@epsomgmail.com',
            contact: '8665456321',
            admissionDate: 'DD/MM/YYYY',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            creditedbank: 'SBI',
            University: 'Loren Epsom',
            responsiblePerson: 'Loren Epsom',
            PpaymentDate: 'DD/MM/YYYY',
            amountPaid: '₹ 4563',
            paymenttype: 'Easebuzz Online',
            paymentID: 'IMTS - 123',
            paymentApprovedDate: 'DD/MM/YYYY',
            Remarks: 'Lorem Ipsum werewefew',
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            admissionNo: '123445',
            email: 'loren@epsomgmail.com',
            contact: '8665456321',
            admissionDate: 'DD/MM/YYYY',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            creditedbank: 'SBI',
            University: 'Loren Epsom',
            responsiblePerson: 'Loren Epsom',
            PpaymentDate: 'DD/MM/YYYY',
            amountPaid: '₹ 4563',
            paymenttype: 'Easebuzz Online',
            paymentID: 'IMTS - 123',
            paymentApprovedDate: 'DD/MM/YYYY',
            Remarks: 'Lorem Ipsum werewefew',
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            admissionNo: '123445',
            email: 'loren@epsomgmail.com',
            contact: '8665456321',
            admissionDate: 'DD/MM/YYYY',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            creditedbank: 'SBI',
            University: 'Loren Epsom',
            responsiblePerson: 'Loren Epsom',
            PpaymentDate: 'DD/MM/YYYY',
            amountPaid: '₹ 4563',
            paymenttype: 'Easebuzz Online',
            paymentID: 'IMTS - 123',
            paymentApprovedDate: 'DD/MM/YYYY',
            Remarks: 'Lorem Ipsum werewefew',
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            admissionNo: '123445',
            email: 'loren@epsomgmail.com',
            contact: '8665456321',
            admissionDate: 'DD/MM/YYYY',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            creditedbank: 'SBI',
            University: 'Loren Epsom',
            responsiblePerson: 'Loren Epsom',
            PpaymentDate: 'DD/MM/YYYY',
            amountPaid: '₹ 4563',
            paymenttype: 'Easebuzz Online',
            paymentID: 'IMTS - 123',
            paymentApprovedDate: 'DD/MM/YYYY',
            Remarks: 'Lorem Ipsum werewefew',
            status: 'Pending'
        },

    ];

    // Remarks Modal 
    const [modalShow, setModalShow] = React.useState(false);

    // paymentStatus Modal 
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

    return (
        <>
            <Remarkspayment
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <PaymentStatus
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <FilterModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
                setModalShow1={setModalShow3}
                setModalShow2={setModalShow4}
            />
            <MYDEALSModal
                show={modalShow2}
                onHide={() => setModalShow1(false)}
                setModalShow={setModalShow2}
                setModalShow2={setModalShow4}
            />
            <AddFieldModal
                show={modalShow4}
                onHide={() => setModalShow4(false)}
            />
            <AdmissionFollowUp
                show={show}
                onHide={handleClose}
                setModalShow3={setModalShow3}
                handleShow1={handleShow1}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
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
            <NewTask
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
            <div className='payreceived'>
                <div className='admission1'>
                    <p>Payment</p>
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

                <div className='admission8' onClick={() => setModalShow2(true)}>
                    <div>
                        <p>Filter</p>
                    </div>
                    <div className='admission9'>
                        <div className='admission10'>
                            <p>My filter</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>

                    <div className='payreceived1'>
                        <button>Export File</button>
                        <IoIosMore color='#444444' size={20} />
                    </div>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox"  /></th>
                                    <th><IoSettings size={20} onClick={() => setModalShow4(true)}/></th>
                                    <th>Student Name</th>
                                    <th>Admission No.</th>
                                    <th>Email_ID</th>
                                    <th>Contact_no</th>
                                    <th>Whatsapp No.</th>
                                    <th>Admission Date</th>
                                    <th>Course</th>
                                    <th>Credited Bank A/C</th>
                                    <th>University</th>
                                    <th>Responsible Person</th>
                                    <th>Payment Date</th>
                                    <th>Amount Paid</th>
                                    <th>Payment type</th>
                                    <th>Payment ID</th>
                                    <th>Payment Approved Date</th>
                                    <th>Remarks</th>
                                    <th>Status</th>
                                    <th>History</th>
                                </tr>


                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td><img src={img} alt="" onClick={handleShow} /></td>
                                        <td>{data.name}</td>
                                        <td>{data.admissionNo}</td>
                                        <td>{data.email}</td>
                                        <td>{data.contact}</td>
                                        <td>{data.contact}</td>
                                        <td>{data.admissionDate}</td>
                                        <td>{data.course}</td>
                                        <td>{data.creditedbank}</td>
                                        <td>{data.University}</td>
                                        <td>{data.responsiblePerson}</td>
                                        <td>{data.PpaymentDate}</td>
                                        <td>{data.amountPaid}</td>
                                        <td>{data.paymenttype}</td>
                                        <td>{data.paymentID}</td>
                                        <td>{data.paymentApprovedDate}</td>
                                        <td style={{ color: '#2155CD', textDecoration: "underline" }} onClick={() => setModalShow(true)}>{data.Remarks}</td>
                                        <td>
                                            <div className='admission14' onClick={() => setModalShow1(true)}>
                                                <button>{data.status}</button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='admission14'>
                                                <button onClick={() => setModalShow3(true)}>History</button>
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

export default HOC(PaymentReceived)