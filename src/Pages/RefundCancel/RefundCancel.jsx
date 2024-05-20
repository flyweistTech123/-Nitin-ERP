import React, { useState } from 'react'
import './RefundCancel.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate, Link } from 'react-router-dom';


import {
    UploadDocuments,
    AddRemark,
    ViewRemark,
    AddRefundCancelRequests,
    EditRefundCancelRequests,
    DeleteRequest,
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
    PaymentFilterModal,
    History1,
    FilterModalhistory,
    AddNewEvent
} from '../Modals/Modals'

import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoEye } from "react-icons/io5";

import img from '../../Img/img33.png'

const RefundCancel = () => {
    const navigate = useNavigate();
    const tableData = [
        {
            id: 1,
            name: 'Loren Epsom',
            admissionNo: '123445',
            course: 'Engineering',
            University: 'Aligarh',
            requestaddedon: "DD/MM/YYYY  10:30AM",
            uploadDocument: 'View Document',
            requestingUserBy: 'Loren Epsom',
            statusChangedOn: "DD/MM/ YYYY   10:30 AM",
            Details: "Details"
        },

        {
            id: 1,
            name: 'Loren Epsom',
            admissionNo: '123445',
            course: 'Engineering',
            University: 'Aligarh',
            requestaddedon: "DD/MM/YYYY  10:30AM",
            uploadDocument: 'View Document',
            requestingUserBy: 'Loren Epsom',
            statusChangedOn: "DD/MM/ YYYY   10:30 AM",
            Details: "Details"
        },
        {
            id: 1,
            name: 'Loren Epsom',
            admissionNo: '123445',
            course: 'Engineering',
            University: 'Aligarh',
            requestaddedon: "DD/MM/YYYY  10:30AM",
            uploadDocument: 'View Document',
            requestingUserBy: 'Loren Epsom',
            statusChangedOn: "DD/MM/ YYYY   10:30 AM",
            Details: "Details"
        },
        {
            id: 1,
            name: 'Loren Epsom',
            admissionNo: '123445',
            course: 'Engineering',
            University: 'Aligarh',
            requestaddedon: "DD/MM/YYYY  10:30AM",
            uploadDocument: 'View Document',
            requestingUserBy: 'Loren Epsom',
            statusChangedOn: "DD/MM/ YYYY   10:30 AM",
            Details: "Details"
        },
        {
            id: 1,
            name: 'Loren Epsom',
            admissionNo: '123445',
            course: 'Engineering',
            University: 'Aligarh',
            requestaddedon: "DD/MM/YYYY  10:30AM",
            uploadDocument: 'View Document',
            requestingUserBy: 'Loren Epsom',
            statusChangedOn: "DD/MM/ YYYY   10:30 AM",
            Details: "Details"
        },
        {
            id: 1,
            name: 'Loren Epsom',
            admissionNo: '123445',
            course: 'Engineering',
            University: 'Aligarh',
            requestaddedon: "DD/MM/YYYY  10:30AM",
            uploadDocument: 'View Document',
            requestingUserBy: 'Loren Epsom',
            statusChangedOn: "DD/MM/ YYYY   10:30 AM",
            Details: "Details"
        },

    ];

    // UploadDocuments Modal 
    const [modalShow, setModalShow] = React.useState(false);

    // AddRemark Modal 
    const [modalShow1, setModalShow1] = React.useState(false);

    // View Remark Modal 
    const [modalShow2, setModalShow2] = React.useState(false);

    // Add Refund/Cancel Requests Modal
    const [modalShow3, setModalShow3] = React.useState(false);

    // Edit Refund/ Cancel Requests Modal
    const [modalShow4, setModalShow4] = React.useState(false);

    // Delete Refund/ Cancel Requests Modal
    const [modalShow5, setModalShow5] = React.useState(false);






    // Filter Modal 

    const [modalShow6, setModalShow6] = React.useState(false);

    // mydeals Modal
    const [modalShow7, setModalShow7] = React.useState(false);

    // add field Modal
    const [modalShow8, setModalShow8] = React.useState(false);



    // Admission Follow Up Modal

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // New Lead Modal

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // History Modal
    const [modalShow9, setModalShow9] = React.useState(false);






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


    // PaymentFilterModal Modal
    const [modalShow10, setModalShow10] = React.useState(false);


    // History Modal

    const [modalShow11, setModalShow11] = React.useState(false);


    // FilterModalhistory Modal

    const [modalShow12, setModalShow12] = React.useState(false);


    // AddNewEvent Modal

    const [modalShow13, setModalShow13] = React.useState(false);
    return (
        <>
            <UploadDocuments
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <AddRemark
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <ViewRemark
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <AddRefundCancelRequests
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />
            <EditRefundCancelRequests
                show={modalShow4}
                onHide={() => setModalShow4(false)}
            />
            <DeleteRequest
                show={modalShow5}
                onHide={() => setModalShow5(false)}
            />
            <PaymentFilterModal
                show={modalShow6}
                onHide={() => setModalShow6(false)}
                setModalShow1={setModalShow7}
                setModalShow2={setModalShow8}
            />
            <MYDEALSModal
                show={modalShow7}
                onHide={() => setModalShow7(false)}
                setModalShow={setModalShow6}
                setModalShow2={setModalShow8}
            />
            <AddFieldModal
                show={modalShow8}
                onHide={() => setModalShow8(false)}
            />
            <AdmissionFollowUp
                show={show}
                onHide={handleClose}
                setModalShow3={modalShow9}
                handleShow1={handleShow1}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
                title={"Refund/ Cancel Requests"}
            />
            <NeWLead
                show={show1}
                onHide={handleClose1}
                setModalShow3={modalShow9}
                handleShow={handleShow}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
            />
            <History
                show={modalShow9}
                onHide={() => setModalShow9(false)}
            />
            <NewTask
                show={show2}
                onHide={handleClose2}
            />
            <SMS
                show={show3}
                onHide={handleClose3}
                setModalShow3={modalShow9}
            />
            <Email
                show={show4}
                onHide={handleClose4}
            />
            <Whatsapp
                show={show5}
                onHide={handleClose5}
            />
            <History1
                show={modalShow11}
                onHide={() => setModalShow11(false)}
                setModalShow5={setModalShow12}
                setModalShow6={setModalShow13}
            />
            <FilterModalhistory
                show={modalShow12}
                onHide={() => setModalShow12(false)}
            />
            <AddNewEvent
                show={modalShow13}
                onHide={() => setModalShow13(false)}
            />
            <div className='cancel'>
                <div className='admission1'>
                    <p>Refund/ Cancel Requests</p>
                    <div className='admission2'>
                        <div className='cancel1' onClick={() => setModalShow3(true)}>
                            <p>Add</p>
                        </div>
                        <div className='cancel2' onClick={() => setModalShow4(true)}>
                            <p>Edit</p>
                        </div>
                        <div className='cancel3' onClick={() => setModalShow5(true)}>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>



                <div className='cancel4' onClick={() => setModalShow6(true)}>
                    <div className='cancel5' >
                        <button>Filter</button>
                    </div>
                    <input type="search" placeholder='Search Something ' />
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th><IoSettings size={20} onClick={() => setModalShow8(true)} /></th>
                                    <th>Admission No.</th>
                                    <th>Student Name</th>
                                    <th>Course</th>
                                    <th>University</th>
                                    <th>Request Added On</th>
                                    <th>Upload Document</th>
                                    <th>Status</th>
                                    <th>Requesting User By</th>
                                    <th>Status Changed On</th>
                                    <th>Details</th>
                                    <th>Remark</th>
                                    <th>History</th>
                                </tr>


                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td onClick={handleShow}><img src={img} alt="" /></td>
                                        <td>{data.admissionNo}</td>
                                        <td>{data.name}</td>
                                        <td>{data.course}</td>
                                        <td>{data.University}</td>
                                        <td>{data.requestaddedon}</td>
                                        <td onClick={() => setModalShow(true)} style={{ color: "#2155CD" }}>{data.uploadDocument}</td>
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
                                                <div className='cancel5' onClick={() => setModalShow1(true)}>
                                                    <p>Add Remark</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{data.requestingUserBy}</td>
                                        <td>{data.statusChangedOn}</td>
                                        <td>{data.Details}</td>
                                        <td onClick={() => setModalShow2(true)}><IoEye color='#2155CD' size={25} /></td>
                                        <td>
                                            <div className='admission14'>
                                                <button onClick={() => setModalShow11(true)}>History</button>
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

export default HOC(RefundCancel)