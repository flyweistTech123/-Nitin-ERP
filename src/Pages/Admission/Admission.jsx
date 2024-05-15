import React, { useEffect, useState } from 'react';
import './Admission.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate, Link } from 'react-router-dom';


import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdEdit } from "react-icons/md";


import img8 from '../../Img/img33.png'



// Modals 


import {
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
} from '../Modals/Modals.jsx'



const Admission = () => {
    const navigate = useNavigate();
    const tableData = [
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            admissionDate: 'DD/MM/YYYY',
            feesPaid: 'RS.100,000',
            paidDate: 'DD/MM/YYYY',
            history: 'History'
        },

        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            admissionDate: 'DD/MM/YYYY',
            feesPaid: 'RS.100,000',
            paidDate: 'DD/MM/YYYY',
            history: 'History'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            admissionDate: 'DD/MM/YYYY',
            feesPaid: 'RS.100,000',
            paidDate: 'DD/MM/YYYY',
            history: 'History'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            admissionDate: 'DD/MM/YYYY',
            feesPaid: 'RS.100,000',
            paidDate: 'DD/MM/YYYY',
            history: 'History'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            admissionDate: 'DD/MM/YYYY',
            feesPaid: 'RS.100,000',
            paidDate: 'DD/MM/YYYY',
            history: 'History'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            admissionDate: 'DD/MM/YYYY',
            feesPaid: 'RS.100,000',
            paidDate: 'DD/MM/YYYY',
            history: 'History'
        },

    ];





    // Filter Modal 

    const [modalShow, setModalShow] = React.useState(false);

    // mydeals Modal
    const [modalShow1, setModalShow1] = React.useState(false);

    // add field Modal
    const [modalShow2, setModalShow2] = React.useState(false);




    // Admission Follow Up Modal

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // New Lead Modal

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // History Modal


    const [modalShow3, setModalShow3] = React.useState(false);






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
            <FilterModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                setModalShow1={setModalShow1}
                setModalShow2={setModalShow2}
            />
            <MYDEALSModal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
                setModalShow={setModalShow}
                setModalShow2={setModalShow2}
            />
            <AddFieldModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
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
                setModalShow3={setModalShow3}
                handleShow={handleShow}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
            />
            <History
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />
            <NewTask
                show={show2}
                onHide={handleClose2}
            />
            <SMS
                show={show3}
                onHide={handleClose3}
                setModalShow3={setModalShow3}
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
                <div className='admission1'>
                    <p>Admission</p>
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

                <div className='admission8' onClick={() => setModalShow(true)}>
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

                <div className='admission11'>
                </div>

                <div className='admission12'>
                    <button>Add</button>
                    <button>Delete</button>
                    <button>Export</button>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th><IoSettings size={20}  onClick={() => setModalShow2(true)}/></th>
                                    <th>Student Name</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Course</th>
                                    <th>Admission Date</th>
                                    <th>Fees Paid</th>
                                    <th>Paid Date</th>
                                    <th>History</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <div className='admission202'>
                                            <button onClick={()=>navigate('/admission_details')}><MdEdit size={20}/> Edit</button>
                                        </div>
                                        <td><input type="checkbox" /></td>
                                        <td onClick={handleShow}><img src={img8} alt="" /></td>
                                        <td>{data.name}</td>
                                        <td>{data.contact}</td>
                                        <td>{data.email}</td>
                                        <div className='admission19'>
                                            <p>{data.address}</p>
                                        </div>
                                        <td>{data.course}</td>
                                        <td>{data.admissionDate}</td>
                                        <td>{data.feesPaid}</td>
                                        <td>{data.paidDate}</td>
                                        <td>
                                            <div className='admission14'>
                                                <button onClick={() => setModalShow3(true)}>{data.history}</button>
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
                        <p>SELECT ACTION</p>
                        <IoIosArrowDown color='#3F3F3F' />
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

export default HOC(Admission)