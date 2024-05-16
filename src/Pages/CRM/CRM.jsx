import React, { useEffect, useState } from 'react';
import './CRM.css'
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Counsellorform, Paymentlink } from '../Modals/Modals'
import { useNavigate, Link } from 'react-router-dom';

import img from '../../Img/img33.png'


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
            <div className='admission'>
                <div className='crm'>
                    <p>Lorem</p>
                </div>

                <div className='admission8'>
                    <div>
                        <p>Leads</p>
                    </div>
                    <div className='admission9'>
                        <div className='admission10'>
                            <p>My leads</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>

                    <div className='crm1'>
                        <button>CREATE</button>
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
                                    <th><IoSettings size={20} /></th>
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
                                        <td>{data.name}</td>
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