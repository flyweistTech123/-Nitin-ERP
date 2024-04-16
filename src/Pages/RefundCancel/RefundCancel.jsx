import React from 'react'
import './RefundCancel.css'
import Modal from 'react-bootstrap/Modal';
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

import img from '../../Img/img33.png'
import img1 from '../../Img/img72.png'

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
    const tableData1 = [
        {
            id: 1,
            name: 'Loren Epsom',
            admissionNo: '123445',
            course: 'Engineering',
            University: 'Aligarh University',
            requestaddedon: "DD/MM/YYYY  10:30AM",
            uploadDocument: 'View Document',
            requestingUserBy: 'Loren Epsom',
            statusChangedOn: "DD/MM/ YYYY   10:30 AM",
            Details: "Details"
        },
    ];


    // UploadDocuments Modal 


    const [modalShow, setModalShow] = React.useState(false);



    function UploadDocuments(props) {


        return (
            <Modal
                {...props}
                size="sl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Modal.Header closeButton>
                        <Modal.Title>Upload Documents</Modal.Title>
                    </Modal.Header>
                    <div className='uploaddocumentModal'>
                        <div className='uploaddocumentModal1'>
                            <p>Document 1</p>
                            <IoEye color='#2155CD' size={25} />
                        </div>
                        <div className='uploaddocumentModal1'>
                            <p>Document 1</p>
                            <IoEye color='#2155CD' size={25} />
                        </div>
                        <div className='uploaddocumentModal1'>
                            <p>Document 1</p>
                            <IoEye color='#2155CD' size={25} />
                        </div>
                        <div className='uploaddocumentModal1'>
                            <p>Document 1</p>
                            <IoEye color='#2155CD' size={25} />
                        </div>
                        <div className='uploaddocumentModal1'>
                            <p>Document 1</p>
                            <IoEye color='#2155CD' size={25} />
                        </div>
                        <div className='uploaddocumentModal1'>
                            <p>Document 1</p>
                            <IoEye color='#2155CD' size={25} />
                        </div>
                        <div className='uploaddocumentModal1'>
                            <p>Document 1</p>
                            <IoEye color='#2155CD' size={25} />
                        </div>
                        <div className='uploaddocumentModal1'>
                            <p>Document 1</p>
                            <IoEye color='#2155CD' size={25} />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    // AddRemark Modal 


    const [modalShow1, setModalShow1] = React.useState(false);



    function AddRemark(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className='addremarkmodal'>
                        <div className='addremarkmodal1'>
                            <p>Add Remark</p>
                            <IoCloseOutline color='#000000' size={25} onClick={() => setModalShow1(false)} />
                        </div>

                        <div className='addremarkmodal2'>
                            <label htmlFor="">Add Remark</label>
                            <textarea name="" id="" cols="30" rows="5"></textarea>
                        </div>

                        <div className='addremarkmodal3'>
                            <button onClick={() => setModalShow1(false)}>Save</button>
                            <button onClick={() => setModalShow1(false)}>Cancel</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    // View Remark Modal 


    const [modalShow2, setModalShow2] = React.useState(false);



    function ViewRemark(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className='addremarkmodal'>
                        <div className='addremarkmodal1'>
                            <p>Remark</p>
                            <IoCloseOutline color='#000000' size={25} onClick={() => setModalShow2(false)} />
                        </div>

                        <div className='addremarkmodal2'>
                            <label htmlFor="">Remark</label>
                            <div className='viewremarkmodal'>
                                <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    // Add Refund/ Cancel Requests Modal


    const [modalShow3, setModalShow3] = React.useState(false);



    function AddRefundCancelRequests(props) {


        return (
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className='addremarkmodal'>
                        <div className='addremarkmodal1'>
                            <p>Add Refund/ Cancel Requests</p>
                            <IoCloseOutline color='#000000' size={25} onClick={() => setModalShow3(false)} />
                        </div>

                        <div className='addrfundModal'>
                            <div className='addrfundModal1'>
                                <div className='addrfundModal2'>
                                    <label htmlFor="">Admission No</label>
                                    <input type="text" />
                                </div>
                                <div className='addrfundModal2'>
                                    <label htmlFor="">Student Name</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='addrfundModal1'>
                                <div className='addrfundModal2'>
                                    <label htmlFor="">Course</label>
                                    <input type="text" />
                                </div>
                                <div className='addrfundModal2'>
                                    <label htmlFor="">University</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='addrfundModal1'>
                                <div className='addrfundModal2'>
                                    <label htmlFor="">Upload Document</label>
                                    <div className='addrfundModal3'>
                                        <div className='addrfundModal4'>
                                            <p>loren <IoCloseOutline color='#000000' size={18} /></p>
                                        </div>
                                        <div className='addrfundModal4'>
                                            <p>loren <IoCloseOutline color='#000000' size={18} /></p>
                                        </div>
                                        <div className='addrfundModal4'>
                                            <p>loren <IoCloseOutline color='#000000' size={18} /></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='addrfundModal5'>
                                    <button>Upload</button>
                                    <div className='addrfundModal6'>
                                        <p>.pdf ,  .doc .png, .jpeg . supported files only</p>
                                    </div>
                                </div>
                            </div>

                            <div className='addrfundModal1'>
                                <div className='addrfundModal2'>
                                    <label htmlFor="">Request User Name</label>
                                    <input type="text" />
                                </div>
                                <div className='addrfundModal2'>
                                    <label htmlFor="">Reason for Refund</label>
                                    <select name="" id="">
                                        <option value="">Select Action</option>
                                        <option value="">Lorem Ipsum 1</option>
                                        <option value="">Lorem Ipsum 2</option>
                                        <option value="">Lorem Ipsum 3</option>
                                        <option value="">Lorem Ipsum 4</option>
                                    </select>
                                </div>
                            </div>

                            <div className='addrfundModal1'>
                                <div className='addrfundModal2'>
                                    <label htmlFor="">Remark</label>
                                    <textarea name="" id="" cols="65" rows="4"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className='addremarkmodal3'>
                            <button onClick={() => setModalShow3(false)}>Save</button>
                            <button onClick={() => setModalShow3(false)}>Cancel</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }



    // Edit Refund/ Cancel Requests Modal


    const [modalShow4, setModalShow4] = React.useState(false);



    function EditRefundCancelRequests(props) {


        return (
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className='addremarkmodal'>
                        <div className='addremarkmodal1'>
                            <p>Add Refund/ Cancel Requests</p>
                            <IoCloseOutline color='#000000' size={25} onClick={() => setModalShow4(false)} />
                        </div>
                        {tableData1.map((data) => (
                            <div className='addrfundModal'>
                                <div className='addrfundModal1'>
                                    <div className='addrfundModal2'>
                                        <label htmlFor="">Admission No</label>
                                        <input type="text" value={data.admissionNo} />
                                    </div>
                                    <div className='addrfundModal2'>
                                        <label htmlFor="">Student Name</label>
                                        <input type="text" value={data.name} />
                                    </div>
                                </div>
                                <div className='addrfundModal1'>
                                    <div className='addrfundModal2'>
                                        <label htmlFor="">Course</label>
                                        <input type="text" value={data.course} />
                                    </div>
                                    <div className='addrfundModal2'>
                                        <label htmlFor="">University</label>
                                        <input type="text" value={data.University} />
                                    </div>
                                </div>
                                <div className='addrfundModal1'>
                                    <div className='addrfundModal2'>
                                        <label htmlFor="">Upload Document</label>
                                        <div className='addrfundModal3'>
                                            <div className='addrfundModal4'>
                                                <p>loren <IoCloseOutline color='#000000' size={18} /></p>
                                            </div>
                                            <div className='addrfundModal4'>
                                                <p>loren <IoCloseOutline color='#000000' size={18} /></p>
                                            </div>
                                            <div className='addrfundModal4'>
                                                <p>loren <IoCloseOutline color='#000000' size={18} /></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='addrfundModal5'>
                                        <button>Upload</button>
                                        <div className='addrfundModal6'>
                                            <p>.pdf ,  .doc .png, .jpeg . supported files only</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='addrfundModal1'>
                                    <div className='addrfundModal2'>
                                        <label htmlFor="">Request User Name</label>
                                        <input type="text" value={data.requestingUserBy} />
                                    </div>
                                    <div className='addrfundModal2'>
                                        <label htmlFor="">Reason for Refund</label>
                                        <select name="" id="">
                                            <option value="">Select Action</option>
                                            <option value="">Lorem Ipsum 1</option>
                                            <option value="">Lorem Ipsum 2</option>
                                            <option value="">Lorem Ipsum 3</option>
                                            <option value="">Lorem Ipsum 4</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='addrfundModal1'>
                                    <div className='addrfundModal2'>
                                        <label htmlFor="">Remark</label>
                                        <textarea name="" id="" cols="65" rows="4"></textarea>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='addremarkmodal3'>
                            <button onClick={() => setModalShow4(false)}>Save</button>
                            <button onClick={() => setModalShow4(false)}>Cancel</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    // Delete Refund/ Cancel Requests Modal


    const [modalShow5, setModalShow5] = React.useState(false);



    function DeleteRequest(props) {


        return (
            <Modal
                {...props}
                size="sl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className='deleterefund'>
                        <div className='deleterefund2'>
                            <img src={img1} alt="" />

                            <p>Are you Sure you want to Delete the Request?</p>
                        </div>

                        <div className='deleterefund1'>
                            <button onClick={() => setModalShow5(false)}>Delete</button>
                            <button onClick={() => setModalShow5(false)}>Cancel</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }

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