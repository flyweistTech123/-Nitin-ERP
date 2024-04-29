import React, { useEffect, useState } from 'react';
import './Modals.css'
import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';



import { IoIosArrowDown } from "react-icons/io";
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
import { IoSettings } from "react-icons/io5";
import { IoIosPlayCircle } from "react-icons/io";
import { MdStar } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";






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







//Filter Modal for admission page
export function FilterModal(props) {
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
                        <div className='filter5' onClick={() => props.setModalShow1(true)}>
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
                                    <p onClick={() => props.setModalShow2(true)}>Add Field</p>
                                    <span>Restore default fields </span>
                                </div>

                                <div className='filter20'>
                                    <button onClick={() => props.onHide()}>SAVE</button>
                                    <button onClick={() => props.onHide()}>RESET</button>
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
                                    <p onClick={() => props.centeredsetModalShow2(true)}>Add Field</p>
                                    <span>Restore default fields</span>
                                </div>

                                <div className='filter20'>
                                    <button onClick={() => props.onHide()}>SAVE</button>
                                    <button onClick={() => props.onHide()}>RESET</button>
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


//Mydeals Modal in filter  for admission page
export function MYDEALSModal(props) {


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

                        <div className='filter4'>
                            <p style={{ color: '#000000' }} onClick={() => {
                                props.setModalShow(true);
                                props.onHide();
                            }}>
                                DEALS IN PROGRESS
                            </p>

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
                                <p onClick={() => props.setModalShow2(true)}>Add Field</p>
                                <span>Restore default fields </span>
                            </div>

                            <div className='filter20'>
                                <button onClick={() => props.onHide()}>SAVE</button>
                                <button onClick={() => props.onHide()}>RESET</button>
                            </div>


                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}


//addfield  Modal in filter for admission page
export function AddFieldModal(props) {
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



//Admission Follow Up Modal for admission page





export function AdmissionFollowUp(props) {
    const [widthStyle, setWidthStyle] = useState('82%');

    useEffect(() => {
        const handleResize = () => {
            // Update the width style based on screen size
            const screenWidth = window.innerWidth;
            const newWidthStyle = screenWidth < 580 ? '100%' : '82%'; // Adjust breakpoint as needed

            setWidthStyle(newWidthStyle);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial call to set width based on current screen size
        handleResize();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Offcanvas show={props.show} onHide={props.onHide} placement="end" style={{ width: widthStyle }}>
                <Offcanvas.Body className='Admissionfollowup101'>
                    <div className='Admissionfollowup'>
                        <div className='Admissionfollowup1'>
                            <div className='Admissionfollowup2'>
                                <h6>Admission Follow Up </h6>
                                <ImLink color='#000000' size={20} />
                            </div>
                            <div className='Admissionfollowup3' onClick={props.onHide}>
                                <MdOutlineCancel color='#000000' size={25} />
                            </div>
                        </div>


                        <div className='Admissionfollowup3'>
                            <div className='Admissionfollowup4'>
                                <div className='Admissionfollowup5'>
                                    <p>General</p>
                                </div>
                                <div className='Admissionfollowup6'>
                                    <p onClick={() => props.setModalShow3(true)}>History</p>
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
                                        <p onClick={props.handleShow1}>Edit</p>
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
                                                <p onClick={props.handleShow2}>Task</p>
                                            </div>
                                            <div className='Admissionfollowup19'>
                                                <p onClick={props.handleShow3}>SMS</p>
                                            </div>
                                            <div className='Admissionfollowup19'>
                                                <p onClick={props.handleShow4}>E-mail</p>
                                            </div>
                                            <div className='Admissionfollowup19'>
                                                <p onClick={props.handleShow5}>What’sapp</p>
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



// New Lead Modal for admission page
export function NeWLead(props) {
    const [widthStyle, setWidthStyle] = useState('82%');
    const [leftstyl, Setleftstyl] = useState('18.1%');

    useEffect(() => {
        const handleResize = () => {
            // Update the width style based on screen size
            const screenWidth = window.innerWidth;
            const newWidthStyle = screenWidth < 580 ? '100%' : '82%'; // Adjust breakpoint as needed
            const newLeftstyl = screenWidth < 580 ? '0' : '18.1%'; // Adjust breakpoint as needed

            setWidthStyle(newWidthStyle);
            Setleftstyl(newLeftstyl)
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial call to set width based on current screen size
        handleResize();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Offcanvas show={props.show} onHide={props.onHide} placement="top" style={{ width: widthStyle, height: "100%", top: '10%', left: leftstyl }}>
                <Offcanvas.Body className='Admissionfollowup101'>
                    <div className='Admissionfollowup'>
                        <div className='Admissionfollowup1'>
                            <div className='Admissionfollowup2'>
                                <h6>New Lead</h6>
                                <ImLink color='#000000' size={20} />
                            </div>
                            <div className='Admissionfollowup3' onClick={props.onHide}>
                                <MdOutlineCancel color='#000000' size={25} />
                            </div>
                        </div>


                        <div className='Admissionfollowup3'>
                            <div className='Admissionfollowup4'>
                                <div className='Admissionfollowup5'>
                                    <p>General</p>
                                </div>
                                <div className='Admissionfollowup6'>
                                    <p onClick={() => props.setModalShow3(true)}>History</p>
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
                                        <p onClick={props.onHide}>Cancel</p>
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
                                        <p onClick={props.onHide}>Cancel</p>
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
                                        <p onClick={props.onHide}>Cancel</p>
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
                                    <button onClick={props.onHide}>Save</button>
                                    <button onClick={props.onHide}>Cancel</button>
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
                                                <p onClick={props.handleShow2}>Task</p>
                                            </div>
                                            <div className='Admissionfollowup19'>
                                                <p onClick={props.handleShow3}>SMS</p>
                                            </div>
                                            <div className='Admissionfollowup19'>
                                                <p onClick={props.handleShow4}>E-mail</p>
                                            </div>
                                            <div className='Admissionfollowup19'>
                                                <p onClick={props.handleShow5}>What’sapp</p>
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



// History Modal for admission page
export function History(props) {

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
                        <div className='Admissionfollowup3' onClick={() => props.onHide()}>
                            <MdOutlineCancel color='#000000' size={25} />
                        </div>
                    </div>


                    <div className='Admissionfollowup3'>
                        <div className='Admissionfollowup4'>
                            <div className={props.modalShow3 === false ? "Admissionfollowup5" : "Admissionfollowup6"} onClick={() => setStep(0)}>
                                <p onClick={props.onHide}>General</p>
                            </div>
                            <div className={props.modalShow3 === true ? "Admissionfollowup5" : "Admissionfollowup6"} onClick={() => setStep(1)}>
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



// NewTask Modal for admission page
export function NewTask(props) {
    const [widthStyle, setWidthStyle] = useState('82%');

    useEffect(() => {
        const handleResize = () => {
            // Update the width style based on screen size
            const screenWidth = window.innerWidth;
            const newWidthStyle = screenWidth < 580 ? '100%' : '82%'; // Adjust breakpoint as needed

            setWidthStyle(newWidthStyle);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial call to set width based on current screen size
        handleResize();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <Offcanvas show={props.show} onHide={props.onHide} placement="end" style={{ width: widthStyle, }}>
                <Offcanvas.Body className='historyModal101'>
                    <div className='Admissionfollowup'>
                        <div className='Admissionfollowup1'>
                            <div className='Admissionfollowup2'>
                                <h6>New Task</h6>
                            </div>
                            <div className='Admissionfollowup3' onClick={props.onHide}>
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
                                        <input type="date" className='newtask1296' />
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



// SMS Modal for admission page
export function SMS(props) {
    const [widthStyle, setWidthStyle] = useState('82%');

    useEffect(() => {
        const handleResize = () => {
            // Update the width style based on screen size
            const screenWidth = window.innerWidth;
            const newWidthStyle = screenWidth < 580 ? '100%' : '82%'; // Adjust breakpoint as needed

            setWidthStyle(newWidthStyle);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial call to set width based on current screen size
        handleResize();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Offcanvas show={props.show} onHide={props.onHide} placement="end" style={{ width: widthStyle, height: "100%" }}>
                <Offcanvas.Body className='Admissionfollowup101'>
                    <div className='Admissionfollowup'>
                        <div className='Admissionfollowup1'>
                            <div className='Admissionfollowup2'>
                                <h6>New Lead</h6>
                                <ImLink color='#000000' size={20} />
                            </div>
                            <div className='Admissionfollowup3' onClick={props.onHide}>
                                <MdOutlineCancel color='#000000' size={25} />
                            </div>
                        </div>


                        <div className='Admissionfollowup3'>
                            <div className='Admissionfollowup4'>
                                <div className='Admissionfollowup5'>
                                    <p>General</p>
                                </div>
                                <div className='Admissionfollowup6'>
                                    <p onClick={() => props.setModalShow3(true)}>History</p>
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
                                        <p onClick={props.onHide}>Cancel</p>
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
                                        <p onClick={props.onHide}>Cancel</p>
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
                                        <p onClick={props.onHide}>Cancel</p>
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
                                    <button onClick={props.onHide}>Save</button>
                                    <button onClick={props.onHide}>Cancel</button>
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
                                                <p onClick={props.handleClose3}>Comment</p>
                                            </div>
                                            <div className='Admissionfollowup19' >
                                                <p onClick={props.handleShow2}>Task</p>
                                            </div>
                                            <div className='Admissionfollowup18'>
                                                <p onClick={props.handleShow3}>SMS</p>
                                            </div>
                                            <div className='Admissionfollowup19'>
                                                <p onClick={props.handleShow4}>E-mail</p>
                                            </div>
                                            <div className='Admissionfollowup19'>
                                                <p onClick={props.handleShow5}>What’sapp</p>
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




// Email Modal for admission page
export function Email(props) {
    const [widthStyle, setWidthStyle] = useState('82%');

    useEffect(() => {
        const handleResize = () => {
            // Update the width style based on screen size
            const screenWidth = window.innerWidth;
            const newWidthStyle = screenWidth < 580 ? '100%' : '82%'; // Adjust breakpoint as needed

            setWidthStyle(newWidthStyle);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial call to set width based on current screen size
        handleResize();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Offcanvas show={props.show} onHide={props.onHide} placement="end" style={{ width: widthStyle, height: "100%" }}>
                <Offcanvas.Body className='Admissionfollowup101'>
                    <div className='Admissionfollowup'>
                        <div className='Admissionfollowup1'>
                            <div className='Admissionfollowup2'>
                                <h6>Send Message</h6>
                                <ImLink color='#000000' size={20} />
                            </div>
                            <div className='Admissionfollowup3' onClick={props.onHide}>
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
                                    <button onClick={props.onHide}>Create</button>
                                    <button onClick={props.onHide}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    );
}



// Whatsapp Modal for admission page
export function Whatsapp(props) {
    const [showdate, setShowdate] = useState(0)
    const [widthStyle, setWidthStyle] = useState('82%');

    useEffect(() => {
        const handleResize = () => {
            // Update the width style based on screen size
            const screenWidth = window.innerWidth;
            const newWidthStyle = screenWidth < 580 ? '100%' : '82%'; // Adjust breakpoint as needed

            setWidthStyle(newWidthStyle);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial call to set width based on current screen size
        handleResize();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Offcanvas show={props.show} onHide={props.onHide} placement="end" style={{ width: widthStyle, height: "100%" }}>
                <Offcanvas.Body className='Admissionfollowup101'>
                    <div className='Admissionfollowup'>
                        <div className='Admissionfollowup1'>
                            <div className='Admissionfollowup2'>
                                <h6>ABC</h6>
                            </div>
                            <div className='Admissionfollowup3' onClick={props.onHide}>
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
                                                        <button onClick={props.onHide}>Send</button>
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





// call Recoding Modal for backend page
export function CallRecoding(props) {
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
                                            <td onClick={() => props.setModalShow1(true)}>{data.FileSize}</td>
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



// Remarks Modal for backend page
export function Remarks(props) {


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
                    <button onClick={() => props.onHide()}>SAVE</button>
                    <button onClick={() => props.onHide()}>CANCEL</button>
                </div>
            </Modal.Body>
        </Modal>
    );
}


// AdmissionStatus Modal for backend page
export function AdmissionStatus(props) {


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
                        <IoMdClose color='#000000' onClick={() => props.onHide()} />
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
                                <div className='admissionstatus13' style={{ backgroundColor: "#FFB800" }}>
                                    <p>N/A</p>
                                </div>
                            </div>
                            <div className='admissionstatus12'>
                                <input type="radio" />
                                <div className='admissionstatus13' style={{ backgroundColor: "#40AF0C" }}>
                                    <p>Re-Verified</p>
                                </div>
                            </div>
                            <div className='admissionstatus12'>
                                <input type="radio" />
                                <div className='admissionstatus13' style={{ backgroundColor: "#FF0000" }}>
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





// StudentDetails Modal for pending payment page
export function StudentDetails(props) {


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='callrecordingModal'>
                <Modal.Header closeButton>
                    <Modal.Title>Student Details</Modal.Title>
                </Modal.Header>
                <div className='studentdetailModal'>
                    <div className='studentdetailModal1'>
                        <div className='studentdetailModal2'>
                            <label htmlFor="">Name</label>
                            <div className='studentdetailModal3'>
                                <p>LOREM IPSUM</p>
                            </div>
                        </div>
                        <div className='studentdetailModal2'>
                            <label htmlFor="">Email</label>
                            <div className='studentdetailModal3'>
                                <p>loremipsum@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='studentdetailModal1'>
                        <div className='studentdetailModal2'>
                            <label htmlFor="">Phone</label>
                            <div className='studentdetailModal3'>
                                <p>12345667890</p>
                            </div>
                        </div>
                        <div className='studentdetailModal2'>
                            <label htmlFor="">Admission No.</label>
                            <div className='studentdetailModal3'>
                                <p>IMTS-67845</p>
                            </div>
                        </div>
                    </div>
                    <div className='studentdetailModal1'>
                        <div className='studentdetailModal2'>
                            <label htmlFor="">Admission Date</label>
                            <div className='studentdetailModal3'>
                                <p>DD/MM/YYYY</p>
                            </div>
                        </div>
                        <div className='studentdetailModal2'>
                            <label htmlFor="">Course</label>
                            <div className='studentdetailModal3'>
                                <p>BA</p>
                            </div>
                        </div>
                    </div>
                    <div className='studentdetailModal1'>
                        <div className='studentdetailModal2'>
                            <label htmlFor="">University</label>
                            <div className='studentdetailModal3'>
                                <p>LOREM IPSUM</p>
                            </div>
                        </div>
                        <div className='studentdetailModal2'>
                            <label htmlFor="">Counselor</label>
                            <div className='studentdetailModal3'>
                                <p>LOREM IPSUM</p>
                            </div>
                        </div>
                    </div>

                    <div className='studentdetailModal4'>
                        <button onClick={() => props.onHide()}>Close</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}




//  Approve Online Payment Modal  for pending payment page
export function ApproveOnlinePayment(props) {


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='callrecordingModal'>
                <Modal.Header closeButton>
                    <Modal.Title>Approve Online Payment</Modal.Title>
                </Modal.Header>
                <div className='studentdetailModal'>
                    <div className='studentdetailModal1'>
                        <div className='studentdetailModal2'>
                            <label htmlFor="">Name</label>
                            <div className='studentdetailModal3'>
                                <p>LOREM IPSUM</p>
                            </div>
                        </div>
                        <div className='studentdetailModal2'>
                            <label htmlFor="">Email</label>
                            <div className='studentdetailModal3'>
                                <p>loremipsum@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='studentdetailModal1'>
                        <div className='studentdetailModal2'>
                            <label htmlFor="">Phone</label>
                            <div className='studentdetailModal3'>
                                <p>12345667890</p>
                            </div>
                        </div>
                        <div className='studentdetailModal2'>
                            <label htmlFor="">Admission No.</label>
                            <div className='studentdetailModal3'>
                                <p>IMTS-67845</p>
                            </div>
                        </div>
                    </div>
                    <div className='studentdetailModal1'>
                        <div className='studentdetailModal2'>
                            <label htmlFor="">Admission Date</label>
                            <div className='studentdetailModal3'>
                                <p>DD/MM/YYYY</p>
                            </div>
                        </div>
                        <div className='studentdetailModal2'>
                            <label htmlFor="">Course</label>
                            <div className='studentdetailModal3'>
                                <p>BA</p>
                            </div>
                        </div>
                    </div>
                    <div className='studentdetailModal1'>
                        <div className='studentdetailModal2'>
                            <label htmlFor="">University</label>
                            <div className='studentdetailModal3'>
                                <p>LOREM IPSUM</p>
                            </div>
                        </div>
                        <div className='studentdetailModal2'>
                            <label htmlFor="">Counselor</label>
                            <div className='studentdetailModal3'>
                                <p>LOREM IPSUM</p>
                            </div>
                        </div>
                    </div>

                    <div className='approvepaymentmodal'>
                        <h6>Are you sure to approve payment : <span>12500</span> and Order ID : <span>IMTS-67845</span>?</h6>
                    </div>

                    <div className='approvepaymentmodal1'>
                        <button onClick={() => props.onHide()}>Yes</button>
                        <button onClick={() => props.onHide()}>No</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}