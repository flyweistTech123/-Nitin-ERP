import React, { useState } from 'react'
import './PDCSection.css'
import HOC from '../../Components/HOC/HOC'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdStar } from "react-icons/md";
import { IoIosPlayCircle } from "react-icons/io";
import { PiWarningCircle } from "react-icons/pi";
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
    const tableData1 = [
        {
            id: 1,
            BookFee: '₹1000',
            Coursefee: '₹1000',
            GST: '₹1000',
            Other: '₹1000',
            Reg: "₹1000",
            TOC: '₹1000',
            Book: '₹1000',
            LE: "₹1000",
            Multiple: "₹1000",
            Total: "₹1000",
        },

        {
            id: 1,
            BookFee: '₹1000',
            Coursefee: '₹1000',
            GST: '₹1000',
            Other: '₹1000',
            Reg: "₹1000",
            TOC: '₹1000',
            Book: '₹1000',
            LE: "₹1000",
            Multiple: "₹1000",
            Total: "₹1000",
        },
        {
            id: 1,
            BookFee: '₹1000',
            Coursefee: '₹1000',
            GST: '₹1000',
            Other: '₹1000',
            Reg: "₹1000",
            TOC: '₹1000',
            Book: '₹1000',
            LE: "₹1000",
            Multiple: "₹1000",
            Total: "₹1000",
        },
        {
            id: 1,
            BookFee: '₹1000',
            Coursefee: '₹1000',
            GST: '₹1000',
            Other: '₹1000',
            Reg: "₹1000",
            TOC: '₹1000',
            Book: '₹1000',
            LE: "₹1000",
            Multiple: "₹1000",
            Total: "₹1000",
        },
        {
            id: 1,
            BookFee: '₹1000',
            Coursefee: '₹1000',
            GST: '₹1000',
            Other: '₹1000',
            Reg: "₹1000",
            TOC: '₹1000',
            Book: '₹1000',
            LE: "₹1000",
            Multiple: "₹1000",
            Total: "₹1000",
        },
        {
            id: 1,
            BookFee: '₹1000',
            Coursefee: '₹1000',
            GST: '₹1000',
            Other: '₹1000',
            Reg: "₹1000",
            TOC: '₹1000',
            Book: '₹1000',
            LE: "₹1000",
            Multiple: "₹1000",
            Total: "₹1000",
        },

    ];
    const tableData2 = [
        {
            id: 1,
            Examtype: '10th',
            Course: 'BSc',
            Stream: 'Science',
            Remarks: 'AB',
            PassingYear: "2016",
            UniversityBoardName: 'Loren epsom',
            TotalMarks: '450',
            MarksObtained: "340",
            PercentageCGPA: "8.9 CGPA",
        },

        {
            id: 1,
            Examtype: '10th',
            Course: 'BSc',
            Stream: 'Science',
            Remarks: 'AB',
            PassingYear: "2016",
            UniversityBoardName: 'Loren epsom',
            TotalMarks: '450',
            MarksObtained: "340",
            PercentageCGPA: "8.9 CGPA",
        },
        {
            id: 1,
            Examtype: '10th',
            Course: 'BSc',
            Stream: 'Science',
            Remarks: 'AB',
            PassingYear: "2016",
            UniversityBoardName: 'Loren epsom',
            TotalMarks: '450',
            MarksObtained: "340",
            PercentageCGPA: "8.9 CGPA",
        },
        {
            id: 1,
            Examtype: '10th',
            Course: 'BSc',
            Stream: 'Science',
            Remarks: 'AB',
            PassingYear: "2016",
            UniversityBoardName: 'Loren epsom',
            TotalMarks: '450',
            MarksObtained: "340",
            PercentageCGPA: "8.9 CGPA",
        },
        {
            id: 1,
            Examtype: '10th',
            Course: 'BSc',
            Stream: 'Science',
            Remarks: 'AB',
            PassingYear: "2016",
            UniversityBoardName: 'Loren epsom',
            TotalMarks: '450',
            MarksObtained: "340",
            PercentageCGPA: "8.9 CGPA",
        },
        {
            id: 1,
            Examtype: '10th',
            Course: 'BSc',
            Stream: 'Science',
            Remarks: 'AB',
            PassingYear: "2016",
            UniversityBoardName: 'Loren epsom',
            TotalMarks: '450',
            MarksObtained: "340",
            PercentageCGPA: "8.9 CGPA",
        },

    ];
    const tableData3 = [
        {
            id: 1,
            CertificateName: 'Certificate Name',
            Remark: 'Loren Epsom',
        },

        {
            id: 1,
            CertificateName: 'Certificate Name',
            Remark: 'Loren Epsom',
        },
        {
            id: 1,
            CertificateName: 'Certificate Name',
            Remark: 'Loren Epsom',
        },
        {
            id: 1,
            CertificateName: 'Certificate Name',
            Remark: 'Loren Epsom',
        },
        {
            id: 1,
            CertificateName: 'Certificate Name',
            Remark: 'Loren Epsom',
        },
        {
            id: 1,
            CertificateName: 'Certificate Name',
            Remark: 'Loren Epsom',
        },

    ];


    const tableData4 = [
        {
            id: 1,
            calls: 'Calls.mp3',
            Responsible: 'Loren epsom',
            Addedon: 'DD/MM/YYYY',
            Remarks: 'Loren',
            RatedOn: 'DD/MM/YYYY',
            Rating: "5"
        },

        {
            id: 1,
            calls: 'Calls.mp3',
            Responsible: 'Loren epsom',
            Addedon: 'DD/MM/YYYY',
            Remarks: 'Loren',
            RatedOn: 'DD/MM/YYYY',
            Rating: "2"
        },
        {
            id: 1,
            calls: 'Calls.mp3',
            Responsible: 'Loren epsom',
            Addedon: 'DD/MM/YYYY',
            Remarks: 'Loren',
            RatedOn: 'DD/MM/YYYY',
            Rating: "1"
        },
        {
            id: 1,
            calls: 'Calls.mp3',
            Responsible: 'Loren epsom',
            Addedon: 'DD/MM/YYYY',
            Remarks: 'Loren',
            RatedOn: 'DD/MM/YYYY',
            Rating: "2"
        },
        {
            id: 1,
            calls: 'Calls.mp3',
            Responsible: 'Loren epsom',
            Addedon: 'DD/MM/YYYY',
            Remarks: 'Loren',
            RatedOn: 'DD/MM/YYYY',
            Rating: "4"
        },
        {
            id: 1,
            calls: 'Calls.mp3',
            Responsible: 'Loren epsom',
            Addedon: 'DD/MM/YYYY',
            Remarks: 'Loren',
            RatedOn: 'DD/MM/YYYY',
            Rating: "3"
        },

    ];


    // FeeStructure Modal 


    const [modalShow, setModalShow] = React.useState(false);



    function FeeStructure(props) {
        const [step, setStep] = useState(0);


        return (
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className='feestructureModal101'>
                    <div className='feestructureModal'>
                        <div className='feestructureModal1'>
                            <p>Fee Structure</p>
                            <IoCloseOutline color='#000000' size={20} onClick={() => setModalShow(false)} />
                        </div>
                        <div className='feestructureModal2'>
                            <div className={step === 0 ? "feestructureModal3" : "feestructureModal4"} onClick={() => setStep(0)}>
                                <p>Batch 1</p>
                            </div>
                            <div className={step === 1 ? "feestructureModal3" : "feestructureModal4"} onClick={() => setStep(1)}>
                                <p>Batch 2</p>
                            </div>
                            <div className={step === 2 ? "feestructureModal3" : "feestructureModal4"} onClick={() => setStep(2)}>
                                <p>Batch 3</p>
                            </div>
                            <div className={step === 3 ? "feestructureModal3" : "feestructureModal4"} onClick={() => setStep(3)}>
                                <p>Batch 4</p>
                            </div>
                            <div className={step === 4 ? "feestructureModal3" : "feestructureModal4"} onClick={() => setStep(4)}>
                                <p>Batch 5</p>
                            </div>
                            <div className={step === 5 ? "feestructureModal3" : "feestructureModal4"} onClick={() => setStep(5)}>
                                <p>Batch 6</p>
                            </div>
                            <div className={step === 6 ? "feestructureModal3" : "feestructureModal4"} onClick={() => setStep(6)}>
                                <p>Batch 7</p>
                            </div>
                        </div>
                        <div className='admission13'>
                            <div className='table-container'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Book Fee</th>
                                            <th>Course fee</th>
                                            <th>GST</th>
                                            <th>Other</th>
                                            <th>Reg.</th>
                                            <th>TOC</th>
                                            <th>Book</th>
                                            <th>LE</th>
                                            <th>Multiple</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData1.map((data) => (
                                            <tr key={data.id}>
                                                <td>{data.BookFee}</td>
                                                <td>{data.Coursefee}</td>
                                                <td>{data.GST}</td>
                                                <td>{data.Other}</td>
                                                <td>{data.Reg}</td>
                                                <td>{data.TOC}</td>
                                                <td>{data.Book}</td>
                                                <td>{data.LE}</td>
                                                <td>{data.Multiple}</td>
                                                <td>{data.Total}</td>
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


    // EducationDetails Modal 


    const [modalShow1, setModalShow1] = React.useState(false);



    function EducationDetails(props) {


        return (
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className='feestructureModal101'>
                    <div className='feestructureModal'>
                        <div className='EducationDetailsModal'>
                            <p>Education Details</p>
                            <IoIosCloseCircleOutline color='#000000' size={25} onClick={() => setModalShow1(false)} />
                        </div>
                        <div className='admission13'>
                            <div className='table-container'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Exam type</th>
                                            <th>Course</th>
                                            <th>Stream</th>
                                            <th>Subject</th>
                                            <th>Remarks</th>
                                            <th>Passing Year</th>
                                            <th>University/Board Name</th>
                                            <th>Total Marks</th>
                                            <th>Marks Obtained</th>
                                            <th>Percentage/CGPA</th>
                                            <th>Marksheet</th>
                                            <th>Certificate</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData2.map((data) => (
                                            <tr key={data.id}>
                                                <td>{data.Examtype}</td>
                                                <td>{data.Course}</td>
                                                <td>{data.Stream}</td>
                                                <td>
                                                    <div className='EducationDetailsModal1'>
                                                        <select name="" id="">
                                                            <option value="">Loren</option>
                                                            <option value="">Loren</option>
                                                            <option value="">Loren</option>
                                                            <option value="">Loren</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td>{data.Remarks}</td>
                                                <td>{data.PassingYear}</td>
                                                <td>{data.UniversityBoardName}</td>
                                                <td>{data.TotalMarks}</td>
                                                <td>{data.MarksObtained}</td>
                                                <td>{data.PercentageCGPA}</td>
                                                <td><IoEye color='#2155CD' size={25} /></td>
                                                <td><IoEye color='#2155CD' size={25} /></td>
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


    // Document Details Modal 


    const [modalShow2, setModalShow2] = React.useState(false);



    function DocumentDetails(props) {


        return (
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className='feestructureModal101'>
                    <div className='feestructureModal'>
                        <div className='EducationDetailsModal'>
                            <p>Document Details</p>
                            <IoIosCloseCircleOutline color='#000000' size={25} onClick={() => setModalShow2(false)} />
                        </div>
                        <div className='admission13'>
                            <div className='table-container'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Certificate Name</th>
                                            <th>Remark</th>
                                            <th>View</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData3.map((data) => (
                                            <tr key={data.id}>
                                                <td>{data.CertificateName}</td>
                                                <td>{data.Remark}</td>
                                                <td><IoEye color='#444444' size={25} /></td>
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


    // Document Details Modal 


    const [modalShow3, setModalShow3] = React.useState(false);



    function CallRecordinglist(props) {


        return (
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className='feestructureModal101'>
                    <div className='feestructureModal'>
                        <div className='EducationDetailsModal'>
                            <p>Call Recording list</p>
                            <IoCloseOutline color='#000000' size={25} onClick={() => setModalShow3(false)} />
                        </div>
                        <div className='admission13'>
                            <div className='table-container'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Calls</th>
                                            <th>Responsible Person</th>
                                            <th>Added on</th>
                                            <th>Play</th>
                                            <th>Remarks</th>
                                            <th>Rating</th>
                                            <th>Rated On</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData4.map((data) => (
                                            <tr key={data.id}>
                                                <td>{data.calls}</td>
                                                <td>{data.Responsible}</td>
                                                <td>{data.Addedon}</td>
                                                <td><IoIosPlayCircle size={25} color='#2155CD' /></td>
                                                <td>{data.Remarks} <PiWarningCircle size={20} color='#2155CD' /></td>
                                                <td>
                                                    {/* Render stars based on the 'Rating' */}
                                                    {Array.from({ length: parseInt(data.Rating, 10) }, (_, index) => (
                                                        <MdStar key={index} size={20} color='#E2A03F' />
                                                    ))}
                                                </td>

                                                <td>{data.RatedOn}</td>
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