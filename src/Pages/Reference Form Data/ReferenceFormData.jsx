import React, { useState } from 'react'
import './ReferenceFormData.css'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import HOC from '../../Components/HOC/HOC'
import { GrCircleInformation } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate, Link } from 'react-router-dom';

import img from '../../Img/img33.png'
import img1 from '../../Img/img78.png'

import {
    ReferenceFormDataFilterModal,
    MYDEALSModal,
    AddFieldModal,
    History,
    AdmissionFollowUp,
    NewTask,
    NeWLead,
    SMS,
    Email,
    Whatsapp,
    History1,
    FilterModalhistory,
    AddNewEvent,
    PropertiesModal,
    NewViewModal,
    Counsellorform
} from '../Modals/Modals.jsx'

const ReferenceFormData = () => {
    const navigate = useNavigate();

    const tableData = [
        {
            id: 1,
            ID: '0123',
            CandidateName: 'Ipsum',
            MobileNo: '1234567890',
            EmailID: 'loremipsum@gmail.com',
            Country: "Lorem Ipsum",
            State: 'Lorem Ipsum',
            City: 'Lorem Ipsum',
            Remarks: 'Lorem Ipsum sdfe terer',
            Course: "B.A ( Lorem Ipsum )",
            Status: "In Process",
            Details: "Lorem Ipsum sdfe terer",
            ResponsiblePerson: "Lorem Ipsum",
        },

        {
            id: 1,
            ID: '0123',
            CandidateName: 'Ipsum',
            MobileNo: '1234567890',
            EmailID: 'loremipsum@gmail.com',
            Country: "Lorem Ipsum",
            State: 'Lorem Ipsum',
            City: 'Lorem Ipsum',
            Remarks: 'Lorem Ipsum sdfe terer',
            Course: "B.A ( Lorem Ipsum )",
            Status: "In Process",
            Details: "Lorem Ipsum sdfe terer",
            ResponsiblePerson: "Lorem Ipsum",
        },
        {
            id: 1,
            ID: '0123',
            CandidateName: 'Ipsum',
            MobileNo: '1234567890',
            EmailID: 'loremipsum@gmail.com',
            Country: "Lorem Ipsum",
            State: 'Lorem Ipsum',
            City: 'Lorem Ipsum',
            Remarks: 'Lorem Ipsum sdfe terer',
            Course: "B.A ( Lorem Ipsum )",
            Status: "In Process",
            Details: "Lorem Ipsum sdfe terer",
            ResponsiblePerson: "Lorem Ipsum",
        },
        {
            id: 1,
            ID: '0123',
            CandidateName: 'Ipsum',
            MobileNo: '1234567890',
            EmailID: 'loremipsum@gmail.com',
            Country: "Lorem Ipsum",
            State: 'Lorem Ipsum',
            City: 'Lorem Ipsum',
            Remarks: 'Lorem Ipsum sdfe terer',
            Course: "B.A ( Lorem Ipsum )",
            Status: "In Process",
            Details: "Lorem Ipsum sdfe terer",
            ResponsiblePerson: "Lorem Ipsum",
        },
        {
            id: 1,
            ID: '0123',
            CandidateName: 'Ipsum',
            MobileNo: '1234567890',
            EmailID: 'loremipsum@gmail.com',
            Country: "Lorem Ipsum",
            State: 'Lorem Ipsum',
            City: 'Lorem Ipsum',
            Remarks: 'Lorem Ipsum sdfe terer',
            Course: "B.A ( Lorem Ipsum )",
            Status: "In Process",
            Details: "Lorem Ipsum sdfe terer",
            ResponsiblePerson: "Lorem Ipsum",
        },
        {
            id: 1,
            ID: '0123',
            CandidateName: 'Ipsum',
            MobileNo: '1234567890',
            EmailID: 'loremipsum@gmail.com',
            Country: "Lorem Ipsum",
            State: 'Lorem Ipsum',
            City: 'Lorem Ipsum',
            Remarks: 'Lorem Ipsum sdfe terer',
            Course: "B.A ( Lorem Ipsum )",
            Status: "In Process",
            Details: "Lorem Ipsum sdfe terer",
            ResponsiblePerson: "Lorem Ipsum",
        },

    ];


    // Status Modal 


    const [modalShow, setModalShow] = React.useState(false);




    // Filter Modal 

    const [modalShow11, setModalShow11] = React.useState(false);

    // mydeals Modal
    const [modalShow12, setModalShow12] = React.useState(false);

    // add field Modal
    const [modalShow2, setModalShow2] = React.useState(false);

    function Status(props) {


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
                            <IoIosCloseCircleOutline color='#000000' size={25} onClick={() => setModalShow(false)} />
                        </div>


                        <div className='paymentstatusModal1'>
                            <h6>Select Status</h6>
                            <div className='paymentstatusModal2'>
                                <div className='paymentstatusModal3'>
                                    <input type="radio" name='pending' />
                                    <div className='paymentstatusModal4' style={{ backgroundColor: "#FFB800" }}>
                                        <p>In Process</p>
                                    </div>
                                </div>
                                <div className='paymentstatusModal3'>
                                    <input type="radio" name='pending' />
                                    <div className='paymentstatusModal4' style={{ backgroundColor: "#40AF0C" }}>
                                        <p>Approved</p>
                                    </div>
                                </div>
                                <div className='paymentstatusModal3'>
                                    <input type="radio" name='pending' />
                                    <div className='paymentstatusModal4' style={{ backgroundColor: "#FF0000" }}>
                                        <p>Rejected</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='paymentstatusModal5'>
                            <h6>Details</h6>

                            <textarea name="" id="" cols="30" rows="10" placeholder='Write your Details Here.......'></textarea>
                        </div>

                        <div className='paymentstatusModal6'>
                            <button onClick={() => setModalShow(false)}>SUBMIT</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    // Reference Person Details Modal 


    const [modalShow1, setModalShow1] = React.useState(false);




    // History Modal
    const [modalShow3, setModalShow3] = React.useState(false);
    function ReferencePerson(props) {


        return (
            <Modal
                {...props}
                size="sl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body >
                    <div className='referencepersonModal'>
                        <div className='referencepersonModal1'>
                            <h6>Reference Person Details</h6>
                            <IoIosCloseCircleOutline size={30} color='#000000' onClick={() => setModalShow1(false)} />
                        </div>

                        <div className='referencepersonModal2'>
                            <div className='referencepersonModal3'>
                                <p>Reference Given By :</p>
                                <div className='referencepersonModal4'>
                                    <img src={img1} alt="" />
                                    <p>Lorem Ipsum</p>
                                </div>
                            </div>
                            <div className='referencepersonModal3'>
                                <p>Reference’s Admission No. :</p>
                                <div className='referencepersonModal4'>
                                    <p>012345</p>
                                </div>
                            </div>
                            <div className='referencepersonModal3'>
                                <p>Reference’s Email ID :</p>
                                <div className='referencepersonModal4'>
                                    <p>loremipsum@gmail.com</p>
                                </div>
                            </div>
                            <div className='referencepersonModal3'>
                                <p>Reference’s Mobile No. :</p>
                                <div className='referencepersonModal4'>
                                    <p>+91 1234567890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }




    // Admission Follow Up Modal

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // New Lead Modal

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

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

    // History Modal

    const [modalShow4, setModalShow4] = React.useState(false);


    // FilterModalhistory Modal

    const [modalShow5, setModalShow5] = React.useState(false);


    // AddNewEvent Modal

    const [modalShow6, setModalShow6] = React.useState(false);

    // property modal
    const [modalShow8, setModalShow8] = React.useState(false);

    // NewView Modal
    const [modalShow9, setModalShow9] = React.useState(false);

    // counsler Modal
    const [modalShow10, setModalShow10] = React.useState(false);

    return (
        <>
            <Status
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <ReferencePerson
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />

            <ReferenceFormDataFilterModal
                show={modalShow11}
                onHide={() => setModalShow11(false)}
                setModalShow1={setModalShow12}
                setModalShow2={setModalShow2}
            />
            <MYDEALSModal
                show={modalShow12}
                onHide={() => setModalShow12(false)}
                setModalShow={setModalShow11}
                setModalShow2={setModalShow2}
            />
            <AddFieldModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <History
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />
            <AdmissionFollowUp
                show={show}
                onHide={handleClose}
                setModalShow3={setModalShow3}
                handleShow1={handleShow1}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
                setModalShow8={setModalShow8}
                setModalShow9={setModalShow9}
                setModalShow10={setModalShow10}
                title={"Reference Form"}
            />
            <NeWLead
                show={show1}
                onHide={handleClose1}
                setModalShow3={setModalShow3}
                handleShow={handleShow}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
                setModalShow8={setModalShow10}
            />
            <NewTask
                show={show2}
                onHide={handleClose2}
            />
            <SMS
                show={show3}
                onHide={handleClose3}
                setModalShow3={setModalShow3}
                setModalShow8={setModalShow10}
                handleShow1={handleShow1}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
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
                show={modalShow4}
                onHide={() => setModalShow4(false)}
                setModalShow5={setModalShow5}
                setModalShow6={setModalShow6}
            />
            <FilterModalhistory
                show={modalShow5}
                onHide={() => setModalShow5(false)}
            />
            <AddNewEvent
                show={modalShow6}
                onHide={() => setModalShow6(false)}
            />
            <PropertiesModal
                show={modalShow8}
                onHide={() => setModalShow8(false)}
            />
            <NewViewModal
                show={modalShow9}
                onHide={() => setModalShow9(false)}
            />
            <Counsellorform
                show={modalShow10}
                onHide={() => setModalShow10(false)}
                setModalShow8={setModalShow8}
            />
            <div className='cancel'>
                <div className='admission1'>
                    <p>Reference Form</p>
                </div>



                <div className='targetanalysis2' onClick={() => setModalShow11(true)}>
                    <div className='targetanalysis1'>
                        <p>Filters</p>
                    </div>

                    <div className='admission2'>
                        <div className='cancel1'>
                            <p>EXPORT CSV FILE</p>
                        </div>
                    </div>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th><IoSettings size={20} onClick={() => setModalShow2(true)} /></th>
                                    <th>ID</th>
                                    <th>Candidate Name</th>
                                    <th>Mobile No.</th>
                                    <th>Email ID</th>
                                    <th>Country</th>
                                    <th>State</th>
                                    <th>City</th>
                                    <th>Remarks</th>
                                    <th>Course</th>
                                    <th>Status</th>
                                    <th>Details</th>
                                    <th>Responsible Person</th>
                                    <th>Reference Details</th>
                                    <th>History</th>
                                </tr>


                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td><img src={img} alt="" onClick={handleShow} /></td>
                                        <td>{data.ID}</td>
                                        <td>{data.CandidateName}</td>
                                        <td>{data.MobileNo}</td>
                                        <td>{data.EmailID}</td>
                                        <td>{data.Country}</td>
                                        <td>{data.State}</td>
                                        <td>{data.City}</td>
                                        <td>{data.Remarks}</td>
                                        <td>{data.Course}</td>
                                        <td>
                                            <div className='referenceformdata2' onClick={() => setModalShow(true)}>
                                                <p>{data.Status}</p>
                                            </div>
                                        </td>
                                        <td>{data.Details}</td>
                                        <td>{data.ResponsiblePerson}</td>
                                        <td>
                                            <div className='referenceformdata1' >
                                                <button onClick={() => setModalShow1(true)}><GrCircleInformation color='#FFFFFF' size={18} /> VIEW</button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='admission14'>
                                                <button onClick={() => setModalShow4(true)}>History</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className='referenceformdata3'>
                    <div className='referenceformdata4'>
                        <p>START DIALING</p>
                    </div>
                    <select name="" id="">
                        <option value="">ASSIGN RESPONSIBLE PERSON</option>
                    </select>
                    <select name="" id="">
                        <option value="">USERS</option>
                    </select>

                    <button>APPLY</button>
                    <div className='referenceformdata5'>
                        <input type="checkbox" />
                        <p>For all</p>
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

export default HOC(ReferenceFormData)