import React, { useState } from 'react'
import './PDCSection.css'
import HOC from '../../Components/HOC/HOC'
import {
    FeeStructure,
    EducationDetails,
    DocumentDetails,
    CallRecordinglist
} from '../Modals/Modals'




import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import img from '../../Img/img33.png'



const PDCSection = () => {
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
            />
            <div className='pdc'>
                <div className='admission1'>
                    <p>PDC</p>
                    <div className='admission2'>
                        <div className='admission3'>
                            <p>What’s App</p>
                        </div>
                        <div className='admission4'>
                            <p>Email</p>
                        </div>
                        <div className='admission5'>
                            <p>Telegram</p>
                        </div>
                        <div className='admission6'>
                            <p>Zoom</p>
                        </div>
                        <div className='admission7'>
                            <p>Voice Call</p>
                        </div>
                    </div>
                </div>
                <div className='admission8'>
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
                    <button>Call Recoding</button>
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
                                    <th><IoSettings size={20} /></th>
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
                                        <td><img src={img} alt="" /></td>
                                        <td>{data.university}</td>
                                        <td>{data.course}</td>
                                        <td onClick={() => setModalShow(true)}><RiErrorWarningFill color='#2155CD' size={25} /></td>
                                        <td>{data.feeStructureMode}</td>
                                        <td onClick={() => setModalShow1(true)}><IoEye color='#2155CD' size={25} /></td>
                                        <td onClick={() => setModalShow2(true)}><IoEye color='#2155CD' size={25} /></td>
                                        <td>{data.followUpData}</td>
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
                                                <button>History</button>
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