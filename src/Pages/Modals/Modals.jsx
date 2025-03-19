import React, { useEffect, useState, useRef } from 'react';
import './Modals.css'
import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MultiSelect } from "react-multi-select-component";
import { useNavigate } from 'react-router-dom';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Dropdown } from "react-bootstrap";

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
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { PiWarningCircle } from "react-icons/pi";
import { IoAttach } from "react-icons/io5";
import { GoListUnordered } from "react-icons/go";
import { MdFormatListNumbered } from "react-icons/md";
import { RiDoubleQuotesR } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";
import { RiDoubleQuotesL } from "react-icons/ri";
import { VscMention } from "react-icons/vsc";
import { FaRegCopy } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";




import img1 from '../../Img/img60.png'
import img2 from '../../Img/img61.png'
import img3 from '../../Img/img62.png'
import img4 from '../../Img/img63.png'
import img5 from '../../Img/img64.png'
import img7 from '../../Img/img71.png'
import img8 from '../../Img/img72.png'
import img9 from '../../Img/img108.png'
import img19 from '../../Img/img83.png'
import img20 from '../../Img/img82.png'
import { GiOverhead } from 'react-icons/gi';
import img21 from '../../Img/img110.png'
import { postApi, putApi } from '../../Repository/Api';
import endPoints from '../../Repository/apiConfig';
import { toast } from 'react-toastify';


export function AddNewFilter(props) {
    return (
        <Modal
            {...props}
            size="sl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className='addnewfilterModal'>
                    <div className='addnewfilterModal1'>
                        <label htmlFor="">Add New Filter Name</label>
                        <div className='addnewfilterModal2'>
                            <IoMdClose color='#444444' size={20} />
                        </div>
                    </div>
                    <div className='addnewfilterModal3'>
                        <button onClick={() => props.onHide()}>SAVE</button>
                        <button onClick={() => props.onHide()}>CANCEL</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}





//Filter Modal for admission page
export function FilterModal(props) {
    const [step, setStep] = useState(0);
    const options = [
        { label: "Loren Epsom University", value: "Unoversity" },
        { label: "Loren Epsom University", value: "Unoversity" },
        { label: "Loren Epsom University", value: "Unoversity", },
    ];
    const options1 = [
        { label: "General", value: "General" },
        { label: "OBC", value: "OBC" },
        { label: "SC", value: "SC", },
        { label: "ST", value: "ST", },
    ];
    const options2 = [
        { label: "India", value: "India" },
        { label: "UAE", value: "UAE" },
        { label: "Ghana", value: "Ghana", },
        { label: "Quatar", value: "Quatar", },
        { label: "Yemen", value: "Yemen", },
    ];
    const options3 = [
        { label: "O+", value: "O+" },
        { label: "O-", value: "O-" },
        { label: "A", value: "A", },
        { label: "B", value: "B", },
        { label: "AB", value: "AB", },
    ];
    const options4 = [
        { label: "Utter Pradesh", value: "India" },
        { label: "Hariyana", value: "UAE" },
        { label: "Maharashtra", value: "Ghana", },
        { label: "Punjab", value: "Quatar", },
        { label: "Madhya Pradesh", value: "Yemen", },
    ];
    const options5 = [
        { label: "Loren Epsom", value: "India" },
        { label: "Loren Epsom", value: "UAE" },
        { label: "Loren Epsom", value: "Ghana", },
        { label: "Loren Epsom", value: "Quatar", },
        { label: "Yemen", value: "Yemen", },
    ];
    const options6 = [
        { label: "Hindu", value: "India" },
        { label: "Muslim", value: "UAE" },
        { label: "Buddhist", value: "Ghana", },
        { label: "Chrishtian", value: "Quatar", },
        { label: "Others", value: "Yemen", },
    ];
    const options7 = [
        { label: "Married", value: "India" },
        { label: "Unmarried", value: "UAE" },
        { label: "Divorced", value: "Ghana", }
    ];

    const options8 = [
        { label: "Yes", value: "India" },
        { label: "No", value: "UAE" },
    ];
    const options9 = [
        { label: "Employed", value: "India" },
        { label: "Unemployed", value: "UAE" },
    ];
    const options10 = [
        { label: "Internal", value: "India" },
        { label: "External", value: "UAE" },
    ];
    const options11 = [
        { label: "Aadhar Card", value: "India" },
        { label: "Passport", value: "UAE" },
        { label: "Driving License", value: "India" },
        { label: "Voter ID", value: "UAE" },
        { label: "Other", value: "India" },
    ];
    const options12 = [
        { label: "Reverified", value: "India" },
        { label: "N/A", value: "UAE" },
        { label: "Reverification Rejected", value: "India" },
    ];
    const options13 = [
        { label: "Approved", value: "UAE" },
        { label: "Pending", value: "India" },
        { label: "Rejected", value: "India" },
    ];
    const options17 = [
        { label: "Send", value: "UAE" },
        { label: "Received", value: "India" },
        { label: "Waiting", value: "India" },
    ];
    const options14 = [
        { label: "Any Date", value: "India" },
        { label: "Yesterday", value: "UAE" },
        { label: "Current Day", value: "India" },
        { label: "Tomorrow", value: "India" },
        { label: "This Week", value: "India" },
        { label: "This Month", value: "UAE" },
        { label: "Current Quarter", value: "India" },
        { label: "Last 7 days", value: "India" },
    ];

    const options15 = [
        { label: "Automatic", value: "India" },
        { label: "Manual", value: "UAE" },
    ];
    const options16 = [
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
    ];

    const [selected, setSelected] = useState([]);

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

                        <div className='filter6' onClick={() => props.setModalShow7(true)}>
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
                                    <MultiSelect
                                        options={options}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Category</label>
                                    <MultiSelect
                                        options={options1}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Nationality</label>
                                    <MultiSelect
                                        options={options2}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Blood Group</label>
                                    <MultiSelect
                                        options={options3}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">State</label>
                                    <MultiSelect
                                        options={options4}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">District</label>
                                    <MultiSelect
                                        options={options5}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">City</label>
                                    <MultiSelect
                                        options={options5}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Religion</label>
                                    <MultiSelect
                                        options={options6}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Marital Status</label>
                                    <MultiSelect
                                        options={options7}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Minority Belonging</label>
                                    <MultiSelect
                                        options={options8}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Employment Status</label>
                                    <MultiSelect
                                        options={options9}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Domicile</label>
                                    <MultiSelect
                                        options={options4}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">ID Proof type</label>
                                    <MultiSelect
                                        options={options11}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Study Medium</label>
                                    <MultiSelect
                                        options={options11}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Assignment Type</label>
                                    <MultiSelect
                                        options={options10}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Free Date for Verification</label>
                                    <input type="date" />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Reverification</label>
                                    <MultiSelect
                                        options={options12}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Enrollment Number</label>
                                    <input type="text" />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Admission Confirmation </label>
                                    <MultiSelect
                                        options={options13}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Admission Confirmation Status</label>
                                    <MultiSelect
                                        options={options17}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Admission Date</label>
                                    <MultiSelect
                                        options={options14}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
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
                                    <MultiSelect
                                        options={options15}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Admission Confirm Status</label>
                                    <MultiSelect
                                        options={options16}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
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
                                    <p onClick={() => props.setModalShow2(true)}>Add Field</p>
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

                        <div className='filter6' onClick={() => props.setModalShow7(true)}>
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


    const popover1 = (
        <Popover id="popover-basic">
            <Popover.Body className='pdcfieladmodalmodal3'>
                <div className='pdcfieladmodalmodal'>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img21} alt="" />
                            <p>Depatment : Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img21} alt="" />
                            <p>Depatment : Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img21} alt="" />
                            <p>Depatment : Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img21} alt="" />
                            <p>Depatment : Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );


    const popover = (
        <Popover id="popover-basic">
            <Popover.Body className='pdcfieladmodalmodal3'>
                <div className='pdcfieladmodalmodal'>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img19} alt="" />
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img20} alt="" />
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img19} alt="" />
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img20} alt="" />
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );


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
                                    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                                        <label htmlFor="">Apply for Users</label>
                                    </OverlayTrigger>
                                </div>
                                <div className='addfield13'>
                                    <input type="checkbox" />
                                    <OverlayTrigger trigger="click" placement="top" overlay={popover1}>
                                        <label htmlFor="">Apply for Departments</label>
                                    </OverlayTrigger>
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




