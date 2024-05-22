import React, { useState } from 'react'
import './Results.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate, Link } from 'react-router-dom';

import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";

import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    ResultFilterModal,
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
    AddNewFilter
} from '../Modals/Modals.jsx'

const Results = () => {
    const navigate = useNavigate();

    const tableData = [
        {
            id: 1,
            admissionNo: '12345678',
            studentName: 'Lorem Ipsum',
            Email: 'loren@epsomgmail.com',
            contact: '9999999999',
            university: "Lorem Ipsum University",
            BatchNumber: "01234566",
            examBatch: "Batch 1",
            status: "Status",
        },

        {
            id: 1,
            admissionNo: '12345678',
            studentName: 'Lorem Ipsum',
            Email: 'loren@epsomgmail.com',
            contact: '9999999999',
            university: "Lorem Ipsum University",
            BatchNumber: "01234566",
            examBatch: "Batch 1",
            status: "Status",
        },
        {
            id: 1,
            admissionNo: '12345678',
            studentName: 'Lorem Ipsum',
            Email: 'loren@epsomgmail.com',
            contact: '9999999999',
            university: "Lorem Ipsum University",
            BatchNumber: "01234566",
            examBatch: "Batch 1",
            status: "Status",
        },
        {
            id: 1,
            admissionNo: '12345678',
            studentName: 'Lorem Ipsum',
            Email: 'loren@epsomgmail.com',
            contact: '9999999999',
            university: "Lorem Ipsum University",
            BatchNumber: "01234566",
            examBatch: "Batch 1",
            status: "Status",
        },
        {
            id: 1,
            admissionNo: '12345678',
            studentName: 'Lorem Ipsum',
            Email: 'loren@epsomgmail.com',
            contact: '9999999999',
            university: "Lorem Ipsum University",
            BatchNumber: "01234566",
            examBatch: "Batch 1",
            status: "Status",
        },
        {
            id: 1,
            admissionNo: '12345678',
            studentName: 'Lorem Ipsum',
            Email: 'loren@epsomgmail.com',
            contact: '9999999999',
            university: "Lorem Ipsum University",
            BatchNumber: "01234566",
            examBatch: "Batch 1",
            status: "Status",
        },

    ];



    // ResultStatus Modal 


    const [modalShow, setModalShow] = React.useState(false);

    // Filter Modal 

    const [modalShow11, setModalShow11] = React.useState(false);

    // mydeals Modal
    const [modalShow1, setModalShow1] = React.useState(false);

    // add field Modal
    const [modalShow2, setModalShow2] = React.useState(false);

    // History Modal
    const [modalShow3, setModalShow3] = React.useState(false);


    // History Modal

    const [modalShow4, setModalShow4] = React.useState(false);


    // FilterModalhistory Modal

    const [modalShow5, setModalShow5] = React.useState(false);


    // AddNewEvent Modal

    const [modalShow6, setModalShow6] = React.useState(false);

    // AddNewFilter Modal

    const [modalShow7, setModalShow7] = React.useState(false);

    function ResultStatus(props) {
        const [selected, setSelected] = useState('');
        const [number, setNumber] = useState(1); // Initial value is 1
        const handleIncrement = () => {
            setNumber((prevNumber) => prevNumber + 1);
        };
        const handleDecrement = () => {
            setNumber((prevNumber) => {
                // Prevent the number from going below zero
                return prevNumber > 0 ? prevNumber - 1 : prevNumber;
            });
        };

        return (
            <Modal
                {...props}
                size="sl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className='ResultStatusModal'>
                        <div className='ResultStatusModal1'>
                            <p>Status</p>
                            <IoIosCloseCircleOutline color='#000000' size={25} onClick={() => setModalShow(false)} />
                        </div>

                        <div className='ResultStatusModal2'>
                            <h6>Change Status</h6>

                            <div className='ResultStatusModal3'>
                                <div className={`ResultStatusModal4 ${selected === 'pass' ? 'selected' : ''}`}>
                                    <input
                                        type="radio"
                                        name="status"
                                        value="pass"
                                        onChange={() => setSelected('pass')}
                                    />
                                    <div className={`ResultStatusModal5 ${selected === 'pass' ? 'selected' : ''}`}>
                                        <IoMdCheckmarkCircle color='#40AF0C' size={20} />
                                        <p style={{ color: selected === 'pass' ? '#40AF0C' : '#9F9F9F' }}>Pass</p>
                                    </div>
                                </div>
                                <div className={`ResultStatusModal4 ${selected === 'fail' ? 'selected11' : ''}`}>
                                    <input
                                        type="radio"
                                        name="status"
                                        value="fail"
                                        onChange={() => setSelected('fail')}
                                    />
                                    <div className={`ResultStatusModal5 ${selected === 'fail' ? 'selected' : ''}`}>
                                        <RiErrorWarningFill color='#FF0000' size={20} />
                                        <p style={{ color: selected === 'fail' ? '#FF0000' : '#9F9F9F' }}>Fail</p>
                                    </div>
                                </div>
                            </div>

                            {selected === 'fail' ? (
                                <div className='ResultStatusModal6'>
                                    <h6>No. of Back Papers</h6>

                                    <div className='ResultStatusModal7'>
                                        <AiFillMinusCircle color='#2155CD' size={25} onClick={handleDecrement} />
                                        <p>{number}</p>
                                        <BsFillPlusCircleFill color='#2155CD' size={25} onClick={handleIncrement} />
                                    </div>
                                </div>
                            ) : (
                                ''
                            )}


                            <div className='ResultStatusModal8'>
                                <button onClick={() => setModalShow(false)}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }

    return (
        <>
            <ResultStatus
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <ResultFilterModal
                show={modalShow11}
                onHide={() => setModalShow11(false)}
                setModalShow1={setModalShow1}
                setModalShow2={setModalShow2}
                setModalShow7={setModalShow7}
            />
            <MYDEALSModal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
                setModalShow={setModalShow11}
                setModalShow2={setModalShow2}
            />
            <AddFieldModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <AddNewFilter
                show={modalShow7}
                onHide={() => setModalShow7(false)}
            />
            <History
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />
            <History1
                show={modalShow4}
                onHide={() => setModalShow4(false)}
                setModalShow5={setModalShow5}
                setModalShow6={setModalShow6}
            />
            <FilterModalhistory
                show={modalShow5}
                onHide={() => setModalShow5(false)}
            />
            <AddNewEvent
                show={modalShow6}
                onHide={() => setModalShow6(false)}
            />
            <div className='pdc'>
                <div className='admission1'>
                    <p>Results</p>
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
                <div className='admission8' onClick={() => setModalShow11(true)}>
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

                <div className='attendanc'>
                    <button>Import</button>
                    <button>Export</button>
                </div>
                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th>Admission No.</th>
                                    <th>Student Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>University</th>
                                    <th>Batch Number</th>
                                    <th>Exam Batch</th>
                                    <th>Status</th>
                                    <th>History</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td>{data.admissionNo}</td>
                                        <td>{data.studentName}</td>
                                        <td>{data.Email}</td>
                                        <td>{data.contact}</td>
                                        <td>{data.university}</td>
                                        <td>{data.BatchNumber}</td>
                                        <td>{data.examBatch}</td>
                                        <td onClick={() => setModalShow(true)}>
                                            <div className='result'>
                                                <p>Pass</p>
                                                <FiEdit color='#FFFFFF' size={20} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className='admission14'>
                                                <button onClick={() => setModalShow4(true)}>History</button>
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

export default HOC(Results)