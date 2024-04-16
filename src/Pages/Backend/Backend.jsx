import React from 'react'
import HOC from '../../Components/HOC/HOC'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosPlayCircle } from "react-icons/io";
import { MdStar } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";

import img from '../../Img/img33.png'

import './Backend.css'
const Backend = () => {
    const tableData = [
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },

        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },

    ];
    const tableData1 = [
        {
            id: 1,
            CreatedOn: 'Loren Epsom',
            ResponsiblePersonName: 'DD/MM/YYYY',
            FileSize: '50 KB',
            ResponsiblePersonNumber: '1234567890',
        },

        {
            id: 1,
            CreatedOn: 'Loren Epsom',
            ResponsiblePersonName: 'DD/MM/YYYY',
            FileSize: '50 KB',
            ResponsiblePersonNumber: '1234567890',
        },
        {
            id: 1,
            CreatedOn: 'Loren Epsom',
            ResponsiblePersonName: 'DD/MM/YYYY',
            FileSize: '50 KB',
            ResponsiblePersonNumber: '1234567890',
        },
        {
            id: 1,
            CreatedOn: 'Loren Epsom',
            ResponsiblePersonName: 'DD/MM/YYYY',
            FileSize: '50 KB',
            ResponsiblePersonNumber: '1234567890',
        },
        {
            id: 1,
            CreatedOn: 'Loren Epsom',
            ResponsiblePersonName: 'DD/MM/YYYY',
            FileSize: '50 KB',
            ResponsiblePersonNumber: '1234567890',
        },
        {
            id: 1,
            CreatedOn: 'Loren Epsom',
            ResponsiblePersonName: 'DD/MM/YYYY',
            FileSize: '50 KB',
            ResponsiblePersonNumber: '1234567890',
        },

    ];


    // call Recoding Modal 


    const [modalShow, setModalShow] = React.useState(false);



    function CallRecoding(props) {


        return (
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className='callrecordingModal'>
                    <Modal.Header closeButton>
                        <Modal.Title>Call Recoding</Modal.Title>
                    </Modal.Header>
                    <div className='callrecordingModal1'>
                        <div className='admission13'>
                            <div className='table-container'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Created On</th>
                                            <th>Responsible Person Name</th>
                                            <th>Play</th>
                                            <th>File Size</th>
                                            <th>Responsible Person Number</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData1.map((data) => (
                                            <tr key={data.id}>
                                                <td>{data.CreatedOn}</td>
                                                <td>{data.ResponsiblePersonName}</td>
                                                <td><IoIosPlayCircle size={25} color='#2155CD' /></td>
                                                <td onClick={() => setModalShow1(true)}>{data.FileSize}</td>
                                                <td>{data.ResponsiblePersonNumber}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    // Remarks Modal 


    const [modalShow1, setModalShow1] = React.useState(false);



    function Remarks(props) {


        return (
            <Modal
                {...props}
                size="sl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Modal.Header closeButton>
                        <Modal.Title>Remarks</Modal.Title>
                    </Modal.Header>
                    <div className='ramarksmodal'>
                        <div className='ramarksmodal1'>
                            <p>1.Bad</p>
                            <p>2.Good</p>
                            <p>3.Great</p>
                            <p>4.Best</p>
                            <p>5.Other</p>
                        </div>

                        <div className='ramarksmodal2'>
                            <p>
                                <MdStar size={20} color='#E2A03F' />
                                <MdStar size={20} color='#E2A03F' />
                                <MdStar size={20} color='#E2A03F' />
                                <MdStar size={20} color='#E2A03F' />
                                <MdStar size={20} color='#E2A03F' />
                            </p>
                            <p>
                                <MdStar size={20} color='#E2A03F' />
                                <MdStar size={20} color='#E2A03F' />
                                <MdStar size={20} color='#E2A03F' />
                                <IoMdStarOutline size={20} color='#E2A03F' />
                                <IoMdStarOutline size={20} color='#E2A03F' />
                            </p>
                            <p>
                                <MdStar size={20} color='#E2A03F' />
                                <MdStar size={20} color='#E2A03F' />
                                <MdStar size={20} color='#E2A03F' />
                                <MdStar size={20} color='#E2A03F' />
                                <IoMdStarOutline size={20} color='#E2A03F' />
                            </p>
                            <p>
                                <MdStar size={20} color='#E2A03F' />
                                <MdStar size={20} color='#E2A03F' />
                                <IoMdStarOutline size={20} color='#E2A03F' />
                                <IoMdStarOutline size={20} color='#E2A03F' />
                                <IoMdStarOutline size={20} color='#E2A03F' />
                            </p>
                            <p>
                                <MdStar size={20} color='#E2A03F' />
                                <MdStar size={20} color='#E2A03F' />
                                <MdStar size={20} color='#E2A03F' />
                                <MdStar size={20} color='#E2A03F' />
                                <MdStar size={20} color='#E2A03F' />
                            </p>
                        </div>
                    </div>

                    <div className='ramarksmodal3'>
                        <button onClick={() => setModalShow1(false)}>SAVE</button>
                        <button onClick={() => setModalShow1(false)}>CANCEL</button>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    // AdmissionStatus Modal 


    const [modalShow2, setModalShow2] = React.useState(false);


    function AdmissionStatus(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className='admissionstatus1'>
                        <div className='admissionstatus2'>
                            <p>Admission Status</p>
                            <IoMdClose color='#000000' onClick={() => setModalShow2(false)} />
                        </div>

                        <div className='admissionstatus3'>
                            <div className='admissionstatus4'>
                                <div className='admissionstatus5'></div>
                                <div className='admissionstatus6'>
                                    <div className='admissionstatus7'>
                                        <IoMdCheckmark color='#FFFFFF' />
                                    </div>
                                    <div className='admissionstatus7'>
                                        <IoMdCheckmark color='#FFFFFF' />
                                    </div>
                                    <div className='admissionstatus7'>
                                        <IoMdCheckmark color='#FFFFFF' />
                                    </div>
                                    <div className='admissionstatus7'>
                                        <IoMdCheckmark color='#FFFFFF' />
                                    </div>
                                    <div className='admissionstatus9'>
                                    </div>
                                    <div className='admissionstatus9'>
                                    </div>
                                </div>
                            </div>

                            <div className='admissionstatus8'>
                                <p>Fee Collected</p>
                                <p>Documents Collected</p>
                                <p>Student Verification Call</p>
                                <p>Feedback of Admission Process</p>
                                <p>Follow up Pop up form</p>
                                <p>Get Enrollment</p>
                            </div>
                        </div>

                        <div className='admissionstatus10'>
                            <h6>Change Admission Status</h6>
                            <div className='admissionstatus11'>
                                <div className='admissionstatus12'>
                                    <input type="radio" />
                                    <div className='admissionstatus13' style={{backgroundColor:"#FFB800"}}>
                                        <p>N/A</p>
                                    </div>
                                </div>
                                <div className='admissionstatus12'>
                                    <input type="radio" />
                                    <div className='admissionstatus13' style={{backgroundColor:"#40AF0C"}}>
                                        <p>Re-Verified</p>
                                    </div>
                                </div>
                                <div className='admissionstatus12'>
                                    <input type="radio" />
                                    <div className='admissionstatus13' style={{backgroundColor:"#FF0000"}}>
                                        <p>Reverification Rejected</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    return (
        <>
            <CallRecoding
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Remarks
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <AdmissionStatus
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <div className='backend'>
                <div className='admission1'>
                    <p>Backend</p>
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

                <div className='service3'>
                </div>

                <div className='backend1'>
                    <p>Pending Admission</p>
                </div>


                <div className='backend2'>
                    <div className='backend3'>
                        <button onClick={() => setModalShow(true)}>Call Recoding</button>
                        <button>Call Summary</button>
                    </div>
                    <div className='backend4'>
                        <button>Import</button>
                        <button>Export</button>
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
                                    <th>Contact_no</th>
                                    <th>Email_ID</th>
                                    <th>Address</th>
                                    <th>Course</th>
                                    <th>Total Fees</th>
                                    <th>Call Recording</th>
                                    <th>Status</th>
                                    <th>Reverification</th>
                                    <th>Free Date fpr Verification</th>
                                    <th>History</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td><img src={img} alt="" /></td>
                                        <td>{data.name}</td>
                                        <td>{data.contact}</td>
                                        <td>{data.email}</td>
                                        <div className='admission19'>
                                            <p>{data.address}</p>
                                        </div>
                                        <td>{data.course}</td>
                                        <td>{data.feesPaid}</td>
                                        <td style={{ color: "#2155CD", textDecoration: "underline" }}>{data.callrecording}</td>
                                        <td>
                                            <div className='admission14'>
                                                <button>{data.status}</button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='backend5' onClick={() => setModalShow2(true)}>
                                                <button>N/A</button>
                                            </div>
                                        </td>
                                        <td>{data.verificationdate}</td>
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

export default HOC(Backend)