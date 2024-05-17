import React, { useRef } from 'react'
import HOC from '../../Components/HOC/HOC'
import {
    MarksheetUpload,
    IDCardUpload,
    AdmitCardUpload,
    ResultStatusUpload,
    TranscriptUpload,
    AdmissionLetterUpload,
    CertificateUpload,
    ProvisionalUpload,
    OtherDocumentApply,
    MigrationUpload,
    DegreeUpload,
    AttestationUpload,
    FilterModal,
    MYDEALSModal,
    AddFieldModal,
    History,
    DocumentFilterModal,
    History1,
    FilterModalhistory,
    AddNewEvent
} from '../Modals/Modals'





import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";


import img1 from '../../Img/img74.png'
import img2 from '../../Img/img75.png'

import './Documents.css'
const Documents = () => {
    const tableData = [
        {
            id: 1,
            AdmissionNo: '12889',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            State: 'Utter Pradesh',
            University: 'Aligarh',
            EnrollmentNo: '1234',
        },

        {
            id: 1,
            AdmissionNo: '12889',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            State: 'Utter Pradesh',
            University: 'Aligarh',
            EnrollmentNo: '1234',
        },
        {
            id: 1,
            AdmissionNo: '12889',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            State: 'Utter Pradesh',
            University: 'Aligarh',
            EnrollmentNo: '1234',
        },
        {
            id: 1,
            AdmissionNo: '12889',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            State: 'Utter Pradesh',
            University: 'Aligarh',
            EnrollmentNo: '1234',
        },
        {
            id: 1,
            AdmissionNo: '12889',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            State: 'Utter Pradesh',
            University: 'Aligarh',
            EnrollmentNo: '1234',
        },
        {
            id: 1,
            AdmissionNo: '12889',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            State: 'Utter Pradesh',
            University: 'Aligarh',
            EnrollmentNo: '1234',
        },

    ];


    // MarksheetUpload Modal 
    const [modalShow, setModalShow] = React.useState(false);

    // ID Card Upload Modal 
    const [modalShow1, setModalShow1] = React.useState(false);

    // Admit Card Upload Modal 
    const [modalShow2, setModalShow2] = React.useState(false);

    // Result Status Upload Modal 
    const [modalShow3, setModalShow3] = React.useState(false);

    // Transcript Upload Modal 
    const [modalShow4, setModalShow4] = React.useState(false)

    // Admission Letter Upload Modal 
    const [modalShow5, setModalShow5] = React.useState(false);

    // Certificate Upload Modal 
    const [modalShow6, setModalShow6] = React.useState(false);

    // Provisional Upload Modal 
    const [modalShow7, setModalShow7] = React.useState(false);

    // Other Document Apply Modal 
    const [modalShow8, setModalShow8] = React.useState(false);

    // Migration Upload Modal 
    const [modalShow9, setModalShow9] = React.useState(false);

    // Degree Upload Modal 
    const [modalShow10, setModalShow10] = React.useState(false);

    // Attestation Upload Modal 
    const [modalShow11, setModalShow11] = React.useState(false);




    // Filter Modal 

    const [modalShow12, setModalShow12] = React.useState(false);

    // mydeals Modal
    const [modalShow13, setModalShow13] = React.useState(false);

    // add field Modal
    const [modalShow14, setModalShow14] = React.useState(false);

    // History Modal
    const [modalShow15, setModalShow15] = React.useState(false);

    // History Modal
    const [modalShow16, setModalShow16] = React.useState(false);


    
    // History Modal

    const [modalShow17, setModalShow17] = React.useState(false);


    // FilterModalhistory Modal

    const [modalShow18, setModalShow18] = React.useState(false);


    // AddNewEvent Modal

    const [modalShow19, setModalShow19] = React.useState(false);

    return (
        <>
            <MarksheetUpload
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <IDCardUpload
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <AdmitCardUpload
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <ResultStatusUpload
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />
            <TranscriptUpload
                show={modalShow4}
                onHide={() => setModalShow4(false)}
            />
            <AdmissionLetterUpload
                show={modalShow5}
                onHide={() => setModalShow5(false)}
            />
            <CertificateUpload
                show={modalShow6}
                onHide={() => setModalShow6(false)}
            />
            <ProvisionalUpload
                show={modalShow7}
                onHide={() => setModalShow7(false)}
            />
            <OtherDocumentApply
                show={modalShow8}
                onHide={() => setModalShow8(false)}
            />
            <MigrationUpload
                show={modalShow9}
                onHide={() => setModalShow9(false)}
            />
            <DegreeUpload
                show={modalShow10}
                onHide={() => setModalShow10(false)}
            />

            <AttestationUpload
                show={modalShow11}
                onHide={() => setModalShow11(false)}
            />
            <DocumentFilterModal
                show={modalShow16}
                onHide={() => setModalShow16(false)}
                setModalShow1={setModalShow13}
                setModalShow2={setModalShow14}
            />
            <MYDEALSModal
                show={modalShow13}
                onHide={() => setModalShow13(false)}
                setModalShow={setModalShow16}
                setModalShow2={setModalShow14}
            />
            <AddFieldModal
                show={modalShow14}
                onHide={() => setModalShow14(false)}
            />
            <History
                show={modalShow15}
                onHide={() => setModalShow15(false)}
            />
            <History1
                show={modalShow17}
                onHide={() => setModalShow17(false)}
                setModalShow5={setModalShow18}
                setModalShow6={setModalShow19}
            />
            <FilterModalhistory
                show={modalShow18}
                onHide={() => setModalShow18(false)}
            />
            <AddNewEvent
                show={modalShow19}
                onHide={() => setModalShow19(false)}
            />
            <div className='backend'>
                <div className='admission1'>
                    <p>Documents</p>
                </div>


                <div className='documnets1'>
                    <div className='admission8' onClick={() => setModalShow16(true)}>
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

                    <div className='documnets2'>
                        <button>Import</button>
                        <button>Export</button>
                    </div>
                </div>



                <div className='documnets3'>
                    <img src={img1} alt="" />
                    <p>Students</p>
                </div>


                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><IoSettings size={20} onClick={() => setModalShow14(true)} /> Admission No</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>State</th>
                                    <th>University</th>
                                    <th>Enrollment No</th>
                                    <th>Marksheet</th>
                                    <th>ID Card</th>
                                    <th>Admit Card</th>
                                    <th>Result Status</th>
                                    <th>Admission letter</th>
                                    <th>Certificate</th>
                                    <th>Provisional</th>
                                    <th>Migration</th>
                                    <th>Degree</th>
                                    <th>Transcript</th>
                                    <th>Attestation</th>
                                    <th>Other Document Apply</th>
                                    <th>History</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.AdmissionNo}</td>
                                        <td>{data.email}</td>
                                        <td>{data.contact}</td>
                                        <td>{data.State}</td>
                                        <td>{data.University}</td>
                                        <td>{data.EnrollmentNo}</td>
                                        <td>
                                            <div className='documnets4' onClick={() => setModalShow(true)}>
                                                <IoMdCheckmark color='#000000' size={20} />
                                                <RiErrorWarningFill color='#2155CD' size={20} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className='documnets4' onClick={() => setModalShow1(true)}>
                                                <IoMdCheckmark color='#000000' size={20} />
                                                <RiErrorWarningFill color='#2155CD' size={20} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className='documnets4' onClick={() => setModalShow2(true)}>
                                                <IoMdCheckmark color='#000000' size={20} />
                                                <RiErrorWarningFill color='#2155CD' size={20} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className='documnets4' onClick={() => setModalShow3(true)}>
                                                <IoMdCheckmark color='#000000' size={20} />
                                                <RiErrorWarningFill color='#2155CD' size={20} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className='documnets4' onClick={() => setModalShow5(true)}>
                                                <IoMdClose color='#000000' size={20} />
                                                <RiErrorWarningFill color='#2155CD' size={20} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className='documnets4' onClick={() => setModalShow6(true)}>
                                                <IoMdCheckmark color='#000000' size={20} />
                                                <RiErrorWarningFill color='#2155CD' size={20} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className='documnets4' onClick={() => setModalShow7(true)}>
                                                <IoMdClose color='#000000' size={20} />
                                                <RiErrorWarningFill color='#2155CD' size={20} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className='documnets4' onClick={() => setModalShow9(true)}>
                                                <IoMdCheckmark color='#000000' size={20} />
                                                <RiErrorWarningFill color='#2155CD' size={20} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className='documnets4' onClick={() => setModalShow10(true)}>
                                                <IoMdCheckmark color='#000000' size={20} />
                                                <RiErrorWarningFill color='#2155CD' size={20} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className='documnets4' onClick={() => setModalShow4(true)}>
                                                <IoMdCheckmark color='#000000' size={20} />
                                                <RiErrorWarningFill color='#2155CD' size={20} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className='documnets4' onClick={() => setModalShow11(true)}>
                                                <IoMdCheckmark color='#000000' size={20} />
                                                <RiErrorWarningFill color='#2155CD' size={20} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className='documnets4' onClick={() => setModalShow8(true)}>
                                                <IoMdCheckmark color='#000000' size={20} />
                                                <RiErrorWarningFill color='#2155CD' size={20} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className='admission14'>
                                                <button onClick={() => setModalShow17(true)}>History</button>
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

export default HOC(Documents)