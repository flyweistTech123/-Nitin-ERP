import React from 'react'
import './PaymentReceived.css'
import HOC from '../../Components/HOC/HOC'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosMore } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";

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

    // Remarks Modal 


    const [modalShow, setModalShow] = React.useState(false);



    function Remarks(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body >
                    <div className='paymentremarkmodal'>
                        <div className='paymentremarkmodal1'>
                            <h6>Remarks</h6>
                            <IoIosCloseCircleOutline color='#000000' size={25} onClick={() => setModalShow(false)} />
                        </div>

                        <div className='paymentremarkmodal2'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit, eros id scelerisque eleifend, lorem urna tincidunt sem, quis semper dolor risus non enim. Donec eget enim dolor. Sed sit amet augue tellus. Mauris placerat hendrerit efficitur. Phasellus ultricies condimentum volutpat. Nunc facilisis congue elit, ac maximus nisi pharetra eget. Suspendisse potenti. Vivamus nec finibus metus. Etiam in lorem et ligula congue porttitor eu nec lorem. Maecenas lobortis dui magna, ac ultricies augue gravida et. Nullam rhoncus tortor nec bibendum tincidunt.
                                Praesent suscipit maximus arcu. Praesent sit amet leo id quam volutpat interdum sit amet id elit. Maecenas cursus fermentum eros consequat eleifend. Duis at fermentum magna, eget mattis urna. Vivamus elit nisi, finibus in arcu vitae, laoreet tincidunt nibh. Donec gravida facilisis accumsan. Donec sit amet ligula nisl. Suspendisse quam sapien, interdum sed ipsum non, feugiat rutrum eros. Ut placerat finibus lacinia. Proin nibh lectus, dictum in hendrerit vitae, tincidunt sit amet nulla. Quisque eu sapien ante. Aliquam auctor sem a libero congue, vel rhoncus ante tempor.</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    // paymentStatus Modal 


    const [modalShow1, setModalShow1] = React.useState(false);



    function PaymentStatus(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body >
                    <div className='paymentremarkmodal'>
                        <div className='paymentstatusModal'>
                            <IoIosCloseCircleOutline color='#000000' size={25} onClick={() => setModalShow1(false)} />
                        </div>


                        <div className='paymentstatusModal1'>
                            <h6>Change Admission Status</h6>
                            <div className='paymentstatusModal2'>
                                <div className='paymentstatusModal3'>
                                    <input type="radio"  name='pending'/>
                                    <div className='paymentstatusModal4' style={{ backgroundColor: "#FFB800" }}>
                                        <p>Pending</p>
                                    </div>
                                </div>
                                <div className='paymentstatusModal3'>
                                    <input type="radio" name='pending'/>
                                    <div className='paymentstatusModal4' style={{ backgroundColor: "#40AF0C" }}>
                                        <p>Approved</p>
                                    </div>
                                </div>
                                <div className='paymentstatusModal3'>
                                    <input type="radio" name='pending'/>
                                    <div className='paymentstatusModal4' style={{ backgroundColor: "#FF0000" }}>
                                        <p>Rejected</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='paymentstatusModal5'>
                            <h6>Remarks</h6>

                            <textarea name="" id="" cols="30" rows="10" placeholder='Type Here.....'></textarea>
                        </div>

                        <div className='paymentstatusModal6'>
                            <button onClick={() => setModalShow1(false)}>SUBMIT</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    return (
        <>
            <Remarks
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <PaymentStatus
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
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
                                        <td style={{ color: '#2155CD', textDecoration: "underline" }} onClick={() => setModalShow(true)}>{data.Remarks}</td>
                                        <td>
                                            <div className='admission14' onClick={() => setModalShow1(true)}>
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