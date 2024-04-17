import React, { useRef } from 'react'
import HOC from '../../Components/HOC/HOC'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
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


    const fileInputRef = useRef(null);

    // Function to handle the click event on your custom element
    const handleClick = () => {
        // Trigger the click event on the file input element
        fileInputRef.current.click();
    };

    // Function to handle the file change event
    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            // Handle file upload here
            console.log('Files selected:', files);
        }
    };
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


    // MarksheetUpload Modal 


    const [modalShow, setModalShow] = React.useState(false);



    function MarksheetUpload(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Modal.Header closeButton className='MarksheetUploadmodal2' >
                        <Modal.Title className='MarksheetUploadmodal1'>Marksheet</Modal.Title>
                    </Modal.Header>

                    <div className='MarksheetUploadmodal3'>
                        <div className='MarksheetUploadmodal4'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Batch</label>
                                <select name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Status</label>
                                <select name="" id="">
                                    <option value="">None</option>
                                    <option value="">Applied</option>
                                    <option value="">Available</option>
                                    <option value="">Not Available</option>
                                    <option value="">Sent</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">File</label>
                                <div className='MarksheetUploadmodal6' onClick={handleClick}>
                                    <input
                                        type="file"
                                        ref={fileInputRef} // Use the ref to control the file input
                                        style={{ display: 'none' }} // Hide the file input
                                        onChange={handleFileChange} // Handle file changes
                                    />
                                    <img src={img2} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal8'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Comment</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal7'>
                            <button onClick={() => setModalShow(false)}>SAVE</button>
                            <button onClick={() => setModalShow(false)}>CANCEL</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        );
    }


    // ID Card Upload Modal 


    const [modalShow1, setModalShow1] = React.useState(false);



    function IDCardUpload(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Modal.Header closeButton className='MarksheetUploadmodal2' >
                        <Modal.Title className='MarksheetUploadmodal1'>ID Card</Modal.Title>
                    </Modal.Header>

                    <div className='MarksheetUploadmodal3'>
                        <div className='MarksheetUploadmodal4'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Batch</label>
                                <select name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Status</label>
                                <select name="" id="">
                                    <option value="">None</option>
                                    <option value="">Applied</option>
                                    <option value="">Available</option>
                                    <option value="">Not Available</option>
                                    <option value="">Sent</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">File</label>
                                <div className='MarksheetUploadmodal6' onClick={handleClick}>
                                    <input
                                        type="file"
                                        ref={fileInputRef} // Use the ref to control the file input
                                        style={{ display: 'none' }} // Hide the file input
                                        onChange={handleFileChange} // Handle file changes
                                    />
                                    <img src={img2} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal8'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Comment</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal7'>
                            <button onClick={() => setModalShow(false)}>SAVE</button>
                            <button onClick={() => setModalShow(false)}>CANCEL</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        );
    }


    // Admit Card Upload Modal 


    const [modalShow2, setModalShow2] = React.useState(false);


    function AdmitCardUpload(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Modal.Header closeButton className='MarksheetUploadmodal2' >
                        <Modal.Title className='MarksheetUploadmodal1'>Admit Card</Modal.Title>
                    </Modal.Header>

                    <div className='MarksheetUploadmodal3'>
                        <div className='MarksheetUploadmodal4'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Batch</label>
                                <select name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Status</label>
                                <select name="" id="">
                                    <option value="">None</option>
                                    <option value="">Applied</option>
                                    <option value="">Available</option>
                                    <option value="">Not Available</option>
                                    <option value="">Sent</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">File</label>
                                <div className='MarksheetUploadmodal6' onClick={handleClick}>
                                    <input
                                        type="file"
                                        ref={fileInputRef} // Use the ref to control the file input
                                        style={{ display: 'none' }} // Hide the file input
                                        onChange={handleFileChange} // Handle file changes
                                    />
                                    <img src={img2} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal8'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Comment</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal7'>
                            <button onClick={() => setModalShow(false)}>SAVE</button>
                            <button onClick={() => setModalShow(false)}>CANCEL</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        );
    }



    // Result Status Upload Modal 


    const [modalShow3, setModalShow3] = React.useState(false);


    function ResultStatusUpload(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Modal.Header closeButton className='MarksheetUploadmodal2' >
                        <Modal.Title className='MarksheetUploadmodal1'>Result Status</Modal.Title>
                    </Modal.Header>

                    <div className='MarksheetUploadmodal3'>
                        <div className='MarksheetUploadmodal4'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Batch</label>
                                <select name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Status</label>
                                <select name="" id="">
                                    <option value="">None</option>
                                    <option value="">Applied</option>
                                    <option value="">Available</option>
                                    <option value="">Not Available</option>
                                    <option value="">Sent</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">File</label>
                                <div className='MarksheetUploadmodal6' onClick={handleClick}>
                                    <input
                                        type="file"
                                        ref={fileInputRef} // Use the ref to control the file input
                                        style={{ display: 'none' }} // Hide the file input
                                        onChange={handleFileChange} // Handle file changes
                                    />
                                    <img src={img2} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal8'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Comment</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal7'>
                            <button onClick={() => setModalShow(false)}>SAVE</button>
                            <button onClick={() => setModalShow(false)}>CANCEL</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        );
    }


    // Transcript Upload Modal 


    const [modalShow4, setModalShow4] = React.useState(false);


    function TranscriptUpload(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Modal.Header closeButton className='MarksheetUploadmodal2' >
                        <Modal.Title className='MarksheetUploadmodal1'>Transcript</Modal.Title>
                    </Modal.Header>

                    <div className='MarksheetUploadmodal3'>
                        <div className='MarksheetUploadmodal4'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Batch</label>
                                <select name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Status</label>
                                <select name="" id="">
                                    <option value="">None</option>
                                    <option value="">Applied</option>
                                    <option value="">Available</option>
                                    <option value="">Not Available</option>
                                    <option value="">Sent</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">File</label>
                                <div className='MarksheetUploadmodal6' onClick={handleClick}>
                                    <input
                                        type="file"
                                        ref={fileInputRef} // Use the ref to control the file input
                                        style={{ display: 'none' }} // Hide the file input
                                        onChange={handleFileChange} // Handle file changes
                                    />
                                    <img src={img2} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal8'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Comment</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal7'>
                            <button onClick={() => setModalShow(false)}>SAVE</button>
                            <button onClick={() => setModalShow(false)}>CANCEL</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        );
    }


    // Admission Letter Upload Modal 


    const [modalShow5, setModalShow5] = React.useState(false);


    function AdmissionLetterUpload(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Modal.Header closeButton className='MarksheetUploadmodal2' >
                        <Modal.Title className='MarksheetUploadmodal1'>Admission Letter</Modal.Title>
                    </Modal.Header>

                    <div className='MarksheetUploadmodal3'>
                        <div className='MarksheetUploadmodal4'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Batch</label>
                                <select name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Status</label>
                                <select name="" id="">
                                    <option value="">None</option>
                                    <option value="">Applied</option>
                                    <option value="">Available</option>
                                    <option value="">Not Available</option>
                                    <option value="">Sent</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">File</label>
                                <div className='MarksheetUploadmodal6' onClick={handleClick}>
                                    <input
                                        type="file"
                                        ref={fileInputRef} // Use the ref to control the file input
                                        style={{ display: 'none' }} // Hide the file input
                                        onChange={handleFileChange} // Handle file changes
                                    />
                                    <img src={img2} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal8'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Comment</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal7'>
                            <button onClick={() => setModalShow(false)}>SAVE</button>
                            <button onClick={() => setModalShow(false)}>CANCEL</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        );
    }


    // Certificate Upload Modal 


    const [modalShow6, setModalShow6] = React.useState(false);


    function CertificateUpload(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Modal.Header closeButton className='MarksheetUploadmodal2' >
                        <Modal.Title className='MarksheetUploadmodal1'>Certificate</Modal.Title>
                    </Modal.Header>

                    <div className='MarksheetUploadmodal3'>
                        <div className='MarksheetUploadmodal4'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Batch</label>
                                <select name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Status</label>
                                <select name="" id="">
                                    <option value="">None</option>
                                    <option value="">Applied</option>
                                    <option value="">Available</option>
                                    <option value="">Not Available</option>
                                    <option value="">Sent</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">File</label>
                                <div className='MarksheetUploadmodal6' onClick={handleClick}>
                                    <input
                                        type="file"
                                        ref={fileInputRef} // Use the ref to control the file input
                                        style={{ display: 'none' }} // Hide the file input
                                        onChange={handleFileChange} // Handle file changes
                                    />
                                    <img src={img2} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal8'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Comment</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal7'>
                            <button onClick={() => setModalShow(false)}>SAVE</button>
                            <button onClick={() => setModalShow(false)}>CANCEL</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        );
    }


    // Provisional Upload Modal 


    const [modalShow7, setModalShow7] = React.useState(false);


    function ProvisionalUpload(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Modal.Header closeButton className='MarksheetUploadmodal2' >
                        <Modal.Title className='MarksheetUploadmodal1'>Provisional</Modal.Title>
                    </Modal.Header>

                    <div className='MarksheetUploadmodal3'>
                        <div className='MarksheetUploadmodal4'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Batch</label>
                                <select name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Status</label>
                                <select name="" id="">
                                    <option value="">None</option>
                                    <option value="">Applied</option>
                                    <option value="">Available</option>
                                    <option value="">Not Available</option>
                                    <option value="">Sent</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">File</label>
                                <div className='MarksheetUploadmodal6' onClick={handleClick}>
                                    <input
                                        type="file"
                                        ref={fileInputRef} // Use the ref to control the file input
                                        style={{ display: 'none' }} // Hide the file input
                                        onChange={handleFileChange} // Handle file changes
                                    />
                                    <img src={img2} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal8'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Comment</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal7'>
                            <button onClick={() => setModalShow(false)}>SAVE</button>
                            <button onClick={() => setModalShow(false)}>CANCEL</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        );
    }


    // Other Document Apply Modal 


    const [modalShow8, setModalShow8] = React.useState(false);


    function OtherDocumentApply(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Modal.Header closeButton className='MarksheetUploadmodal2' >
                        <Modal.Title className='MarksheetUploadmodal1'>Other Document Apply</Modal.Title>
                    </Modal.Header>

                    <div className='MarksheetUploadmodal3'>
                        <div className='MarksheetUploadmodal4'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Batch</label>
                                <select name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Status</label>
                                <select name="" id="">
                                    <option value="">None</option>
                                    <option value="">Applied</option>
                                    <option value="">Available</option>
                                    <option value="">Not Available</option>
                                    <option value="">Sent</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">File</label>
                                <div className='MarksheetUploadmodal6' onClick={handleClick}>
                                    <input
                                        type="file"
                                        ref={fileInputRef} // Use the ref to control the file input
                                        style={{ display: 'none' }} // Hide the file input
                                        onChange={handleFileChange} // Handle file changes
                                    />
                                    <img src={img2} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal8'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Comment</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal7'>
                            <button onClick={() => setModalShow(false)}>SAVE</button>
                            <button onClick={() => setModalShow(false)}>CANCEL</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        );
    }


    // Migration Upload Modal 


    const [modalShow9, setModalShow9] = React.useState(false);


    function MigrationUpload(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Modal.Header closeButton className='MarksheetUploadmodal2' >
                        <Modal.Title className='MarksheetUploadmodal1'>Migration</Modal.Title>
                    </Modal.Header>

                    <div className='MarksheetUploadmodal3'>
                        <div className='MarksheetUploadmodal4'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Batch</label>
                                <select name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Status</label>
                                <select name="" id="">
                                    <option value="">None</option>
                                    <option value="">Applied</option>
                                    <option value="">Available</option>
                                    <option value="">Not Available</option>
                                    <option value="">Sent</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">File</label>
                                <div className='MarksheetUploadmodal6' onClick={handleClick}>
                                    <input
                                        type="file"
                                        ref={fileInputRef} // Use the ref to control the file input
                                        style={{ display: 'none' }} // Hide the file input
                                        onChange={handleFileChange} // Handle file changes
                                    />
                                    <img src={img2} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal8'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Comment</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal7'>
                            <button onClick={() => setModalShow(false)}>SAVE</button>
                            <button onClick={() => setModalShow(false)}>CANCEL</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        );
    }


    // Degree Upload Modal 


    const [modalShow10, setModalShow10] = React.useState(false);


    function DegreeUpload(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Modal.Header closeButton className='MarksheetUploadmodal2' >
                        <Modal.Title className='MarksheetUploadmodal1'>Degree</Modal.Title>
                    </Modal.Header>

                    <div className='MarksheetUploadmodal3'>
                        <div className='MarksheetUploadmodal4'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Batch</label>
                                <select name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Status</label>
                                <select name="" id="">
                                    <option value="">None</option>
                                    <option value="">Applied</option>
                                    <option value="">Available</option>
                                    <option value="">Not Available</option>
                                    <option value="">Sent</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">File</label>
                                <div className='MarksheetUploadmodal6' onClick={handleClick}>
                                    <input
                                        type="file"
                                        ref={fileInputRef} // Use the ref to control the file input
                                        style={{ display: 'none' }} // Hide the file input
                                        onChange={handleFileChange} // Handle file changes
                                    />
                                    <img src={img2} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal8'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Comment</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal7'>
                            <button onClick={() => setModalShow(false)}>SAVE</button>
                            <button onClick={() => setModalShow(false)}>CANCEL</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        );
    }


    // Attestation Upload Modal 


    const [modalShow11, setModalShow11] = React.useState(false);


    function AttestationUpload(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Modal.Header closeButton className='MarksheetUploadmodal2' >
                        <Modal.Title className='MarksheetUploadmodal1'>Attestation</Modal.Title>
                    </Modal.Header>

                    <div className='MarksheetUploadmodal3'>
                        <div className='MarksheetUploadmodal4'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Batch</label>
                                <select name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Status</label>
                                <select name="" id="">
                                    <option value="">None</option>
                                    <option value="">Applied</option>
                                    <option value="">Available</option>
                                    <option value="">Not Available</option>
                                    <option value="">Sent</option>
                                </select>
                            </div>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">File</label>
                                <div className='MarksheetUploadmodal6' onClick={handleClick}>
                                    <input
                                        type="file"
                                        ref={fileInputRef} // Use the ref to control the file input
                                        style={{ display: 'none' }} // Hide the file input
                                        onChange={handleFileChange} // Handle file changes
                                    />
                                    <img src={img2} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal8'>
                            <div className='MarksheetUploadmodal5'>
                                <label htmlFor="">Comment</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>

                        <div className='MarksheetUploadmodal7'>
                            <button onClick={() => setModalShow(false)}>SAVE</button>
                            <button onClick={() => setModalShow(false)}>CANCEL</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        );
    }






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
            <div className='backend'>
                <div className='admission1'>
                    <p>Documents</p>
                </div>


                <div className='documnets1'>
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
                                    <th><IoSettings size={20} /> Admission No</th>
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
                                            <div className='documnets4'  onClick={() => setModalShow3(true)}>
                                                <IoMdCheckmark color='#000000' size={20} />
                                                <RiErrorWarningFill color='#2155CD' size={20} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className='documnets4'  onClick={() => setModalShow5(true)}>
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

export default HOC(Documents)