//DocumentFilterModal Modal for admission page
export function DocumentFilterModal(props) {
    const [step, setStep] = useState(0);
    const options = [
        { label: "Loren Epsom University", value: "Unoversity" },
        { label: "Loren Epsom University", value: "Unoversity" },
        { label: "Loren Epsom University", value: "Unoversity", },
    ];
    const options1 = [
        { label: "1", value: "General" },
        { label: "2", value: "OBC" },
        { label: "3", value: "SC", },
        { label: "4", value: "ST", },
    ];
    const options2 = [
        { label: "None", value: "India" },
        { label: "Applied", value: "UAE" },
        { label: "Available", value: "Ghana", },
        { label: "Not Available", value: "Quatar", },
        { label: "Sent", value: "Yemen", },
    ];
    const options4 = [
        { label: "Utter Pradesh", value: "India" },
        { label: "Hariyana", value: "UAE" },
        { label: "Maharashtra", value: "Ghana", },
        { label: "Punjab", value: "Quatar", },
        { label: "Madhya Pradesh", value: "Yemen", },
    ];


    const [selected, setSelected] = useState([]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="no-padding">
                <div className='filter1'>
                    <div className='filter230'>
                        <div className='filter3'>
                            <p>FILTERS</p>
                        </div>

                        <div className='filter4'>
                            <p>DEALS IN PROGRESS</p>
                        </div>
                        <div className='filter5' onClick={() => props.setModalShow1(true)}>
                            <p>MY DEALS</p>
                        </div>

                        <div className='filter6' onClick={() => props.setModalShow20(true)}>
                            <p>+Save Filter</p>
                        </div>
                    </div>
                    <div className='filter7'>
                        <div className='filter11'>
                            <div className='filter12'>
                                <label htmlFor="">Application no/ Name/ Email Id/ Mobile No.</label>
                                <input type="text" />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">State</label>
                                <MultiSelect
                                    options={options4}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">University</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='documentfiltermodal'>
                                <div className='documentfiltermodal5'>
                                    <div className='documentfiltermodal1'>
                                        <h6>MARKSHEET</h6>
                                    </div>

                                    <div className='documentfiltermodal2'>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Batch</label>
                                            <MultiSelect
                                                options={options1}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Status</label>
                                            <MultiSelect
                                                options={options2}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='documentfiltermodal5'>
                                    <div className='documentfiltermodal1'>
                                        <h6>ID CARD</h6>
                                    </div>

                                    <div className='documentfiltermodal2'>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Batch</label>
                                            <MultiSelect
                                                options={options1}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Status</label>
                                            <MultiSelect
                                                options={options2}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='documentfiltermodal5'>
                                    <div className='documentfiltermodal1'>
                                        <h6>ADMIT CARD</h6>
                                    </div>

                                    <div className='documentfiltermodal2'>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Batch</label>
                                            <MultiSelect
                                                options={options1}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Status</label>
                                            <MultiSelect
                                                options={options2}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='documentfiltermodal5'>
                                    <div className='documentfiltermodal1'>
                                        <h6>RESULT STATUS</h6>
                                    </div>

                                    <div className='documentfiltermodal2'>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Batch</label>
                                            <MultiSelect
                                                options={options1}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Status</label>
                                            <MultiSelect
                                                options={options2}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='documentfiltermodal5'>
                                    <div className='documentfiltermodal1'>
                                        <h6>ADMISSION LETTER</h6>
                                    </div>

                                    <div className='documentfiltermodal2'>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Batch</label>
                                            <MultiSelect
                                                options={options1}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Status</label>
                                            <MultiSelect
                                                options={options2}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='documentfiltermodal5'>
                                    <div className='documentfiltermodal1'>
                                        <h6>CERTIFICATE</h6>
                                    </div>

                                    <div className='documentfiltermodal2'>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Batch</label>
                                            <MultiSelect
                                                options={options1}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Status</label>
                                            <MultiSelect
                                                options={options2}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='documentfiltermodal5'>
                                    <div className='documentfiltermodal1'>
                                        <h6>PROVISIONAL</h6>
                                    </div>

                                    <div className='documentfiltermodal2'>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Batch</label>
                                            <MultiSelect
                                                options={options1}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Status</label>
                                            <MultiSelect
                                                options={options2}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='documentfiltermodal5'>
                                    <div className='documentfiltermodal1'>
                                        <h6>MIGRATION</h6>
                                    </div>

                                    <div className='documentfiltermodal2'>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Batch</label>
                                            <MultiSelect
                                                options={options1}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Status</label>
                                            <MultiSelect
                                                options={options2}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div className='documentfiltermodal5'>
                                    <div className='documentfiltermodal1'>
                                        <h6>DEGREE</h6>
                                    </div>

                                    <div className='documentfiltermodal2'>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Batch</label>
                                            <MultiSelect
                                                options={options1}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Status</label>
                                            <MultiSelect
                                                options={options2}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='documentfiltermodal5'>
                                    <div className='documentfiltermodal1'>
                                        <h6>TRANSCRIPT</h6>
                                    </div>

                                    <div className='documentfiltermodal2'>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Batch</label>
                                            <MultiSelect
                                                options={options1}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Status</label>
                                            <MultiSelect
                                                options={options2}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='documentfiltermodal5'>
                                    <div className='documentfiltermodal1'>
                                        <h6>ATTESTATION</h6>
                                    </div>

                                    <div className='documentfiltermodal2'>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Batch</label>
                                            <MultiSelect
                                                options={options1}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Status</label>
                                            <MultiSelect
                                                options={options2}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='documentfiltermodal5'>
                                    <div className='documentfiltermodal1'>
                                        <h6>OTHER DOCUMENT APPLY</h6>
                                    </div>

                                    <div className='documentfiltermodal2'>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Batch</label>
                                            <MultiSelect
                                                options={options1}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                        <div className='documentfiltermodal3'>
                                            <label htmlFor="">Status</label>
                                            <MultiSelect
                                                options={options2}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                className='documentfiltermodal4 multi-select11'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='documentfiltermodal6'>
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



//IT Report Filter Modal for /IT Report  page
export function ITReportFilterModal(props) {
    const [step, setStep] = useState(0);
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

    const [selected, setSelected] = useState([]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="no-padding">
                <div className='filter1'>
                    <div className='filter223'>
                        <div className='filter3'>
                            <p>FILTERS</p>
                        </div>

                        <div className='filter4'>
                            <p>DEALS IN PROGRESS</p>
                        </div>
                        <div className='filter5' onClick={() => props.setModalShow1(true)}>
                            <p>MY DEALS</p>
                        </div>

                        <div className='filter6' onClick={() => props.setModalShow7(true)}>
                            <p>+Save Filter</p>
                        </div>
                    </div>
                    <div className='filter7'>
                        <div className='filter11'>
                            <div className='filter12'>
                                <label htmlFor="">Recoderd Date</label>
                                <input type="date" />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Website</label>
                                <input type="text" />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Content Added</label>
                                <input type="text" />
                            </div>

                            <div className='Itreportfiltermodal'>
                                <label htmlFor="">Content Word Count</label>
                                <div className='Itreportfiltermodal1'>
                                    <select name="" id="">
                                        <option value="">Exact Value</option>
                                        <option value="">Range</option>
                                        <option value="">More than</option>
                                        <option value="">Less than</option>
                                    </select>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">URL</label>
                                <input type="text" />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Topic</label>
                                <input type="text" />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Keywords</label>
                                <input type="text" />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Responsible Person</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='documentfiltermodal6'>
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


//HistoryLogs Modal for /IT Report  page
export function HistoryLogsModal(props) {
    const tableData4 = [
        {
            id: 1,
            EntityType: 'Website',
            ResponsiblePerson: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            Time: '10:30 AM',
        },

        {
            id: 1,
            EntityType: 'Website',
            ResponsiblePerson: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            Time: '10:30 AM',
        },
        {
            id: 1,
            EntityType: 'Website',
            ResponsiblePerson: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            Time: '10:30 AM',
        },
        {
            id: 1,
            EntityType: 'Website',
            ResponsiblePerson: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            Time: '10:30 AM',
        },
        {
            id: 1,
            EntityType: 'Website',
            ResponsiblePerson: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            Time: '10:30 AM',
        },
        {
            id: 1,
            EntityType: 'Website',
            ResponsiblePerson: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            Time: '10:30 AM',
        },

    ];

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='feestructureModal101'>
                <div className='feestructureModal'>
                    <div className='EducationDetailsModal'>
                        <p>History Logs</p>
                        <IoCloseOutline color='#000000' size={25} onClick={() => props.onHide(false)} />
                    </div>
                    <div className='admission13'>
                        <div className='table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Entity Type</th>
                                        <th>Responsible Person</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData4.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.EntityType}</td>
                                            <td>{data.ResponsiblePerson}</td>
                                            <td>{data.Date}</td>
                                            <td>{data.Time}</td>
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





//IT Report Filter Modal for admission page
export function ITTargetReportsFilterModal(props) {
    const [step, setStep] = useState(0);
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


    const options1 = [
        { label: "www.sdfdfdsfwdf.com", value: "Unoversity" },
        { label: "www.sdfdfdsfwdf.com", value: "Unoversity" },
        { label: "www.sdfdfdsfwdf.com", value: "Unoversity", },
    ];

    const options2 = [
        { label: "0-500 words", value: "Unoversity" },
        { label: "500-1000 word", value: "Unoversity" },
        { label: "1000-1500 words", value: "Unoversity", },
        { label: "1500-2000 words", value: "Unoversity" },
        { label: "More than 2000 words", value: "Unoversity" },
    ];

    const options3 = [
        { label: "Loren epsom", value: "Unoversity" },
        { label: "Loren epsom", value: "Unoversity" },
        { label: "Loren epsom", value: "Unoversity" },
        { label: "Loren epsom", value: "Unoversity" },
        { label: "Loren epsom", value: "Unoversity" },
    ];

    const [selected, setSelected] = useState([]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="no-padding">
                <div className='filter1'>
                    <div className='filter223'>
                        <div className='filter3'>
                            <p>FILTERS</p>
                        </div>

                        <div className='filter4'>
                            <p>MY FILTERS</p>
                        </div>
                    </div>
                    <div className='filter7'>
                        <div className='filter11'>
                            <div className='filter12'>
                                <label htmlFor="">Recorded Date</label>
                                <input type="date" />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Website</label>
                                <MultiSelect
                                    options={options1}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Content Word Count</label>
                                <MultiSelect
                                    options={options2}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">URL</label>
                                <MultiSelect
                                    options={options1}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Topic</label>
                                <MultiSelect
                                    options={options3}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Keywords</label>
                                <MultiSelect
                                    options={options3}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Responsible Person</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">History</label>
                                <MultiSelect
                                    options={options3}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='documentfiltermodal6'>
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


//CallRecordingAnalysisFilterModal  for admission page
export function CallRecordingAnalysisFilterModal(props) {
    const [step, setStep] = useState(0);
    const starCount = 5; // number of stars you want
    const stars = Array(starCount).fill(<MdStar size={20} color='#E2A03F' />);
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


    const options1 = [
        { label: "1.Bad", value: "Unoversity" },
        { label: "2.Good", value: "Unoversity" },
        { label: "3.Great", value: "Unoversity", },
        { label: "4.Best", value: "Unoversity", },
        { label: "5.Other", value: "Unoversity", },
    ];

    const options2 = [
        { label: <div>{stars}</div>, value: "Unoversity" },
        { label: <div>{stars}</div>, value: "Unoversity" },
        { label: <div>{stars}</div>, value: "Unoversity", },
        { label: <div>{stars}</div>, value: "Unoversity" },
        { label: <div>{stars}</div>, value: "Unoversity" },
    ];


    // 
    // <MdStar size={20} color='#E2A03F' />
    // <IoMdStarOutline size={20} color='#E2A03F' />
    // <IoMdStarOutline size={20} color='#E2A03F' />

    const options3 = [
        { label: "Any Date", value: "India" },
        { label: "Yesterday", value: "UAE" },
        { label: "Current Day", value: "India" },
        { label: "Tomorrow", value: "India" },
        { label: "This Week", value: "India" },
        { label: "This Month", value: "UAE" },
        { label: "Current Quarter", value: "India" },
        { label: "Last 7 days", value: "India" },
    ];

    const [selected, setSelected] = useState([]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="no-padding">
                <div className='filter1'>
                    <div className='filter223'>
                        <div className='filter3'>
                            <p>FILTERS</p>
                        </div>

                        <div className='filter4'>
                            <p>MY FILTERS</p>
                        </div>
                    </div>
                    <div className='filter7'>
                        <div className='filter11'>
                            <div className='filter12'>
                                <label htmlFor="">Responsible Person</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Added On</label>
                                <MultiSelect
                                    options={options3}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='callrecordinganalysisfiltermodal'>
                                <div className='filter12'>
                                    <label htmlFor="">Remark</label>
                                    <MultiSelect
                                        options={options1}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Remark Rating</label>
                                    <MultiSelect
                                        options={options2}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                            </div>

                            <div className='filter12'>
                                <label htmlFor="">Overall Rating</label>
                                <MultiSelect
                                    options={options2}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Rated On</label>
                                <MultiSelect
                                    options={options3}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Rated By User</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='documentfiltermodal6'>
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



//CallRecordingAnalysisFilterModal  for admission page
export function PettyCashPaymentFilterModal(props) {
    const [step, setStep] = useState(0);
    const starCount = 5; // number of stars you want
    const stars = Array(starCount).fill(<MdStar size={20} color='#E2A03F' />);
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


    const options1 = [
        { label: "1.Bad", value: "Unoversity" },
        { label: "2.Good", value: "Unoversity" },
        { label: "3.Great", value: "Unoversity", },
        { label: "4.Best", value: "Unoversity", },
        { label: "5.Other", value: "Unoversity", },
    ];

    const options2 = [
        { label: <div>{stars}</div>, value: "Unoversity" },
        { label: <div>{stars}</div>, value: "Unoversity" },
        { label: <div>{stars}</div>, value: "Unoversity", },
        { label: <div>{stars}</div>, value: "Unoversity" },
        { label: <div>{stars}</div>, value: "Unoversity" },
    ];


    // 
    // <MdStar size={20} color='#E2A03F' />
    // <IoMdStarOutline size={20} color='#E2A03F' />
    // <IoMdStarOutline size={20} color='#E2A03F' />

    const options3 = [
        { label: "Any Date", value: "India" },
        { label: "Yesterday", value: "UAE" },
        { label: "Current Day", value: "India" },
        { label: "Tomorrow", value: "India" },
        { label: "This Week", value: "India" },
        { label: "This Month", value: "UAE" },
        { label: "Current Quarter", value: "India" },
        { label: "Last 7 days", value: "India" },
    ];


    const popover = (
        <Popover id="popover-basic">
            <Popover.Body className='pendingtaskmodal55'>
                <div className='pendingtaskmodal5'>
                    <div className='pendingtaskmodal6'>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img20} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img20} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );

    const [selected, setSelected] = useState([]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="no-padding">
                <div className='filter1'>
                    <div className='filter226'>
                        <div className='filter3'>
                            <p>FILTERS</p>
                        </div>

                        <div className='filter4'>
                            <p>MY FILTERS</p>
                        </div>
                    </div>
                    <div className='filter7'>
                        <div className='filter11'>
                            <div className='filter12'>
                                <label htmlFor="">Request date</label>
                                <input type="text" />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Title</label>
                                <input type="date" />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Approved By</label>
                                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                    <div className='filter13'>
                                        <IoIosArrowDown />
                                    </div>
                                </OverlayTrigger>
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Final Approved By</label>
                                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                    <div className='filter13'>
                                        <IoIosArrowDown />
                                    </div>
                                </OverlayTrigger>
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Final Approved On</label>
                                <MultiSelect
                                    options={options3}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Amount</label>
                                <input type="text" />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Final Status</label>
                                <input type="text" />

                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Request Approved On</label>
                                <input type="text" />

                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Request Approved By</label>
                                <input type="text" />
                            </div>
                            <div className='paymentfiltermodal'>
                                <label htmlFor="">Status</label>
                                <div className='paymentfiltermodal1'>
                                    <div className='paymentfiltermodal2'>
                                        <input type="radio" />
                                        <label htmlFor="">Pending</label>
                                    </div>
                                    <div className='paymentfiltermodal2'>
                                        <input type="radio" />
                                        <label htmlFor="">Approved</label>
                                    </div>
                                    <div className='paymentfiltermodal2'>
                                        <input type="radio" />
                                        <label htmlFor="">Rejected</label>
                                    </div>
                                </div>

                            </div>

                            <div className='filter19'>
                                <p onClick={() => props.setModalShow2(true)}>Add Field</p>
                                <span>Restore default fields </span>
                            </div>
                            <div className='documentfiltermodal6'>
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


//University Filter Modal for admission page
export function UniversityFilterModal(props) {
    const [step, setStep] = useState(0);
    const options = [
        { label: "Loren Epsom University", value: "Unoversity" },
        { label: "Loren Epsom University", value: "Unoversity" },
        { label: "Loren Epsom University", value: "Unoversity", },
    ];


    const [selected, setSelected] = useState([]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="no-padding">
                <div className='filter1'>
                    <div className='filter223'>
                        <div className='filter3'>
                            <p>FILTERS</p>
                        </div>

                        <div className='filter4'>
                            <p>DEALS IN PROGRESS</p>
                        </div>
                        <div className='filter5' onClick={() => props.setModalShow1(true)}>
                            <p>MY DEALS</p>
                        </div>

                        <div className='filter6' onClick={() => props.setModalShow4(true)}>
                            <p>+Save Filter</p>
                        </div>
                    </div>
                    <div className='filter7'>
                        <div className='filter11'>
                            <div className='filter12'>
                                <label htmlFor="">University</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='Itreportfiltermodal'>
                                <label htmlFor="">Registration</label>
                                <div className='Itreportfiltermodal1'>
                                    <select name="" id="">
                                        <option value="">Exact Value</option>
                                        <option value="">Range</option>
                                        <option value="">More than</option>
                                        <option value="">Less than</option>
                                    </select>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='Itreportfiltermodal'>
                                <label htmlFor="">TOC Charges</label>
                                <div className='Itreportfiltermodal1'>
                                    <select name="" id="">
                                        <option value="">Exact Value</option>
                                        <option value="">Range</option>
                                        <option value="">More than</option>
                                        <option value="">Less than</option>
                                    </select>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='Itreportfiltermodal'>
                                <label htmlFor="">LE Charges</label>
                                <div className='Itreportfiltermodal1'>
                                    <select name="" id="">
                                        <option value="">Exact Value</option>
                                        <option value="">Range</option>
                                        <option value="">More than</option>
                                        <option value="">Less than</option>
                                    </select>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='Itreportfiltermodal'>
                                <label htmlFor="">Multiple Charges</label>
                                <div className='Itreportfiltermodal1'>
                                    <select name="" id="">
                                        <option value="">Exact Value</option>
                                        <option value="">Range</option>
                                        <option value="">More than</option>
                                        <option value="">Less than</option>
                                    </select>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='Itreportfiltermodal'>
                                <label htmlFor="">RR Charges</label>
                                <div className='Itreportfiltermodal1'>
                                    <select name="" id="">
                                        <option value="">Exact Value</option>
                                        <option value="">Range</option>
                                        <option value="">More than</option>
                                        <option value="">Less than</option>
                                    </select>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='Itreportfiltermodal'>
                                <label htmlFor="">Gap Charges</label>
                                <div className='Itreportfiltermodal1'>
                                    <select name="" id="">
                                        <option value="">Exact Value</option>
                                        <option value="">Range</option>
                                        <option value="">More than</option>
                                        <option value="">Less than</option>
                                    </select>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='Itreportfiltermodal'>
                                <label htmlFor="">Back Paper Charges</label>
                                <div className='Itreportfiltermodal1'>
                                    <select name="" id="">
                                        <option value="">Exact Value</option>
                                        <option value="">Range</option>
                                        <option value="">More than</option>
                                        <option value="">Less than</option>
                                    </select>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='documentfiltermodal6'>
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

export function CourseFilterModal(props) {
    const [step, setStep] = useState(0);
    const options = [
        { label: "Loren Epsom University", value: "Unoversity" },
        { label: "Loren Epsom University", value: "Unoversity" },
        { label: "Loren Epsom University", value: "Unoversity", },
    ];
    const options1 = [
        { label: "B.tech", value: "Unoversity" },
        { label: "MBA", value: "Unoversity" },
        { label: "Bsc", value: "Unoversity", },
        { label: "Msc", value: "Unoversity" },
        { label: "BA", value: "Unoversity" },
        { label: "MA", value: "Unoversity", },
        { label: "Bcom", value: "Unoversity" },
        { label: "Mcom", value: "Unoversity" },
        { label: "CA", value: "Unoversity", },
        { label: "BCA", value: "Unoversity", },
        { label: "BBA", value: "Unoversity", },
        { label: "MBBS", value: "Unoversity", },
        { label: "BHMS", value: "Unoversity", },
        { label: "BAMS", value: "Unoversity", },
        { label: "BDS", value: "Unoversity", },
    ];
    const options2 = [
        { label: "Loren Epsom", value: "Unoversity" },
        { label: "Loren Epsom ", value: "Unoversity" },
        { label: "Loren Epsom", value: "Unoversity", },
    ];
    const options3 = [
        { label: "Semester", value: "Unoversity" },
        { label: "yearly", value: "Unoversity" },
    ];
    const options4 = [
        { label: "1", value: "Unoversity" },
        { label: "2", value: "Unoversity" },
        { label: "3", value: "Unoversity", },
    ];


    const [selected, setSelected] = useState([]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="no-padding">
                <div className='filter1'>
                    <div className='filter222'>
                        <div className='filter3'>
                            <p>FILTERS</p>
                        </div>

                        <div className='filter4'>
                            <p>DEALS IN PROGRESS</p>
                        </div>
                        <div className='filter5' onClick={() => props.setModalShow1(true)}>
                            <p>MY DEALS</p>
                        </div>

                        <div className='filter6' onClick={() => props.setModalShow4(true)}>
                            <p>+Save Filter</p>
                        </div>
                    </div>
                    <div className='filter7'>
                        <div className='filter11'>
                            <div className='filter12'>
                                <label htmlFor="">University</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Course</label>
                                <MultiSelect
                                    options={options1}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>

                            <div className='filter12'>
                                <label htmlFor="">Specialization</label>
                                <MultiSelect
                                    options={options2}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>

                            <div className='filter12'>
                                <label htmlFor="">Exam Mode</label>
                                <MultiSelect
                                    options={options3}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>

                            <div className='filter12'>
                                <label htmlFor="">Course Duration</label>
                                <MultiSelect
                                    options={options4}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>



                            <div className='documentfiltermodal6'>
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



export function SpecializationFilterModal(props) {
    const [step, setStep] = useState(0);
    const options = [
        { label: "Loren Epsom", value: "Unoversity" },
        { label: "Loren Epsom ", value: "Unoversity" },
        { label: "Loren Epsom", value: "Unoversity", },
    ];


    const [selected, setSelected] = useState([]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="no-padding">
                <div className='filter1'>
                    <div className='filter224'>
                        <div className='filter3'>
                            <p>FILTERS</p>
                        </div>

                        <div className='filter4'>
                            <p>DEALS IN PROGRESS</p>
                        </div>
                        <div className='filter5' onClick={() => props.setModalShow1(true)}>
                            <p>MY DEALS</p>
                        </div>

                        <div className='filter6' onClick={() => props.setModalShow4(true)}>
                            <p>+Save Filter</p>
                        </div>
                    </div>
                    <div className='filter7'>
                        <div className='filter11'>
                            <div className='filter12'>
                                <label htmlFor="">Specialization Name </label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>

                            <div className='filter12'>
                                <label htmlFor="">Description</label>
                                <input type="text" />
                            </div>

                            <div className='documentfiltermodal6'>
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


export function SubjectFilterModal(props) {
    const [step, setStep] = useState(0);
    const options = [
        { label: "Loren Epsom", value: "Unoversity" },
        { label: "Loren Epsom ", value: "Unoversity" },
        { label: "Loren Epsom", value: "Unoversity", },
    ];


    const [selected, setSelected] = useState([]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="no-padding">
                <div className='filter1'>
                    <div className='filter224'>
                        <div className='filter3'>
                            <p>FILTERS</p>
                        </div>

                        <div className='filter4'>
                            <p>DEALS IN PROGRESS</p>
                        </div>
                        <div className='filter5' onClick={() => props.setModalShow1(true)}>
                            <p>MY DEALS</p>
                        </div>

                        <div className='filter6' onClick={() => props.setModalShow4(true)}>
                            <p>+Save Filter</p>
                        </div>
                    </div>
                    <div className='filter7'>
                        <div className='filter11'>
                            <div className='filter12'>
                                <label htmlFor="">Subject Name</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>

                            <div className='filter12'>
                                <label htmlFor="">Books / Description</label>
                                <input type="text" />
                            </div>

                            <div className='documentfiltermodal6'>
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


export function BankAccountFilterModal(props) {
    const [step, setStep] = useState(0);
    const options = [
        { label: "Loren Epsom", value: "Unoversity" },
        { label: "Loren Epsom ", value: "Unoversity" },
        { label: "Loren Epsom", value: "Unoversity", },
    ];


    const [selected, setSelected] = useState([]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="no-padding">
                <div className='filter1'>
                    <div className='filter224'>
                        <div className='filter3'>
                            <p>FILTERS</p>
                        </div>

                        <div className='filter4'>
                            <p>DEALS IN PROGRESS</p>
                        </div>
                        <div className='filter5' onClick={() => props.setModalShow1(true)}>
                            <p>MY DEALS</p>
                        </div>

                        <div className='filter6' onClick={() => props.setModalShow4(true)}>
                            <p>+Save Filter</p>
                        </div>
                    </div>
                    <div className='filter7'>
                        <div className='filter11'>
                            <div className='filter12'>
                                <label htmlFor="">Bank Name / Account No. /  IFSC Code / Bank Branch</label>
                                <input type="text" />
                            </div>

                            <div className='documentfiltermodal6'>
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

export function DocumentFilterModal11(props) {
    const [step, setStep] = useState(0);
    const options = [
        { label: "Loren Epsom", value: "Unoversity" },
        { label: "Loren Epsom ", value: "Unoversity" },
        { label: "Loren Epsom", value: "Unoversity", },
    ];


    const [selected, setSelected] = useState([]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="no-padding">
                <div className='filter1'>
                    <div className='filter224'>
                        <div className='filter3'>
                            <p>FILTERS</p>
                        </div>

                        <div className='filter4'>
                            <p>DEALS IN PROGRESS</p>
                        </div>
                        <div className='filter5' onClick={() => props.setModalShow1(true)}>
                            <p>MY DEALS</p>
                        </div>

                        <div className='filter6' onClick={() => props.setModalShow7(true)}>
                            <p>+Save Filter</p>
                        </div>
                    </div>
                    <div className='filter7'>
                        <div className='filter11'>
                            <div className='filter12'>
                                <label htmlFor="">Document Name</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>

                            <div className='documentfiltermodal6'>
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



//CRMFilter Modal for admission page
export function CRMFilterModal(props) {
    const [step, setStep] = useState(0);

    const options13 = [
        { label: "Approved", value: "UAE" },
        { label: "Pending", value: "India" },
        { label: "Rejected", value: "India" },
    ];




    const [selected, setSelected] = useState([]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="no-padding">
                <div className='filter1'>
                    <div className='filter228'>
                        <div className='filter3'>
                            <p>FILTERS</p>
                        </div>

                        <div className='filter4'>
                            <p>LEADS IN PROGRESS</p>
                        </div>
                        <div className='filter5' onClick={() => props.setModalShow1(true)}>
                            <p>MY LEADS</p>
                        </div>
                        <div className='filter5'>
                            <p>CLOSED LEADS</p>
                        </div>

                        <div className='filter6' onClick={() => props.setModalShow7(true)}>
                            <p>+Save Filter</p>
                        </div>
                    </div>
                    <div className='filter7'>
                        <div className='filter11'>
                            <div className='filter12'>
                                <label htmlFor="">Lead Name</label>
                                <div className='filter22'>
                                    <input type="text" />
                                    <IoIosMore color='#444444' size={25} />
                                </div>
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Responsible Person</label>
                                <input type="text" />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Total</label>
                                <div className='filter22'>
                                    <select name="" id="">
                                        <option value="">Any Date</option>
                                        <option value="">Yesterday</option>
                                        <option value="">Current Day</option>
                                        <option value="">Tomorrow</option>
                                        <option value="">This Week</option>
                                        <option value="">This Month</option>
                                        <option value="">Current Quarter</option>
                                        <option value="">Last 7 days</option>
                                    </select>
                                    <input type="text" />
                                    <IoIosMore color='#444444' size={25} />
                                </div>
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Created On</label>
                                <div className='filter23'>
                                    <select name="" id="">
                                        <option value="">Any Date</option>
                                        <option value="">Yesterday</option>
                                        <option value="">Current Day</option>
                                        <option value="">Tomorrow</option>
                                        <option value="">This Week</option>
                                        <option value="">This Month</option>
                                        <option value="">Current Quarter</option>
                                        <option value="">Last 7 days</option>
                                    </select>
                                    <IoIosMore color='#444444' size={25} />
                                </div>
                            </div>

                            <div className='filter12'>
                                <label htmlFor="">Modified On</label>
                                <div className='filter23'>
                                    <select name="" id="">
                                        <option value="">Any Date</option>
                                        <option value="">Yesterday</option>
                                        <option value="">Current Day</option>
                                        <option value="">Tomorrow</option>
                                        <option value="">This Week</option>
                                        <option value="">This Month</option>
                                        <option value="">Current Quarter</option>
                                        <option value="">Last 7 days</option>
                                    </select>
                                    <IoIosMore color='#444444' size={25} />
                                </div>
                            </div>

                            <div className='filter12'>
                                <label htmlFor="">Change Responsible Person</label>
                                <div className='filter23'>
                                    <select name="" id="">
                                        <option value="">Any Date</option>
                                        <option value="">Yesterday</option>
                                        <option value="">Current Day</option>
                                        <option value="">Tomorrow</option>
                                        <option value="">This Week</option>
                                        <option value="">This Month</option>
                                        <option value="">Current Quarter</option>
                                        <option value="">Last 7 days</option>
                                    </select>
                                </div>
                            </div>

                            <div className='filter12'>
                                <label htmlFor="">Status</label>
                                <MultiSelect
                                    options={options13}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>


                            <div className='filter19'>
                                <p onClick={() => props.setModalShow2(true)}>Add Field</p>
                                <span>Restore default fields</span>
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


// New Lead Modal for admission page
export function CRMNeWLead(props) {
    const [widthStyle, setWidthStyle] = useState('82%');
    const [leftStyle, setLeftStyle] = useState('18.1%');


    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            const newWidthStyle = screenWidth < 580 ? '100%' : '82%'; // Adjust breakpoint as needed
            const newLeftStyle = screenWidth < 980 ? '100%' : '18.1%'; // Adjust breakpoint as needed

            setWidthStyle(newWidthStyle);
            setLeftStyle(newLeftStyle);
        };

        // Call handleResize on initial mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const handleModal = () => {
        props.setModalShow8(true);
    };


    const popover2 = (
        <Popover id="popover-basic">
            <Popover.Body>
                <div className='Admissionfollowup45'>
                    <div className='Admissionfollowup46'>
                        <p>Admission form</p>
                    </div>
                    <hr />
                    <div className='Admissionfollowup46' onClick={handleModal}>
                        <p>Counsellor commitment form</p>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );


    return (
        <>
            <Offcanvas show={props.show} onHide={props.onHide} placement="end" style={{ width: widthStyle, height: "100%", left: leftStyle }}>
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

                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover2}>
                                <div className='Admissionfollowup7'>
                                    <button>Forms <IoIosArrowDown color='#FFFFFF' size={20} /></button>
                                </div>
                            </OverlayTrigger>
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
                                    <button onClick={props.handleShow6}>Save</button>
                                    <button onClick={props.handleShow6}>Cancel</button>
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


export function CRMAdmissionFollowUp(props) {
    const [widthStyle, setWidthStyle] = useState('82%');

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            let newWidthStyle;

            if (screenWidth < 580) {
                newWidthStyle = '100%'; // Full width for screens less than 580px
            } else if (screenWidth < 980) {
                newWidthStyle = '100%';
            } else {
                newWidthStyle = '82%';
            }

            setWidthStyle(newWidthStyle);
        };

        // Call handleResize on initial mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const handleModal = () => {
        props.setModalShow8(true);
    };


    const popover2 = (
        <Popover id="popover-basic">
            <Popover.Body>
                <div className='Admissionfollowup45'>
                    <div className='Admissionfollowup46'>
                        <p>Admission form</p>
                    </div>
                    <hr />
                    <div className='Admissionfollowup46' onClick={handleModal}>
                        <p>Counsellor commitment form</p>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );

    return (
        <>
            <Offcanvas show={props.show} onHide={props.onHide} placement="end" style={{ width: widthStyle }}>
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

                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover2}>
                                <div className='Admissionfollowup7'>
                                    <button>Forms <IoIosArrowDown color='#FFFFFF' size={20} /></button>
                                </div>
                            </OverlayTrigger>
                        </div>

                        <div className='Admissionfollowup8'>
                            <div className='Admissionfollowup9'>
                                <div className='Admissionfollowup10'>
                                    <div className='Admissionfollowup11'>
                                        <h6>LEADS INFORMATION</h6>
                                        <p onClick={props.handleShow1}>Edit</p>
                                    </div>

                                    <div className='Admissionfollowup12'>
                                        <div className='Admissionfollowup13'>
                                            <label htmlFor="">Student Name</label>
                                            <p>Loren Epsom</p>
                                        </div>
                                        <div className='Admissionfollowup13'>
                                            <label htmlFor="">Amount & Currency</label>
                                            <p>Rs. 5,000</p>
                                        </div>
                                        <div className='Admissionfollowup13'>
                                            <label htmlFor="">Email</label>
                                            <p>LorenEpsom@gmail.com</p>
                                        </div>
                                        <div className='Admissionfollowup13'>
                                            <label htmlFor="">Responsible Person</label>
                                            <p>Loren Epsom</p>
                                        </div>
                                        <div className='Admissionfollowup13'>
                                            <label htmlFor="">Contact Number</label>
                                            <p>9999999999</p>
                                        </div>
                                        <div className='Admissionfollowup13'>
                                            <label htmlFor="">University/ College</label>
                                            <p>Loren Epsom</p>
                                        </div>
                                        <div className='Admissionfollowup13'>
                                            <label htmlFor="">Created Date</label>
                                            <p>DD/MM/YYYY</p>
                                        </div>
                                    </div>
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


// NewTask Modal for admission page
export function CRMNewTask(props) {
    const [widthStyle, setWidthStyle] = useState('82%');

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            let newWidthStyle;

            if (screenWidth < 580) {
                newWidthStyle = '100%'; // Full width for screens less than 580px
            } else if (screenWidth < 980) {
                newWidthStyle = '100%';
            } else {
                newWidthStyle = '82%';
            }

            setWidthStyle(newWidthStyle);
        };

        // Call handleResize on initial mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const popover = (
        <Popover id="popover-basic">
            <Popover.Body className='pendingtaskmodal55'>
                <div className='pendingtaskmodal5'>
                    <div className='pendingtaskmodal6'>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img20} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img20} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );
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
                                    <h6>CRM:</h6>
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
                                    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                        <div className='newtask9'>
                                            <p>+Add Members</p>
                                        </div>
                                    </OverlayTrigger>
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


//CRMFieldModal  in filter for admission page
export function CRMFieldModal(props) {
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
                        <div className='paymentfieldmodalmoal'>
                            <h5>Fields</h5>
                        </div>

                        <div className='addfield5'>
                            <FaSearch color='#444444' />
                            <input type="search" />
                        </div>
                    </div>



                    <div className='paymentfieldmodalmoal'>
                        <div className='addfield6'>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Lead ID</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Student Name</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Email</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Contact no.</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Course Name</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Created Date</p>
                            </div>

                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Admission Form</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Counsellor Form</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Payment Link</p>
                            </div>

                        </div>
                        <div className='addfield6'>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Status Information</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Update by</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Source URL</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>IP Address</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Upcoming follow up</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Next follow up</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Pending follow up</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Lead Priority</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Reported leads</p>
                            </div>
                        </div>
                        <div className='addfield6'>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Modified on</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Modified By</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Position</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Street, House no</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Apartment</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>City</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Region/ Area</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>District</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>State</p>
                            </div>
                        </div>
                        <div className='addfield6'>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Country</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Amount Currency</p>
                            </div>
                        </div>
                    </div>


                    <div className='addfield9'>
                        <div className='addfield10'>
                            <div className='addfield11'>
                                <IoReloadSharp color='#444444' size={20} />
                                <h6>Default</h6>
                            </div>
                        </div>

                        <div className='addfield14'>
                            <p>Select All</p>
                            <p>Select none</p>
                        </div>
                    </div>

                    <div className='crmfieldmodalmodal'>
                        <button onClick={() => props.onHide()}>APPLY</button>
                        <button >CANCEL</button>
                    </div>


                </div>
            </Modal.Body>
        </Modal>
    );
}


//payment Filter Modal for payment page
export function PaymentFilterModalmodal(props) {
    const [step, setStep] = useState(0);
    const options = [
        { label: "Loren Epsom University", value: "Unoversity" },
        { label: "Loren Epsom University", value: "Unoversity" },
        { label: "Loren Epsom University", value: "Unoversity", },
    ];
    const options1 = [
        { label: "General", value: "General" },
        { label: "OBC", value: "OBC" },
        { label: "SC", value: "SC", },
        { label: "ST", value: "ST", },
    ];
    const options2 = [
        { label: "India", value: "India" },
        { label: "UAE", value: "UAE" },
        { label: "Ghana", value: "Ghana", },
        { label: "Quatar", value: "Quatar", },
        { label: "Yemen", value: "Yemen", },
    ];
    const options3 = [
        { label: "O+", value: "O+" },
        { label: "O-", value: "O-" },
        { label: "A", value: "A", },
        { label: "B", value: "B", },
        { label: "AB", value: "AB", },
    ];
    const options4 = [
        { label: "Utter Pradesh", value: "India" },
        { label: "Hariyana", value: "UAE" },
        { label: "Maharashtra", value: "Ghana", },
        { label: "Punjab", value: "Quatar", },
        { label: "Madhya Pradesh", value: "Yemen", },
    ];
    const options5 = [
        { label: "Loren Epsom", value: "India" },
        { label: "Loren Epsom", value: "UAE" },
        { label: "Loren Epsom", value: "Ghana", },
        { label: "Loren Epsom", value: "Quatar", },
        { label: "Yemen", value: "Yemen", },
    ];
    const options6 = [
        { label: "Hindu", value: "India" },
        { label: "Muslim", value: "UAE" },
        { label: "Buddhist", value: "Ghana", },
        { label: "Chrishtian", value: "Quatar", },
        { label: "Others", value: "Yemen", },
    ];
    const options7 = [
        { label: "Married", value: "India" },
        { label: "Unmarried", value: "UAE" },
        { label: "Divorced", value: "Ghana", }
    ];

    const options8 = [
        { label: "Yes", value: "India" },
        { label: "No", value: "UAE" },
    ];
    const options9 = [
        { label: "Employed", value: "India" },
        { label: "Unemployed", value: "UAE" },
    ];
    const options10 = [
        { label: "Internal", value: "India" },
        { label: "External", value: "UAE" },
    ];
    const options11 = [
        { label: "B.tech", value: "Unoversity" },
        { label: "MBA", value: "Unoversity" },
        { label: "Bsc", value: "Unoversity", },
        { label: "Msc", value: "Unoversity" },
        { label: "BA", value: "Unoversity" },
        { label: "MA", value: "Unoversity", },
        { label: "Bcom", value: "Unoversity" },
        { label: "Mcom", value: "Unoversity" },
        { label: "CA", value: "Unoversity", },
        { label: "BCA", value: "Unoversity", },
        { label: "BBA", value: "Unoversity", },
        { label: "MBBS", value: "Unoversity", },
        { label: "BHMS", value: "Unoversity", },
        { label: "BAMS", value: "Unoversity", },
        { label: "BDS", value: "Unoversity", },
    ];
    const options12 = [
        { label: "Reverified", value: "India" },
        { label: "N/A", value: "UAE" },
        { label: "Reverification Rejected", value: "India" },
    ];
    const options13 = [
        { label: "SBI", value: "UAE" },
        { label: "Axis Bank", value: "India" },
        { label: "Yes Bank", value: "India" },
        { label: "PNB Bank", value: "India" },
        { label: "HDFC Bank", value: "India" },
        { label: "UCO Bank", value: "India" },
        { label: "Bank of Baroda", value: "India" },
        { label: "Union Bank", value: "India" },
        { label: "Bank of India", value: "India" },
    ];
    const options17 = [
        { label: "Cash", value: "UAE" },
        { label: "UPI", value: "India" },
        { label: "Online", value: "India" },
        { label: "NEFT", value: "India" },
        { label: "Demand Draft", value: "India" },
        { label: "Credit Card", value: "India" },
        { label: "Debit Card", value: "India" },
    ];
    const options14 = [
        { label: "Any Date", value: "India" },
        { label: "Yesterday", value: "UAE" },
        { label: "Current Day", value: "India" },
        { label: "Tomorrow", value: "India" },
        { label: "This Week", value: "India" },
        { label: "This Month", value: "UAE" },
        { label: "Current Quarter", value: "India" },
        { label: "Last 7 days", value: "India" },
    ];

    const options15 = [
        { label: "Exact  Value", value: "India" },
        { label: "Range", value: "UAE" },
        { label: "More than", value: "UAE" },
        { label: "Less than", value: "UAE" },
    ];
    const options16 = [
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
    ];

    const [selected, setSelected] = useState([]);


    const popover = (
        <Popover id="popover-basic">
            <Popover.Body className='pendingtaskmodal55'>
                <div className='pendingtaskmodal5'>
                    <div className='pendingtaskmodal6'>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img20} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img20} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="no-padding">
                <div className='filter1'>
                    <div className='filter229'>
                        <div className='filter3'>
                            <p>FILTERS</p>
                        </div>

                        <div className='filter4'>
                            <p>DEALS IN PROGRESS</p>
                        </div>
                        <div className='filter5' onClick={() => props.setModalShow1(true)}>
                            <p>MY DEALS</p>
                        </div>

                        <div className='filter6' onClick={() => props.setModalShow14(true)}>
                            <p>+Save Filter</p>
                        </div>
                    </div>

                    <div className='filter7'>
                        <div className='paymentfiltermodalmodal'>
                            <p>Payment filters</p>
                        </div>
                        <div className='filter11'>
                            <div className='filter12'>
                                <label htmlFor="">Admission No.</label>
                                <input type="text" />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Admission Date</label>
                                <MultiSelect
                                    options={options14}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>

                            <div className='filter12'>
                                <label htmlFor="">University</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Course</label>
                                <MultiSelect
                                    options={options11}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Created On</label>
                                <MultiSelect
                                    options={options14}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Created By</label>
                                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                    <div className='filter13'>
                                        <IoIosArrowDown />
                                    </div>
                                </OverlayTrigger>
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Modified On</label>
                                <MultiSelect
                                    options={options14}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Modified By</label>
                                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                    <div className='filter13'>
                                        <IoIosArrowDown />
                                    </div>
                                </OverlayTrigger>
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Change Responsible Person</label>
                                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                    <div className='filter13'>
                                        <IoIosArrowDown />
                                    </div>
                                </OverlayTrigger>
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Assigned to</label>
                                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                    <div className='filter13'>
                                        <IoIosArrowDown />
                                    </div>
                                </OverlayTrigger>
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Payment ID</label>
                                <MultiSelect
                                    options={options7}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Payment Approved Date</label>
                                <MultiSelect
                                    options={options14}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Payment Type</label>
                                <MultiSelect
                                    options={options17}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Responsible Person</label>
                                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                    <div className='filter13'>
                                        <IoIosArrowDown />
                                    </div>
                                </OverlayTrigger>
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Assign Backend manager</label>
                                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                    <div className='filter13'>
                                        <IoIosArrowDown />
                                    </div>
                                </OverlayTrigger>
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Assign Service manager</label>
                                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                    <div className='filter13'>
                                        <IoIosArrowDown />
                                    </div>
                                </OverlayTrigger>
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Credited Bank A/C</label>
                                <MultiSelect
                                    options={options13}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Amount</label>
                                <MultiSelect
                                    options={options15}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Fee Structure Type</label>
                                <MultiSelect
                                    options={options12}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Admission Confirm Status</label>
                                <input type="text" />
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

                            <div className='paymentfiltermodal'>
                                <label htmlFor="">Status</label>
                                <div className='paymentfiltermodal1'>
                                    <div className='paymentfiltermodal2'>
                                        <input type="radio" />
                                        <label htmlFor="">Pending</label>
                                    </div>
                                    <div className='paymentfiltermodal2'>
                                        <input type="radio" />
                                        <label htmlFor="">Approved</label>
                                    </div>
                                    <div className='paymentfiltermodal2'>
                                        <input type="radio" />
                                        <label htmlFor="">Rejected</label>
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
                    </div>
                </div>
            </Modal.Body>
        </Modal >
    );
}

//PaymentFieldModal  in filter for admission page
export function PaymentFieldModal(props) {
    const [step, setStep] = useState(0);
    // popoveraddbutton
    const popover1 = (
        <Popover id="popover-basic">
            <Popover.Body className='pdcfieladmodalmodal3'>
                <div className='pdcfieladmodalmodal'>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img21} alt="" />
                            <p>Depatment : Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img21} alt="" />
                            <p>Depatment : Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img21} alt="" />
                            <p>Depatment : Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img21} alt="" />
                            <p>Depatment : Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );


    const popover = (
        <Popover id="popover-basic">
            <Popover.Body className='pdcfieladmodalmodal3'>
                <div className='pdcfieladmodalmodal'>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img19} alt="" />
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img20} alt="" />
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img19} alt="" />
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img20} alt="" />
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );

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
                        <div className='paymentfieldmodalmoal'>
                            <h5>Fields</h5>
                        </div>

                        <div className='addfield5'>
                            <FaSearch color='#444444' />
                            <input type="search" />
                        </div>
                    </div>



                    <div className='paymentfieldmodalmoal'>
                        <div className='addfield6'>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Admission No</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Email ID</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Phone No.</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Whatsapp No.</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Assign Backend Manager</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Credited Bank A/C</p>
                            </div>

                        </div>
                        <div className='addfield6'>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Admission Date</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Course</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>University</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Responsible Person</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Assign service manager</p>
                            </div>
                        </div>
                        <div className='addfield6'>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Payment Date</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Amount Paid</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Payment Time</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Payment ID</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Assign  Responsible person</p>
                            </div>
                        </div>
                        <div className='addfield6'>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Payment Approved Date</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Remark</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Status</p>
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
                                    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                                        <label htmlFor="">Apply for Users</label>
                                    </OverlayTrigger>
                                </div>
                                <div className='addfield13'>
                                    <input type="checkbox" />
                                    <OverlayTrigger trigger="click" placement="top" overlay={popover1}>
                                        <label htmlFor="">Apply for Departments</label>
                                    </OverlayTrigger>
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


//Filter Modal for admission page
export function CourierFilterModal(props) {
    const [step, setStep] = useState(0);
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
    const options1 = [
        { label: "General", value: "General" },
        { label: "OBC", value: "OBC" },
        { label: "SC", value: "SC", },
        { label: "ST", value: "ST", },
    ];
    const options2 = [
        { label: "India", value: "India" },
        { label: "UAE", value: "UAE" },
        { label: "Ghana", value: "Ghana", },
        { label: "Quatar", value: "Quatar", },
        { label: "Yemen", value: "Yemen", },
    ];
    const options4 = [
        { label: "Utter Pradesh", value: "India" },
        { label: "Hariyana", value: "UAE" },
        { label: "Maharashtra", value: "Ghana", },
        { label: "Punjab", value: "Quatar", },
        { label: "Madhya Pradesh", value: "Yemen", },
    ];
    const options13 = [
        { label: "Approved", value: "UAE" },
        { label: "Pending", value: "India" },
        { label: "Rejected", value: "India" },
    ];


    const [selected, setSelected] = useState([]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="no-padding">
                <div className='filter1'>
                    <div className='filter225'>
                        <div className='filter3'>
                            <p>FILTERS</p>
                        </div>

                        <div className='filter4'>
                            <p>DEALS IN PROGRESS</p>
                        </div>
                        <div className='filter5' onClick={() => props.setModalShow1(true)}>
                            <p>MY DEALS</p>
                        </div>

                        <div className='filter6' onClick={() => props.setModalShow8(true)}>
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
                                    <label htmlFor="">Sender Name</label>
                                    <MultiSelect
                                        options={options}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Receiver Name</label>
                                    <MultiSelect
                                        options={options}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Mobile No.</label>
                                    <input type="text" />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Courier Company Name</label>
                                    <MultiSelect
                                        options={options}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Docket No.</label>
                                    <input type="text" />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Doc Type</label>
                                    <MultiSelect
                                        options={options4}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Description</label>
                                    <input type="text" />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Mobile No.</label>
                                    <input type="text" />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Email ID</label>
                                    <input type="text" />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">City</label>
                                    <MultiSelect
                                        options={options4}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">State</label>
                                    <MultiSelect
                                        options={options4}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Country</label>
                                    <MultiSelect
                                        options={options2}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Pin-Code</label>
                                    <MultiSelect
                                        options={options4}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Modified On</label>
                                    <input type="date" />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Status</label>
                                    <MultiSelect
                                        options={options13}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Address</label>
                                    <input type="text" />
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
                                    <p onClick={() => props.setModalShow2(true)}>Add Field</p>
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



//addfield  Modal in filter for admission page
export function WhatsapppAddFieldModal(props) {
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
                            <h6>Whatsapp Field</h6>
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
                                <p>Recipient</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Date</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Send by User</p>
                            </div>
                        </div>
                        <div className='addfield6'>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Read</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Replied</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Failed</p>
                            </div>
                        </div>
                        <div className='addfield6'>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Delivered</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Sent</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Template</p>
                            </div>
                        </div>
                    </div>


                    <div className='addfield9'>
                        <div className='addfield10'>
                            <div className='addfield11'>
                                <IoReloadSharp color='#444444' size={20} />
                                <h6>Default</h6>
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


//addfield  Modal in filter for admission page
export function SMSAddFieldModal(props) {
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
                            <h6>SMS Field</h6>
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
                                <p>Recipient</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Date</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Send by User</p>
                            </div>
                        </div>
                        <div className='addfield6'>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Read</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Replied</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Failed</p>
                            </div>
                        </div>
                        <div className='addfield6'>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Template</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Delivered</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Sent</p>
                            </div>
                        </div>
                    </div>


                    <div className='addfield9'>
                        <div className='addfield10'>
                            <div className='addfield11'>
                                <IoReloadSharp color='#444444' size={20} />
                                <h6>Default</h6>
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



//addfield  Modal in filter for admission page
export function ZOOMAddFieldModal(props) {
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
                            <h6>Zoom Field</h6>
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
                                <p>Zoom Id</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Date</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Time</p>
                            </div>
                        </div>
                    </div>


                    <div className='addfield9'>
                        <div className='addfield10'>
                            <div className='addfield11'>
                                <IoReloadSharp color='#444444' size={20} />
                                <h6>Default</h6>
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





export function ReferenceFormDataFilterModal(props) {
    const [step, setStep] = useState(0);
    const starCount = 5; // number of stars you want
    const stars = Array(starCount).fill(<MdStar size={20} color='#E2A03F' />);
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


    const options3 = [
        { label: "Any Date", value: "India" },
        { label: "Yesterday", value: "UAE" },
        { label: "Current Day", value: "India" },
        { label: "Tomorrow", value: "India" },
        { label: "This Week", value: "India" },
        { label: "This Month", value: "UAE" },
        { label: "Current Quarter", value: "India" },
        { label: "Last 7 days", value: "India" },
    ];


    const options22 = [
        { label: "India", value: "India" },
        { label: "UAE", value: "UAE" },
        { label: "Ghana", value: "Ghana", },
        { label: "Quatar", value: "Quatar", },
        { label: "Yemen", value: "Yemen", },
    ];
    const options4 = [
        { label: "Utter Pradesh", value: "India" },
        { label: "Hariyana", value: "UAE" },
        { label: "Maharashtra", value: "Ghana", },
        { label: "Punjab", value: "Quatar", },
        { label: "Madhya Pradesh", value: "Yemen", },
    ];


    const options13 = [
        { label: "Approved", value: "UAE" },
        { label: "Pending", value: "India" },
        { label: "Rejected", value: "India" },
    ];

    const options11 = [
        { label: "B.tech", value: "Unoversity" },
        { label: "MBA", value: "Unoversity" },
        { label: "Bsc", value: "Unoversity", },
        { label: "Msc", value: "Unoversity" },
        { label: "BA", value: "Unoversity" },
        { label: "MA", value: "Unoversity", },
        { label: "Bcom", value: "Unoversity" },
        { label: "Mcom", value: "Unoversity" },
        { label: "CA", value: "Unoversity", },
        { label: "BCA", value: "Unoversity", },
        { label: "BBA", value: "Unoversity", },
        { label: "MBBS", value: "Unoversity", },
        { label: "BHMS", value: "Unoversity", },
        { label: "BAMS", value: "Unoversity", },
        { label: "BDS", value: "Unoversity", },
    ];

    const [selected, setSelected] = useState([]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="no-padding">
                <div className='filter1'>
                    <div className='filter223'>
                        <div className='filter3'>
                            <p>FILTERS</p>
                        </div>

                        <div className='filter4'>
                            <p>MY FILTERS</p>
                        </div>
                    </div>
                    <div className='filter7'>
                        <div className='filter11'>
                            <div className='filter12'>
                                <label htmlFor="">ID / Candidate Name / Mobile No. / Email ID</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Country</label>
                                <MultiSelect
                                    options={options22}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">State</label>
                                <MultiSelect
                                    options={options4}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">City</label>
                                <MultiSelect
                                    options={options4}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>

                            <div className='filter12'>
                                <label htmlFor="">Course</label>
                                <MultiSelect
                                    options={options11}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Responsible Person</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Status</label>
                                <MultiSelect
                                    options={options13}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='documentfiltermodal6'>
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



export function ExpenseFilterModal(props) {
    const [step, setStep] = useState(0);
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


    const options3 = [
        { label: "Any Date", value: "India" },
        { label: "Yesterday", value: "UAE" },
        { label: "Current Day", value: "India" },
        { label: "Tomorrow", value: "India" },
        { label: "This Week", value: "India" },
        { label: "This Month", value: "UAE" },
        { label: "Current Quarter", value: "India" },
        { label: "Last 7 days", value: "India" },
    ];


    const options22 = [
        { label: "India", value: "India" },
        { label: "UAE", value: "UAE" },
        { label: "Ghana", value: "Ghana", },
        { label: "Quatar", value: "Quatar", },
        { label: "Yemen", value: "Yemen", },
    ];
    const options4 = [
        { label: "Utter Pradesh", value: "India" },
        { label: "Hariyana", value: "UAE" },
        { label: "Maharashtra", value: "Ghana", },
        { label: "Punjab", value: "Quatar", },
        { label: "Madhya Pradesh", value: "Yemen", },
    ];


    const options13 = [
        { label: "Approved", value: "UAE" },
        { label: "Pending", value: "India" },
        { label: "Rejected", value: "India" },
    ];

    const options11 = [
        { label: "B.tech", value: "Unoversity" },
        { label: "MBA", value: "Unoversity" },
        { label: "Bsc", value: "Unoversity", },
        { label: "Msc", value: "Unoversity" },
        { label: "BA", value: "Unoversity" },
        { label: "MA", value: "Unoversity", },
        { label: "Bcom", value: "Unoversity" },
        { label: "Mcom", value: "Unoversity" },
        { label: "CA", value: "Unoversity", },
        { label: "BCA", value: "Unoversity", },
        { label: "BBA", value: "Unoversity", },
        { label: "MBBS", value: "Unoversity", },
        { label: "BHMS", value: "Unoversity", },
        { label: "BAMS", value: "Unoversity", },
        { label: "BDS", value: "Unoversity", },
    ];

    const [selected, setSelected] = useState([]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="no-padding">
                <div className='filter1'>
                    <div className='filter226'>
                        <div className='filter3'>
                            <p>FILTERS</p>
                        </div>

                        <div className='filter4'>
                            <p>MY FILTERS</p>
                        </div>
                    </div>
                    <div className='filter7'>
                        <div className='filter11'>
                            <div className='filter12'>
                                <label htmlFor="">Request date</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Title</label>
                                <input type="date" name="" id="" />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Approved By</label>
                                <MultiSelect
                                    options={options4}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Final Approved By</label>
                                <MultiSelect
                                    options={options4}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>

                            <div className='filter12'>
                                <label htmlFor="">Final Approved On</label>
                                <MultiSelect
                                    options={options11}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Amount</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Final Status</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Request Approved On</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Request Approved By</label>
                                <input type="text" name="" id="" />
                            </div>


                            <div className='paymentfiltermodal'>
                                <label htmlFor="">Status</label>
                                <div className='paymentfiltermodal1'>
                                    <div className='paymentfiltermodal2'>
                                        <input type="radio" />
                                        <label htmlFor="">Pending</label>
                                    </div>
                                    <div className='paymentfiltermodal2'>
                                        <input type="radio" />
                                        <label htmlFor="">Approved</label>
                                    </div>
                                    <div className='paymentfiltermodal2'>
                                        <input type="radio" />
                                        <label htmlFor="">Rejected</label>
                                    </div>
                                </div>

                            </div>

                            <div className='filter19'>
                                <p onClick={() => props.setModalShow2(true)}>Add Field</p>
                                <span>Restore default fields </span>
                            </div>
                            <div className='documentfiltermodal6'>
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


export function EmployeesFilterModal(props) {
    const [step, setStep] = useState(0);
    const options = [
        { label: "Loren Epsom", value: "Unoversity" },
        { label: "Loren Epsom ", value: "Unoversity" },
        { label: "Loren Epsom", value: "Unoversity", },
    ];


    const [selected, setSelected] = useState([]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="no-padding">
                <div className='filter1'>
                    <div className='filter227'>
                        <div className='filter3'>
                            <p>FILTERS</p>
                        </div>

                        <div className='filter4'>
                            <p>DEALS IN PROGRESS</p>
                        </div>
                        <div className='filter5' onClick={() => props.setModalShow1(true)}>
                            <p>MY DEALS</p>
                        </div>

                        <div className='filter6' onClick={() => props.setModalShow3(true)}>
                            <p>+Save Filter</p>
                        </div>
                    </div>
                    <div className='filter7'>
                        <div className='filter11'>
                            <div className='filter12'>
                                <label htmlFor="">Employee Name / Email / Work Phone</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Position</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Department</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>

                            <div className='documentfiltermodal6'>
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


export function TaskFilterModal(props) {
    const [step, setStep] = useState(0);
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


    const options4 = [
        { label: "05887", value: "India" },
        { label: "05887", value: "UAE" },
        { label: "05887", value: "Ghana", },
        { label: "05887", value: "Quatar", },
        { label: "05887", value: "Yemen", },
    ];


    const options13 = [
        { label: "Approved", value: "UAE" },
        { label: "Pending", value: "India" },
        { label: "Rejected", value: "India" },
    ];

    const options11 = [
        { label: "Loem", value: "UAE" },
        { label: "Loem", value: "India" },
        { label: "Loem", value: "India" },
    ];


    const [selected, setSelected] = useState([]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="no-padding">
                <div className='filter1'>
                    <div className='filter226'>
                        <div className='filter3'>
                            <p>FILTERS</p>
                        </div>

                        <div className='filter4'>
                            <p>DEALS IN PROGRESS</p>
                        </div>
                        <div className='filter5' onClick={() => props.setModalShow1(true)}>
                            <p>MY DEALS</p>
                        </div>

                        <div className='filter6' onClick={() => props.setModalShow4(true)}>
                            <p>+Save Filter</p>
                        </div>
                    </div>
                    <div className='filter7'>
                        <div className='filter11'>
                            <div className='filter12'>
                                <label htmlFor="">ID</label>
                                <MultiSelect
                                    options={options4}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Name</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Created On</label>
                                <input type="date" />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Deadline</label>
                                <input type="date" />
                            </div>

                            <div className='filter12'>
                                <label htmlFor="">Created By</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Responsible Person</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Status</label>
                                <MultiSelect
                                    options={options13}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Title</label>
                                <MultiSelect
                                    options={options11}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Tags</label>
                                <MultiSelect
                                    options={options11}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='documentfiltermodal6'>
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
export function PDCAddFieldModal(props) {
    const [step, setStep] = useState(0);




    // popoveraddbutton
    const popover1 = (
        <Popover id="popover-basic">
            <Popover.Body className='pdcfieladmodalmodal3'>
                <div className='pdcfieladmodalmodal'>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img21} alt="" />
                            <p>Depatment : Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img21} alt="" />
                            <p>Depatment : Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img21} alt="" />
                            <p>Depatment : Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img21} alt="" />
                            <p>Depatment : Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );


    const popover = (
        <Popover id="popover-basic">
            <Popover.Body className='pdcfieladmodalmodal3'>
                <div className='pdcfieladmodalmodal'>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img19} alt="" />
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img20} alt="" />
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img19} alt="" />
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className='pdcfieladmodalmodal1'>
                        <input type="checkbox" />
                        <div className='pdcfieladmodalmodal2'>
                            <img src={img20} alt="" />
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );


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
                                <p>University</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Courses</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Fee Structure Mode</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Education Details</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Document Details</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Follow up data</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Responsible Person</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Phone Number</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>WhatsApp Number</p>
                            </div>
                        </div>
                        <div className='addfield6'>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Email ID</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Service Manager</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Skip Batch</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Admission Date</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Assigned Date</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Follow up created</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Follow up status</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Follow up status Filter</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Priority</p>
                            </div>
                        </div>
                        <div className='addfield6'>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Absent Records</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Present Records</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Last Batch</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Total Amount</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Received Amount</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Balance</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Added On</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>History Logs</p>
                            </div>
                            <div className='addfield7'>
                                <input type="checkbox" name="" id="" />
                                <p>Changed By</p>
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
                                    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                                        <label htmlFor="">Apply for Users</label>
                                    </OverlayTrigger>
                                </div>
                                <div className='addfield13'>
                                    <input type="checkbox" />
                                    <OverlayTrigger trigger="click" placement="top" overlay={popover1}>
                                        <label htmlFor="">Apply for Departments</label>
                                    </OverlayTrigger>
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
            const screenWidth = window.innerWidth;
            let newWidthStyle;

            if (screenWidth < 580) {
                newWidthStyle = '100%'; // Full width for screens less than 580px
            } else if (screenWidth < 980) {
                newWidthStyle = '100%';
            } else {
                newWidthStyle = '82%';
            }

            setWidthStyle(newWidthStyle);
        };

        // Call handleResize on initial mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleModal = () => {
        props.setModalShow8(true);
    };

    const handleModal1 = () => {
        props.setModalShow9(true);
    };
    const handleModal2 = () => {
        props.setModalShow10(true);
    };
    const handleModal3 = () => {
        props.setModalShow11(true);
    };
    const handleModal4 = () => {
        props.setModalShow12(true);
    };
    const handleModal5 = () => {
        props.setModalShow13(true);
    };


    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>
                <div className='popoveradd'>
                    <div className='popoveradd2'>
                        <p>Enable custom profile view</p>
                        <p>Enable standard profile view</p>
                        <p onClick={handleModal1}>New View</p>
                        <p>Reset Profile View</p>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );

    const popover1 = (
        <Popover id="popover-basic">
            <Popover.Body>
                <div className="toppart7">
                    <div className="toppart8" onClick={handleModal}>
                        <h6>String</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="toppart8" onClick={handleModal3}>
                        <h6>Date</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="toppart8" onClick={handleModal4}>
                        <h6>List</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="toppart8" onClick={handleModal5}>
                        <h6>Yes/ No</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );

    const popover2 = (
        <Popover id="popover-basic">
            <Popover.Body>
                <div className='Admissionfollowup45'>
                    <div className='Admissionfollowup46'>
                        <p>Admission form</p>
                    </div>
                    <hr />
                    <div className='Admissionfollowup46' onClick={handleModal2}>
                        <p>Counsellor commitment form</p>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );

    return (
        <>
            <Offcanvas show={props.show} onHide={props.onHide} placement="end" style={{ width: widthStyle }}>
                <Offcanvas.Body className='Admissionfollowup101'>
                    <div className='Admissionfollowup'>
                        <div className='Admissionfollowup1'>
                            <div className='Admissionfollowup2'>
                                <h6>{props.title} Follow Up </h6>
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
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover2}>
                                <div className='Admissionfollowup7'>
                                    <button>Forms <IoIosArrowDown color='#FFFFFF' size={20} /></button>
                                </div>
                            </OverlayTrigger>
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
                                    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                        <p>Add Section</p>
                                    </OverlayTrigger>
                                    <OverlayTrigger trigger="click" placement="bottom" overlay={popover1}>
                                        <p>Create a field</p>
                                    </OverlayTrigger>
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
    const [leftStyle, setLeftStyle] = useState('18.1%');


    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            const newWidthStyle = screenWidth < 580 ? '100%' : '82%'; // Adjust breakpoint as needed
            const newLeftStyle = screenWidth < 980 ? '100%' : '18.1%'; // Adjust breakpoint as needed

            setWidthStyle(newWidthStyle);
            setLeftStyle(newLeftStyle);
        };

        // Call handleResize on initial mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleModal = () => {
        props.setModalShow8(true);
    };


    const popover2 = (
        <Popover id="popover-basic">
            <Popover.Body>
                <div className='Admissionfollowup45'>
                    <div className='Admissionfollowup46'>
                        <p>Admission form</p>
                    </div>
                    <hr />
                    <div className='Admissionfollowup46' onClick={handleModal}>
                        <p>Counsellor commitment form</p>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );

    return (
        <>
            <Offcanvas show={props.show} onHide={props.onHide} placement="top" style={{ width: widthStyle, height: "100%", top: '10%', left: leftStyle }}>
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
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover2}>
                                <div className='Admissionfollowup7'>
                                    <button>Forms <IoIosArrowDown color='#FFFFFF' size={20} /></button>
                                </div>
                            </OverlayTrigger>
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


// History1 Modal for admission page
export function History1(props) {
    const navigate = useNavigate()
    const tableData1 = [
        {
            id: 1,
            EventDate: 'DD/MM/YYYY',
            CreatedBy: 'Loren Epsom',
            EventType: 'Assign Backend Manager',
            Description: 'Created By System',
        },

        {
            id: 1,
            EventDate: 'DD/MM/YYYY',
            CreatedBy: 'Loren Epsom',
            EventType: 'Assign Backend Manager',
            Description: 'Created By System',
        },
        {
            id: 1,
            EventDate: 'DD/MM/YYYY',
            CreatedBy: 'Loren Epsom',
            EventType: 'Assign Backend Manager',
            Description: 'Created By System',
        },
        {
            id: 1,
            EventDate: 'DD/MM/YYYY',
            CreatedBy: 'Loren Epsom',
            EventType: 'Assign Backend Manager',
            Description: 'Created By System',
        },
        {
            id: 1,
            EventDate: 'DD/MM/YYYY',
            CreatedBy: 'Loren Epsom',
            EventType: 'Assign Backend Manager',
            Description: 'Created By System',
        },
        {
            id: 1,
            EventDate: 'DD/MM/YYYY',
            CreatedBy: 'Loren Epsom',
            EventType: 'Assign Backend Manager',
            Description: 'Created By System',
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
                                <p onClick={() => navigate('/automatic2feestructure')}>General</p>
                            </div>
                            <div className="Admissionfollowup5">
                                <p>History</p>
                            </div>
                        </div>
                    </div>


                    <div className='historyModal'>
                        <div className='historyModal1' onClick={() => props.setModalShow6(true)}>
                            <p>+Event</p>
                        </div>
                    </div>

                    <div className='historyModal2' onClick={() => props.setModalShow5(true)}>
                        <input type="search" placeholder='Filter' />
                        <IoSearch color='#000000' />
                    </div>

                    <div className='admission13'>
                        <div className='table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" /> <IoSettings size={20} /></th>
                                        <th>Created By</th>
                                        <th>Event Date</th>
                                        <th>Event Type</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData1.map((data) => (
                                        <tr key={data.id}>
                                            <td><input type="checkbox" /></td>
                                            <td><PiUserCircleFill color='#444444' size={25} /> {data.CreatedBy}</td>
                                            <td>{data.EventDate}</td>
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




// History1 Modal for admission page
export function AddNewEvent(props) {



    return (
        <Modal
            {...props}
            size="sl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton >
                <Modal.Title className="addneweventhistory" >Add New Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='addneweventhistory1'>
                    <div className='addneweventhistory2'>
                        <p>Lead</p>
                        <p>ABC</p>
                    </div>
                    <div className='addneweventhistory3'>
                        <label htmlFor="">Event type</label>
                        <select name="" id="">
                            <option value=""></option>
                            <option value="">Information</option>
                            <option value="">Phone-Call</option>
                            <option value="">E-mail has been sent</option>
                        </select>
                    </div>

                    <div className='addneweventhistory4'>
                        <textarea name="" id=""></textarea>
                    </div>
                    <div className='addneweventhistory2'>
                        <p>Event Date</p>
                        <p>DD/MM/YYYY</p>
                    </div>

                    <div className='addneweventhistory2'>
                        <p>Attach files</p>
                        <div className='addneweventhistory3'>
                            <button>Upload</button>
                            <span>No files chosen</span>
                        </div>
                    </div>

                    <div className='addneweventhistory5'>
                        <button onClick={() => props.onHide()}>Save</button>
                        <button onClick={() => props.onHide()}>Cancel</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}



//Filter Modal for admission page
export function FilterModalhistory(props) {
    const [step, setStep] = useState(0);
    const options = [
        { label: "Any Date", value: "India" },
        { label: "Yesterday", value: "UAE" },
        { label: "Current Day", value: "India" },
        { label: "Tomorrow", value: "India" },
        { label: "This Week", value: "India" },
        { label: "This Month", value: "UAE" },
        { label: "Current Quarter", value: "India" },
        { label: "Last 7 days", value: "India" },
    ];


    const [selected, setSelected] = useState([]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="no-padding">
                <div className='filter1'>
                    <div className='filter222'>
                        <div className='filter3'>
                            <p>FILTERS</p>
                        </div>

                        <div className='filter4'>
                            <p>CREATED TODAY</p>
                        </div>
                        <div className='filter5'>
                            <p>CREATED YESTERDAY</p>
                        </div>
                        <div className='filter5'>
                            <p>CREATED BY ME</p>
                        </div>
                    </div>
                    <div className='filter7'>
                        <div className='filter11'>
                            <div className='filter12'>
                                <label htmlFor="">Type</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Event Type</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Created By</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Date</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
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


//PaymentFilterModal Modal for admission page
export function RefundCancelFilterModal(props) {
    const [step, setStep] = useState(0);
    const options = [
        { label: "Loren Epsom University", value: "Unoversity" },
        { label: "Loren Epsom University", value: "Unoversity" },
        { label: "Loren Epsom University", value: "Unoversity", },
    ];
    const options1 = [
        { label: "General", value: "General" },
        { label: "OBC", value: "OBC" },
        { label: "SC", value: "SC", },
        { label: "ST", value: "ST", },
    ];
    const options2 = [
        { label: "India", value: "India" },
        { label: "UAE", value: "UAE" },
        { label: "Ghana", value: "Ghana", },
        { label: "Quatar", value: "Quatar", },
        { label: "Yemen", value: "Yemen", },
    ];
    const options3 = [
        { label: "O+", value: "O+" },
        { label: "O-", value: "O-" },
        { label: "A", value: "A", },
        { label: "B", value: "B", },
        { label: "AB", value: "AB", },
    ];
    const options4 = [
        { label: "Utter Pradesh", value: "India" },
        { label: "Hariyana", value: "UAE" },
        { label: "Maharashtra", value: "Ghana", },
        { label: "Punjab", value: "Quatar", },
        { label: "Madhya Pradesh", value: "Yemen", },
    ];
    const options5 = [
        { label: "Loren Epsom", value: "India" },
        { label: "Loren Epsom", value: "UAE" },
        { label: "Loren Epsom", value: "Ghana", },
        { label: "Loren Epsom", value: "Quatar", },
        { label: "Yemen", value: "Yemen", },
    ];

    const [selected, setSelected] = useState([]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="no-padding">
                <div className='filter1'>
                    <div className='filter223'>
                        <div className='filter3'>
                            <p>FILTERS</p>
                        </div>

                        <div className='filter4'>
                            <p>MY Filters</p>
                        </div>
                        <div className='filter6' onClick={() => props.setModalShow7(true)}>
                            <p>+Save Filter</p>
                        </div>
                    </div>
                    <div className='filter7'>
                        <div className='paymentfiltermodalmodal'>
                            <p>Payment filters</p>
                        </div>
                        <div className='filter11'>
                            <div className='filter12'>
                                <label htmlFor="">Admission No.</label>
                                <input type="text" />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Student Name</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">University</label>
                                <MultiSelect
                                    options={options1}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Course</label>
                                <MultiSelect
                                    options={options2}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Request Added On</label>
                                <MultiSelect
                                    options={options3}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Request Added By</label>
                                <MultiSelect
                                    options={options4}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Status Changed On</label>
                                <MultiSelect
                                    options={options5}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className='filter12'>
                                <label htmlFor="">Status Changed By</label>
                                <MultiSelect
                                    options={options5}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>

                            <div className='paymentfiltermodal'>
                                <label htmlFor="">Status</label>
                                <div className='paymentfiltermodal1'>
                                    <div className='paymentfiltermodal2'>
                                        <input type="radio" />
                                        <label htmlFor="">Pending</label>
                                    </div>
                                    <div className='paymentfiltermodal2'>
                                        <input type="radio" />
                                        <label htmlFor="">Approved</label>
                                    </div>
                                    <div className='paymentfiltermodal2'>
                                        <input type="radio" />
                                        <label htmlFor="">Rejected</label>
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
            const screenWidth = window.innerWidth;
            let newWidthStyle;

            if (screenWidth < 580) {
                newWidthStyle = '100%'; // Full width for screens less than 580px
            } else if (screenWidth < 980) {
                newWidthStyle = '100%';
            } else {
                newWidthStyle = '82%';
            }

            setWidthStyle(newWidthStyle);
        };

        // Call handleResize on initial mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const popover = (
        <Popover id="popover-basic">
            <Popover.Body className='pendingtaskmodal55'>
                <div className='pendingtaskmodal5'>
                    <div className='pendingtaskmodal6'>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img20} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img20} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );
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
                                    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                        <div className='newtask9'>
                                            <p>+Add Members</p>
                                        </div>
                                    </OverlayTrigger>
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
            const screenWidth = window.innerWidth;
            let newWidthStyle;

            if (screenWidth < 580) {
                newWidthStyle = '100%'; // Full width for screens less than 580px
            } else if (screenWidth < 980) {
                newWidthStyle = '100%';
            } else {
                newWidthStyle = '82%';
            }

            setWidthStyle(newWidthStyle);
        };

        // Call handleResize on initial mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleModal = () => {
        props.setModalShow8(true);
    };


    const popover2 = (
        <Popover id="popover-basic">
            <Popover.Body>
                <div className='Admissionfollowup45'>
                    <div className='Admissionfollowup46'>
                        <p>Admission form</p>
                    </div>
                    <hr />
                    <div className='Admissionfollowup46' onClick={handleModal}>
                        <p>Counsellor commitment form</p>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );

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

                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover2}>
                                <div className='Admissionfollowup7'>
                                    <button>Forms <IoIosArrowDown color='#FFFFFF' size={20} /></button>
                                </div>
                            </OverlayTrigger>
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
                                                <p onClick={props.handleShow1}>Comment</p>
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
                                    <input type="text" name="" id="" placeholder='+ Add Recipient' className='email66161' />
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





//Filter Modal for admission page
export function ExamAttendenceFilterModal(props) {
    const [step, setStep] = useState(0);
    const options = [
        { label: "Loren Epsom University", value: "Unoversity" },
        { label: "Loren Epsom University", value: "Unoversity" },
        { label: "Loren Epsom University", value: "Unoversity", },
    ];
    const options4 = [
        { label: "Utter Pradesh", value: "India" },
        { label: "Hariyana", value: "UAE" },
        { label: "Maharashtra", value: "Ghana", },
        { label: "Punjab", value: "Quatar", },
        { label: "Madhya Pradesh", value: "Yemen", },
    ];
    const options5 = [
        { label: "Loren Epsom", value: "India" },
        { label: "Loren Epsom", value: "UAE" },
        { label: "Loren Epsom", value: "Ghana", },
        { label: "Loren Epsom", value: "Quatar", },
        { label: "Yemen", value: "Yemen", },
    ];
    const options7 = [
        { label: "Married", value: "India" },
        { label: "Unmarried", value: "UAE" },
        { label: "Divorced", value: "Ghana", }
    ];

    const options8 = [
        { label: "Yes", value: "India" },
        { label: "No", value: "UAE" },
    ];
    const options10 = [
        { label: "Internal", value: "India" },
        { label: "External", value: "UAE" },
    ];
    const options11 = [
        { label: "Aadhar Card", value: "India" },
        { label: "Passport", value: "UAE" },
        { label: "Driving License", value: "India" },
        { label: "Voter ID", value: "UAE" },
        { label: "Other", value: "India" },
    ];
    const options14 = [
        { label: "Any Date", value: "India" },
        { label: "Yesterday", value: "UAE" },
        { label: "Current Day", value: "India" },
        { label: "Tomorrow", value: "India" },
        { label: "This Week", value: "India" },
        { label: "This Month", value: "UAE" },
        { label: "Current Quarter", value: "India" },
        { label: "Last 7 days", value: "India" },
    ];

    const options15 = [
        { label: "Automatic", value: "India" },
        { label: "Manual", value: "UAE" },
    ];
    const options16 = [
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
    ];

    const [selected, setSelected] = useState([]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="no-padding">
                <div className='filter1'>
                    <div className='filter225'>
                        <div className='filter3'>
                            <p>FILTERS</p>
                        </div>

                        <div className='filter4'>
                            <p>DEALS IN PROGRESS</p>
                        </div>
                        <div className='filter5' onClick={() => props.setModalShow1(true)}>
                            <p>MY DEALS</p>
                        </div>

                        <div className='filter6' onClick={() => props.setModalShow7(true)}>
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
                                    <label htmlFor="">University</label>
                                    <MultiSelect
                                        options={options}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">State</label>
                                    <MultiSelect
                                        options={options4}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">District</label>
                                    <MultiSelect
                                        options={options5}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Marital Status</label>
                                    <MultiSelect
                                        options={options7}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Minority Belonging</label>
                                    <MultiSelect
                                        options={options8}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Study Medium</label>
                                    <MultiSelect
                                        options={options11}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Assignment Type</label>
                                    <MultiSelect
                                        options={options10}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Enrollment Number</label>
                                    <input type="text" />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Admission Date</label>
                                    <MultiSelect
                                        options={options14}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Exam Attendance Status</label>
                                    <MultiSelect
                                        options={options16}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Fee Structure Type</label>
                                    <MultiSelect
                                        options={options15}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Admission Confirm Status</label>
                                    <MultiSelect
                                        options={options16}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
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
                                    <p onClick={() => props.setModalShow2(true)}>Add Field</p>
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



//Filter Modal for admission page
export function ResultFilterModal(props) {
    const [step, setStep] = useState(0);
    const options = [
        { label: "Loren Epsom University", value: "Unoversity" },
        { label: "Loren Epsom University", value: "Unoversity" },
        { label: "Loren Epsom University", value: "Unoversity", },
    ];
    const options4 = [
        { label: "Utter Pradesh", value: "India" },
        { label: "Hariyana", value: "UAE" },
        { label: "Maharashtra", value: "Ghana", },
        { label: "Punjab", value: "Quatar", },
        { label: "Madhya Pradesh", value: "Yemen", },
    ];
    const options5 = [
        { label: "Loren Epsom", value: "India" },
        { label: "Loren Epsom", value: "UAE" },
        { label: "Loren Epsom", value: "Ghana", },
        { label: "Loren Epsom", value: "Quatar", },
        { label: "Yemen", value: "Yemen", },
    ];
    const options7 = [
        { label: "Married", value: "India" },
        { label: "Unmarried", value: "UAE" },
        { label: "Divorced", value: "Ghana", }
    ];

    const options8 = [
        { label: "Yes", value: "India" },
        { label: "No", value: "UAE" },
    ];
    const options10 = [
        { label: "Internal", value: "India" },
        { label: "External", value: "UAE" },
    ];
    const options11 = [
        { label: "Aadhar Card", value: "India" },
        { label: "Passport", value: "UAE" },
        { label: "Driving License", value: "India" },
        { label: "Voter ID", value: "UAE" },
        { label: "Other", value: "India" },
    ];
    const options14 = [
        { label: "Any Date", value: "India" },
        { label: "Yesterday", value: "UAE" },
        { label: "Current Day", value: "India" },
        { label: "Tomorrow", value: "India" },
        { label: "This Week", value: "India" },
        { label: "This Month", value: "UAE" },
        { label: "Current Quarter", value: "India" },
        { label: "Last 7 days", value: "India" },
    ];

    const options15 = [
        { label: "Automatic", value: "India" },
        { label: "Manual", value: "UAE" },
    ];
    const options16 = [
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
    ];

    const [number, setNumber] = useState(1); // Initial value is 1
    const handleIncrement = () => {
        setNumber((prevNumber) => prevNumber + 1);
    };
    const handleDecrement = () => {
        setNumber((prevNumber) => {
            // Prevent the number from going below zero
            return prevNumber > 0 ? prevNumber - 1 : prevNumber;
        });
    };
    const [selected, setSelected] = useState([]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="no-padding">
                <div className='filter1'>
                    <div className='filter225'>
                        <div className='filter3'>
                            <p>FILTERS</p>
                        </div>

                        <div className='filter4'>
                            <p>DEALS IN PROGRESS</p>
                        </div>
                        <div className='filter5' onClick={() => props.setModalShow1(true)}>
                            <p>MY DEALS</p>
                        </div>

                        <div className='filter6' onClick={() => props.setModalShow7(true)}>
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
                                    <label htmlFor="">University</label>
                                    <MultiSelect
                                        options={options}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">State</label>
                                    <MultiSelect
                                        options={options4}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">District</label>
                                    <MultiSelect
                                        options={options5}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Marital Status</label>
                                    <MultiSelect
                                        options={options7}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Minority Belonging</label>
                                    <MultiSelect
                                        options={options8}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Study Medium</label>
                                    <MultiSelect
                                        options={options11}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Assignment Type</label>
                                    <MultiSelect
                                        options={options10}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Enrollment Number</label>
                                    <input type="text" />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Admission Date</label>
                                    <MultiSelect
                                        options={options14}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Results Status</label>
                                    <MultiSelect
                                        options={options16}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label>No. of Back Papers</label>
                                    <div className='ResultStatusModal7'>
                                        <AiFillMinusCircle color='#2155CD' size={25} onClick={handleDecrement} />
                                        <p>{number}</p>
                                        <BsFillPlusCircleFill color='#2155CD' size={25} onClick={handleIncrement} />
                                    </div>
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Fee Structure Type</label>
                                    <MultiSelect
                                        options={options15}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Admission Confirm Status</label>
                                    <MultiSelect
                                        options={options16}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
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
                                    <p onClick={() => props.setModalShow2(true)}>Add Field</p>
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




// NewTask  Modal for Task page
export function PendingTaskModal(props) {
    const [widthStyle, setWidthStyle] = useState('82%');
    const tableData1 = [
        {
            id: 1,
            CreatedOn: 'Yesterday 12:30 AM',
            CreatedBy: 'Lorem Ipsim',
            Description: 'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        },

        {
            id: 1,
            CreatedOn: 'Yesterday 12:30 AM',
            CreatedBy: 'Lorem Ipsim',
            Description: 'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        },
        {
            id: 1,
            CreatedOn: 'Yesterday 12:30 AM',
            CreatedBy: 'Lorem Ipsim',
            Description: 'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        },
        {
            id: 1,
            CreatedOn: 'Yesterday 12:30 AM',
            CreatedBy: 'Lorem Ipsim',
            Description: 'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        },
        {
            id: 1,
            CreatedOn: 'Yesterday 12:30 AM',
            CreatedBy: 'Lorem Ipsim',
            Description: 'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        },
        {
            id: 1,
            CreatedOn: 'Yesterday 12:30 AM',
            CreatedBy: 'Lorem Ipsim',
            Description: 'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        },

    ];
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            let newWidthStyle;

            if (screenWidth < 580) {
                newWidthStyle = '100%'; // Full width for screens less than 580px
            } else if (screenWidth < 980) {
                newWidthStyle = '100%';
            } else {
                newWidthStyle = '82%';
            }

            setWidthStyle(newWidthStyle);
        };

        // Call handleResize on initial mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    // popoveraddbutton
    const popover = (
        <Popover id="popover-basic">
            <Popover.Body className='pendingtaskmodal55'>
                <div className='pendingtaskmodal5'>
                    <div className='pendingtaskmodal6'>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img20} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img20} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='callrecordingModal'>
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
                                <h6>Title</h6>
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
                                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                    <div className='newtask9'>
                                        <p>+Add Members</p>
                                    </div>
                                </OverlayTrigger>
                            </div>
                        </div>


                        <div className='newtask10'>
                            <div className='newtask11'>
                                <div className='newtask12'>
                                    <label htmlFor="">Deadline</label>
                                    <input type="date" className='newtask1296' />
                                </div>
                            </div>
                        </div>

                        <div className='pendingtaskmodal'>
                            <div className='newtask13'>
                                <input type="checkbox" />
                                <p>Pending</p>
                            </div>
                            <div className='newtask13'>
                                <input type="checkbox" />
                                <p>Resolved</p>
                            </div>
                            <div className='newtask13'>
                                <input type="checkbox" />
                                <p>Rejected</p>
                            </div>
                        </div>




                        <div className='newtask14'>
                            <div className='newtask15'>
                                <button>SAVE</button>
                                <button>Cancel</button>
                            </div>
                        </div>

                        <div className='pendingtaskmodal1'>
                            <div className='pendingtaskmodal2'>
                                <label htmlFor="">Add Comments :</label>
                                <textarea name="" id=""></textarea>
                            </div>
                            <div className='pendingtaskmodal3'>
                                <button>SAVE</button>
                            </div>
                            <div className='admission13'>
                                <div className='table-container'>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Created On</th>
                                                <th>Created By</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableData1.map((data) => (
                                                <tr key={data.id}>
                                                    <td>{data.CreatedOn}</td>
                                                    <td>{data.CreatedBy}</td>
                                                    <div className='pendingtaskmodal4'>
                                                        <p>{data.Description}</p>
                                                    </div>                                                </tr>
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
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}


// PaymentEmailModal   for Task page
export function PaymentEmailModal(props) {
    const navigate = useNavigate()

    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='callrecordingModal'>
                <div className='payreceived5'>
                    <div className='payreceived6'>
                        <h6>EDUCATION</h6>
                    </div>
                    <div className='payreceived7'>
                        <input type="search" placeholder='Search Here' />
                        <IoSearchSharp color='#444444' size={20} />
                    </div>
                </div>
                <div className='payreceived11'>
                    <h6>Email</h6>
                    <div className='email3'>
                        <p>Templates :</p>
                        <select name="" id="">
                            <option value="">No Templates</option>
                        </select>
                    </div>
                </div>
                <div className='payreceived8'>
                    <div className='email'>
                        <div className='payreceived10'>
                            <div className='payreceived9'>
                                <div className='email5'>
                                    <p>From:</p>
                                    <PiUserCircleFill color='#444444' size={20} />
                                </div>
                                <div className='email6'>
                                    <label htmlFor="">To:</label>
                                    <input type="text" name="" id="" placeholder='+ Add Recipient' className='email66161' />
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


                                <div className='payreceived4'>
                                    <textarea name="" id="" cols="130" rows="10"></textarea>
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
                                    <button onClick={() => props.onHide()}>Send</button>
                                    <button onClick={() => props.onHide()}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}


// PaymentEmailModal   for Task page
export function PaymentTelgaramModal(props) {
    const navigate = useNavigate()
    const [showdate, setShowdate] = useState(0)


    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='callrecordingModal'>
                <div className='payreceived5'>
                    <div className='payreceived6'>
                        <h6>EDUCATION</h6>
                    </div>
                    <div className='payreceived7'>
                        <input type="search" placeholder='Search Here' />
                        <IoSearchSharp color='#444444' size={20} />
                    </div>
                </div>
                <>  {showdate === 0 ? (
                    <div className='whatsapp1'>
                        <div className='whatsapp3'>
                            <div className='whatsapp9'>
                                <div className='whatsapp8'>
                                    <p>Telegram</p>
                                </div>
                                <div className='whatsapp4'>
                                    <div className='whatsapp5'>
                                        <div className='whatsapp6'>
                                            <h6>Send Telegram Message</h6>
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
                        </div>
                    </div>
                ) : showdate === 1 ? (
                    <div className='whatsapp10'>
                        <div className='whatsapp11'>
                            <div className='whatsapp12'>
                                <div className='whatsapp13'>
                                    <p>Telegram</p>
                                </div>
                                <div className='whatsapp14'>
                                    <div className='whatsapp15'>
                                        <div className='whatsapp16'>
                                            <h6>Send Telegram Message</h6>
                                        </div>
                                        <div className='whatsapp17'>
                                            <div className='payreceived13'>
                                                <div className='payreceived14'>
                                                    <p>Template :</p>
                                                    <p>Telegram number :</p>
                                                </div>
                                                <div className='payreceived15'>
                                                    <select name="" id="" onChange={(e) => setShowdate(parseInt(e.target.value))}>
                                                        <option value="1">While Create lead send WhatsApp message</option>
                                                        <option value="1">Yes lead created WhatsApp response from customer</option>
                                                        <option value="1">No lead created  WhatsApp response from customer</option>
                                                        <option value="1">First Message</option>
                                                        <option value="1">Yes lead created WhatsApp response from customer new</option>
                                                    </select>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className='whatsapp19'>
                                                <p>Message:</p>
                                                <textarea name="" id="" cols="90" rows="5"></textarea>
                                            </div>

                                            <div className='whatsapp20'>
                                                <button onClick={() => props.onHide()}>Send</button>
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
                </>
            </Modal.Body>
        </Modal>
    );
}


// PaymentEmailModal   for Task page
export function PaymentSMSModal(props) {
    const navigate = useNavigate()
    const [showdate, setShowdate] = useState(0)


    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='callrecordingModal'>
                <div className='payreceived55'>
                    <div className='payreceived6'>
                        <h6>EDUCATION</h6>
                    </div>
                    <div className='payreceived7'>
                        <input type="search" placeholder='Search Here' />
                        <IoSearchSharp color='#444444' size={20} />
                    </div>
                </div>

                <div className='payreceived16'>
                    <div className='payreceived17'>
                        <h6>Student ID</h6>
                        <div className='payreceived18'>
                            <div className='payreceived19'>
                                <p>Student 1</p>
                                <IoMdClose />
                            </div>
                            <div className='payreceived19'>
                                <p>Student 1</p>
                                <IoMdClose />
                            </div>
                            <div className='payreceived19'>
                                <p>Student 1</p>
                                <IoMdClose />
                            </div>
                        </div>
                    </div>
                    <div className='email3'>
                        <p>Templates :</p>
                        <select name="" id="">
                            <option value="">No Templates</option>
                        </select>
                    </div>
                </div>

                <div className='payreceived20'>
                    <p>Message</p>
                    <div className='payreceived21'>
                        <div className='payreceived22'>
                            <textarea name="" id="" placeholder='Write here.....'></textarea>
                            <div className='payreceived23'>
                                <button onClick={() => props.onHide()}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
}


// PaymentEmailModal   for Task page
export function PaymentWhatsappModal(props) {
    const navigate = useNavigate()
    const [showdate, setShowdate] = useState(0)


    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='callrecordingModal'>
                <div className='payreceived5'>
                    <div className='payreceived6'>
                        <h6>EDUCATION</h6>
                    </div>
                    <div className='payreceived7'>
                        <input type="search" placeholder='Search Here' />
                        <IoSearchSharp color='#444444' size={20} />
                    </div>
                </div>
                <>  {showdate === 0 ? (
                    <div className='whatsapp1'>
                        <div className='payreceived24'>
                            <div className='whatsapp9'>
                                <div className='whatsapp8'>
                                    <p>What’s app section</p>
                                </div>
                                <div className='whatsapp4'>
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
                        </div>
                    </div>
                ) : showdate === 1 ? (
                    <div className='whatsapp10'>
                        <div className='whatsapp11'>
                            <div className='whatsapp12'>
                                <div className='whatsapp13'>
                                    <p>What’s app section</p>
                                </div>
                                <div className='whatsapp14'>
                                    <div className='whatsapp15'>
                                        <div className='whatsapp16'>
                                            <h6>Send What’sapp Message</h6>
                                        </div>
                                        <div className='whatsapp17'>
                                            <div className='payreceived13'>
                                                <div className='payreceived14'>
                                                    <p>Template :</p>
                                                    <p>Telegram number :</p>
                                                </div>
                                                <div className='payreceived15'>
                                                    <select name="" id="" onChange={(e) => setShowdate(parseInt(e.target.value))}>
                                                        <option value="1">While Create lead send WhatsApp message</option>
                                                        <option value="1">Yes lead created WhatsApp response from customer</option>
                                                        <option value="1">No lead created  WhatsApp response from customer</option>
                                                        <option value="1">First Message</option>
                                                        <option value="1">Yes lead created WhatsApp response from customer new</option>
                                                    </select>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className='whatsapp19'>
                                                <p>Message:</p>
                                                <textarea name="" id="" cols="90" rows="5"></textarea>
                                            </div>

                                            <div className='whatsapp20'>
                                                <button onClick={() => props.onHide()}>Send</button>
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
                </>
            </Modal.Body>
        </Modal>
    );
}



// PaymentEmailModal   for Task page
export function RemainderWhatsappModal(props) {
    const navigate = useNavigate()
    const [showdate, setShowdate] = useState(0)


    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='callrecordingModal'>
                <div className='payreceived5'>
                    <div className='payreceived6'>
                        <h6>Whatsapp Template</h6>
                    </div>
                    <div className='payreceived7'>
                        <input type="search" placeholder='Search Here' />
                        <IoSearchSharp color='#444444' size={20} />
                    </div>
                </div>
                <>
                    <div className='whatsapp10'>
                        <div className='whatsapp11'>
                            <div className='whatsapp12'>
                                <div className='whatsapp13'>
                                    <p>What’s app section</p>
                                </div>
                                <div className='whatsapp14'>
                                    <div className='whatsapp15'>
                                        <div className='whatsapp16'>
                                            <h6>Send What’sapp Message</h6>
                                        </div>
                                        <div className='whatsapp17'>
                                            <div className='payreceived13'>
                                                <div className='payreceived14'>
                                                    <p>Template :</p>
                                                    <p>Telegram number :</p>
                                                </div>
                                                <div className='payreceived15'>
                                                    <select name="" id="" onChange={(e) => setShowdate(parseInt(e.target.value))}>
                                                        <option value="1">While Create lead send WhatsApp message</option>
                                                        <option value="1">Yes lead created WhatsApp response from customer</option>
                                                        <option value="1">No lead created  WhatsApp response from customer</option>
                                                        <option value="1">First Message</option>
                                                        <option value="1">Yes lead created WhatsApp response from customer new</option>
                                                    </select>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className='whatsapp19'>
                                                <p>Message:</p>
                                                <textarea name="" id="" cols="90" rows="5" placeholder='Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'></textarea>
                                            </div>

                                            <div className='whatsapp20'>
                                                <button onClick={() => props.onHide()}>Send</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </Modal.Body>
        </Modal>
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
    const { onHide, data, fetchdata } = props;
    const id = data?._id;

    const [loading, setLoading] = useState(false);
    const [modaldata, setModalData] = useState({});

    useEffect(() => {
        if (data) {
            setModalData(data || {});
        }
    }, [data]);


    const handleupdate = async () => {


        const payload = {
            paymentStatus: "APPROVED",
        };

        await putApi(endPoints.approvePaymentStatus(id), payload, {
            setLoading: setLoading,
            successMsg: `Status updated successfully!`,
            errorMsg: "Failed to update user status!",
        });

        fetchdata();
        onHide();
    };


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
                                <p>{modaldata?.fullName}</p>
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
                                <p>{modaldata?.courseName}</p>
                            </div>
                        </div>
                    </div>
                    <div className='studentdetailModal1'>
                        <div className='studentdetailModal2'>
                            <label htmlFor="">University</label>
                            <div className='studentdetailModal3'>
                                <p>{modaldata?.universityName}</p>
                            </div>
                        </div>
                        <div className='studentdetailModal2'>
                            <label htmlFor="">Counselor</label>
                            <div className='studentdetailModal3'>
                                <p>{modaldata?.fullName}</p>
                            </div>
                        </div>
                    </div>

                    <div className='approvepaymentmodal'>
                        <h6>Are you sure to approve payment : <span>{modaldata?.payAmount}</span> and Order ID : <span>IMTS-67845</span>?</h6>
                    </div>

                    <div className='approvepaymentmodal1'>
                        <button onClick={handleupdate} disabled={loading}>Yes</button>
                        <button onClick={onHide}>No</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}


//  Remarks Modal for payment page
export function Remarkspayment(props) {


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body >
                <div className='paymentremarkmodal'>
                    <div className='paymentremarkmodal1'>
                        <h6>Remarks</h6>
                        <IoIosCloseCircleOutline color='#000000' size={25} onClick={() => props.onHide()} />
                    </div>

                    <div className='paymentremarkmodal2'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit, eros id scelerisque eleifend, lorem urna tincidunt sem, quis semper dolor risus non enim. Donec eget enim dolor. Sed sit amet augue tellus. Mauris placerat hendrerit efficitur. Phasellus ultricies condimentum volutpat. Nunc facilisis congue elit, ac maximus nisi pharetra eget. Suspendisse potenti. Vivamus nec finibus metus. Etiam in lorem et ligula congue porttitor eu nec lorem. Maecenas lobortis dui magna, ac ultricies augue gravida et. Nullam rhoncus tortor nec bibendum tincidunt.
                            Praesent suscipit maximus arcu. Praesent sit amet leo id quam volutpat interdum sit amet id elit. Maecenas cursus fermentum eros consequat eleifend. Duis at fermentum magna, eget mattis urna. Vivamus elit nisi, finibus in arcu vitae, laoreet tincidunt nibh. Donec gravida facilisis accumsan. Donec sit amet ligula nisl. Suspendisse quam sapien, interdum sed ipsum non, feugiat rutrum eros. Ut placerat finibus lacinia. Proin nibh lectus, dictum in hendrerit vitae, tincidunt sit amet nulla. Quisque eu sapien ante. Aliquam auctor sem a libero congue, vel rhoncus ante tempor.</p>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}



//  paymentStatus Modal for payment page
export function PaymentStatus(props) {


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
                        <IoIosCloseCircleOutline color='#000000' size={25} onClick={() => props.onHide()} />
                    </div>


                    <div className='paymentstatusModal1'>
                        <h6>Change Payment Status</h6>
                        <div className='paymentstatusModal2'>
                            <div className='paymentstatusModal3'>
                                <input type="radio" name='pending' />
                                <div className='paymentstatusModal4' style={{ backgroundColor: "#FFB800" }}>
                                    <p>Pending</p>
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

                    <div className='paymentstatusModal7'>
                        <div className='paymentstatusModal5'>
                            <h6>Banks</h6>
                            <select name="" id="">
                                <option value="">Select Bank</option>
                                <option value="">HDFC</option>
                                <option value="">SBI</option>
                                <option value="" >BOI</option>
                            </select>
                        </div>
                        <div className='paymentstatusModal5'>
                            <h6>Transaction ID</h6>
                            <input type="text" />
                        </div>
                    </div>

                    <div className='paymentstatusModal5'>
                        <h6>Remarks</h6>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Type Here.....'></textarea>
                    </div>

                    <div className='paymentstatusModal6'>
                        <button onClick={() => props.onHide()}>SUBMIT</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}



export function AdmissionStatusModal(props) {
    const { onHide, data, fetchdata } = props;
    const id = data?._id;

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(data?.admissionConfirmationstatus || '');
    const [remark, setRemark] = useState(data?.addRemark || '');

    useEffect(() => {
        if (data) {
            setStatus(data?.admissionConfirmationstatus || "");
            setRemark(data?.addRemark || "");
        }
    }, [data]);


    const handleupdate = async () => {
        if (!status) {
            alert("Please select a status");
            return;
        }

        const payload = {
            admissionConfirmationstatus: status,
            addRemark: remark
        };

        await putApi(endPoints.updateadmissionStatus(id), payload, {
            setLoading: setLoading,
            successMsg: `Status updated successfully!`,
            errorMsg: "Failed to update user status!",
        });

        fetchdata();
        onHide();
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className="paymentremarkmodal">
                    <div className="paymentstatusModal">
                        <h6>Change Admission Status</h6>
                        <IoIosCloseCircleOutline color="#000000" size={30} onClick={onHide} />
                    </div>
                    <div className="paymentstatusModal1">
                        <div className="paymentstatusModal2">
                            <div className="paymentstatusModal3">
                                <input
                                    type="radio"
                                    name="status"
                                    value="PENDING"
                                    checked={status === "PENDING"}
                                    onChange={(e) => setStatus(e.target.value)}
                                />
                                <div className="paymentstatusModal4" style={{ backgroundColor: "#FFB800" }}>
                                    <p>Pending</p>
                                </div>
                            </div>
                            <div className="paymentstatusModal3">
                                <input
                                    type="radio"
                                    name="status"
                                    value="APPROVED"
                                    checked={status === "APPROVED"}
                                    onChange={(e) => setStatus(e.target.value)}
                                />
                                <div className="paymentstatusModal4" style={{ backgroundColor: "#40AF0C" }}>
                                    <p>Approved</p>
                                </div>
                            </div>
                            <div className="paymentstatusModal3">
                                <input
                                    type="radio"
                                    name="status"
                                    value="REJECT"
                                    checked={status === "REJECT"}
                                    onChange={(e) => setStatus(e.target.value)}
                                />
                                <div className="paymentstatusModal4" style={{ backgroundColor: "#FF0000" }}>
                                    <p>Rejected</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="paymentstatusModal5">
                        <h6>Remarks</h6>
                        <textarea
                            placeholder="Type Here....."
                            value={remark}
                            onChange={(e) => setRemark(e.target.value)}
                        />
                    </div>

                    <div className="paymentstatusModal6">
                        <button onClick={handleupdate} disabled={loading}>
                            {loading ? "Submitting..." : "SUBMIT"}
                        </button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}



//  UploadDocuments Modal for refund/cancel page
export function UploadDocuments(props) {


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



//  AddRemark Modal for refund/cancel page
export function AddRemark(props) {


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
                        <IoCloseOutline color='#000000' size={25} onClick={() => props.onHide()} />
                    </div>

                    <div className='addremarkmodal2'>
                        <label htmlFor="">Add Remark</label>
                        <textarea name="" id="" cols="30" rows="5"></textarea>
                    </div>

                    <div className='addremarkmodal3'>
                        <button onClick={() => props.onHide()}>Save</button>
                        <button onClick={() => props.onHide()}>Cancel</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}


//  View Remark Modal for refund/cancel page
export function ViewRemark(props) {


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
                        <IoCloseOutline color='#000000' size={25} onClick={() => props.onHide()} />
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




//  Add Refund/Cancel Modal for refund/cancel page
export function AddRefundCancelRequests(props) {


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
                        <IoCloseOutline color='#000000' size={25} onClick={() => props.onHide()} />
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
                        <button onClick={() => props.onHide()}>Save</button>
                        <button onClick={() => props.onHide()}>Cancel</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}




//  Edit Refund/ Cancel Modal for refund/cancel page
export function EditRefundCancelRequests(props) {
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
                        <IoCloseOutline color='#000000' size={25} onClick={() => props.onHide()} />
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
                        <button onClick={() => props.onHide()}>Save</button>
                        <button onClick={() => props.onHide()}>Cancel</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

// Delete Refund/ Cancel Modal for refund/cancel page
export function DeleteRequest(props) {


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
                        <img src={img8} alt="" />

                        <p>Are you Sure you want to Delete the Request?</p>
                    </div>

                    <div className='deleterefund1'>
                        <button onClick={() => props.onHide()}>Delete</button>
                        <button onClick={() => props.onHide()}>Cancel</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}





// FeeStructure Modal for PDC page
export function FeeStructure(props) {

    const [step, setStep] = useState(0);
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
                        <IoCloseOutline color='#000000' size={20} onClick={() => props.onHide(false)} />
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

// EducationDetails Modal for PDC page
export function EducationDetails(props) {
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
                        <IoIosCloseCircleOutline color='#000000' size={25} onClick={() => props.onHide(false)} />
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



// Document Details Modal for PDC page
export function DocumentDetails(props) {
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
                        <IoIosCloseCircleOutline color='#000000' size={25} onClick={() => props.onHide(false)} />
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

// Call Recording list Modal for PDC page
export function CallRecordinglist(props) {
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
                        <IoCloseOutline color='#000000' size={25} onClick={() => props.onHide(false)} />
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
                                            <td>{data.Remarks} <PiWarningCircle size={20} color='#2155CD' onClick={() => props.setModalShow1(true)} /></td>
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

// Call Summery list Modal for PDC page
export function CallSummeryListModal(props) {
    const tableData4 = [
        {
            id: 1,
            CreatedOn: 'DD/MM/YYYY',
            Type: 'Incoming',
            Duration: 'HH : MM',
            ResponsiblePersonName: 'Lorem Ipsum',
            ResponsiblePersonNumber: '1234567890',
            CallTiming: "HH : MM - DD/MM/YYYY"
        },

        {
            id: 1,
            CreatedOn: 'DD/MM/YYYY',
            Type: 'Incoming',
            Duration: 'HH : MM',
            ResponsiblePersonName: 'Lorem Ipsum',
            ResponsiblePersonNumber: '1234567890',
            CallTiming: "HH : MM - DD/MM/YYYY"
        },
        {
            id: 1,
            CreatedOn: 'DD/MM/YYYY',
            Type: 'Incoming',
            Duration: 'HH : MM',
            ResponsiblePersonName: 'Lorem Ipsum',
            ResponsiblePersonNumber: '1234567890',
            CallTiming: "HH : MM - DD/MM/YYYY"
        },
        {
            id: 1,
            CreatedOn: 'DD/MM/YYYY',
            Type: 'Incoming',
            Duration: 'HH : MM',
            ResponsiblePersonName: 'Lorem Ipsum',
            ResponsiblePersonNumber: '1234567890',
            CallTiming: "HH : MM - DD/MM/YYYY"
        },
        {
            id: 1,
            CreatedOn: 'DD/MM/YYYY',
            Type: 'Incoming',
            Duration: 'HH : MM',
            ResponsiblePersonName: 'Lorem Ipsum',
            ResponsiblePersonNumber: '1234567890',
            CallTiming: "HH : MM - DD/MM/YYYY"
        },
        {
            id: 1,
            CreatedOn: 'DD/MM/YYYY',
            Type: 'Incoming',
            Duration: 'HH : MM',
            ResponsiblePersonName: 'Lorem Ipsum',
            ResponsiblePersonNumber: '1234567890',
            CallTiming: "HH : MM - DD/MM/YYYY"
        },

    ];

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
                        <p>Call Summary list</p>
                        <IoCloseOutline color='#000000' size={25} onClick={() => props.onHide(false)} />
                    </div>
                    <div className='admission13'>
                        <div className='table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Created On</th>
                                        <th>Type</th>
                                        <th>Duration</th>
                                        <th>Responsible Person Name</th>
                                        <th>Responsible Person Number</th>
                                        <th>Call Timing</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData4.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.CreatedOn}</td>
                                            <td>{data.Type}</td>
                                            <td>{data.Duration}</td>
                                            <td>{data.ResponsiblePersonName}</td>
                                            <td>{data.ResponsiblePersonNumber}</td>
                                            <td>{data.CallTiming}</td>
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


// MarksheetUpload Modal for document page
export function MarksheetUpload(props) {

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
                        <button onClick={() => props.onHide()}>SAVE</button>
                        <button onClick={() => props.onHide()}>CANCEL</button>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
}



// ID Card Upload Modal for document page
export function IDCardUpload(props) {
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
                        <button onClick={() => props.onHide()}>SAVE</button>
                        <button onClick={() => props.onHide()}>CANCEL</button>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
}




// Admit Card Upload Modal for document page
export function AdmitCardUpload(props) {

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
                        <button onClick={() => props.onHide()}>SAVE</button>
                        <button onClick={() => props.onHide()}>CANCEL</button>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
}


// Result Status Upload Modal for document page
export function ResultStatusUpload(props) {
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
                        <button onClick={() => props.onHide()}>SAVE</button>
                        <button onClick={() => props.onHide()}>CANCEL</button>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
}

// Transcript Modal for document page
export function TranscriptUpload(props) {

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
                        <button onClick={() => props.onHide()}>SAVE</button>
                        <button onClick={() => props.onHide()}>CANCEL</button>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
}


// Admission Letter Modal for document page
export function AdmissionLetterUpload(props) {
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
                        <button onClick={() => props.onHide()}>SAVE</button>
                        <button onClick={() => props.onHide()}>CANCEL</button>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
}

// Certificate Letter Modal for document page
export function CertificateUpload(props) {

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
                        <button onClick={() => props.onHide()}>SAVE</button>
                        <button onClick={() => props.onHide()}>CANCEL</button>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
}

// Provisional Letter Modal for document page
export function ProvisionalUpload(props) {
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
                        <button onClick={() => props.onHide()}>SAVE</button>
                        <button onClick={() => props.onHide()}>CANCEL</button>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
}


// Other Document Modal for document page
export function OtherDocumentApply(props) {
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
                        <button onClick={() => props.onHide()}>SAVE</button>
                        <button onClick={() => props.onHide()}>CANCEL</button>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
}


//Migration Upload Modal for document page
export function MigrationUpload(props) {
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
                        <button onClick={() => props.onHide()}>SAVE</button>
                        <button onClick={() => props.onHide()}>CANCEL</button>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
}


// Degree Upload Modal for document page
export function DegreeUpload(props) {

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
                        <button onClick={() => props.onHide()}>SAVE</button>
                        <button onClick={() => props.onHide()}>CANCEL</button>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
}




// Attestation Upload Modal for document page
export function AttestationUpload(props) {
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
                        <button onClick={() => props.onHide()}>SAVE</button>
                        <button onClick={() => props.onHide()}>CANCEL</button>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
}




// ListEmployee Modal for IT target report page
export function ListEmployee(props) {

    const tableData = [
        {
            id: 1,
            employeename: 'Loren Epsom',
            month: 'January',
            year: '2023',
            targetallotted: 'Loren',
            targetCompleted: 'Yes',
            URLAllotted: '5',
            URLCompleted: '4',
            Present: '13 days',
            Absent: '10 days',
            CompletedURL: '60%'
        },

        {
            id: 1,
            employeename: 'Loren Epsom',
            month: 'January',
            year: '2023',
            targetallotted: 'Loren',
            targetCompleted: 'Yes',
            URLAllotted: '5',
            URLCompleted: '4',
            Present: '13 days',
            Absent: '10 days',
            CompletedURL: '60%'
        },
        {
            id: 1,
            employeename: 'Loren Epsom',
            month: 'January',
            year: '2023',
            targetallotted: 'Loren',
            targetCompleted: 'Yes',
            URLAllotted: '5',
            URLCompleted: '4',
            Present: '13 days',
            Absent: '10 days',
            CompletedURL: '60%'
        },
        {
            id: 1,
            employeename: 'Loren Epsom',
            month: 'January',
            year: '2023',
            targetallotted: 'Loren',
            targetCompleted: 'Yes',
            URLAllotted: '5',
            URLCompleted: '4',
            Present: '13 days',
            Absent: '10 days',
            CompletedURL: '60%'
        },
        {
            id: 1,
            employeename: 'Loren Epsom',
            month: 'January',
            year: '2023',
            targetallotted: 'Loren',
            targetCompleted: 'Yes',
            URLAllotted: '5',
            URLCompleted: '4',
            Present: '13 days',
            Absent: '10 days',
            CompletedURL: '60%'
        },
        {
            id: 1,
            employeename: 'Loren Epsom',
            month: 'January',
            year: '2023',
            targetallotted: 'Loren',
            targetCompleted: 'Yes',
            URLAllotted: '5',
            URLCompleted: '4',
            Present: '13 days',
            Absent: '10 days',
            CompletedURL: '60%'
        },

    ];


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className='listEmployeemodal'>
                    <div className='listEmployeemodal1'>
                        <h6>List of IT Department Employee</h6>
                        <div className='listEmployeemodal2'>
                            <select name="" id="">
                                <option value="">Year</option>
                            </select>
                            <select name="" id="">
                                <option value="">Month</option>
                            </select>
                        </div>
                    </div>
                    <div className='admission13'>
                        <div className='table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" />  Employee Name</th>
                                        <th>Number_Target</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((data) => (
                                        <tr key={data.id}>
                                            <td><input type="checkbox" />  {data.employeename}</td>
                                            <td>
                                                <div className='listEmployeemodal3'>

                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='MarksheetUploadmodal7'>
                        <button onClick={() => props.onHide()}>SAVE</button>
                        <button onClick={() => props.onHide()}>RESET</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}




// AddSales Target Modal for sales target page
export function AddSalesTarget(props) {
    const tableData = [
        {
            id: 1,
            target: '200',
            Justification: '2',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },

        {
            id: 1,
            target: '200',
            Justification: '2',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },
        {
            id: 1,
            target: '200',
            Justification: '2',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },
        {
            id: 1,
            target: '200',
            Justification: '2',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },
        {
            id: 1,
            target: '200',
            Justification: '2',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },
        {
            id: 1,
            target: '200',
            Justification: '2',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },

    ];

    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className='MarksheetUploadmodal2' >
                <Modal.Title className='MarksheetUploadmodal1'>Sales Target</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='addsalestargetmodal'>
                    <div className='addsalestargetmodal1'>
                        <div className='addsalestargetmodal2'>
                            <label htmlFor="">Select Year</label>
                            <select name="" id="">
                                <option value="">Year</option>
                                <option value="">2013</option>
                                <option value="">2014</option>
                                <option value="">2015</option>
                                <option value="">2016</option>
                                <option value="">2017</option>
                                <option value="">2018</option>
                                <option value="">2019</option>
                                <option value="">2020</option>
                                <option value="">2021</option>
                                <option value="">2022</option>
                                <option value="">2023</option>
                                <option value="">2024</option>
                            </select>
                        </div>
                        <div className='addsalestargetmodal2'>
                            <label htmlFor="">Select Month</label>
                            <select name="" id="">
                                <option value="">Month</option>
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
                    </div>

                    <div className='admission13'>
                        <div className='table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>List of Admission Department Team</th>
                                        <th>Justification</th>
                                        <th>Target</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.ListTeam}</td>
                                            <td>{data.Justification}</td>
                                            <td>{data.target}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='MarksheetUploadmodal7'>
                        <button onClick={() => props.onHide()}>SAVE</button>
                        <button onClick={() => props.onHide()}>CANCEL</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}


//  EditSalesTarget Modal for sales target page
export function EditSalesTarget(props) {
    const tableData = [
        {
            id: 1,
            target: '200',
            Justification: '2',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },

        {
            id: 1,
            target: '200',
            Justification: '2',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },
        {
            id: 1,
            target: '200',
            Justification: '2',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },
        {
            id: 1,
            target: '200',
            Justification: '2',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },
        {
            id: 1,
            target: '200',
            Justification: '2',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },
        {
            id: 1,
            target: '200',
            Justification: '2',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },

    ];
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className='MarksheetUploadmodal2' >
                <Modal.Title className='MarksheetUploadmodal1'>Edit Sales Target</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='addsalestargetmodal'>
                    <div className='addsalestargetmodal1'>
                        <div className='addsalestargetmodal2'>
                            <label htmlFor="">Select Year</label>
                            <select name="" id="">
                                <option value="">2023</option>
                                <option value="">2013</option>
                                <option value="">2014</option>
                                <option value="">2015</option>
                                <option value="">2016</option>
                                <option value="">2017</option>
                                <option value="">2018</option>
                                <option value="">2019</option>
                                <option value="">2020</option>
                                <option value="">2021</option>
                                <option value="">2022</option>
                                <option value="">2023</option>
                                <option value="">2024</option>
                            </select>
                        </div>
                        <div className='addsalestargetmodal2'>
                            <label htmlFor="">Select Month</label>
                            <select name="" id="">
                                <option value="">January</option>
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
                    </div>

                    <div className='admission13'>
                        <div className='table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>List of Admission Department Team</th>
                                        <th>Justification</th>
                                        <th>Target</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.ListTeam}</td>
                                            <td>{data.Justification}</td>
                                            <td>{data.target}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className='MarksheetUploadmodal7'>
                        <button onClick={() => props.onHide()}>SAVE</button>
                        <button onClick={() => props.onHide()}>CANCEL</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}


//  InviteUsers Modal for sales employees page
export function InviteUsers(props) {
    const [step, setStep] = useState(0);
    const [isActive, setIsActive] = useState(false);

    // Function to toggle the state of the button
    const toggleButton = () => {
        setIsActive(prevState => !prevState);
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className='inviteusersmodal1' >
                <Modal.Title className='inviteusersmodal2'>Invite Users</Modal.Title>
            </Modal.Header>
            <Modal.Body className='inviteusersmodal'>
                <div className='inviteusersmodal3'>
                    <div className='inviteusersmodal4'>
                        <div className='inviteusersmodal5'>
                            <div className={step === 0 ? "inviteusersmodal6" : "inviteusersmodal7"} onClick={() => setStep(0)}>
                                <p>Invite via Link</p>
                            </div>
                            <div className={step === 1 ? "inviteusersmodal6" : "inviteusersmodal7"} onClick={() => setStep(1)}>
                                <p>Bulk Invitation</p>
                            </div>
                            <div className={step === 2 ? "inviteusersmodal6" : "inviteusersmodal7"} onClick={() => setStep(2)}>
                                <p>Invite to Department</p>
                            </div>
                            <div className={step === 3 ? "inviteusersmodal6" : "inviteusersmodal7"} onClick={() => setStep(3)}>
                                <p>Add New User</p>
                            </div>
                        </div>
                    </div>

                    <div className='inviteusersmodal8'>
                        <div className='inviteusersmodal9'>
                            <p>Invite via Link</p>
                        </div>

                        <div className='inviteusersmodal10'>
                            <p>Allow quick Registration</p>
                            <div
                                className={`slide-button-container ${isActive ? 'active' : ''}`}
                                onClick={toggleButton} // Handle click to toggle the state
                            >
                                <div className="slide-button-background">
                                    <div className="slide-button-handle"></div>
                                </div>
                            </div>
                        </div>


                        <div className='inviteusersmodal11'>
                            <label htmlFor="">Quick Registration Link</label>
                            <div className='inviteusersmodal12'>
                                <p>www.loremipsum.com</p>
                            </div>
                        </div>

                        <div className='inviteusersmodal13'>
                            <input type="checkbox" />
                            <p>Request Administrator Approval to join</p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}




//  tell about yourself Modal for general page
export function Tellaboutyourself(props) {


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className='inviteusersmodal1' >
                <Modal.Title className='tellmeaboutmodal'>About Me</Modal.Title>
            </Modal.Header>
            <Modal.Body className='tellmeaboutmodalpadding'>

                <div className='tellmeaboutmodal1'>
                    <div className='tellmeaboutmodal2'>
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
                        <textarea name="" id="" rows={5}></textarea>
                    </div>

                    <div className='tellmeaboutmodal3'>
                        <button>Send</button>
                        <button>Cancel</button>
                    </div>


                    <div className='tellmeaboutmodal4'>
                        <div className='tellmeaboutmodal5'>
                            <div className='tellmeaboutmodal6'>
                                <IoAttach color='#444444' />
                                <p>File</p>
                            </div>
                            <div className='tellmeaboutmodal6'>
                                <GrDocumentText color='#444444' />
                                <p>Create Document</p>
                            </div>
                            <div className='tellmeaboutmodal6'>
                                <VscMention color='#444444' />
                                <p>Mention</p>
                            </div>
                            <div className='tellmeaboutmodal6'>
                                <RiDoubleQuotesL color='#444444' />
                                <p>Quote</p>
                            </div>
                        </div>

                        <div className='tellmeaboutmodal7'>
                            <p>A</p>
                        </div>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
}



//  PasswordInfo  Modal for general page
export function PasswordInfo(props) {


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className='inviteusersmodal1' >
                <Modal.Title className='tellmeaboutmodal'>Password Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div className='passwordinfo'>
                    <div className='passwordinfo1'>
                        <div className='passwordinfo2'>
                            <h6>Pasword</h6>
                        </div>

                        <div className='passwordinfo3'>
                            {/* <input type="password" /> */}
                            <div className='passwordinfo33'>
                                <div className='passwordinfo6'>
                                    <p>* * * * * * * * * * * *</p>
                                </div>
                                <img src={img9} alt="" />
                            </div>


                            <div className='passwordinfo4'>
                                <button onClick={() => props.setModalShow1()}>edit</button>
                            </div>
                        </div>
                        <div className='passwordinfo5'>
                            <p>Last changed at DD/MM/YYYY, 10:30 Am</p>
                        </div>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
}



//  PasswordInfo  Modal for general page
export function PasswordInfo1(props) {


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className='inviteusersmodal1' >
                <Modal.Title className='tellmeaboutmodal'>Password Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div className='passwordinfo'>
                    <div className='passwordinfo1'>
                        <div className='passwordinfo2'>
                            <h6>Pasword</h6>
                        </div>

                        <div className='passwordinfo3'>
                            <input type="password" placeholder='Enter New Password' />
                            <div className='passwordinfo4'>
                                <button onClick={() => props.onHide()}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
}


//  Notification  Modal for general page
export function NotificationModal(props) {


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='notificationmodal'>
                <div className='notificationmodal1'>
                    <div className='notificationmodal2'>
                        <div className='notificationmodal3'>
                            <input type="radio" />
                            <label htmlFor="">Simple Mode</label>
                        </div>
                        <div className='notificationmodal3' onClick={() => props.setModalShow3(true)}>
                            <input type="radio" />
                            <label htmlFor="">Advance Mode</label>
                        </div>
                    </div>

                    <div className='notificationmodal4'>
                        <h6>Receive standard notification to:</h6>
                        <div className='notificationmodal5'>
                            <input type="checkbox" />
                            <label htmlFor="">Websites, Mobile & Desktop Apps</label>
                        </div>
                        <div className='notificationmodal5'>
                            <input type="checkbox" />
                            <label htmlFor="">Email (lorenepsom034@gmail.com)</label>
                        </div>
                        <div className='notificationmodal5'>
                            <input type="checkbox" />
                            <label htmlFor="">Push Notification(Mobile Apps)</label>
                        </div>
                    </div>

                    <div className='notificationmodal66'>
                        <button onClick={() => props.onHide()}>Save</button>
                        <button onClick={() => props.onHide()}>Cancel</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}


//  Notification  Modal for general page
export function NotificationModal2(props) {


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='notificationmodal'>
                <div className='notificationmodal1'>
                    <div className='notificationmodal2'>
                        <div className='notificationmodal3'>
                            <input type="radio" />
                            <label htmlFor="">Simple Mode</label>
                        </div>
                        <div className='notificationmodal3'>
                            <input type="radio" />
                            <label htmlFor="">Advance Mode</label>
                        </div>
                    </div>

                    <div className='notificationmodal7'>
                        <div className='notificationmodal16'>
                            <div className='notificationmodal8'>
                                <p>Site and <br />Application</p>
                                <p>Email</p>
                                <p>Push <br /> Notification</p>
                            </div>
                        </div>


                        <div className='notificationmodal15'>
                            <div className='notificationmodal144'>
                                <div className='notificationmodal9'>
                                    <p>Chat & Calls</p>
                                </div>

                                <div className='notificationmodal10'>
                                    <div className='notificationmodal11'>
                                        <label htmlFor="">Personal chat message</label>
                                        <label htmlFor="">Private chat message</label>
                                        <label htmlFor="">Public chat message</label>
                                        <label htmlFor="">Chat likes</label>
                                        <label htmlFor="">Someone mentioned in the chat</label>
                                        <label htmlFor="">Unrecognized Notification</label>
                                    </div>


                                    <div className='notificationmodal12'>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='notificationmodal14'>

                                <div className='notificationmodal9'>
                                    <p>Conversation</p>
                                </div>

                                <div className='notificationmodal10'>
                                    <div className='notificationmodal11'>
                                        <label htmlFor="">You were specified as a post recipient</label>
                                        <label htmlFor="">Your message has been posted to Activity Stream.</label>
                                        <label htmlFor="">A comment was added to your post</label>
                                        <label htmlFor="">You were mentioned in a post</label>
                                        <label htmlFor="">You were mentioned in comment</label>
                                        <label htmlFor="">Your post was shared with more users</label>
                                        <label htmlFor="">A post was shared with you</label>
                                        <label htmlFor="">Send new message to all users</label>
                                        <label htmlFor="">Appreciation notification</label>
                                        <label htmlFor="">New unmoderated post</label>
                                        <label htmlFor="">New unmoderated comment</label>
                                        <label htmlFor="">Your post was published by the moderator</label>
                                        <label htmlFor="">Your comment was published by the moderator</label>
                                        <label htmlFor="">Your post was published by the moderator</label>
                                    </div>


                                    <div className='notificationmodal12'>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='notificationmodal14'>

                                <div className='notificationmodal9'>
                                    <p>EVENT CALENDAR</p>
                                </div>

                                <div className='notificationmodal10'>
                                    <div className='notificationmodal11'>
                                        <label htmlFor="">Event invitation</label>
                                        <label htmlFor="">Event reminder</label>
                                        <label htmlFor="">Event updated</label>
                                        <label htmlFor="">Confirm or decline event attendance</label>
                                        <label htmlFor="">New comment on an event</label>
                                        <label htmlFor="">Delete meeting room</label>
                                    </div>


                                    <div className='notificationmodal12'>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='notificationmodal14'>

                                <div className='notificationmodal9'>
                                    <p>CRM</p>
                                </div>

                                <div className='notificationmodal10'>
                                    <div className='notificationmodal11'>
                                        <label htmlFor="">There are new e-mails</label>
                                        <label htmlFor="">You were specified as a post recipient</label>
                                        <label htmlFor="">You were mentioned in a post</label>
                                        <label htmlFor="">CRM form submitted</label>
                                        <label htmlFor="">Callback requested</label>
                                        <label htmlFor="">You have been assigned as a responsible person</label>
                                        <label htmlFor="">Stage changed</label>
                                        <label htmlFor="">Duplicate control notifications</label>
                                        <label htmlFor="">Other notifications</label>
                                    </div>


                                    <div className='notificationmodal12'>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='notificationmodal14'>

                                <div className='notificationmodal9'>
                                    <p>DRIVE</p>
                                </div>

                                <div className='notificationmodal10'>
                                    <div className='notificationmodal11'>
                                        <label htmlFor="">File change notifications</label>
                                        <label htmlFor="">File delete notifications</label>
                                    </div>


                                    <div className='notificationmodal12'>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='notificationmodal14'>

                                <div className='notificationmodal9'>
                                    <p>RATINGS AND LIKES</p>
                                </div>

                                <div className='notificationmodal10'>
                                    <div className='notificationmodal11'>
                                        <label htmlFor="">"I like it" notification</label>
                                        <label htmlFor="">Notification on voting in posts that mention you</label>
                                    </div>


                                    <div className='notificationmodal12'>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='notificationmodal14'>

                                <div className='notificationmodal9'>
                                    <p>OPEN CHANNELS</p>
                                </div>

                                <div className='notificationmodal10'>
                                    <div className='notificationmodal11'>
                                        <label htmlFor="">Client rating notification</label>
                                        <label htmlFor="">Supervisor rating notification</label>
                                    </div>


                                    <div className='notificationmodal12'>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='notificationmodal14'>

                                <div className='notificationmodal9'>
                                    <p>INTRANET</p>
                                </div>

                                <div className='notificationmodal10'>
                                    <div className='notificationmodal11'>
                                        <label htmlFor="">Sign in confirmation code</label>
                                    </div>


                                    <div className='notificationmodal12'>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='notificationmodal14'>

                                <div className='notificationmodal9'>
                                    <p>MAIL</p>
                                </div>

                                <div className='notificationmodal10'>
                                    <div className='notificationmodal11'>
                                        <label htmlFor="">New message</label>
                                        <label htmlFor="">Maximum number of mailboxes exceeded</label>
                                    </div>


                                    <div className='notificationmodal12'>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='notificationmodal14'>

                                <div className='notificationmodal9'>
                                    <p>PHOTO GALLERY 2.0</p>
                                </div>

                                <div className='notificationmodal10'>
                                    <div className='notificationmodal11'>
                                        <label htmlFor="">Photo comment notification</label>
                                    </div>


                                    <div className='notificationmodal12'>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='notificationmodal14'>

                                <div className='notificationmodal9'>
                                    <p>EMAIL MARKETING</p>
                                </div>

                                <div className='notificationmodal10'>
                                    <div className='notificationmodal11'>
                                        <label htmlFor="">Segment ready to send</label>
                                    </div>


                                    <div className='notificationmodal12'>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='notificationmodal14'>

                                <div className='notificationmodal9'>
                                    <p>SOCIAL NETWORK</p>
                                </div>

                                <div className='notificationmodal10'>
                                    <div className='notificationmodal11'>
                                        <label htmlFor="">Workgroup members change</label>
                                        <label htmlFor="">Received invite or request to join workgroup; removed from workgroup</label>
                                        <label htmlFor="">Group membership change (for moderators)</label>
                                        <label htmlFor="">You were assigned or unassigned as a workgroup moderator</label>
                                        <label htmlFor="">Workgroup owner change</label>
                                        <label htmlFor="">Workgroup updates</label>
                                    </div>


                                    <div className='notificationmodal12'>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='notificationmodal14'>

                                <div className='notificationmodal9'>
                                    <p>TASKS</p>
                                </div>

                                <div className='notificationmodal10'>
                                    <div className='notificationmodal11'>
                                        <label htmlFor="">New comment added to a task</label>
                                        <label htmlFor="">Task reminder</label>
                                        <label htmlFor="">Task created or updated</label>
                                        <label htmlFor="">Task assigned to you</label>
                                        <label htmlFor="">Task almost overdue</label>
                                    </div>


                                    <div className='notificationmodal12'>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='notificationmodal14'>

                                <div className='notificationmodal9'>
                                    <p>WORKING TIME MANAGEMENT</p>
                                </div>

                                <div className='notificationmodal10'>
                                    <div className='notificationmodal11'>
                                        <label htmlFor="">New workday report</label>
                                        <label htmlFor="">New workday report comment.</label>
                                        <label htmlFor="">Workday report approved or unapproved</label>
                                        <label htmlFor="">New entry in working time report</label>
                                        <label htmlFor="">Working time report comment</label>
                                        <label htmlFor="">Working time report update approved</label>
                                    </div>


                                    <div className='notificationmodal12'>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='notificationmodal14'>

                                <div className='notificationmodal9'>
                                    <p>POLLS AND SURVEYS</p>
                                </div>

                                <div className='notificationmodal10'>
                                    <div className='notificationmodal11'>
                                        <label htmlFor="">Voting</label>
                                    </div>


                                    <div className='notificationmodal12'>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='notificationmodal14'>

                                <div className='notificationmodal9'>
                                    <p>TELEPHONY</p>
                                </div>

                                <div className='notificationmodal10'>
                                    <div className='notificationmodal11'>
                                        <label htmlFor="">Telephony notifications</label>
                                    </div>


                                    <div className='notificationmodal12'>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='notificationmodal14'>

                                <div className='notificationmodal9'>
                                    <p>WIKI</p>
                                </div>

                                <div className='notificationmodal10'>
                                    <div className='notificationmodal11'>
                                        <label htmlFor="">Wiki page comments</label>
                                    </div>


                                    <div className='notificationmodal12'>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='notificationmodal14'>

                                <div className='notificationmodal9'>
                                    <p>BUSINESS PROCESSES</p>
                                </div>

                                <div className='notificationmodal10'>
                                    <div className='notificationmodal11'>
                                        <label htmlFor="">Notifications from business processes</label>
                                    </div>


                                    <div className='notificationmodal12'>
                                        <div className='notificationmodal13'>
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='notificationmodal6'>
                        <button onClick={() => props.onHide()}>Save</button>
                        <button onClick={() => props.onHide()}>Cancel</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}




//  Counsellorform  Modal for CRM page
export function Counsellorform(props) {

    const handleModal = () => {
        props.setModalShow8(true);
    };

    const handleModal1 = () => {
        props.setModalShow9(true);
    };
    const handleModal2 = () => {
        props.setModalShow10(true);
    };
    const handleModal3 = () => {
        props.setModalShow11(true);
    };

    const popover1 = (
        <Popover id="popover-basic">
            <Popover.Body>
                <div className="toppart7">
                    <div className="toppart8" onClick={handleModal}>
                        <h6>String</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="toppart8" onClick={handleModal1}>
                        <h6>Date</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="toppart8" onClick={handleModal2}>
                        <h6>List</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="toppart8" onClick={handleModal3}>
                        <h6>Yes/ No</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );


    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='counsellorformmodalpadding'>
                <div className='counsellorformmodal'>
                    <div className='counsellorformmodal1'>
                        <h4>Counselor commitment form</h4>
                        <h6>Application ID: 11123</h6>
                    </div>

                    <div className='counsellorformmodal2'>
                        <div className='counsellorformmodal3'>
                            <h5>Fill counsellor Form</h5>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover1}>
                                <p>Create a field</p>
                            </OverlayTrigger>
                        </div>

                        <div className='counsellorformmodal4' style={{ marginTop: "50px" }}>
                            <div className='counsellorformmodal5'>
                                <div className='counsellorformmodal6'>
                                    <label htmlFor="">Id Card</label>
                                    <input type="text" />
                                </div>
                                <div className='counsellorformmodal6'>
                                    <label htmlFor="">Admission type</label>
                                    <select name="" id="">
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div className='counsellorformmodal6'>
                                    <label htmlFor="">Mode of Exam</label>
                                    <select name="" id="">
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div className='counsellorformmodal6'>
                                    <label htmlFor="">Exam Batch by Counselor</label>
                                    <input type="date" />
                                </div>
                                <div className='counsellorformmodal6'>
                                    <label htmlFor="">Tentative Exam Time</label>
                                    <input type="date" />
                                </div>
                                <div className='counsellorformmodal6'>
                                    <label htmlFor="">Books</label>
                                    <input type="text" />
                                </div>
                                <div className='counsellorformmodal6'>
                                    <label htmlFor="">Hall ticket</label>
                                    <input type="text" />
                                </div>
                                <div className='counsellorformmodal6'>
                                    <label htmlFor="">Tentative Result & Document date</label>
                                    <input type="date" />
                                </div>
                                <div className='counsellorformmodal6'>
                                    <label htmlFor="">Exam Center</label>
                                    <input type="text" />
                                </div>
                                <div className='counsellorformmodal6'>
                                    <label htmlFor="">Course type</label>
                                    <select name="" id="">
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div className='counsellorformmodal6'>
                                    <label htmlFor="">Priority</label>
                                    <select name="" id="">
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div className='counsellorformmodal6'>
                                    <label htmlFor="">Prov. Migration & Degree fees</label>
                                    <input type="text" />
                                </div>

                                <div className='counsellorformmodal6'>
                                    <label htmlFor="">Suitable time for call</label>
                                    <input type="date" />
                                </div>
                                <div className='counsellorformmodal6'>
                                    <label htmlFor="">Verification Date</label>
                                    <input type="date" />
                                </div>
                                <div className='counsellorformmodal6'>
                                    <label htmlFor="">Time for forum processing working days</label>
                                    <input type="date" />
                                </div>

                                <div className='counsellorformmodal6'>
                                    <label htmlFor="">Pending Docs.</label>
                                    <input type="text" />
                                </div>
                                <div className='counsellorformmodal6'>
                                    <label htmlFor="">Additional Commitment type</label>
                                    <input type="text" />
                                </div>
                                <div className='counsellorformmodal6'>
                                    <label htmlFor="">Exam Confirmation Remark</label>
                                    <input type="text" />
                                </div>

                            </div>



                            <div className='counsellorformmodal6' style={{ marginTop: "20px" }}>
                                <label htmlFor="">Any Additional Comments</label>
                                <textarea name="" id="" rows={5} ></textarea>
                            </div>


                            <div className='counsellorformmodal7'>
                                <button>SUBMIT COUSELOR FORM</button>
                            </div>


                        </div>
                    </div>


                </div>
            </Modal.Body>
        </Modal>
    );
}


//  Paymentlink  Modal for CRM page
export function Paymentlink(props) {


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='counsellorformmodalpadding'>
                <div className='paymentcrmmodal'>
                    <div className='paymentcrmmodal1'>
                        <h6>Counselor commitment form Link</h6>
                        <p>Application ID: 1123</p>
                    </div>

                    <div className='paymentcrmmodal2'>
                        <div className='paymentcrmmodal3'>
                            <p>Counsellor Name: <span>loren Epsom</span></p>
                            <p>Date: DD/MM/YYYY</p>
                        </div>
                        <div className='paymentcrmmodal4'>
                            <p>From : Univeristy Name</p>
                        </div>

                        <div className='paymentcrmmodal4'>
                            <div className='paymentcrmmodal5'>
                                <p>Rorem ipsum/dolor sit amet/consectetur/adipiscing elit001/Rorem</p>
                                <div className='paymentcrmmodal66'>
                                    <FaRegCopy />
                                </div>
                            </div>
                            <div className='paymentcrmmodal6'>
                                <button>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}










//  Paymentlink  Modal for CRM page
export function PropertiesModal(props) {

    const handleModal2 = () => {
        props.setModalShow10(true);
    };
    const handleModal3 = () => {
        props.setModalShow11(true);
    };
    const handleModal4 = () => {
        props.setModalShow12(true);
    };
    const handleModal5 = () => {
        props.setModalShow13(true);
    };
    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>
                <div className="toppart7">
                    <div className="toppart8" onClick={handleModal2}>
                        <h6>String</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="toppart8" onClick={handleModal3}>
                        <h6>Date</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="toppart8" onClick={handleModal4}>
                        <h6>List</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="toppart8" onClick={handleModal5}>
                        <h6>Yes/ No</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );

    return (
        <Modal
            {...props}
            size="sl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="right-side-modal"
        >
            <Modal.Body className='counsellorformmodalpadding'>
                <div className='PropertiesModal1'>
                    <div className='PropertiesModal2'>
                        <p>Properties</p>
                        <span>Edit</span>
                    </div>
                    <div className='PropertiesModal3'>
                        <div className='PropertiesModal4'>
                            <p>Section</p>
                            <div className='PropertiesModal5'>
                                <h6>+ADD</h6>
                            </div>
                        </div>


                        <div className='PropertiesModal6'>
                            <p>Field Name</p>
                            <div className='PropertiesModal55'>
                                <input type="text" placeholder='New Text' />
                            </div>
                        </div>

                        <div className='PropertiesModal7'>
                            <div className='PropertiesModal8'>
                                <input type="checkbox" />
                                <p>Required</p>
                            </div>
                            <div className='PropertiesModal8'>
                                <input type="checkbox" />
                                <p>Multiple</p>
                            </div>
                            <div className='PropertiesModal8'>
                                <input type="checkbox" />
                                <p>Show them online</p>
                            </div>
                            <div className='PropertiesModal8'>
                                <input type="checkbox" />
                                <p>Show Always</p>
                            </div>
                            <div className='PropertiesModal8'>
                                <input type="checkbox" />
                                <p>Make this filed visible to selected user’s only</p>
                            </div>
                        </div>

                        <div className='PropertiesModal9'>
                            <button onClick={() => props.onHide()}>Save</button>
                            <button onClick={() => props.onHide()}>Cancel</button>
                        </div>

                        <div className='PropertiesModal10'>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <p>Create a field</p>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

//  Paymentlink  Modal for CRM page
export function CreateDateFieldsModal(props) {


    return (
        <Modal
            {...props}
            size="sl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="right-side-modal"
        >
            <Modal.Body className='counsellorformmodalpadding'>
                <div className='PropertiesModal1'>
                    <div className='PropertiesModal2'>
                        <p>Properties</p>
                        <span>Edit</span>
                    </div>
                    <div className='PropertiesModal3'>
                        <div className='PropertiesModal4'>
                            <p>Section</p>
                            <div className='PropertiesModal5'>
                                <h6>+ADD</h6>
                            </div>
                        </div>


                        <div className='PropertiesModal6'>
                            <p>Field Name</p>
                            <div className='PropertiesModal55'>
                                <input type="text" placeholder='New date' />
                            </div>
                        </div>

                        <div className='PropertiesModal7'>
                            <div className='PropertiesModal8'>
                                <input type="checkbox" />
                                <p>Required</p>
                            </div>
                            <div className='PropertiesModal8'>
                                <input type="checkbox" />
                                <p>Multiple</p>
                            </div>
                            <div className='PropertiesModal8'>
                                <input type="checkbox" />
                                <p>Show them online</p>
                            </div>
                            <div className='PropertiesModal8'>
                                <input type="checkbox" />
                                <p>Show Always</p>
                            </div>
                            <div className='PropertiesModal8'>
                                <input type="checkbox" />
                                <p>Make this filed visible to selected user’s only</p>
                            </div>
                        </div>

                        <div className='PropertiesModal9'>
                            <button onClick={() => props.onHide()}>Save</button>
                            <button onClick={() => props.onHide()}>Cancel</button>
                        </div>


                        <div className='PropertiesModal10'>
                            <p>Create a field</p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}


export function CreateListFieldsModal(props) {


    return (
        <Modal
            {...props}
            size="sl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="right-side-modal"
        >
            <Modal.Body className='counsellorformmodalpadding'>
                <div className='PropertiesModal1'>
                    <div className='PropertiesModal2'>
                        <p>Properties</p>
                        <span>Edit</span>
                    </div>
                    <div className='PropertiesModal3'>
                        <div className='PropertiesModal4'>
                            <p>Section</p>
                            <div className='PropertiesModal5'>
                                <h6>+ADD</h6>
                            </div>
                        </div>


                        <div className='PropertiesModal6'>
                            <p>Field Name</p>
                            <div className='PropertiesModal55'>
                                <input type="text" placeholder='New list' />
                            </div>
                        </div>

                        <div className='PropertiesModal6'>
                            <p>List items</p>
                            <div className='PropertiesModal55'>
                                <input type="text" placeholder='New list' />
                            </div>
                        </div>

                        <div>
                            <hr />
                        </div>

                        <div className='PropertiesModal6'>
                            <div className='PropertiesModal55'>
                                <select name="" id="">
                                    <option value="">MultiSelect list</option>
                                    <option value="">Entity Selection dialog</option>
                                    <option value="">List</option>
                                    <option value="">Checkboxes</option>
                                </select>
                            </div>
                        </div>

                        <div className='PropertiesModal7'>
                            <div className='PropertiesModal8'>
                                <input type="checkbox" />
                                <p>Required</p>
                            </div>
                            <div className='PropertiesModal8'>
                                <input type="checkbox" />
                                <p>Multiple</p>
                            </div>
                            <div className='PropertiesModal8'>
                                <input type="checkbox" />
                                <p>Show them online</p>
                            </div>
                            <div className='PropertiesModal8'>
                                <input type="checkbox" />
                                <p>Show Always</p>
                            </div>
                            <div className='PropertiesModal8'>
                                <input type="checkbox" />
                                <p>Make this filed visible to selected user’s only</p>
                            </div>
                        </div>

                        <div className='PropertiesModal9'>
                            <button onClick={() => props.onHide()}>Save</button>
                            <button onClick={() => props.onHide()}>Cancel</button>
                        </div>


                        <div className='PropertiesModal10'>
                            <p>Create a field</p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}


export function CreateYesNOFieldsModal(props) {


    return (
        <Modal
            {...props}
            size="sl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="right-side-modal"
        >
            <Modal.Body className='counsellorformmodalpadding'>
                <div className='PropertiesModal1'>
                    <div className='PropertiesModal2'>
                        <p>Properties</p>
                        <span>Edit</span>
                    </div>
                    <div className='PropertiesModal3'>
                        <div className='PropertiesModal4'>
                            <p>Section</p>
                            <div className='PropertiesModal5'>
                                <h6>+ADD</h6>
                            </div>
                        </div>


                        <div className='PropertiesModal6'>
                            <p>Field Name</p>
                            <div className='PropertiesModal55'>
                                <input type="text" placeholder='New Text' />
                            </div>
                        </div>

                        <div className='PropertiesModal7'>
                            <div className='PropertiesModal8'>
                                <input type="checkbox" />
                                <p>Required</p>
                            </div>
                            <div className='PropertiesModal8'>
                                <input type="checkbox" />
                                <p>Multiple</p>
                            </div>
                            <div className='PropertiesModal8'>
                                <input type="checkbox" />
                                <p>Show them online</p>
                            </div>
                            <div className='PropertiesModal8'>
                                <input type="checkbox" />
                                <p>Show Always</p>
                            </div>
                            <div className='PropertiesModal8'>
                                <input type="checkbox" />
                                <p>Make this filed visible to selected user’s only</p>
                            </div>
                        </div>

                        <div className='PropertiesModal9'>
                            <button onClick={() => props.onHide()}>Save</button>
                            <button onClick={() => props.onHide()}>Cancel</button>
                        </div>


                        <div className='PropertiesModal10'>
                            <p>Create a field</p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}






export function AddFeestStructure(props) {


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Add Fee structure</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='addfeestructuremodal'>
                    <div className='addfeestructuremodal1'>
                        <div className='addfeestructuremodal2'>
                            <label htmlFor="">Type</label>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" className="addfeestructuremodal3">
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <div className='addfeestructuremodal4'>
                                            <h6>Type</h6>
                                            <div className='addfeestructuremodal5'>
                                                <p>Automatic</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>Manual</p>
                                                <input type="checkbox" />
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='addfeestructuremodal2'>
                            <label htmlFor="">University</label>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" className="addfeestructuremodal3">
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <div className='addfeestructuremodal4'>
                                            <h6>University</h6>
                                            <div className='addfeestructuremodal5'>
                                                <p>Loren Epsom</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>Loren Epsom</p>
                                                <input type="checkbox" />
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='addfeestructuremodal2'>
                            <label htmlFor="">Course</label>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" className="addfeestructuremodal3">
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <div className='addfeestructuremodal4'>
                                            <h6>Course</h6>
                                            <div className='addfeestructuremodal5'>
                                                <p>B.tech</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>MBA</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>Bsc</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>Msc</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>BA</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>MA</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>Bcom</p>
                                                <input type="checkbox" />
                                            </div>

                                            <div className='addfeestructuremodal5'>
                                                <p>Mcom</p>
                                                <input type="checkbox" />
                                            </div>

                                            <div className='addfeestructuremodal5'>
                                                <p>CA</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>BCA</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>BBA</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>MBBS</p>
                                                <input type="checkbox" />
                                            </div>

                                            <div className='addfeestructuremodal5'>
                                                <p>BHMS</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>BAMS</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>BDS</p>
                                                <input type="checkbox" />
                                            </div>

                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='addfeestructuremodal2'>
                            <label htmlFor="">Specialization</label>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" className="addfeestructuremodal3">
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <div className='addfeestructuremodal4'>
                                            <h6>Specialization</h6>
                                            <div className='addfeestructuremodal5'>
                                                <p>Arts Lorem Ipsum</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>Science Lorem Ipsum</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>Science Lorem Ipsum</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>Biology Lorem Ipsum</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>Arts Lorem Ipsum</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>Arts Lorem Ipsum</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>Arts Lorem Ipsum</p>
                                                <input type="checkbox" />
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='addfeestructuremodal2'>
                            <label htmlFor="">Mode of fee structure</label>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" className="addfeestructuremodal3">
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <div className='addfeestructuremodal4'>
                                            <h6>Mode of fee structure</h6>
                                            <div className='addfeestructuremodal5'>
                                                <p>Semester</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>Yearly</p>
                                                <input type="checkbox" />
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='addfeestructuremodal2'>
                            <label htmlFor="">Exam Mode</label>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" className="addfeestructuremodal3">
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <div className='addfeestructuremodal4'>
                                            <h6>Exam mode</h6>
                                            <div className='addfeestructuremodal5'>
                                                <p>Semester</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>Yearly</p>
                                                <input type="checkbox" />
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='addfeestructuremodal2'>
                            <label htmlFor="">Applied batches</label>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" className="addfeestructuremodal3">
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <div className='addfeestructuremodal4'>
                                            <h6>Applied Batches</h6>
                                            <div className='addfeestructuremodal5'>
                                                <p>1</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>2</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>3</p>
                                                <input type="checkbox" />
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='addfeestructuremodal2'>
                            <label htmlFor="">Add GAP charges</label>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" className="addfeestructuremodal3">
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <div className='addfeestructuremodal4'>
                                            <h6>Batch No (GAP Charges)</h6>
                                            <div className='addfeestructuremodal5'>
                                                <p>3</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>3</p>
                                                <input type="checkbox" />
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='addfeestructuremodal2'>
                            <label htmlFor="">Add R.R charges in batches</label>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" className="addfeestructuremodal3">
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <div className='addfeestructuremodal4'>
                                            <h6>Batch No (R.R Charges)</h6>
                                            <div className='addfeestructuremodal5'>
                                                <p>3</p>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='addfeestructuremodal5'>
                                                <p>3</p>
                                                <input type="checkbox" />
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='addfeestructuremodal6'>
                        <h5>First Exam Batch</h5>
                        <div className='addfeestructuremodal1' style={{ marginTop: "20px" }}>
                            <div className='addfeestructuremodal2'>
                                <label htmlFor="">Month</label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" className="addfeestructuremodal3">
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item>
                                            <div className='addfeestructuremodal4'>
                                                <h6>Month</h6>
                                                <div className='addfeestructuremodal5'>
                                                    <p>January</p>
                                                </div>
                                                <div className='addfeestructuremodal5'>
                                                    <p>February</p>
                                                </div>
                                                <div className='addfeestructuremodal5'>
                                                    <p>March</p>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className='addfeestructuremodal2'>
                                <label htmlFor="">Year</label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" className="addfeestructuremodal3">
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item>
                                            <div className='addfeestructuremodal4'>
                                                <h6>Year</h6>
                                                <div className='addfeestructuremodal5'>
                                                    <p>2023</p>
                                                </div>
                                                <div className='addfeestructuremodal5'>
                                                    <p>2022</p>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className='addfeestructuremodal6'>
                        <h5>Exam Batch Alignment</h5>
                        <div className='addfeestructuremodal7'>
                            <div className='addfeestructuremodal8'>
                                <p>Automatic</p>
                                <input type="checkbox" />
                            </div>
                            <div className='addfeestructuremodal8'>
                                <p>Manual</p>
                                <input type="checkbox" />
                            </div>
                        </div>
                    </div>
                    <div className='addfeestructuremodal6'>
                        <h5>Other Charges</h5>
                        <div className='addfeestructuremodal7'>
                            <div className='addfeestructuremodal8'>
                                <p>Registration</p>
                                <input type="checkbox" />
                            </div>
                            <div className='addfeestructuremodal8'>
                                <p>TOC</p>
                                <input type="checkbox" />
                            </div>
                        </div>
                        <div className='addfeestructuremodal7'>
                            <div className='addfeestructuremodal8'>
                                <p>LE</p>
                                <input type="checkbox" />
                            </div>
                            <div className='addfeestructuremodal8'>
                                <p>Multiple</p>
                                <input type="checkbox" />
                            </div>
                        </div>
                    </div>

                    <div className='addfeestructuremodal9'>
                        <button onClick={() => props.onHide()}>Add</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}





export function NewViewModal(props) {


    return (
        <Modal
            {...props}
            size="sl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title className='newViewModalmodal'>New View</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='newViewModalmodal1'>
                    <div className='newViewModalmodal2'>
                        <label htmlFor="">View Name</label>
                        <input type="text" />
                    </div>
                    <div className='newViewModalmodal2'>
                        <label htmlFor="">Select the users for new view</label>
                        <div className='newViewModalmodal3'>
                            <p>+ Add</p>
                        </div>
                    </div>

                    <div className='newViewModalmodal4'>
                        <input type="checkbox" />
                        <label htmlFor="">Set this view for selected users</label>
                    </div>

                    <div className='newViewModalmodal5'>
                        <button onClick={() => props.onHide()}>Save</button>
                        <button onClick={() => props.onHide()}>Cancel</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}







export function NextBachFilterModal(props) {
    const [step, setStep] = useState(0);
    const options = [
        { label: "Loren Epsom University", value: "Unoversity" },
        { label: "Loren Epsom University", value: "Unoversity" },
        { label: "Loren Epsom University", value: "Unoversity", },
    ];
    const options1 = [
        { label: "General", value: "General" },
        { label: "OBC", value: "OBC" },
        { label: "SC", value: "SC", },
        { label: "ST", value: "ST", },
    ];
    const options2 = [
        { label: "India", value: "India" },
        { label: "UAE", value: "UAE" },
        { label: "Ghana", value: "Ghana", },
        { label: "Quatar", value: "Quatar", },
        { label: "Yemen", value: "Yemen", },
    ];
    const options3 = [
        { label: "O+", value: "O+" },
        { label: "O-", value: "O-" },
        { label: "A", value: "A", },
        { label: "B", value: "B", },
        { label: "AB", value: "AB", },
    ];
    const options4 = [
        { label: "Utter Pradesh", value: "India" },
        { label: "Hariyana", value: "UAE" },
        { label: "Maharashtra", value: "Ghana", },
        { label: "Punjab", value: "Quatar", },
        { label: "Madhya Pradesh", value: "Yemen", },
    ];
    const options5 = [
        { label: "Loren Epsom", value: "India" },
        { label: "Loren Epsom", value: "UAE" },
        { label: "Loren Epsom", value: "Ghana", },
        { label: "Loren Epsom", value: "Quatar", },
        { label: "Yemen", value: "Yemen", },
    ];
    const options6 = [
        { label: "Hindu", value: "India" },
        { label: "Muslim", value: "UAE" },
        { label: "Buddhist", value: "Ghana", },
        { label: "Chrishtian", value: "Quatar", },
        { label: "Others", value: "Yemen", },
    ];
    const options7 = [
        { label: "Married", value: "India" },
        { label: "Unmarried", value: "UAE" },
        { label: "Divorced", value: "Ghana", }
    ];

    const options8 = [
        { label: "Yes", value: "India" },
        { label: "No", value: "UAE" },
    ];
    const options9 = [
        { label: "Employed", value: "India" },
        { label: "Unemployed", value: "UAE" },
    ];
    const options10 = [
        { label: "Internal", value: "India" },
        { label: "External", value: "UAE" },
    ];
    const options11 = [
        { label: "Aadhar Card", value: "India" },
        { label: "Passport", value: "UAE" },
        { label: "Driving License", value: "India" },
        { label: "Voter ID", value: "UAE" },
        { label: "Other", value: "India" },
    ];
    const options12 = [
        { label: "Reverified", value: "India" },
        { label: "N/A", value: "UAE" },
        { label: "Reverification Rejected", value: "India" },
    ];
    const options13 = [
        { label: "Approved", value: "UAE" },
        { label: "Pending", value: "India" },
        { label: "Rejected", value: "India" },
    ];
    const options17 = [
        { label: "Send", value: "UAE" },
        { label: "Received", value: "India" },
        { label: "Waiting", value: "India" },
    ];
    const options14 = [
        { label: "Any Date", value: "India" },
        { label: "Yesterday", value: "UAE" },
        { label: "Current Day", value: "India" },
        { label: "Tomorrow", value: "India" },
        { label: "This Week", value: "India" },
        { label: "This Month", value: "UAE" },
        { label: "Current Quarter", value: "India" },
        { label: "Last 7 days", value: "India" },
    ];

    const options15 = [
        { label: "Automatic", value: "India" },
        { label: "Manual", value: "UAE" },
    ];
    const options16 = [
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
    ];
    const options18 = [
        { label: "1 ", value: "India" },
        { label: "2", value: "India" },
        { label: "3", value: "India" },
        { label: "4", value: "India" },
        { label: "5 ", value: "India" },
    ];


    const [selected, setSelected] = useState([]);

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

                        <div className='filter6' onClick={() => props.setModalShow7(true)}>
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
                                    <MultiSelect
                                        options={options}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Batch fee avialable</label>
                                    <MultiSelect
                                        options={options18}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Batch Not fee avialable</label>
                                    <MultiSelect
                                        options={options18}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Category</label>
                                    <MultiSelect
                                        options={options1}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Nationality</label>
                                    <MultiSelect
                                        options={options2}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Blood Group</label>
                                    <MultiSelect
                                        options={options3}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">State</label>
                                    <MultiSelect
                                        options={options4}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">District</label>
                                    <MultiSelect
                                        options={options5}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">City</label>
                                    <MultiSelect
                                        options={options5}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Religion</label>
                                    <MultiSelect
                                        options={options6}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Marital Status</label>
                                    <MultiSelect
                                        options={options7}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Minority Belonging</label>
                                    <MultiSelect
                                        options={options8}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Employment Status</label>
                                    <MultiSelect
                                        options={options9}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Domicile</label>
                                    <MultiSelect
                                        options={options4}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">ID Proof type</label>
                                    <MultiSelect
                                        options={options11}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Study Medium</label>
                                    <MultiSelect
                                        options={options11}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Assignment Type</label>
                                    <MultiSelect
                                        options={options10}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Free Date for Verification</label>
                                    <input type="date" />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Reverification</label>
                                    <MultiSelect
                                        options={options12}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Enrollment Number</label>
                                    <input type="text" />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Admission Confirmation </label>
                                    <MultiSelect
                                        options={options13}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Admission Confirmation Status</label>
                                    <MultiSelect
                                        options={options17}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Admission Date</label>
                                    <MultiSelect
                                        options={options14}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
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
                                    <MultiSelect
                                        options={options15}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Admission Confirm Status</label>
                                    <MultiSelect
                                        options={options16}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
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
                                    <p onClick={() => props.setModalShow2(true)}>Add Field</p>
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




// ExpenseAvailableCashModal list Modal for PDC page
export function ExpenseAvailableCashModal(props) {
    const tableData4 = [
        {
            id: 1,
            User: 'Loren Epsom',
            BalanceCashAmount: 'INR 10,0000',
        },

        {
            id: 1,
            User: 'Loren Epsom',
            BalanceCashAmount: 'INR 10,0000',
        },
        {
            id: 1,
            User: 'Loren Epsom',
            BalanceCashAmount: 'INR 10,0000',
        },
        {
            id: 1,
            User: 'Loren Epsom',
            BalanceCashAmount: 'INR 10,0000',
        },
        {
            id: 1,
            User: 'Loren Epsom',
            BalanceCashAmount: 'INR 10,0000',
        },
        {
            id: 1,
            User: 'Loren Epsom',
            BalanceCashAmount: 'INR 10,0000',
        },

    ];

    const tableData5 = [
        {
            id: 1,
            User: 'Total Amount',
            BalanceCashAmount: 'INR 10,0000',
        },

    ];

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
                        <p>Available Cash On User</p>
                        <IoCloseOutline color='#000000' size={25} onClick={() => props.onHide(false)} />
                    </div>
                    <div className='admission13'>
                        <div className='table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Balance Cash Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData4.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.User}</td>
                                            <td>{data.BalanceCashAmount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tbody>
                                    {tableData5.map((data) => (
                                        <tr key={data.id} style={{ backgroundColor: "#FFB800" }}>
                                            <td>{data.User}</td>
                                            <td>{data.BalanceCashAmount}</td>
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



// add department Modal for company structure page
export function AddDepartmentModal(props) {


    return (
        <Modal
            {...props}
            size="sl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className='newViewModalmodal'>Add Department</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='adddepartmentmodal'>
                    <div className='adddepartmentmodal1'>
                        <label htmlFor="">Department Name</label>
                        <input type="text" placeholder='New Team 3' />
                    </div>
                    <div className='adddepartmentmodal1'>
                        <label htmlFor="">Parent Department</label>
                        <select name="" id="">
                            <option value="">Super Admin</option>
                        </select>
                    </div>

                    <div className='adddepartmentmodal1'>
                        <label htmlFor="">Supervisor</label>
                        <div className='adddepartmentmodal2'>
                            <p>Select from Structure</p>
                        </div>
                    </div>

                    <div className='adddepartmentmodal3'>
                        <button onClick={() => props.onHide()}>ADD</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}



// add department Modal for company structure page
export function EditDepartmentModal(props) {


    return (
        <Modal
            {...props}
            size="sl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className='newViewModalmodal'>Edit Department</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='adddepartmentmodal'>
                    <div className='adddepartmentmodal1'>
                        <label htmlFor="">Department Name</label>
                        <input type="text" placeholder='SUPERADMIN' />
                    </div>

                    <div className='adddepartmentmodal1'>
                        <label htmlFor="">Supervisor</label>
                        <div className='adddepartmentmodal2'>
                            <p>Select from Structure</p>
                        </div>
                    </div>

                    <div className='adddepartmentmodal3'>
                        <button onClick={() => props.onHide()}>SAVE</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}




//Filter Modal for pendingOnline payment page
export function PendingOnlineFilterModal(props) {
    const [step, setStep] = useState(0);
    const options1 = [
        { label: "Reverified", value: "India" },
        { label: "N/A", value: "UAE" },
        { label: "Reverification Rejected", value: "India" },
    ];
    const options2 = [
        { label: "Approved", value: "UAE" },
        { label: "Pending", value: "India" },
        { label: "Rejected", value: "India" },
    ];
    const options3 = [
        { label: "Automatic", value: "India" },
        { label: "Manual", value: "UAE" },
    ];
    const options4 = [
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
        { label: "Admission Confirm Status ", value: "India" },
    ];

    const options5 = [
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

    const [selected, setSelected] = useState([]);

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

                        <div className='filter6' onClick={() => props.setModalShow7(true)}>
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
                                    <label htmlFor="">Name</label>
                                    <MultiSelect
                                        options={options5}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Date</label>
                                    <input type="date" />
                                </div>

                                <div className='filter12'>
                                    <label htmlFor="">Order ID</label>
                                    <input type="text" />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Amount</label>
                                    <input type="text" />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Payment Type</label>
                                    <MultiSelect
                                        options={options1}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Status</label>
                                    <MultiSelect
                                        options={options2}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Fee Structure Type</label>
                                    <MultiSelect
                                        options={options3}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>
                                <div className='filter12'>
                                    <label htmlFor="">Admission Confirm Status</label>
                                    <MultiSelect
                                        options={options4}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
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
                                    <p onClick={() => props.setModalShow2(true)}>Add Field</p>
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


export function AddUniversity(props) {
    const { data, edit, fetchdata, onHide } = props;
    const id = data?._id;

    const [universityname, setUniversityName] = useState(data?.UniversityName || '')
    const [registrationcharges, setRegistrationCharges] = useState(data?.RegistrationCharges || '')
    const [TOCcharge, setTOCCharge] = useState(data?.TOCCharge || '')
    const [LECharge, setLECharge] = useState(data?.LECharge || '')
    const [MultipleCharges, setMultipleCharges] = useState(data?.MultipleCharges || '')
    const [RRCharges, setRRCharges] = useState(data?.RRCharges || '')
    const [GapCharges, setGapCharges] = useState(data?.GapCharges || '')
    const [BackPaperCharges, setBackPaperCharges] = useState(data?.BackPaperCharges || '')
    const [Address, setAddress] = useState(data?.Address || '')
    const [Description, setDescription] = useState(data?.Description || '')
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (edit && data) {
            setUniversityName(data?.UniversityName || '');
            setRegistrationCharges(data?.RegistrationCharges || '');
            setTOCCharge(data?.TOCCharge || '');
            setLECharge(data?.LECharge || '');
            setMultipleCharges(data?.MultipleCharges || '');
            setRRCharges(data?.RRCharges || '');
            setGapCharges(data?.GapCharges || '');
            setBackPaperCharges(data?.BackPaperCharges || '');
            setAddress(data?.Address || '');
            setDescription(data?.Description || '');
        } else if (!edit) {
            resetForm();
        }
    }, [edit, data]);

    const resetForm = () => {
        setUniversityName("");
        setRegistrationCharges("");
        setLECharge("");
        setMultipleCharges("");
        setRRCharges("");
        setGapCharges("");
        setBackPaperCharges("");
        setAddress("");
        setDescription("");
    };

    const handleSubmit = async () => {
        if (!universityname || !registrationcharges || !GapCharges) {
            toast.error("Please provide all the fields!");
            return;
        }

        const payload = {
            UniversityName: universityname,
            RegistrationCharges: registrationcharges,
            TOCCharge: TOCcharge,
            LECharge: LECharge,
            MultipleCharges: MultipleCharges,
            RRCharges: RRCharges,
            GapCharges: GapCharges,
            BackPaperCharges: BackPaperCharges,
            Address: Address,
            Description: Description,
        }

        await postApi(endPoints.addUniversity, payload, {
            setLoading,
            successMsg: "University added successfully!",
            errorMsg: "Failed to add university!",
        });
        fetchdata();
        onHide();
        resetForm();
    };


    const handleupdate = async () => {
        const payload = {
            UniversityName: universityname,
            RegistrationCharges: registrationcharges,
            TOCCharge: TOCcharge,
            LECharge: LECharge,
            MultipleCharges: MultipleCharges,
            RRCharges: RRCharges,
            GapCharges: GapCharges,
            BackPaperCharges: BackPaperCharges,
            Address: Address,
            Description: Description,
        }

        await putApi(endPoints.updateUniversity(id), payload, {
            setLoading,
            successMsg: "University updated successfully!",
            errorMsg: "Failed to update university!",
        });
        fetchdata();
        onHide();
        resetForm();
    };


    const closing = () => {
        resetForm();
        onHide();
    };


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className='addUniversityModal7'>
                    {props.edit ? "Edit University/college" : "Create University/college"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div className='addUniversityModal1'>
                    <div className='addUniversityModal2'>
                        <div className='addUniversityModal3'>
                            <label htmlFor="">Name<span>*</span></label>
                            <input type="text"
                                value={universityname}
                                onChange={(e) => setUniversityName(e.target.value)}
                            />
                        </div>
                        <div className='addUniversityModal4'>
                            <div className='addUniversityModal3'>
                                <label htmlFor="">Address</label>
                                <textarea name="" id="" cols="50" rows="3"
                                    value={Address}
                                    onChange={(e) => setAddress(e.target.value)}
                                >

                                </textarea>
                            </div>
                            <div className='addUniversityModal3'>
                                <label htmlFor="">Description</label>
                                <textarea name="" id="" cols="50" rows="3"
                                    value={Description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <div className='addUniversityModal4'>
                            <div className='addUniversityModal5'>
                                <label htmlFor="">Registration Charges<span>*</span></label>
                                <input type="text"
                                    value={registrationcharges}
                                    onChange={(e) => setRegistrationCharges(e.target.value)}
                                />
                            </div>
                            <div className='addUniversityModal5'>
                                <label htmlFor="">RR Charges<span>*</span></label>
                                <input type="text"
                                    value={RRCharges}
                                    onChange={(e) => setRRCharges(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='addUniversityModal4'>
                            <div className='addUniversityModal5'>
                                <label htmlFor="">TOC Charges<span>*</span></label>
                                <input type="text"
                                    value={TOCcharge}
                                    onChange={(e) => setTOCCharge(e.target.value)}
                                />
                            </div>
                            <div className='addUniversityModal5'>
                                <label htmlFor="">Gap Charges<span>*</span></label>
                                <input type="text"
                                    value={GapCharges}
                                    onChange={(e) => setGapCharges(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='addUniversityModal4'>
                            <div className='addUniversityModal5'>
                                <label htmlFor="">LE Charges<span>*</span></label>
                                <input type="text"
                                    value={LECharge}
                                    onChange={(e) => setLECharge(e.target.value)}
                                />
                            </div>
                            <div className='addUniversityModal5'>
                                <label htmlFor="">Back Paper Charges<span>*</span></label>
                                <input type="text"
                                    value={BackPaperCharges}
                                    onChange={(e) => setBackPaperCharges(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='addUniversityModal4'>
                            <div className='addUniversityModal5'>
                                <label htmlFor="">Multiple Charges<span>*</span></label>
                                <input type="text"
                                    value={MultipleCharges}
                                    onChange={(e) => setMultipleCharges(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='addUniversityModal6'>
                        <button onClick={props.edit ? handleupdate : handleSubmit}
                            disabled={loading}>
                            {loading ? "Saving" : "Save"}
                        </button>
                        <button onClick={closing}>Cancel</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}


export function EditUniversity(props) {


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className='addUniversityModal7'>Edit University/college</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div className='addUniversityModal1'>
                    <div className='addUniversityModal2'>
                        <div className='addUniversityModal3'>
                            <label htmlFor="">Name<span>*</span></label>
                            <input type="text" />
                        </div>
                        <div className='addUniversityModal4'>
                            <div className='addUniversityModal3'>
                                <label htmlFor="">Address</label>
                                <textarea name="" id="" cols="50" rows="3"></textarea>
                            </div>
                            <div className='addUniversityModal3'>
                                <label htmlFor="">Description</label>
                                <textarea name="" id="" cols="50" rows="3"></textarea>
                            </div>
                        </div>
                        <div className='addUniversityModal4'>
                            <div className='addUniversityModal5'>
                                <label htmlFor="">Registration Charges<span>*</span></label>
                                <input type="text" />
                            </div>
                            <div className='addUniversityModal5'>
                                <label htmlFor="">RR Charges<span>*</span></label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='addUniversityModal4'>
                            <div className='addUniversityModal5'>
                                <label htmlFor="">TOC Charges<span>*</span></label>
                                <input type="text" />
                            </div>
                            <div className='addUniversityModal5'>
                                <label htmlFor="">Gap Charges<span>*</span></label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='addUniversityModal4'>
                            <div className='addUniversityModal5'>
                                <label htmlFor="">LE Charges<span>*</span></label>
                                <input type="text" />
                            </div>
                            <div className='addUniversityModal5'>
                                <label htmlFor="">Back Paper Charges<span>*</span></label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='addUniversityModal4'>
                            <div className='addUniversityModal5'>
                                <label htmlFor="">Multiple Charges<span>*</span></label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                    <div className='addUniversityModal6'>
                        <button>Save</button>
                        <button >Cancel</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}