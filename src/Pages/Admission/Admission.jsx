import React, { useEffect, useState } from 'react';
import './Admission.css'
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosMore } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

import img from '../../Img/img33.png'
import { Link } from 'react-router-dom';


const Admission = () => {
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




    // Filter Modal 

    const [modalShow, setModalShow] = React.useState(false);


    const handleModals = () => {
        setModalShow(true)
        setModalShow1(false)
    }

    const handleModals1 = () => {
        setModalShow(false)
        setModalShow2(true)
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
                                        <p onClick={handleModals1}>Add Field</p>
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
                                    <p>Add Field</p>
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
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className="no-padding">
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

                    </div>
                </Modal.Body>
            </Modal>
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
                    <button  onClick={() => setModalShow2(true)}>Add</button>
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
                                        <td><img src={img} alt="" /></td>
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