import React, { useState } from 'react'
import './PaymentReceived.css'
import HOC from '../../Components/HOC/HOC'
import {
    Remarkspayment, PaymentStatus,
    PaymentFilterModalmodal,
    MYDEALSModal,
    PaymentFieldModal,
    AdmissionFollowUp,
    NewTask,
    History,
    NeWLead,
    SMS,
    Email,
    Whatsapp,
    History1,
    FilterModalhistory,
    AddNewEvent,
    PaymentEmailModal,
    PaymentTelgaramModal,
    PaymentSMSModal,
    PaymentWhatsappModal,
    AddNewFilter,
    PropertiesModal,
    NewViewModal,
    Counsellorform,
    CreateDateFieldsModal,
    CreateListFieldsModal,
    CreateYesNOFieldsModal
} from '../Modals/Modals'

import { useNavigate, Link } from 'react-router-dom';
import { MultiSelect } from "react-multi-select-component";

import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from "react-bootstrap";
import { FaTelegram } from "react-icons/fa6";
import { MdSms } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

import Popover from 'react-bootstrap/Popover';
import img from '../../Img/img33.png'
import img19 from '../../Img/img83.png'

const PaymentReceived = () => {
    const navigate = useNavigate();
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

    // paymentStatus Modal 
    const [modalShow1, setModalShow1] = React.useState(false);
    // Filter Modal 

    const [modalShow2, setModalShow2] = React.useState(false);

    // mydeals Modal
    const [modalShow3, setModalShow3] = React.useState(false);

    // add field Modal
    const [modalShow4, setModalShow4] = React.useState(false);



    // Admission Follow Up Modal

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // New Lead Modal

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // History Modal


    const [modalShow5, setModalShow5] = React.useState(false);






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

    const [modalShow6, setModalShow6] = React.useState(false);


    // FilterModalhistory Modal

    const [modalShow7, setModalShow7] = React.useState(false);


    // AddNewEvent Modal

    const [modalShow8, setModalShow8] = React.useState(false);


    // PaymentFieldModal

    const [modalShow9, setModalShow9] = React.useState(false);


    // PaymentEmailModal

    const [modalShow10, setModalShow10] = React.useState(false);


    // PaymentTelgaramModal

    const [modalShow11, setModalShow11] = React.useState(false);

    // PaymentSMSModal

    const [modalShow12, setModalShow12] = React.useState(false);


    // PaymentWhatsappModal
    const [modalShow13, setModalShow13] = React.useState(false);


    // AddNewFilter
    const [modalShow14, setModalShow14] = React.useState(false);

    // property modal
    const [modalShow15, setModalShow15] = React.useState(false);

    // NewView Modal
    const [modalShow16, setModalShow16] = React.useState(false);

    // counsler Modal
    const [modalShow17, setModalShow17] = React.useState(false);


    // CreateDateFieldsModal Modal
    const [modalShow18, setModalShow18] = React.useState(false);

    // CreateListFieldsModal Modal
    const [modalShow19, setModalShow19] = React.useState(false);

    // CreateYesNOFieldsModal Modal
    const [modalShow20, setModalShow20] = React.useState(false);


    const [selected, setSelected] = useState([]);


    const options = [
        {
            label: (
                <>
                    <img src={img19} alt="img19" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                    Loren Epsom
                </>
            ), value: "Loren Epsom1"
        },
        {
            label: (
                <>
                    <img src={img19} alt="img19" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                    Loren Epsom
                </>
            ), value: "Loren Epsom2"
        },
        {
            label: (
                <>
                    <img src={img19} alt="img19" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                    Loren Epsom
                </>
            ), value: "Loren Epsom3"
        },
    ];


    return (
        <>
            <Remarkspayment
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <PaymentStatus
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <PaymentFilterModalmodal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
                setModalShow1={setModalShow3}
                setModalShow2={setModalShow4}
                setModalShow14={setModalShow14}
            />
            <MYDEALSModal
                show={modalShow3}
                onHide={() => setModalShow3(false)}
                setModalShow={setModalShow2}
                setModalShow2={setModalShow4}
                setModalShow7={setModalShow14}
            />
            <PaymentFieldModal
                show={modalShow4}
                onHide={() => setModalShow4(false)}
            />
            <AddNewFilter
                show={modalShow14}
                onHide={() => setModalShow14(false)}
            />
            <AdmissionFollowUp
                show={show}
                onHide={handleClose}
                setModalShow3={setModalShow5}
                handleShow1={handleShow1}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
                setModalShow8={setModalShow15}
                setModalShow9={setModalShow16}
                setModalShow10={setModalShow17}
                setModalShow11={setModalShow18}
                setModalShow12={setModalShow19}
                setModalShow13={setModalShow20}
                title={"Payment"}
            />
            <NeWLead
                show={show1}
                onHide={handleClose1}
                setModalShow3={setModalShow5}
                handleShow={handleShow}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
                setModalShow8={setModalShow17}
            />
            <History
                show={modalShow5}
                onHide={() => setModalShow5(false)}

            />
            <NewTask
                show={show2}
                onHide={handleClose2}
            />
            <SMS
                show={show3}
                onHide={handleClose3}
                setModalShow3={setModalShow5}
                setModalShow8={setModalShow17}
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
                show={modalShow6}
                onHide={() => setModalShow6(false)}
                setModalShow5={setModalShow7}
                setModalShow6={setModalShow8}
            />
            <FilterModalhistory
                show={modalShow7}
                onHide={() => setModalShow7(false)}
            />
            <AddNewEvent
                show={modalShow8}
                onHide={() => setModalShow8(false)}
            />
            <PaymentFieldModal
                show={modalShow9}
                onHide={() => setModalShow9(false)}
            />
            <PaymentEmailModal
                show={modalShow10}
                onHide={() => setModalShow10(false)}
            />
            <PaymentTelgaramModal
                show={modalShow11}
                onHide={() => setModalShow11(false)}
            />
            <PaymentSMSModal
                show={modalShow12}
                onHide={() => setModalShow12(false)}
            />
            <PaymentWhatsappModal
                show={modalShow13}
                onHide={() => setModalShow13(false)}
            />
            <PropertiesModal
                show={modalShow15}
                onHide={() => setModalShow15(false)}
            />
            <NewViewModal
                show={modalShow16}
                onHide={() => setModalShow16(false)}
            />
            <Counsellorform
                show={modalShow17}
                onHide={() => setModalShow17(false)}
                setModalShow8={setModalShow15}
                setModalShow9={setModalShow18}
                setModalShow10={setModalShow19}
                setModalShow11={setModalShow20}
            />

            <CreateDateFieldsModal
                show={modalShow18}
                onHide={() => setModalShow18(false)}
            />
            <CreateListFieldsModal
                show={modalShow19}
                onHide={() => setModalShow19(false)}
            />
            <CreateYesNOFieldsModal
                show={modalShow20}
                onHide={() => setModalShow20(false)}
            />
            <div className='payreceived'>
                <div className='admission1'>
                    <p>Payment</p>
                    <div className='admission2'>
                        <Link to={'/whatsapp'} className='link'>
                            <div className='admission3'>
                                <p>What’s App</p>
                            </div>
                        </Link>
                        <Link to={'/email'} className='link'>
                            <div className='admission4'>
                                <p>Email</p>
                            </div>
                        </Link>
                        <Link to={'/telegram'} className='link'>
                            <div className='admission5'>
                                <p>Telegram</p>
                            </div>
                        </Link>
                        <Link to={'/zoommeeting'} className='link'>
                            <div className='admission6'>
                                <p>Zoom</p>
                            </div>
                        </Link>
                        <Link to={'/voicecall'} className='link'>
                            <div className='admission7'>
                                <p>Voice Call</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='admission8' >
                    <div>
                        <p>Filter</p>
                    </div>
                    <div className='admission9' onClick={() => setModalShow2(true)}>
                        <div className='admission10'>
                            <p>My filter</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>
                    <div className='payreceived1'>
                        <button className='payreceived1button'>Export File</button>
                        <Dropdown>
                            <Dropdown.Toggle variant="none" className="table-icon">
                                <IoIosMore color='#444444' size={20} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <div className='payreceived3' onClick={() => setModalShow10(true)}>
                                        <MdEmail color='#444444' size={20} />
                                        <p>Email</p>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <div className='payreceived3' onClick={() => setModalShow11(true)}>
                                        <FaTelegram color='#444444' size={20} />
                                        <p>Telegram</p>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <div className='payreceived3' onClick={() => setModalShow12(true)}>
                                        <MdSms color='#444444' size={20} />
                                        <p>SMS</p>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <div className='payreceived3' onClick={() => setModalShow13(true)}>
                                        <RiWhatsappFill color='#444444' size={20} />
                                        <p>Whatsapp</p>
                                    </div>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th><IoSettings size={20} onClick={() => setModalShow9(true)} /></th>
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
                                    <th>pay directly to university</th>
                                    <th>Status</th>
                                    <th>History</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td><img src={img} alt="" onClick={handleShow} /></td>
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
                                            <div className='attendanc1'>
                                                <div className='attendanc2'>
                                                    <input type="radio" name='status' />
                                                    <label htmlFor="" style={{ color: "#40AF0C" }}>Yes</label>
                                                </div>
                                                <div className='attendanc2'>
                                                    <input type="radio" name='status' />
                                                    <label htmlFor="" style={{ color: "#FF0000" }}>No</label>
                                                </div>
                                                <div className='attendanc2'>
                                                    <input type="radio" name='status' />
                                                    <label htmlFor="" style={{ color: "#FFB800" }}>N/A</label>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='admission14' onClick={() => setModalShow1(true)}>
                                                <button>{data.status}</button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='admission14'>
                                                <button onClick={() => setModalShow6(true)}>History</button>
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

                <div className='admission15'>
                    <div className='admission16'>
                        <p>START DIALING</p>
                    </div>
                    <div className='admission16'>
                        <select name="" id="">
                            <option value="">Select Action</option>
                            <option value="">Assign Responsible Person</option>
                            <option value="">Assign Service Manager</option>
                            <option value="" onClick={() => navigate('/paymentreceived')}>Assign Backend Person</option>
                        </select>
                    </div>
                    <div className='admission16'>
                        <MultiSelect
                            options={options}
                            value={selected}
                            onChange={setSelected}
                            labelledBy="Select"
                            className='admission1666'
                        />
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