import React from 'react'
import './PaymentReceived.css'
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosMore } from "react-icons/io";

import img from '../../Img/img33.png'

const PaymentReceived = () => {
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
    return (
        <>
            <div className='payreceived'>
                <div className='admission1'>
                    <p>Payment</p>
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
                                    <th><input type="checkbox" /></th>
                                    <th><IoSettings size={20} /></th>
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
                                        <td><img src={img} alt="" /></td>
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
                                        <td style={{ color: '#2155CD', textDecoration: "underline" }}>{data.Remarks}</td>
                                        <td>
                                            <div className='admission14'>
                                                <button>{data.status}</button>
                                            </div>
                                        </td>
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

export default HOC(PaymentReceived)