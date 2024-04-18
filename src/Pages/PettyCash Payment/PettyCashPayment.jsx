import React, { useEffect, useState } from 'react';
import './PettyCashPayment.css'
import HOC from '../../Components/HOC/HOC'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';



const PettyCashPayment = () => {
    const tableData = [
        {
            id: 1,
            RequestDate: 'DD/MM/YYYY',
            Time: '10:30 AM',
            Amount: 'INR 10,000',
            ApprovedBy: 'Loren Epsom',
            Title: 'Loren',
            Details: 'Details',
            RequestBy: 'Loren Epsom',
            RequestedApprovedBy: 'Loren Epsom',
            RequestApprovedOn: 'DD/MM/YYYY . 10:30 AM',
        },

        {
            id: 1,
            RequestDate: 'DD/MM/YYYY',
            Time: '10:30 AM',
            Amount: 'INR 10,000',
            ApprovedBy: 'Loren Epsom',
            Title: 'Loren',
            Details: 'Details',
            RequestBy: 'Loren Epsom',
            RequestedApprovedBy: 'Loren Epsom',
            RequestApprovedOn: 'DD/MM/YYYY . 10:30 AM',
        },
        {
            id: 1,
            RequestDate: 'DD/MM/YYYY',
            Time: '10:30 AM',
            Amount: 'INR 10,000',
            ApprovedBy: 'Loren Epsom',
            Title: 'Loren',
            Details: 'Details',
            RequestBy: 'Loren Epsom',
            RequestedApprovedBy: 'Loren Epsom',
            RequestApprovedOn: 'DD/MM/YYYY . 10:30 AM',
        },
        {
            id: 1,
            RequestDate: 'DD/MM/YYYY',
            Time: '10:30 AM',
            Amount: 'INR 10,000',
            ApprovedBy: 'Loren Epsom',
            Title: 'Loren',
            Details: 'Details',
            RequestBy: 'Loren Epsom',
            RequestedApprovedBy: 'Loren Epsom',
            RequestApprovedOn: 'DD/MM/YYYY . 10:30 AM',
        },
        {
            id: 1,
            RequestDate: 'DD/MM/YYYY',
            Time: '10:30 AM',
            Amount: 'INR 10,000',
            ApprovedBy: 'Loren Epsom',
            Title: 'Loren',
            Details: 'Details',
            RequestBy: 'Loren Epsom',
            RequestedApprovedBy: 'Loren Epsom',
            RequestApprovedOn: 'DD/MM/YYYY . 10:30 AM',
        },
        {
            id: 1,
            RequestDate: 'DD/MM/YYYY',
            Time: '10:30 AM',
            Amount: 'INR 10,000',
            ApprovedBy: 'Loren Epsom',
            Title: 'Loren',
            Details: 'Details',
            RequestBy: 'Loren Epsom',
            RequestedApprovedBy: 'Loren Epsom',
            RequestApprovedOn: 'DD/MM/YYYY . 10:30 AM',
        },

    ];


    const navigate = useNavigate()



    // New Payment Request  Modal 


    const [modalShow, setModalShow] = React.useState(false);



    function NewPaymentRequest(props) {


        return (
            <Modal
                {...props}
                size="sl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body >
                    <div className='newpaymentrequest1'>
                        <div className='newpaymentrequest2'>
                            <p>New Payment Request</p>
                            <IoCloseSharp size={20} color='#000000' onClick={() => setModalShow(false)} />
                        </div>

                        <div className='newpaymentrequest3'>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Title</label>
                                <input type="text" />
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Details</label>
                                <input type="text" />
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Amount</label>
                                <input type="text" />
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Reason</label>
                                <select name="" id="" onClick={() => setModalShow1(true)}>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Authority (Final Only)</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                        </div>

                        <div className='newpaymentrequest5'>
                            <button onClick={() => setModalShow(false)}>Submit</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }



    // Cash Request Reason  Modal 


    const [modalShow1, setModalShow1] = React.useState(false);



    function CashRequestReason(props) {


        return (
            <Modal
                {...props}
                size="sl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body >
                    <div className='newpaymentrequest1'>
                        <div className='newpaymentrequest6'>
                            <p>Cash Request Reason</p>
                        </div>

                        <div className='admission13'>
                            <div className='table-container'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th><input type="checkbox" /></th>
                                            <th>Reason</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>REASON Type</td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>REASON Type</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='admission2'>
                            <div className='cancel1' onClick={() => setModalShow2(true)} >
                                <p>Add</p>
                            </div>
                            <div className='cancel2'>
                                <p>Edit</p>
                            </div>
                            <div className='cancel3'>
                                <p>Delete</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    // Add record  Modal 


    const [modalShow2, setModalShow2] = React.useState(false);



    function Addrecord(props) {


        return (
            <Modal
                {...props}
                size="sl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body >
                    <div className='newpaymentrequest1'>
                        <div className='newpaymentrequest7'>
                            <IoCloseSharp size={20} color='#000000' onClick={() => setModalShow2(false)} />
                        </div>

                        <div className='newpaymentrequest3'>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Record</label>
                                <input type="text" placeholder='Add Here' />
                            </div>
                        </div>

                        <div className='newpaymentrequest5'>
                            <button onClick={() => setModalShow2(false)} style={{ backgroundColor: "#2155CD" }} >Add</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    return (
        <>
            <NewPaymentRequest
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <CashRequestReason
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <Addrecord
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>PettyCash Payment</p>
                    <div className='admission2'>
                        <div className='expense30'>
                            <p>Create a field</p>
                        </div>
                        <div className='cancel2'>
                            <p>Edit</p>
                        </div>
                        <div className='cancel3'>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>

                <div className='itreport2'>
                    <div className='itreport3'>
                        <p>Filter</p>
                    </div>
                    <div className='admission9'>
                        <div className='admission10'>
                            <p>My filter</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>
                    <div className='cancel1'>
                        <p>Export</p>
                    </div>
                </div>


                <div className='pettycashpayment'>
                    <button onClick={() => setModalShow(true)}>New Payment Request</button>
                    <button onClick={() => navigate('/expense')}>Expense</button>
                </div>
                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th>Request Date</th>
                                    <th>Time</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                    <th>Approved By</th>
                                    <th>Title</th>
                                    <th>Details</th>
                                    <th>Request By</th>
                                    <th>Requested Approved By</th>
                                    <th>Request Approved On</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td>{data.RequestDate}</td>
                                        <td>{data.Time}</td>
                                        <td>
                                            <div className='attendanc1'>
                                                <div className='attendanc2'>
                                                    <input type="radio" name='status' />
                                                    <label htmlFor="" style={{ color: "#000000" }}>P</label>
                                                </div>
                                                <div className='attendanc2'>
                                                    <input type="radio" name='status' />
                                                    <label htmlFor="" style={{ color: "#000000" }}>A</label>
                                                </div>
                                                <div className='attendanc2'>
                                                    <input type="radio" name='status' />
                                                    <label htmlFor="" style={{ color: "#000000" }}>N/A</label>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{data.Amount}</td>
                                        <td>{data.ApprovedBy}</td>
                                        <td>{data.Title}</td>
                                        <td>{data.Details}</td>
                                        <td>{data.RequestBy}</td>
                                        <td>{data.RequestedApprovedBy}</td>
                                        <td>{data.RequestApprovedOn}</td>
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

export default HOC(PettyCashPayment)