import React from 'react'
import './ExamAttendanceStatus.css'
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate, Link } from 'react-router-dom';

import {
    ExamAttendenceFilterModal,
    MYDEALSModal,
    AddFieldModal,
    History,
    History1,
    FilterModalhistory,
    AddNewEvent,
    AddNewFilter,
} from '../Modals/Modals.jsx'



const ExamAttendanceStatus = () => {
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

    // Filter Modal 

    const [modalShow, setModalShow] = React.useState(false);

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
    return (
        <>
            <ExamAttendenceFilterModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                setModalShow1={setModalShow1}
                setModalShow2={setModalShow2}
                setModalShow7={setModalShow7}
            />
            <MYDEALSModal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
                setModalShow={setModalShow}
                setModalShow2={setModalShow2}
                setModalShow7={setModalShow7}
            />
            <AddFieldModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <History
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />
            <AddNewFilter
                show={modalShow7}
                onHide={() => setModalShow7(false)}
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
                    <p>Exam Attendance Status</p>
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
                <div className='admission8'>
                    <div>
                        <p>Filter</p>
                    </div>
                    <div className='admission9' onClick={() => setModalShow(true)}>
                        <div className='admission10' >
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
                                        <td>
                                            <div className='attendanc1'>
                                                <div className='attendanc2'>
                                                    <input type="radio" name='status' />
                                                    <label htmlFor="" style={{ color: "#40AF0C" }}>P</label>
                                                </div>
                                                <div className='attendanc2'>
                                                    <input type="radio" name='status' />
                                                    <label htmlFor="" style={{ color: "#FF0000" }}>A</label>
                                                </div>
                                                <div className='attendanc2'>
                                                    <input type="radio" name='status' />
                                                    <label htmlFor="" style={{ color: "#FFB800" }}>N/A</label>
                                                </div>
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

export default HOC(ExamAttendanceStatus)