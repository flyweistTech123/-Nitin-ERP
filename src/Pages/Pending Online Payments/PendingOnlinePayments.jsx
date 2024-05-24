import React from 'react'
import './PendingOnlinePayments.css'
import HOC from '../../Components/HOC/HOC'

import {
    StudentDetails,
    ApproveOnlinePayment,
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
    AddNewFilter,
} from '../Modals/Modals'

import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";


const PendingOnlinePayments = () => {
    const tableData = [
        {
            id: 1,
            name: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            OrderID: 'Loren Epsom',
            amount: '12345678',
            paymentype: 'Online (Razerbuzz)',
            Status: 'Pending',
            Remarks: 'Rejected ( Database Failure)',
        },

        {
            id: 1,
            name: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            OrderID: 'Loren Epsom',
            amount: '12345678',
            paymentype: 'Online (Razerbuzz)',
            Status: 'Pending',
            Remarks: 'Rejected ( Database Failure)',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            OrderID: 'Loren Epsom',
            amount: '12345678',
            paymentype: 'Online (Razerbuzz)',
            Status: 'Pending',
            Remarks: 'Rejected ( Database Failure)',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            OrderID: 'Loren Epsom',
            amount: '12345678',
            paymentype: 'Online (Razerbuzz)',
            Status: 'Pending',
            Remarks: 'Rejected ( Database Failure)',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            OrderID: 'Loren Epsom',
            amount: '12345678',
            paymentype: 'Online (Razerbuzz)',
            Status: 'Pending',
            Remarks: 'Rejected ( Database Failure)',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            OrderID: 'Loren Epsom',
            amount: '12345678',
            paymentype: 'Online (Razerbuzz)',
            Status: 'Pending',
            Remarks: 'Rejected ( Database Failure)',
        },

    ];

    // StudentDetails Modal 
    const [modalShow, setModalShow] = React.useState(false);

    // Approve Online Payment Modal 
    const [modalShow1, setModalShow1] = React.useState(false);

    // Filter Modal 

    const [modalShow2, setModalShow2] = React.useState(false);

    // mydeals Modal
    const [modalShow3, setModalShow3] = React.useState(false);

    // add field Modal
    const [modalShow4, setModalShow4] = React.useState(false);




    // History Modal

    const [modalShow5, setModalShow5] = React.useState(false);


    // FilterModalhistory Modal

    const [modalShow6, setModalShow6] = React.useState(false);


    // AddNewEvent Modal

    const [modalShow7, setModalShow7] = React.useState(false);

    // AddNewFilter Modal
    const [modalShow8, setModalShow8] = React.useState(false);

    return (
        <>
            <StudentDetails
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <ApproveOnlinePayment
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <FilterModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
                setModalShow1={setModalShow3}
                setModalShow2={setModalShow4}
                setModalShow7={setModalShow8}
            />
            <MYDEALSModal
                show={modalShow3}
                onHide={() => setModalShow3(false)}
                setModalShow={setModalShow2}
                setModalShow2={setModalShow4}
                setModalShow7={setModalShow8}
            />
            <AddFieldModal
                show={modalShow4}
                onHide={() => setModalShow4(false)}
            />
            <AddNewFilter
                show={modalShow8}
                onHide={() => setModalShow8(false)}
            />
            <History1
                show={modalShow5}
                onHide={() => setModalShow5(false)}
                setModalShow5={setModalShow6}
                setModalShow6={setModalShow7}
            />
            <FilterModalhistory
                show={modalShow6}
                onHide={() => setModalShow6(false)}
            />
            <AddNewEvent
                show={modalShow7}
                onHide={() => setModalShow7(false)}
            />
            <div className='pendingpayment'>
                <div className='pendingpayment1'>
                    <p>Pending Online Payments</p>
                </div>

                <div className='admission8'>
                    <div>
                        <p>Filter</p>
                    </div>
                    <div className='admission9' onClick={() => setModalShow2(true)}>
                        <div className='admission10'>
                            <p>My filter</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>

                    <div className='pendingpayment2'>
                        <button>Export CSV</button>
                    </div>
                </div>
                <div className='pendingpayment11'>
                    <div className='admission13'>
                        <div className='table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>Order ID</th>
                                        <th>Amount</th>
                                        <th>Payment Type</th>
                                        <th>Status</th>
                                        <th>Remarks</th>
                                        <th>History</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((data) => (
                                        <tr key={data.id}>
                                            <td>
                                                <div className='pendingpayment3'>
                                                    <input type="checkbox" />
                                                    {data.name}
                                                    <div className='pendingpayment4' onClick={() => setModalShow(true)}>
                                                        <IoEye color='#FFFFFF' size={20} />
                                                    </div>

                                                    <div className='pendingpayment5' onClick={() => setModalShow1(true)}>
                                                        <FaCheck color='#FFFFFF' size={18} />
                                                        <p>Approve</p>
                                                    </div>
                                                </div>

                                            </td>
                                            <td>{data.Date}</td>
                                            <td>{data.OrderID}</td>
                                            <td>{data.amount}</td>
                                            <div className='admission20'>
                                                <p>{data.paymentype}</p>
                                            </div>
                                            <td>
                                                <div className='admission14'>
                                                    <button>{data.Status}</button>
                                                </div>
                                            </td>
                                            <div className='admission19'>
                                                <p>{data.Remarks}</p>
                                            </div>
                                            <td>
                                                <div className='admission14'>
                                                    <button onClick={() => setModalShow5(true)}>History</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
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

export default HOC(PendingOnlinePayments)