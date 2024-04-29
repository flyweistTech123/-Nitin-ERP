import React from 'react'
import './RefundCancel.css'
import HOC from '../../Components/HOC/HOC'


import {
    UploadDocuments, 
    AddRemark,
    ViewRemark,
    AddRefundCancelRequests,
    EditRefundCancelRequests,
    DeleteRequest
} from '../Modals/Modals'

import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoEye } from "react-icons/io5";

import img from '../../Img/img33.png'

const RefundCancel = () => {
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



                <div className='cancel4'>
                    <div className='cancel5'>
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
                                    <th><IoSettings size={20} /></th>
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
                                        <td><img src={img} alt="" /></td>
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

export default HOC(RefundCancel)