import React, { useState } from 'react'
import './PDCSection.css'
import HOC from '../../Components/HOC/HOC'
import { MdEdit } from "react-icons/md";
import {
    FeeStructure,
    EducationDetails,
    DocumentDetails,
    CallRecordinglist,
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
    CallRecoding,
    Remarks,
    History1,
    FilterModalhistory,
    AddNewEvent,
    PDCAddFieldModal,
    AddNewFilter,
    PropertiesModal,
    NewViewModal,
    Counsellorform
} from '../Modals/Modals'
import { useNavigate, Link } from 'react-router-dom';




import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import img from '../../Img/img33.png'



const PDCSection = () => {
    const navigate = useNavigate();
    const tableData = [
        {
            id: 1,
            university: 'Aligarh University',
            course: 'Engineering',
            feeStructureMode: 'Loren',
            followUpData: 'Loren',
            responsiblePerson: "Loren Epsom",
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            serviceManager: "Loren Epsom",
            skipBatch: "3",
            admissionDate: "DD/MM/YYYY",
            assignedDate: "DD/MM/YYYY",
            followUpCreated: "DD/MM/YYYY",
            status: "Status",
            followUpstatusFilter: "Filter",
            priority: "High",
            absentRecords: "10",
            presentRecords: "10",
            lastBatch: "10",
            totalAmount: "₹ 50,000",
            receivedAmount: "₹ 50,000",
            balance: "₹ 50,000",
            nextFollowDate: "DD/MM/YYYY",
            historyLogs: "DD/MM/YYYY",
            changedDate: "DD/MM/YYYY",
            addedOn: "DD/MM/YYYY",
            changedBy: "Loren Epsom",
            callrecordingoption: "Call.mp3",
        },

        {
            id: 1,
            university: 'Aligarh University',
            course: 'Engineering',
            feeStructureMode: 'Loren',
            followUpData: 'Loren',
            responsiblePerson: "Loren Epsom",
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            serviceManager: "Loren Epsom",
            skipBatch: "3",
            admissionDate: "DD/MM/YYYY",
            assignedDate: "DD/MM/YYYY",
            followUpCreated: "DD/MM/YYYY",
            status: "Status",
            followUpstatusFilter: "Filter",
            priority: "High",
            absentRecords: "10",
            presentRecords: "10",
            lastBatch: "10",
            totalAmount: "₹ 50,000",
            receivedAmount: "₹ 50,000",
            balance: "₹ 50,000",
            nextFollowDate: "DD/MM/YYYY",
            historyLogs: "DD/MM/YYYY",
            changedDate: "DD/MM/YYYY",
            addedOn: "DD/MM/YYYY",
            changedBy: "Loren Epsom",
            callrecordingoption: "Call.mp3",
        },
        {
            id: 1,
            university: 'Aligarh University',
            course: 'Engineering',
            feeStructureMode: 'Loren',
            followUpData: 'Loren',
            responsiblePerson: "Loren Epsom",
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            serviceManager: "Loren Epsom",
            skipBatch: "3",
            admissionDate: "DD/MM/YYYY",
            assignedDate: "DD/MM/YYYY",
            followUpCreated: "DD/MM/YYYY",
            status: "Status",
            followUpstatusFilter: "Filter",
            priority: "High",
            absentRecords: "10",
            presentRecords: "10",
            lastBatch: "10",
            totalAmount: "₹ 50,000",
            receivedAmount: "₹ 50,000",
            balance: "₹ 50,000",
            nextFollowDate: "DD/MM/YYYY",
            historyLogs: "DD/MM/YYYY",
            changedDate: "DD/MM/YYYY",
            addedOn: "DD/MM/YYYY",
            changedBy: "Loren Epsom",
            callrecordingoption: "Call.mp3",
        },
        {
            id: 1,
            university: 'Aligarh University',
            course: 'Engineering',
            feeStructureMode: 'Loren',
            followUpData: 'Loren',
            responsiblePerson: "Loren Epsom",
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            serviceManager: "Loren Epsom",
            skipBatch: "3",
            admissionDate: "DD/MM/YYYY",
            assignedDate: "DD/MM/YYYY",
            followUpCreated: "DD/MM/YYYY",
            status: "Status",
            followUpstatusFilter: "Filter",
            priority: "High",
            absentRecords: "10",
            presentRecords: "10",
            lastBatch: "10",
            totalAmount: "₹ 50,000",
            receivedAmount: "₹ 50,000",
            balance: "₹ 50,000",
            nextFollowDate: "DD/MM/YYYY",
            historyLogs: "DD/MM/YYYY",
            changedDate: "DD/MM/YYYY",
            addedOn: "DD/MM/YYYY",
            changedBy: "Loren Epsom",
            callrecordingoption: "Call.mp3",
        },
        {
            id: 1,
            university: 'Aligarh University',
            course: 'Engineering',
            feeStructureMode: 'Loren',
            followUpData: 'Loren',
            responsiblePerson: "Loren Epsom",
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            serviceManager: "Loren Epsom",
            skipBatch: "3",
            admissionDate: "DD/MM/YYYY",
            assignedDate: "DD/MM/YYYY",
            followUpCreated: "DD/MM/YYYY",
            status: "Status",
            followUpstatusFilter: "Filter",
            priority: "High",
            absentRecords: "10",
            presentRecords: "10",
            lastBatch: "10",
            totalAmount: "₹ 50,000",
            receivedAmount: "₹ 50,000",
            balance: "₹ 50,000",
            nextFollowDate: "DD/MM/YYYY",
            historyLogs: "DD/MM/YYYY",
            changedDate: "DD/MM/YYYY",
            addedOn: "DD/MM/YYYY",
            changedBy: "Loren Epsom",
            callrecordingoption: "Call.mp3",
        },
        {
            id: 1,
            university: 'Aligarh University',
            course: 'Engineering',
            feeStructureMode: 'Loren',
            followUpData: 'Loren',
            responsiblePerson: "Loren Epsom",
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            serviceManager: "Loren Epsom",
            skipBatch: "3",
            admissionDate: "DD/MM/YYYY",
            assignedDate: "DD/MM/YYYY",
            followUpCreated: "DD/MM/YYYY",
            status: "Status",
            followUpstatusFilter: "Filter",
            priority: "High",
            absentRecords: "10",
            presentRecords: "10",
            lastBatch: "10",
            totalAmount: "₹ 50,000",
            receivedAmount: "₹ 50,000",
            balance: "₹ 50,000",
            nextFollowDate: "DD/MM/YYYY",
            historyLogs: "DD/MM/YYYY",
            changedDate: "DD/MM/YYYY",
            addedOn: "DD/MM/YYYY",
            changedBy: "Loren Epsom",
            callrecordingoption: "Call.mp3",
        },

    ];

    // FeeStructure Modal 
    const [modalShow, setModalShow] = React.useState(false);



    // EducationDetails Modal 
    const [modalShow1, setModalShow1] = React.useState(false);



    // Document Details Modal 
    const [modalShow2, setModalShow2] = React.useState(false);



    // Call Recording list Modal 
    const [modalShow3, setModalShow3] = React.useState(false);



    // Filter Modal 

    const [modalShow4, setModalShow4] = React.useState(false);

    // mydeals Modal
    const [modalShow5, setModalShow5] = React.useState(false);

    // add field Modal
    const [modalShow6, setModalShow6] = React.useState(false);

    // Admission Follow Up Modal

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // New Lead Modal

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // History Modal


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

    // call Recoding Modal 
    const [modalShow8, setModalShow8] = React.useState(false);

    const [modalShow9, setModalShow9] = React.useState(false);



    // History Modal

    const [modalShow10, setModalShow10] = React.useState(false);


    // FilterModalhistory Modal

    const [modalShow11, setModalShow11] = React.useState(false);


    // AddNewEvent Modal

    const [modalShow12, setModalShow12] = React.useState(false);


    // PDCAddfield Modal

    const [modalShow13, setModalShow13] = React.useState(false);


    // AddNewFilter Modal

    const [modalShow14, setModalShow14] = React.useState(false);

    // property modal
    const [modalShow15, setModalShow15] = React.useState(false);

    // NewView Modal
    const [modalShow16, setModalShow16] = React.useState(false);

    // counsler Modal
    const [modalShow17, setModalShow17] = React.useState(false);

    return (
        <>
            <FeeStructure
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <EducationDetails
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <DocumentDetails
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <CallRecordinglist
                show={modalShow3}
                onHide={() => setModalShow3(false)}
                setModalShow1={setModalShow9}
            />
            <FilterModal
                show={modalShow4}
                onHide={() => setModalShow4(false)}
                setModalShow1={setModalShow5}
                setModalShow2={setModalShow6}
                setModalShow7={setModalShow14}
            />
            <MYDEALSModal
                show={modalShow5}
                onHide={() => setModalShow5(false)}
                setModalShow={setModalShow4}
                setModalShow2={setModalShow6}
                setModalShow7={setModalShow14}
            />
            <AddFieldModal
                show={modalShow6}
                onHide={() => setModalShow6(false)}
            />
            <AddNewFilter
                show={modalShow14}
                onHide={() => setModalShow14(false)}
            />
            <AdmissionFollowUp
                show={show}
                onHide={handleClose}
                setModalShow3={setModalShow7}
                handleShow1={handleShow1}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
                setModalShow8={setModalShow15}
                setModalShow9={setModalShow16}
                setModalShow10={setModalShow17}
                title={"PDC"}
            />
            <NeWLead
                show={show1}
                onHide={handleClose1}
                setModalShow3={setModalShow7}
                handleShow={handleShow}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
                setModalShow8={setModalShow17}
            />
            <History
                show={modalShow7}
                onHide={() => setModalShow7(false)}
            />
            <NewTask
                show={show2}
                onHide={handleClose2}
            />
            <SMS
                show={show3}
                onHide={handleClose3}
                setModalShow3={setModalShow7}
                setModalShow8={setModalShow17}
                handleShow1={handleShow1}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
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
            <CallRecoding
                show={modalShow8}
                onHide={() => setModalShow8(false)}
                setModalShow1={setModalShow9}
            />
            <Remarks
                show={modalShow9}
                onHide={() => setModalShow9(false)}
            />
            <History1
                show={modalShow10}
                onHide={() => setModalShow10(false)}
                setModalShow5={setModalShow11}
                setModalShow6={setModalShow12}
            />
            <FilterModalhistory
                show={modalShow11}
                onHide={() => setModalShow11(false)}
            />
            <AddNewEvent
                show={modalShow12}
                onHide={() => setModalShow12(false)}
            />
            <PDCAddFieldModal
                show={modalShow13}
                onHide={() => setModalShow13(false)}
            />
            <PropertiesModal
                show={modalShow15}
                onHide={() => setModalShow15(false)}
            />
            <NewViewModal
                show={modalShow16}
                onHide={() => setModalShow16(false)}
            />
            <Counsellorform
                show={modalShow17}
                onHide={() => setModalShow17(false)}
                setModalShow8={setModalShow15}
            />
            <div className='pdc'>
                <div className='admission1'>
                    <p>PDC</p>
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
                <div className='admission8' onClick={() => setModalShow4(true)}>
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
                <div className='service5'>
                    <button onClick={() => setModalShow8(true)}>Call Recoding</button>
                    <button>Call Summary</button>
                </div>

                <div className='pdc1'>
                    <div>
                        <p>Search</p>
                    </div>
                    <div className='pdc5'>
                        <div className='pdc2'>
                            <input type="search" />
                            <div className='pdc3'>
                                <p>Search</p>
                            </div>
                        </div>
                        <div className='pdc4'>
                            <button>Export</button>
                        </div>
                    </div>

                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th><IoSettings size={20} onClick={() => setModalShow13(true)} /></th>
                                    <th>University</th>
                                    <th>Course</th>
                                    <th>Batchwise Fee</th>
                                    <th>Fee Structure Mode</th>
                                    <th>Education Details</th>
                                    <th>Document Details</th>
                                    <th>Follow Up Data</th>
                                    <th>Responsible Person</th>
                                    <th>Phone Number</th>
                                    <th>WhatsApp Number</th>
                                    <th>Email ID</th>
                                    <th>Service Manager</th>
                                    <th>Skip Batch</th>
                                    <th>Admission Date</th>
                                    <th>Assigned Date</th>
                                    <th>Follow Up Created</th>
                                    <th>Follow Up Status</th>
                                    <th>Follow Up status Filter</th>
                                    <th>Priority</th>
                                    <th>Absent Records</th>
                                    <th>Present Records</th>
                                    <th>Last Batch</th>
                                    <th>Total Amount</th>
                                    <th>Received Amount</th>
                                    <th>Balance</th>
                                    <th>Next Follow Date</th>
                                    <th>History Logs</th>
                                    <th>Changed Date</th>
                                    <th>Added On</th>
                                    <th>Changed By</th>
                                    <th>Call recording option</th>
                                    <th>History</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td><img src={img} alt="" onClick={handleShow} /></td>
                                        <td>{data.university}</td>
                                        <td>{data.course}</td>
                                        <td onClick={() => setModalShow(true)}><RiErrorWarningFill color='#2155CD' size={25} /></td>
                                        <td>
                                            {data.feeStructureMode}
                                        </td>
                                        <td onClick={() => setModalShow1(true)}><IoEye color='#2155CD' size={25} /></td>
                                        <td onClick={() => setModalShow2(true)}><IoEye color='#2155CD' size={25} /></td>
                                        <td>
                                            <p className='admission202'><button onClick={() => navigate('/admission_details')}><MdEdit size={20} /> Edit</button></p>
                                            {data.followUpData}
                                        </td>
                                        <td>{data.responsiblePerson}</td>
                                        <td>{data.contact}</td>
                                        <td>{data.contact}</td>
                                        <td>{data.email}</td>
                                        <td>{data.serviceManager}</td>
                                        <td>{data.skipBatch}</td>
                                        <td>{data.admissionDate}</td>
                                        <td>{data.assignedDate}</td>
                                        <td>{data.followUpCreated}</td>
                                        <td>{data.status}</td>
                                        <td>{data.followUpstatusFilter}</td>
                                        <td>{data.priority}</td>
                                        <td>{data.absentRecords}</td>
                                        <td>{data.presentRecords}</td>
                                        <td>{data.lastBatch}</td>
                                        <td>{data.totalAmount}</td>
                                        <td>{data.receivedAmount}</td>
                                        <td>{data.balance}</td>
                                        <td>{data.nextFollowDate}</td>
                                        <td>{data.historyLogs}</td>
                                        <td>{data.changedDate}</td>
                                        <td>{data.addedOn}</td>
                                        <td>{data.changedBy}</td>
                                        <td style={{ color: "#2155CD", textDecoration: 'underline' }} onClick={() => setModalShow3(true)}>{data.callrecordingoption}</td>
                                        <td>
                                            <div className='admission14'>
                                                <button onClick={() => setModalShow10(true)}>History</button>
                                            </div>
                                        </td>
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

                <div className='admission18'>
                    <button>Previous</button>
                    <button>Next</button>
                </div>

            </div>
        </>
    )
}

export default HOC(PDCSection)