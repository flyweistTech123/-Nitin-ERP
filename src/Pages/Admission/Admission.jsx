import React, { useEffect, useState } from 'react';
import './Admission.css'
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosMore } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoReloadSharp } from "react-icons/io5";
import { ImLink } from "react-icons/im";
import { MdOutlineCancel } from "react-icons/md";
import { PiUserCircleFill } from "react-icons/pi";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { RiErrorWarningFill } from "react-icons/ri";
import { PiTagSimpleFill } from "react-icons/pi";
import { IoMdInformation } from "react-icons/io";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineAttachFile } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdClose } from "react-icons/io";





import { useNavigate } from 'react-router-dom';
import img from '../../Img/img59.png'
import img1 from '../../Img/img60.png'
import img2 from '../../Img/img61.png'
import img3 from '../../Img/img62.png'
import img4 from '../../Img/img63.png'
import img5 from '../../Img/img64.png'
import img6 from '../../Img/img65.png'
import img7 from '../../Img/img71.png'
import { GoListUnordered } from "react-icons/go";
import { MdFormatListNumbered } from "react-icons/md";
import { RiDoubleQuotesR } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";
import img8 from '../../Img/img33.png'
import { Link } from 'react-router-dom';


const Admission = () => {
    const navigate = useNavigate();
    const tableData = [
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            admissionDate: 'DD/MM/YYYY',
            feesPaid: 'RS.100,000',
            paidDate: 'DD/MM/YYYY',
            history: 'History'
        },

        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            admissionDate: 'DD/MM/YYYY',
            feesPaid: 'RS.100,000',
            paidDate: 'DD/MM/YYYY',
            history: 'History'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            admissionDate: 'DD/MM/YYYY',
            feesPaid: 'RS.100,000',
            paidDate: 'DD/MM/YYYY',
            history: 'History'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            admissionDate: 'DD/MM/YYYY',
            feesPaid: 'RS.100,000',
            paidDate: 'DD/MM/YYYY',
            history: 'History'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            admissionDate: 'DD/MM/YYYY',
            feesPaid: 'RS.100,000',
            paidDate: 'DD/MM/YYYY',
            history: 'History'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            admissionDate: 'DD/MM/YYYY',
            feesPaid: 'RS.100,000',
            paidDate: 'DD/MM/YYYY',
            history: 'History'
        },

    ];
    const tableData1 = [
        {
            id: 1,
            Date: 'today, 4:32pm',
            CreatedBy: 'dhiraj rajput',
            EventType: 'Stage Changed',
            Description: 'Process for Admission + Lead in Progress ',
        },

        {
            id: 1,
            Date: 'today, 4:32pm',
            CreatedBy: 'dhiraj rajput',
            EventType: 'Stage Changed',
            Description: 'Process for Admission + Lead in Progress ',
        },
        {
            id: 1,
            Date: 'today, 4:32pm',
            CreatedBy: 'dhiraj rajput',
            EventType: 'Stage Changed',
            Description: 'Process for Admission + Lead in Progress ',
        },
        {
            id: 1,
            Date: 'today, 4:32pm',
            CreatedBy: 'dhiraj rajput',
            EventType: 'Stage Changed',
            Description: 'Process for Admission + Lead in Progress ',
        },
        {
            id: 1,
            Date: 'today, 4:32pm',
            CreatedBy: 'dhiraj rajput',
            EventType: 'Stage Changed',
            Description: 'Process for Admission + Lead in Progress ',
        },
        {
            id: 1,
            Date: 'today, 4:32pm',
            CreatedBy: 'dhiraj rajput',
            EventType: 'Stage Changed',
            Description: 'Process for Admission + Lead in Progress ',
        },

    ];




    // Filter Modal 

    const [modalShow, setModalShow] = React.useState(false);


    const handleModals = () => {
        setModalShow(true)
        setModalShow1(false)
    }



    function FilterModal(props) {
        const [step, setStep] = useState(0);


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className="no-padding">
                    <div className='filter1'>
                        <div className='filter2'>
                            <div className='filter3'>
                                <p>FILTERS</p>
                            </div>

                            <div className='filter4'>
                                <p>DEALS IN PROGRESS</p>
                            </div>
                            <div className='filter5' onClick={() => setModalShow1(true)}>
                                <p>MY DEALS</p>
                            </div>

                            <div className='filter6'>
                                <p>+Save Filter</p>
                            </div>
                        </div>
                        <div className='filter7'>
                            <div className='filter8'>
                                <div className={step === 0 ? "filter9" : "filter10"} onClick={() => setStep(0)}>
                                    <p>Personal Details</p>
                                </div>
                                <div className={step === 1 ? "filter9" : "filter10"} onClick={() => setStep(1)}>
                                    <p>Payment Details</p>
                                </div>
                            </div>
                            {step === 0 ? (
                                <div className='filter11'>
                                    <div className='filter12'>
                                        <label htmlFor="">Application no/ Name/ Emil Id/ Mobile No.</label>
                                        <input type="text" />
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Date of birth</label>
                                        <input type="date" />
                                    </div>

                                    <div className='filter12'>
                                        <label htmlFor="">University</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Category</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Nationality</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Blood Group</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">State</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">District</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">City</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Religion</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Marital Status</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Minority Belonging</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Employment Status</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Domicile</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">ID Proof type</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Study Medium</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Assignment Type</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Free Date for Verification</label>
                                        <input type="date" />
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Reverification</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Enrollment Number</label>
                                        <input type="text" />
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Admission Confirmation </label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Admission Confirmation Status</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Admission Date</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Assign Backend Person</label>
                                        <input type="text" />
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Assign Service Person</label>
                                        <input type="text" />
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Fee Structure Type</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Admission Confirm Status</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>


                                    <div className='filter14'>
                                        <h6>EXAM BATCH</h6>

                                        <div className='filter15'>
                                            <div className='filter16'>
                                                <label htmlFor="">Month</label>
                                                <select name="" id="">
                                                    <option value=""></option>
                                                    <option value="">January</option>
                                                    <option value="">February</option>
                                                    <option value="">March</option>
                                                    <option value="">April</option>
                                                    <option value="">May</option>
                                                    <option value="">June</option>
                                                    <option value="">July</option>
                                                    <option value="">August</option>
                                                    <option value="">September</option>
                                                    <option value="">October</option>
                                                    <option value="">November</option>
                                                    <option value="">December</option>
                                                </select>
                                            </div>
                                            <div className='filter16'>
                                                <label htmlFor="">Year</label>
                                                <select name="" id="">
                                                    <option value=""></option>
                                                    <option value="">2023</option>
                                                    <option value="">2022</option>
                                                    <option value="">2021</option>
                                                    <option value="">2020</option>
                                                    <option value="">2019</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='filter17'>
                                        <label htmlFor="">Documents Previous Board Approved or not</label>
                                        <div className='filter177'>
                                            <div className='filter18'>
                                                <input type="radio" name="" id="" />
                                                <label htmlFor="">Yes</label>
                                            </div>
                                            <div className='filter18'>
                                                <input type="radio" name="" id="" />
                                                <label htmlFor="">No</label>
                                            </div>
                                        </div>

                                    </div>


                                    <div className='filter19'>
                                        <p onClick={() => setModalShow2(true)}>Add Field</p>
                                        <span>Restore default fields </span>
                                    </div>

                                    <div className='filter20'>
                                        <button onClick={() => setModalShow(false)}>SAVE</button>
                                        <button onClick={() => setModalShow(false)}>RESET</button>
                                    </div>


                                </div>
                            ) : step === 1 ? (
                                <div className='filter11'>
                                    <div className='filter12'>
                                        <label htmlFor="">Responsible Person</label>
                                        <input type="text" />
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Payment Confirmation</label>
                                        <div className='filter21'>
                                            <p>Not Specified</p>
                                            <IoIosArrowDown color='#444444' />
                                        </div>
                                    </div>

                                    <div className='filter12'>
                                        <label htmlFor="">Payment Approved Date</label>
                                        <div className='filter21'>
                                            <p>Any Date</p>
                                            <IoIosArrowDown color='#444444' />
                                        </div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Book Fees (Batch)</label>
                                        <div className='filter21'>
                                            <p>Batch 1</p>
                                            <IoIosArrowDown color='#444444' />
                                        </div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Exact Value</label>
                                        <div className='filter22'>
                                            <select name="" id="">
                                                <option value="">Exact Value</option>
                                            </select>
                                            <input type="text" />
                                            <IoIosMore color='#444444' size={25} />
                                        </div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Course Fees (Batch)</label>
                                        <div className='filter21'>
                                            <p>Exact Value</p>
                                            <IoIosArrowDown color='#444444' />
                                        </div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Exam Fees</label>
                                        <div className='filter21'>
                                            <p>Exact Value</p>
                                            <IoIosArrowDown color='#444444' />
                                        </div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Paid Fees</label>
                                        <div className='filter21'>
                                            <p>Exact Value</p>
                                            <IoIosArrowDown color='#444444' />
                                        </div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Assignement Fees</label>
                                        <div className='filter21'>
                                            <p>Exact Value</p>
                                            <IoIosArrowDown color='#444444' />
                                        </div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">GST (Batch)</label>
                                        <div className='filter21'>
                                            <p>Exact Value</p>
                                            <IoIosArrowDown color='#444444' />
                                        </div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Other</label>
                                        <div className='filter21'>
                                            <p>Exact Value</p>
                                            <IoIosArrowDown color='#444444' />
                                        </div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">TOC</label>
                                        <div className='filter21'>
                                            <p>Exact Value</p>
                                            <IoIosArrowDown color='#444444' />
                                        </div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Reg</label>
                                        <div className='filter21'>
                                            <p>Exact Value</p>
                                            <IoIosArrowDown color='#444444' />
                                        </div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">LE</label>
                                        <div className='filter21'>
                                            <p>Exact Value</p>
                                            <IoIosArrowDown color='#444444' />
                                        </div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">GAP</label>
                                        <div className='filter21'>
                                            <p>Exact Value</p>
                                            <IoIosArrowDown color='#444444' />
                                        </div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">RR</label>
                                        <div className='filter21'>
                                            <p>Exact Value</p>
                                            <IoIosArrowDown color='#444444' />
                                        </div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Back Paper</label>
                                        <div className='filter21'>
                                            <p>Exact Value</p>
                                            <IoIosArrowDown color='#444444' />
                                        </div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Multiple</label>
                                        <div className='filter21'>
                                            <p>Exact Value</p>
                                            <IoIosArrowDown color='#444444' />
                                        </div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Type of fees strucure</label>
                                        <div className='filter21'>
                                            <p>Manual</p>
                                            <IoIosArrowDown color='#444444' />
                                        </div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Profile Complete</label>
                                        <div className='filter21'>
                                            <p>10%</p>
                                            <IoIosArrowDown color='#444444' />
                                        </div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Created On</label>
                                        <div className='filter23'>
                                            <select name="" id="">
                                                <option value="">Any Date</option>
                                            </select>
                                            <IoIosMore color='#444444' size={25} />
                                        </div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Last Modified On</label>
                                        <div className='filter23'>
                                            <select name="" id="">
                                                <option value="">Any Date</option>
                                            </select>
                                            <IoIosMore color='#444444' size={25} />
                                        </div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Last Modified By</label>
                                        <div className='filter21'>
                                            <p>Loren Epsom</p>
                                            <IoIosArrowDown color='#444444' />
                                        </div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Course</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Payment Type</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Gender</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Admission Status</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>
                                    <div className='filter12'>
                                        <label htmlFor="">Specilization</label>
                                        <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                    </div>

                                    <div className='filter19'>
                                        <p onClick={() => setModalShow2(true)}>Add Field</p>
                                        <span>Restore default fields</span>
                                    </div>

                                    <div className='filter20'>
                                        <button onClick={() => setModalShow(false)}>SAVE</button>
                                        <button onClick={() => setModalShow(false)}>RESET</button>
                                    </div>

                                </div>
                            ) : (
                                ""
                            )}

                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }



    // MYDEALS Modal 


    const [modalShow1, setModalShow1] = React.useState(false);



    function MYDEALSModal(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className="no-padding">
                    <div className='filter1'>
                        <div className='filter24'>
                            <div className='filter3'>
                                <p>FILTERS</p>
                            </div>

                            <div className='filter4' onClick={handleModals}>
                                <p style={{ color: '#000000' }}>DEALS IN PROGRESS</p>
                            </div>
                            <div className='filter5'>
                                <p style={{ color: '#2155CD' }}>MY DEALS</p>
                            </div>

                            <div className='filter6'>
                                <p>+Save Filter</p>
                            </div>
                        </div>
                        <div className='filter7'>
                            <div className='filter11'>
                                <div className='filter12'>
                                    <label htmlFor="">Name</label>
                                    <input type="text" />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Responsible Person</label>
                                    <input type="text" />
                                </div>

                                <div className='filter12'>
                                    <label htmlFor="">Modified On</label>
                                    <div className='filter23'>
                                        <select name="" id="">
                                            <option value="">Any Date</option>
                                        </select>
                                        <IoIosMore color='#444444' size={25} />
                                    </div>
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Modified By</label>
                                    <div className='filter23'>
                                        <select name="" id="">
                                            <option value="">Any Date</option>
                                        </select>
                                        <IoIosMore color='#444444' size={25} />
                                    </div>
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Created On</label>
                                    <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Created By</label>
                                    <div className='filter13'><IoIosArrowDown color='#444444' /></div>
                                </div>

                                <div className='filter19'>
                                    <p onClick={() => setModalShow2(true)}>Add Field</p>
                                    <span>Restore default fields </span>
                                </div>

                                <div className='filter20'>
                                    <button onClick={() => setModalShow1(false)}>SAVE</button>
                                    <button onClick={() => setModalShow1(false)}>RESET</button>
                                </div>


                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }



    // AddField Modal 


    const [modalShow2, setModalShow2] = React.useState(false);

    function AddFieldModal(props) {
        const [step, setStep] = useState(0);


        return (
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className="no-padding1">
                    <div className='addfield'>
                        <div className='addfield4'>
                            <div className='addfield1'>
                                <div className={step === 0 ? "addfield2" : "addfield3"} onClick={() => setStep(0)}>
                                    <p>All</p>
                                </div>
                                <div className={step === 1 ? "addfield2" : "addfield3"} onClick={() => setStep(1)}>
                                    <p>Personal</p>
                                </div>
                                <div className={step === 2 ? "addfield2" : "addfield3"} onClick={() => setStep(2)}>
                                    <p>Payment</p>
                                </div>
                            </div>

                            <div className='addfield5'>
                                <FaSearch color='#444444' />
                                <input type="search" />
                            </div>
                        </div>



                        <div className='addfield8'>
                            <div className='addfield6'>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Admission Details</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Payment</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Personal Details</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Fee Structure</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Contact Details</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Guardian Details</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Certificate</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Education Details</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Application Number</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Phone</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Admission Date</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Status</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>University</p>
                                </div>
                            </div>
                            <div className='addfield6'>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Counsellor commitment</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Date</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Book Fee</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Course Fee</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>GST</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Other</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Reg.</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>TOC</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Course</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Counselor</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Created Date</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Name</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Email-Id</p>
                                </div>
                            </div>
                            <div className='addfield6'>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>BOOK</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Date</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>LE</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Multiple</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Phone</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Download</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Certificate</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Remark</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>View</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Exam Type</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Subject</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Stream</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Passing Year</p>
                                </div>
                            </div>
                            <div className='addfield6'>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>University/Board</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Division/Grade</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Marksheet</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Address</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Guardian name</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Guardian Number</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Gender</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Occupation</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Designation</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Department</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Net Income</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Whatsapp Number</p>
                                </div>
                                <div className='addfield7'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Request Letter Status</p>
                                </div>
                            </div>
                        </div>


                        <div className='addfield9'>
                            <div className='addfield10'>
                                <div className='addfield11'>
                                    <IoReloadSharp color='#444444' size={20} />
                                    <h6>Default</h6>
                                </div>

                                <div className='addfield12'>
                                    <div className='addfield13'>
                                        <input type="checkbox" />
                                        <label htmlFor="">Apply for Users</label>
                                    </div>
                                    <div className='addfield13'>
                                        <input type="checkbox" />
                                        <label htmlFor="">Apply for Users</label>
                                    </div>
                                </div>
                            </div>

                            <div className='addfield14'>
                                <p>Select All</p>
                                <p>Select none</p>
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

    function AdmissionFollowUp() {
        const [step, setStep] = useState(0);


        return (
            <>
                <Offcanvas show={show} onHide={handleClose} placement="end" style={{ width: '82%' }}>
                    <Offcanvas.Body className='Admissionfollowup101'>
                        <div className='Admissionfollowup'>
                            <div className='Admissionfollowup1'>
                                <div className='Admissionfollowup2'>
                                    <h6>Admission Follow Up </h6>
                                    <ImLink color='#000000' size={20} />
                                </div>
                                <div className='Admissionfollowup3' onClick={handleClose}>
                                    <MdOutlineCancel color='#000000' size={25} />
                                </div>
                            </div>


                            <div className='Admissionfollowup3'>
                                <div className='Admissionfollowup4'>
                                    <div className='Admissionfollowup5'>
                                        <p>General</p>
                                    </div>
                                    <div className='Admissionfollowup6'>
                                        <p onClick={() => setModalShow3(true)}>History</p>
                                    </div>
                                </div>

                                <div className='Admissionfollowup7'>
                                    <button>Forms <IoIosArrowDown color='#FFFFFF' size={20} /></button>
                                </div>
                            </div>

                            <div className='Admissionfollowup8'>
                                <div className='Admissionfollowup9'>
                                    <div className='Admissionfollowup10'>
                                        <div className='Admissionfollowup11'>
                                            <h6>Student Information</h6>
                                            <p onClick={handleShow1}>Edit</p>
                                        </div>

                                        <div className='Admissionfollowup12'>
                                            <div className='Admissionfollowup13'>
                                                <label htmlFor="">Student Name</label>
                                                <p>Loren Epsom</p>
                                            </div>
                                            <div className='Admissionfollowup13'>
                                                <label htmlFor="">Course</label>
                                                <p>Engineering</p>
                                            </div>
                                            <div className='Admissionfollowup13'>
                                                <label htmlFor="">University</label>
                                                <p>Aligarh Univerisity</p>
                                            </div>
                                            <div className='Admissionfollowup13'>
                                                <label htmlFor="">Responsible Person</label>
                                                <p>Loren Epsom</p>
                                            </div>
                                            <div className='Admissionfollowup13'>
                                                <label htmlFor="">Service Manager</label>
                                                <p>Loren Epsom</p>
                                            </div>
                                            <div className='Admissionfollowup13'>
                                                <label htmlFor="">Total Fees</label>
                                                <p>INR 10,000</p>
                                            </div>
                                            <div className='Admissionfollowup13'>
                                                <label htmlFor="">Received Fees</label>
                                                <p>INR 10,000</p>
                                            </div>
                                            <div className='Admissionfollowup13'>
                                                <label htmlFor="">Balance Fee</label>
                                                <p>INR 10,000</p>
                                            </div>
                                            <div className='Admissionfollowup13'>
                                                <label htmlFor="">Priority</label>
                                                <p>High</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='Admissionfollowup14'>
                                        <p>Add Section</p>
                                        <p>Create a field</p>
                                    </div>
                                </div>

                                <div className='Admissionfollowup15'>

                                    <div className='Admissionfollowup27'>
                                        <div className='Admissionfollowup28'>
                                        </div>

                                        <div className='Admissionfollowup29'>
                                            <div className='Admissionfollowup30'>
                                                <BiSolidMessageRounded color='#FFFFFF' size={25} />
                                            </div>
                                            <div className='Admissionfollowup31'>
                                                <FiMessageSquare color='#FFFFFF' size={25} />
                                            </div>
                                            <div className='Admissionfollowup43'>
                                                <div className='Admissionfollowup44'>
                                                    <p>Things to do</p>
                                                </div>
                                            </div>
                                            <div className='Admissionfollowup32'>
                                                <RiErrorWarningFill color='#FFFFFF' size={25} />
                                            </div>
                                            <div className='Admissionfollowup35'>
                                                <PiTagSimpleFill color='#000000' size={20} opacity={0.6} />
                                            </div>
                                            <div className='Admissionfollowup36'>
                                                <PiTagSimpleFill color='#000000' size={20} opacity={0.6} />
                                            </div>
                                            <div className='Admissionfollowup37'>
                                                <PiTagSimpleFill color='#000000' size={20} opacity={0.6} />
                                            </div>
                                            <div className='Admissionfollowup38'>
                                                <PiTagSimpleFill color='#000000' size={20} opacity={0.6} />
                                            </div>
                                            <div className='Admissionfollowup39'>
                                                <PiTagSimpleFill color='#000000' size={20} opacity={0.6} />
                                            </div>
                                            <div className='Admissionfollowup40'>
                                                <PiTagSimpleFill color='#000000' size={20} opacity={0.6} />
                                            </div>

                                            <div className='Admissionfollowup41'>
                                                <PiTagSimpleFill color='#000000' size={20} opacity={0.6} />
                                            </div>

                                            <div className='Admissionfollowup42'>
                                                <IoMdInformation color='#000000' size={20} opacity={0.6} />
                                            </div>

                                        </div>
                                    </div>



                                    <div>
                                        <div className='Admissionfollowup16'>
                                            <div className='Admissionfollowup17'>
                                                <div className='Admissionfollowup18'>
                                                    <p>Comment</p>
                                                </div>
                                                <div className='Admissionfollowup19' >
                                                    <p onClick={handleShow2}>Task</p>
                                                </div>
                                                <div className='Admissionfollowup19'>
                                                    <p onClick={handleShow3}>SMS</p>
                                                </div>
                                                <div className='Admissionfollowup19'>
                                                    <p onClick={handleShow4}>E-mail</p>
                                                </div>
                                                <div className='Admissionfollowup19'>
                                                    <p onClick={handleShow5}>What’sapp</p>
                                                </div>
                                            </div>
                                            <input type="text" placeholder='Leave a Comment' />
                                        </div>

                                        <div className='Admissionfollowup20'>
                                            <PiUserCircleFill color='#000000' size={20} />
                                            <p>Invite to chat</p>
                                        </div>

                                        <div className='Admissionfollowup20'>
                                            <AiFillPlusCircle color='#52FF00' size={20} />
                                            <p>Add a new activity</p>
                                        </div>


                                        <div className='Admissionfollowup21'>
                                            <p>Status Changed  4:30 pm</p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>

                                            <div className='Admissionfollowup23'>
                                                <div className='Admissionfollowup24'>
                                                    <p>Process for Payment</p>
                                                </div>
                                                <IoIosArrowRoundForward color='#000000' size={25} />
                                                <div className='Admissionfollowup24'>
                                                    <p>PDC in Progress</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Admissionfollowup21'>
                                            <p>Status Changed  4:30 pm</p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>

                                            <div className='Admissionfollowup23'>
                                                <div className='Admissionfollowup24'>
                                                    <p>Process for Payment</p>
                                                </div>
                                                <IoIosArrowRoundForward color='#000000' size={25} />
                                                <div className='Admissionfollowup24'>
                                                    <p>PDC in Progress</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Admissionfollowup21'>
                                            <p>Status Changed  4:30 pm</p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>

                                            <div className='Admissionfollowup23'>
                                                <div className='Admissionfollowup24'>
                                                    <p>Process for Payment</p>
                                                </div>
                                                <IoIosArrowRoundForward color='#000000' size={25} />
                                                <div className='Admissionfollowup24'>
                                                    <p>PDC in Progress</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Admissionfollowup21'>
                                            <p>Status Changed  4:30 pm</p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>

                                            <div className='Admissionfollowup23'>
                                                <div className='Admissionfollowup24'>
                                                    <p>Process for Payment</p>
                                                </div>
                                                <IoIosArrowRoundForward color='#000000' size={25} />
                                                <div className='Admissionfollowup24'>
                                                    <p>PDC in Progress</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Admissionfollowup21'>
                                            <p>Status Changed  4:30 pm</p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>

                                            <div className='Admissionfollowup23'>
                                                <div className='Admissionfollowup24'>
                                                    <p>Process for Payment</p>
                                                </div>
                                                <IoIosArrowRoundForward color='#000000' size={25} />
                                                <div className='Admissionfollowup24'>
                                                    <p>PDC in Progress</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Admissionfollowup21'>
                                            <p>Status Changed  4:30 pm</p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>

                                            <div className='Admissionfollowup23'>
                                                <div className='Admissionfollowup24'>
                                                    <p>Process for Payment</p>
                                                </div>
                                                <IoIosArrowRoundForward color='#000000' size={25} />
                                                <div className='Admissionfollowup24'>
                                                    <p>PDC in Progress</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Admissionfollowup21'>
                                            <p>Status Changed  4:30 pm</p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>

                                            <div className='Admissionfollowup23'>
                                                <div className='Admissionfollowup24'>
                                                    <p>Process for Payment</p>
                                                </div>
                                                <IoIosArrowRoundForward color='#000000' size={25} />
                                                <div className='Admissionfollowup24'>
                                                    <p>PDC in Progress</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Admissionfollowup25'>
                                            <p>PDC Created  <span>4:31 PM</span></p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>
                                            <div className='Admissionfollowup26'>
                                                <p>abc</p>
                                                <p>Source: call</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        );
    }


    // New Lead Modal

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    function NeWLead() {
        const [step, setStep] = useState(0);


        return (
            <>
                <Offcanvas show={show1} onHide={handleClose1} placement="top" style={{ width: '82%', height: "100%", top: '10%', left: "18.1%" }}>
                    <Offcanvas.Body className='Admissionfollowup101'>
                        <div className='Admissionfollowup'>
                            <div className='Admissionfollowup1'>
                                <div className='Admissionfollowup2'>
                                    <h6>New Lead</h6>
                                    <ImLink color='#000000' size={20} />
                                </div>
                                <div className='Admissionfollowup3' onClick={handleClose1}>
                                    <MdOutlineCancel color='#000000' size={25} />
                                </div>
                            </div>


                            <div className='Admissionfollowup3'>
                                <div className='Admissionfollowup4'>
                                    <div className='Admissionfollowup5'>
                                        <p>General</p>
                                    </div>
                                    <div className='Admissionfollowup6'>
                                        <p onClick={() => setModalShow3(true)}>History</p>
                                    </div>
                                </div>

                                <div className='Admissionfollowup7'>
                                    <button>Forms <IoIosArrowDown color='#FFFFFF' size={20} /></button>
                                </div>
                            </div>

                            <div className='Admissionfollowup8'>
                                <div className='newleadModal6'>
                                    <div className='newleadModal1'>
                                        <div className='Admissionfollowup11'>
                                            <h6>LEADS INFORMATION</h6>
                                            <p onClick={handleClose1}>Cancel</p>
                                        </div>

                                        <div className='newleadModal2'>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">Student Name</label>
                                                <input type="text" />
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">Amount & Currency</label>
                                                <div className='newleadModal4'>
                                                    <input type="text" />
                                                    <div className='newleadModal5'>
                                                        <p>Indian Rupee</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">Email</label>
                                                <input type="text" />
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">Contact Number</label>
                                                <input type="text" />
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">University/ College</label>
                                                <input type="text" />
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">Phone</label>
                                                <input type="text" />
                                            </div>

                                        </div>
                                    </div>
                                    <div className='newleadModal1'>
                                        <div className='Admissionfollowup11'>
                                            <h6>LEADS INFORMATION</h6>
                                            <p onClick={handleClose1}>Cancel</p>
                                        </div>
                                        <div className='newleadModal2'>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">Course</label>
                                                <select name="" id="">
                                                    <option value="">Not Selected</option>
                                                </select>
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">WhatsApp Status</label>
                                                <select name="" id="">
                                                    <option value="">Not Selected</option>
                                                </select>
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">Email</label>
                                                <input type="text" />
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">Which Form</label>
                                                <input type="text" />
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">City</label>
                                                <input type="text" />
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">State</label>
                                                <input type="text" />
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">Country</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='newleadModal1'>
                                        <div className='Admissionfollowup11'>
                                            <h6>MORE</h6>
                                            <p onClick={handleClose1}>Cancel</p>
                                        </div>
                                        <div className='newleadModal2'>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">Lead Source</label>
                                                <input type="text" placeholder='Call' />
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">Lead Source</label>
                                                <div className='newleadModal7'>
                                                    <div className='newleadModal8'>
                                                        <FaUserCircle color='#000000' size={25} />
                                                        <p>Dhiraj Rajput</p>
                                                    </div>
                                                    <div className='newleadModal9'>
                                                        <p>Change</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='newleadModal10'>
                                                <p>Observers</p>

                                                <h6>+Add Participant</h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='newleadModal11'>
                                        <button onClick={handleClose1}>Save</button>
                                        <button onClick={handleClose1}>Cancel</button>
                                    </div>
                                </div>



                                <div className='Admissionfollowup15'>

                                    <div className='Admissionfollowup27'>
                                        <div className='Admissionfollowup28'>
                                        </div>

                                        <div className='Admissionfollowup29'>
                                            <div className='Admissionfollowup30'>
                                                <BiSolidMessageRounded color='#FFFFFF' size={25} />
                                            </div>
                                            <div className='Admissionfollowup31'>
                                                <FiMessageSquare color='#FFFFFF' size={25} />
                                            </div>
                                            <div className='Admissionfollowup43'>
                                                <div className='Admissionfollowup44'>
                                                    <p>Things to do</p>
                                                </div>
                                            </div>
                                            <div className='Admissionfollowup32'>
                                                <RiErrorWarningFill color='#FFFFFF' size={25} />
                                            </div>
                                            <div className='Admissionfollowup35'>
                                                <PiTagSimpleFill color='#000000' size={20} opacity={0.6} />
                                            </div>
                                            <div className='Admissionfollowup36'>
                                                <PiTagSimpleFill color='#000000' size={20} opacity={0.6} />
                                            </div>
                                            <div className='Admissionfollowup37'>
                                                <PiTagSimpleFill color='#000000' size={20} opacity={0.6} />
                                            </div>
                                            <div className='Admissionfollowup38'>
                                                <PiTagSimpleFill color='#000000' size={20} opacity={0.6} />
                                            </div>
                                            <div className='Admissionfollowup39'>
                                                <PiTagSimpleFill color='#000000' size={20} opacity={0.6} />
                                            </div>
                                            <div className='Admissionfollowup40'>
                                                <PiTagSimpleFill color='#000000' size={20} opacity={0.6} />
                                            </div>

                                            <div className='Admissionfollowup41'>
                                                <PiTagSimpleFill color='#000000' size={20} opacity={0.6} />
                                            </div>

                                            <div className='Admissionfollowup42'>
                                                <IoMdInformation color='#000000' size={20} opacity={0.6} />
                                            </div>

                                        </div>
                                    </div>



                                    <div>
                                        <div className='Admissionfollowup16'>
                                            <div className='Admissionfollowup17'>
                                                <div className='Admissionfollowup18'>
                                                    <p>Comment</p>
                                                </div>
                                                <div className='Admissionfollowup19' >
                                                    <p onClick={handleShow2}>Task</p>
                                                </div>
                                                <div className='Admissionfollowup19'>
                                                    <p onClick={handleShow3}>SMS</p>
                                                </div>
                                                <div className='Admissionfollowup19'>
                                                    <p onClick={handleShow4}>E-mail</p>
                                                </div>
                                                <div className='Admissionfollowup19'>
                                                    <p onClick={handleShow5}>What’sapp</p>
                                                </div>
                                            </div>
                                            <input type="text" placeholder='Leave a Comment' />
                                        </div>

                                        <div className='Admissionfollowup20'>
                                            <PiUserCircleFill color='#000000' size={20} />
                                            <p>Invite to chat</p>
                                        </div>

                                        <div className='Admissionfollowup20'>
                                            <AiFillPlusCircle color='#52FF00' size={20} />
                                            <p>Add a new activity</p>
                                        </div>


                                        <div className='Admissionfollowup21'>
                                            <p>Status Changed  4:30 pm</p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>

                                            <div className='Admissionfollowup23'>
                                                <div className='Admissionfollowup24'>
                                                    <p>Process for Payment</p>
                                                </div>
                                                <IoIosArrowRoundForward color='#000000' size={25} />
                                                <div className='Admissionfollowup24'>
                                                    <p>PDC in Progress</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Admissionfollowup21'>
                                            <p>Status Changed  4:30 pm</p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>

                                            <div className='Admissionfollowup23'>
                                                <div className='Admissionfollowup24'>
                                                    <p>Process for Payment</p>
                                                </div>
                                                <IoIosArrowRoundForward color='#000000' size={25} />
                                                <div className='Admissionfollowup24'>
                                                    <p>PDC in Progress</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Admissionfollowup21'>
                                            <p>Status Changed  4:30 pm</p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>

                                            <div className='Admissionfollowup23'>
                                                <div className='Admissionfollowup24'>
                                                    <p>Process for Payment</p>
                                                </div>
                                                <IoIosArrowRoundForward color='#000000' size={25} />
                                                <div className='Admissionfollowup24'>
                                                    <p>PDC in Progress</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Admissionfollowup21'>
                                            <p>Status Changed  4:30 pm</p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>

                                            <div className='Admissionfollowup23'>
                                                <div className='Admissionfollowup24'>
                                                    <p>Process for Payment</p>
                                                </div>
                                                <IoIosArrowRoundForward color='#000000' size={25} />
                                                <div className='Admissionfollowup24'>
                                                    <p>PDC in Progress</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Admissionfollowup21'>
                                            <p>Status Changed  4:30 pm</p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>

                                            <div className='Admissionfollowup23'>
                                                <div className='Admissionfollowup24'>
                                                    <p>Process for Payment</p>
                                                </div>
                                                <IoIosArrowRoundForward color='#000000' size={25} />
                                                <div className='Admissionfollowup24'>
                                                    <p>PDC in Progress</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Admissionfollowup21'>
                                            <p>Status Changed  4:30 pm</p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>

                                            <div className='Admissionfollowup23'>
                                                <div className='Admissionfollowup24'>
                                                    <p>Process for Payment</p>
                                                </div>
                                                <IoIosArrowRoundForward color='#000000' size={25} />
                                                <div className='Admissionfollowup24'>
                                                    <p>PDC in Progress</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Admissionfollowup21'>
                                            <p>Status Changed  4:30 pm</p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>

                                            <div className='Admissionfollowup23'>
                                                <div className='Admissionfollowup24'>
                                                    <p>Process for Payment</p>
                                                </div>
                                                <IoIosArrowRoundForward color='#000000' size={25} />
                                                <div className='Admissionfollowup24'>
                                                    <p>PDC in Progress</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Admissionfollowup25'>
                                            <p>PDC Created  <span>4:31 PM</span></p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>
                                            <div className='Admissionfollowup26'>
                                                <p>abc</p>
                                                <p>Source: call</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        );
    }


    // History Modal


    const [modalShow3, setModalShow3] = React.useState(false);

    function History(props) {
        const [step, setStep] = useState(0);


        return (
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className='historyModal101'>
                    <div className='Admissionfollowup'>
                        <div className='Admissionfollowup1'>
                            <div className='Admissionfollowup2'>
                                <h6>abc</h6>
                                <ImLink color='#000000' size={20} />
                            </div>
                            <div className='Admissionfollowup3' onClick={() => setModalShow3(false)}>
                                <MdOutlineCancel color='#000000' size={25} />
                            </div>
                        </div>


                        <div className='Admissionfollowup3'>
                            <div className='Admissionfollowup4'>
                                <div className={modalShow3 === false ? "Admissionfollowup5" : "Admissionfollowup6"} onClick={() => setStep(0)}>
                                    <p onClick={() => setModalShow3(false)}>General</p>
                                </div>
                                <div className={modalShow3 === true ? "Admissionfollowup5" : "Admissionfollowup6"} onClick={() => setStep(1)}>
                                    <p>History</p>
                                </div>
                            </div>
                        </div>


                        <div className='historyModal'>
                            <div className='historyModal1'>
                                <p>+Event</p>
                            </div>
                        </div>

                        <div className='historyModal2'>
                            <input type="search" placeholder='Filter' />
                            <IoSearch color='#000000' />
                        </div>

                        <div className='admission13'>
                            <div className='table-container'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th><input type="checkbox" /></th>
                                            <th><IoSettings size={20} /></th>
                                            <th>Date</th>
                                            <th>Created By</th>
                                            <th>Event Type</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData1.map((data) => (
                                            <tr key={data.id}>
                                                <td><input type="checkbox" /></td>
                                                <td><img src={img1} alt="" /></td>
                                                <td>{data.Date}</td>
                                                <td><PiUserCircleFill color='#444444' size={25} /> {data.CreatedBy}</td>
                                                <td>{data.EventType}</td>
                                                <td>{data.Description}</td>
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

                    </div>
                </Modal.Body>
            </Modal>
        );
    }








    // NewTask Modal

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    function NewTask() {
        const [step, setStep] = useState(0);


        return (
            <>
                <Offcanvas show={show2} onHide={handleClose2} placement="end" style={{ width: '82%', }}>
                    <Offcanvas.Body className='historyModal101'>
                        <div className='Admissionfollowup'>
                            <div className='Admissionfollowup1'>
                                <div className='Admissionfollowup2'>
                                    <h6>New Task</h6>
                                </div>
                                <div className='Admissionfollowup3' onClick={handleClose2}>
                                    <MdOutlineCancel color='#000000' size={25} />
                                </div>
                            </div>

                            <div className='newtask'>
                                <div className='newtask1'>
                                    <div className='newtask2'>
                                        <h6>PDC:</h6>
                                    </div>
                                    <div className='newtask3'>
                                        <textarea name="" id="" cols="130" rows="10"></textarea>
                                    </div>

                                    <div className='newtask4'>
                                        <div className='newtask5'>
                                            <MdOutlineAttachFile color='#444444' opacity={0.5} />
                                            <p>File</p>
                                        </div>
                                        <div className='newtask5'>
                                            <IoDocumentText color='#444444' opacity={0.5} />
                                            <p>New Document</p>
                                        </div>
                                        <div className='newtask5'>
                                            <MdAlternateEmail color='#444444' opacity={0.5} />
                                            <p>Mention</p>
                                        </div>
                                        <div className='newtask5'>
                                            <p>Checklist</p>
                                        </div>
                                        <div className='newtask5'>
                                            <p>Add to checklist</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='newtask6'>
                                    <p>Responsible Person</p>
                                    <div className='newtask7'>
                                        <div className='newtask8'>
                                            <p>Dhiraj Rajput</p>
                                            <IoMdClose />
                                        </div>

                                        <div className='newtask9'>
                                            <p>+Add Members</p>
                                        </div>
                                    </div>
                                </div>


                                <div className='newtask10'>
                                    <div className='newtask11'>
                                        <div className='newtask12'>
                                            <label htmlFor="">Deadline</label>
                                            <input type="date" style={{ marginLeft: "30px" }} />
                                        </div>
                                        <div className='newtask12'>
                                            <label htmlFor="">Next Payment accepted Date</label>
                                            <input type="date" />
                                        </div>
                                    </div>
                                    <div className='newtask11'>
                                        <div className='newtask12'>
                                            <label htmlFor="">Next Amount</label>
                                            <input type="date" />
                                        </div>
                                    </div>
                                </div>

                                <div className='newtask13'>
                                    <p>Task status summary</p>
                                    <input type="checkbox" />
                                    <p>Task status summary is required</p>
                                </div>


                                <div className='newtask14'>
                                    <div className='newtask15'>
                                        <button>ADD TASK</button>
                                        <button>Cancel</button>
                                    </div>

                                    <div className='newtask16'>
                                        <input type="checkbox" />
                                        <p>Save as template</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        );
    }


    // SMS Modal
    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    function SMS() {
        const [step, setStep] = useState(0);


        return (
            <>
                <Offcanvas show={show3} onHide={handleClose3} placement="end" style={{ width: '82%', height: "100%" }}>
                    <Offcanvas.Body className='Admissionfollowup101'>
                        <div className='Admissionfollowup'>
                            <div className='Admissionfollowup1'>
                                <div className='Admissionfollowup2'>
                                    <h6>New Lead</h6>
                                    <ImLink color='#000000' size={20} />
                                </div>
                                <div className='Admissionfollowup3' onClick={handleClose3}>
                                    <MdOutlineCancel color='#000000' size={25} />
                                </div>
                            </div>


                            <div className='Admissionfollowup3'>
                                <div className='Admissionfollowup4'>
                                    <div className='Admissionfollowup5'>
                                        <p>General</p>
                                    </div>
                                    <div className='Admissionfollowup6'>
                                        <p onClick={() => setModalShow3(true)}>History</p>
                                    </div>
                                </div>

                                <div className='Admissionfollowup7'>
                                    <button>Forms <IoIosArrowDown color='#FFFFFF' size={20} /></button>
                                </div>
                            </div>

                            <div className='Admissionfollowup8'>
                                <div className='newleadModal6'>
                                    <div className='newleadModal1'>
                                        <div className='Admissionfollowup11'>
                                            <h6>LEADS INFORMATION</h6>
                                            <p onClick={handleClose3}>Cancel</p>
                                        </div>

                                        <div className='newleadModal2'>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">Student Name</label>
                                                <input type="text" />
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">Amount & Currency</label>
                                                <div className='newleadModal4'>
                                                    <input type="text" />
                                                    <div className='newleadModal5'>
                                                        <p>Indian Rupee</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">Email</label>
                                                <input type="text" />
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">Contact Number</label>
                                                <input type="text" />
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">University/ College</label>
                                                <input type="text" />
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">Phone</label>
                                                <input type="text" />
                                            </div>

                                        </div>
                                    </div>
                                    <div className='newleadModal1'>
                                        <div className='Admissionfollowup11'>
                                            <h6>LEADS INFORMATION</h6>
                                            <p onClick={handleClose3}>Cancel</p>
                                        </div>
                                        <div className='newleadModal2'>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">Course</label>
                                                <select name="" id="">
                                                    <option value="">Not Selected</option>
                                                </select>
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">WhatsApp Status</label>
                                                <select name="" id="">
                                                    <option value="">Not Selected</option>
                                                </select>
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">Email</label>
                                                <input type="text" />
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">Which Form</label>
                                                <input type="text" />
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">City</label>
                                                <input type="text" />
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">State</label>
                                                <input type="text" />
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">Country</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='newleadModal1'>
                                        <div className='Admissionfollowup11'>
                                            <h6>MORE</h6>
                                            <p onClick={handleClose3}>Cancel</p>
                                        </div>
                                        <div className='newleadModal2'>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">Lead Source</label>
                                                <input type="text" placeholder='Call' />
                                            </div>
                                            <div className='newleadModal3'>
                                                <label htmlFor="">Lead Source</label>
                                                <div className='newleadModal7'>
                                                    <div className='newleadModal8'>
                                                        <FaUserCircle color='#000000' size={25} />
                                                        <p>Dhiraj Rajput</p>
                                                    </div>
                                                    <div className='newleadModal9'>
                                                        <p>Change</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='newleadModal10'>
                                                <p>Observers</p>

                                                <h6>+Add Participant</h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='newleadModal11'>
                                        <button onClick={handleClose3}>Save</button>
                                        <button onClick={handleClose3}>Cancel</button>
                                    </div>
                                </div>



                                <div className='Admissionfollowup15'>

                                    <div className='Admissionfollowup27'>
                                        <div className='Admissionfollowup28'>
                                        </div>

                                        <div className='Admissionfollowup29'>
                                            <div className='Admissionfollowup30'>
                                                <BiSolidMessageRounded color='#FFFFFF' size={25} />
                                            </div>
                                            <div className='Admissionfollowup31'>
                                                <FiMessageSquare color='#FFFFFF' size={25} />
                                            </div>
                                            <div className='Admissionfollowup43'>
                                                <div className='Admissionfollowup44'>
                                                    <p>Things to do</p>
                                                </div>
                                            </div>
                                            <div className='Admissionfollowup32'>
                                                <RiErrorWarningFill color='#FFFFFF' size={25} />
                                            </div>
                                            <div className='Admissionfollowup35'>
                                                <PiTagSimpleFill color='#000000' size={20} opacity={0.6} />
                                            </div>
                                            <div className='Admissionfollowup36'>
                                                <PiTagSimpleFill color='#000000' size={20} opacity={0.6} />
                                            </div>
                                            <div className='Admissionfollowup37'>
                                                <PiTagSimpleFill color='#000000' size={20} opacity={0.6} />
                                            </div>
                                            <div className='Admissionfollowup38'>
                                                <PiTagSimpleFill color='#000000' size={20} opacity={0.6} />
                                            </div>
                                            <div className='Admissionfollowup39'>
                                                <PiTagSimpleFill color='#000000' size={20} opacity={0.6} />
                                            </div>
                                            <div className='Admissionfollowup40'>
                                                <PiTagSimpleFill color='#000000' size={20} opacity={0.6} />
                                            </div>

                                            <div className='Admissionfollowup41'>
                                                <PiTagSimpleFill color='#000000' size={20} opacity={0.6} />
                                            </div>

                                            <div className='Admissionfollowup42'>
                                                <IoMdInformation color='#000000' size={20} opacity={0.6} />
                                            </div>

                                        </div>
                                    </div>



                                    <div>
                                        <div className='Admissionfollowup16'>
                                            <div className='Admissionfollowup17'>
                                                <div className='Admissionfollowup19'>
                                                    <p onClick={handleClose3}>Comment</p>
                                                </div>
                                                <div className='Admissionfollowup19' >
                                                    <p onClick={handleShow2}>Task</p>
                                                </div>
                                                <div className='Admissionfollowup18'>
                                                    <p onClick={handleShow3}>SMS</p>
                                                </div>
                                                <div className='Admissionfollowup19'>
                                                    <p onClick={handleShow4}>E-mail</p>
                                                </div>
                                                <div className='Admissionfollowup19'>
                                                    <p onClick={handleShow5}>What’sapp</p>
                                                </div>
                                            </div>
                                            <span>Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</span>
                                        </div>

                                        <div className='Admissionfollowup20'>
                                            <PiUserCircleFill color='#000000' size={20} />
                                            <p>Invite to chat</p>
                                        </div>

                                        <div className='Admissionfollowup20'>
                                            <AiFillPlusCircle color='#52FF00' size={20} />
                                            <p>Add a new activity</p>
                                        </div>


                                        <div className='Admissionfollowup21'>
                                            <p>Status Changed  4:30 pm</p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>

                                            <div className='Admissionfollowup23'>
                                                <div className='Admissionfollowup24'>
                                                    <p>Process for Payment</p>
                                                </div>
                                                <IoIosArrowRoundForward color='#000000' size={25} />
                                                <div className='Admissionfollowup24'>
                                                    <p>PDC in Progress</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Admissionfollowup21'>
                                            <p>Status Changed  4:30 pm</p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>

                                            <div className='Admissionfollowup23'>
                                                <div className='Admissionfollowup24'>
                                                    <p>Process for Payment</p>
                                                </div>
                                                <IoIosArrowRoundForward color='#000000' size={25} />
                                                <div className='Admissionfollowup24'>
                                                    <p>PDC in Progress</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Admissionfollowup21'>
                                            <p>Status Changed  4:30 pm</p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>

                                            <div className='Admissionfollowup23'>
                                                <div className='Admissionfollowup24'>
                                                    <p>Process for Payment</p>
                                                </div>
                                                <IoIosArrowRoundForward color='#000000' size={25} />
                                                <div className='Admissionfollowup24'>
                                                    <p>PDC in Progress</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Admissionfollowup21'>
                                            <p>Status Changed  4:30 pm</p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>

                                            <div className='Admissionfollowup23'>
                                                <div className='Admissionfollowup24'>
                                                    <p>Process for Payment</p>
                                                </div>
                                                <IoIosArrowRoundForward color='#000000' size={25} />
                                                <div className='Admissionfollowup24'>
                                                    <p>PDC in Progress</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Admissionfollowup21'>
                                            <p>Status Changed  4:30 pm</p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>

                                            <div className='Admissionfollowup23'>
                                                <div className='Admissionfollowup24'>
                                                    <p>Process for Payment</p>
                                                </div>
                                                <IoIosArrowRoundForward color='#000000' size={25} />
                                                <div className='Admissionfollowup24'>
                                                    <p>PDC in Progress</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Admissionfollowup21'>
                                            <p>Status Changed  4:30 pm</p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>

                                            <div className='Admissionfollowup23'>
                                                <div className='Admissionfollowup24'>
                                                    <p>Process for Payment</p>
                                                </div>
                                                <IoIosArrowRoundForward color='#000000' size={25} />
                                                <div className='Admissionfollowup24'>
                                                    <p>PDC in Progress</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Admissionfollowup21'>
                                            <p>Status Changed  4:30 pm</p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>

                                            <div className='Admissionfollowup23'>
                                                <div className='Admissionfollowup24'>
                                                    <p>Process for Payment</p>
                                                </div>
                                                <IoIosArrowRoundForward color='#000000' size={25} />
                                                <div className='Admissionfollowup24'>
                                                    <p>PDC in Progress</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Admissionfollowup25'>
                                            <p>PDC Created  <span>4:31 PM</span></p>
                                            <div className='Admissionfollowup22'>
                                                <PiUserCircleFill color='#000000' size={25} opacity={0.5} />
                                            </div>
                                            <div className='Admissionfollowup26'>
                                                <p>abc</p>
                                                <p>Source: call</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>

            </>
        );
    }



    // Email Modal
    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    function Email() {
        const [step, setStep] = useState(0);


        return (
            <>
                <Offcanvas show={show4} onHide={handleClose4} placement="end" style={{ width: '82%', height: "100%" }}>
                    <Offcanvas.Body className='Admissionfollowup101'>
                        <div className='Admissionfollowup'>
                            <div className='Admissionfollowup1'>
                                <div className='Admissionfollowup2'>
                                    <h6>Send Message</h6>
                                    <ImLink color='#000000' size={20} />
                                </div>
                                <div className='Admissionfollowup3' onClick={handleClose4}>
                                    <MdOutlineCancel color='#000000' size={25} />
                                </div>
                            </div>

                            <div className='emailModal1'>
                                <div className='emailModal'>
                                    <div className='email5'>
                                        <p>From:</p>
                                        <PiUserCircleFill color='#444444' size={20} />
                                    </div>
                                    <div className='email6'>
                                        <label htmlFor="">To:</label>
                                        <input type="text" name="" id="" placeholder='+ Add Recipient' style={{ marginLeft: "35px" }} />
                                    </div>
                                    <div className='email6'>
                                        <label htmlFor="">Subject:</label>
                                        <input type="text" name="" id="" />
                                    </div>
                                    <div className='email7'>
                                        <p>Cc</p>
                                        <p>Bcc</p>
                                    </div>

                                    <div className='email8'>
                                        <p>B</p>
                                        <p>I</p>
                                        <p>U</p>
                                        <img src={img1} alt="" />
                                        <img src={img2} alt="" />
                                        <select name="" id="">
                                            <option value="">Font</option>
                                        </select>
                                        <img src={img3} alt="" />
                                        <img src={img4} alt="" />
                                        <img src={img5} alt="" />
                                        <GoListUnordered color='#444444' />
                                        <MdFormatListNumbered color='#444444' />
                                        <RiDoubleQuotesR color='#444444' />
                                        <img src={img7} alt="" />
                                    </div>


                                    <div className='email9'>
                                        <textarea name="" id="" cols="100" rows="10"></textarea>
                                    </div>

                                    <div className='email10'>
                                        <div className='email11'>
                                            <MdOutlineAttachFile color='#444444' />
                                            <p>File</p>
                                        </div>
                                        <div className='email11'>
                                            <GrDocumentText color='#444444' />
                                            <p>New Document</p>
                                        </div>
                                    </div>

                                    <div className='zoommetting11'>
                                        <button onClick={handleClose4}>Create</button>
                                        <button onClick={handleClose4}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>

            </>
        );
    }



    // Whatsapp Modal
    const [show5, setShow5] = useState(false);

    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    function Whatsapp() {
        const [showdate, setShowdate] = useState(0)


        return (
            <>
                <Offcanvas show={show5} onHide={handleClose5} placement="end" style={{ width: '82%', height: "100%" }}>
                    <Offcanvas.Body className='Admissionfollowup101'>
                        <div className='Admissionfollowup'>
                            <div className='Admissionfollowup1'>
                                <div className='Admissionfollowup2'>
                                    <h6>ABC</h6>
                                </div>
                                <div className='Admissionfollowup3' onClick={handleClose5}>
                                    <MdOutlineCancel color='#000000' size={25} />
                                </div>
                            </div>
                            <div>

                            </div>
                            {showdate === 0 ? (
                                <div className='whatsapp1'>
                                    <div className='whatsappModal'>
                                        <div className='whatsapp5'>
                                            <div className='whatsapp6'>
                                                <h6>Send What’sapp Message</h6>
                                                <div className='whatsapp7'>
                                                    <p>Template :</p>
                                                    <select name="" id="" onChange={(e) => setShowdate(parseInt(e.target.value))}>
                                                        <option value="1">While Create lead send WhatsApp message</option>
                                                        <option value="1">Yes lead created WhatsApp response from customer</option>
                                                        <option value="1">No lead created  WhatsApp response from customer</option>
                                                        <option value="1">First Message</option>
                                                        <option value="1">Yes lead created WhatsApp response from customer new</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : showdate === 1 ? (
                                <div className='whatsappModal1'>
                                    <div className='whatsapp11'>
                                        <div className='whatsapp12'>
                                            <div className='whatsapp14'>
                                                <div className='whatsapp15'>
                                                    <div className='whatsapp16'>
                                                        <h6>Send What’sapp Message</h6>
                                                    </div>
                                                    <div className='whatsapp17'>
                                                        <div className='whatsappModal2'>
                                                            <p>Template :</p>
                                                            <select name="" id="" onChange={(e) => setShowdate(parseInt(e.target.value))}>
                                                                <option value="1">While Create lead send WhatsApp message</option>
                                                                <option value="1">Yes lead created WhatsApp response from customer</option>
                                                                <option value="1">No lead created  WhatsApp response from customer</option>
                                                                <option value="1">First Message</option>
                                                                <option value="1">Yes lead created WhatsApp response from customer new</option>
                                                            </select>
                                                        </div>

                                                        <div className='whatsapp18'>
                                                            <p>Whatsapp number:</p>
                                                            <input type="text" />
                                                        </div>


                                                        <div className='whatsapp19'>
                                                            <p>Message:</p>
                                                            <textarea name="" id="" cols="90" rows="5"></textarea>
                                                        </div>

                                                        <div className='whatsapp20'>
                                                            <button onClick={handleClose5}>Send</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}


                        </div>
                    </Offcanvas.Body>
                </Offcanvas>

            </>
        );
    }




    return (
        <>
            <FilterModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <MYDEALSModal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <AddFieldModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <AdmissionFollowUp
                show={show}
                onHide={handleClose}
            />
            <NeWLead
                show={show1}
                onHide={handleClose1}
            />
            <History
                show={modalShow3}
                onHide={setModalShow3}
            />
            <NewTask
                show={show2}
                onHide={handleClose2}
            />
            <SMS
                show={show3}
                onHide={handleClose3}
            />
            <Email
                show={show4}
                onHide={handleClose4}
            />
            <Whatsapp
                show={show5}
                onHide={handleClose5}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>Admission</p>
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

                <div className='admission8' onClick={() => setModalShow(true)}>
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

                <div className='admission11'>
                </div>

                <div className='admission12'>
                    <button>Add</button>
                    <button>Delete</button>
                    <button>Export</button>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th><IoSettings size={20} /></th>
                                    <th>Student Name</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Course</th>
                                    <th>Admission Date</th>
                                    <th>Fees Paid</th>
                                    <th>Paid Date</th>
                                    <th>History</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td onClick={handleShow}><img src={img8} alt="" /></td>
                                        <td>{data.name}</td>
                                        <td>{data.contact}</td>
                                        <td>{data.email}</td>
                                        {/* <td>{data.address}</td> */}
                                        <div className='admission19'>
                                            <p>{data.address}</p>
                                        </div>
                                        <td>{data.course}</td>
                                        <td>{data.admissionDate}</td>
                                        <td>{data.feesPaid}</td>
                                        <td>{data.paidDate}</td>
                                        <td>
                                            <div className='admission14'>
                                                <button>{data.history}</button>
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
                {/* <div className='admission11'>
                </div> */}
            </div>
        </>
    )
}

export default HOC(Admission)