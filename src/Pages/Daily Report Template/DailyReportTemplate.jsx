import React, { useEffect, useState } from 'react';
import './DailyReportTemplate.css'
import HOC from '../../Components/HOC/HOC'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import {
    ITTargetReportsFilterModal,
    MYDEALSModal,
    AddFieldModal,
} from '../Modals/Modals.jsx'

import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../Img/img60.png'
import img2 from '../../Img/img61.png'
import img3 from '../../Img/img62.png'
import img4 from '../../Img/img63.png'
import img5 from '../../Img/img64.png'
import img7 from '../../Img/img71.png'
import { GoListUnordered } from "react-icons/go";
import { MdFormatListNumbered } from "react-icons/md";
import { RiDoubleQuotesR } from "react-icons/ri";
import { MdMoreHoriz } from "react-icons/md";


const DailyReportTemplate = () => {
    const [faltu, setFaltu] = useState(null);

    const handleFaltu = (index) => {
        setFaltu(index);
    };


    // ITTargetAnalysis Modal 


    const [modalShow, setModalShow] = React.useState(false);
    // Filter Modal 

    const [modalShow11, setModalShow11] = React.useState(false);

    // mydeals Modal
    const [modalShow1, setModalShow1] = React.useState(false);

    // add field Modal
    const [modalShow2, setModalShow2] = React.useState(false);


    function ITTargetAnalysis(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className='MarksheetUploadmodal2' >
                    <Modal.Title className='MarksheetUploadmodal1'>IT Target Analysis</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='ITTargetanalysismodal'>
                        <div className='ITTargetanalysismodal1'>
                            <label htmlFor="">Add Website</label>
                            <input type="text" />
                        </div>

                        <div className='ITTargetanalysismodal2'>
                            <label htmlFor="">Type of records</label>
                            <select name="" id="">
                                <option value="">Select type of records</option>
                                <option value="">Daily</option>
                                <option value="">Weekly</option>
                                <option value="">Monthly</option>
                                <option value="">Yearly</option>
                            </select>
                        </div>

                        <div className='ITTargetanalysismodal3'>
                            <div className='ITTargetanalysismodal4'>
                                <input type="checkbox" />
                                <label htmlFor="">Lorem Ipsum</label>
                            </div>
                            <div className='ITTargetanalysismodal4'>
                                <input type="checkbox" />
                                <label htmlFor="">Lorem Ipsum</label>
                            </div>
                            <div className='ITTargetanalysismodal4'>
                                <input type="checkbox" />
                                <label htmlFor="">Lorem Ipsum</label>
                            </div>
                            <div className='ITTargetanalysismodal4'>
                                <input type="checkbox" />
                                <label htmlFor="">Lorem Ipsum</label>
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




    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>
                <div className='dailyreportemplate11'>
                    <div className='dailyreportemplate12'>
                        <input type="search" placeholder='Search' />
                    </div>

                    <div className='dailyreportemplate13'>
                        <p>Student Name</p>
                        <p>Student Mobile Number</p>
                        <p>Student Email</p>
                        <p>Student Address</p>
                        <p>Student Batch Wise Fees</p>
                        <p>Student Total Fees All Batch</p>
                        <p>Student Admission Date</p>
                        <p>Student Batch Wise Fee Balance</p>
                        <p>Student Total Fee Balance ( All Batches )</p>
                        <p>Student Paid Fees</p>
                        <p>Student Paid Fees Date</p>
                        <p>Courses List</p>
                        <p>Student Courses</p>
                        <p>Student Admission Status</p>
                        <p>Student Next Follow Up Date</p>
                        <p>Student Whatsapp Number</p>
                        <p>Student Father Name</p>
                        <p>Student Admission Number</p>
                        <p>Student DOB</p>
                        <p>Admission Confirmation Status</p>
                        <p>Student Enrollment Number</p>
                        <p>Student University Name</p>
                        <p>Student Responsible Name</p>
                        <p>Student Receipt</p>
                        <p>Student Blood Group</p>
                        <p>Student Religion</p>
                        <p>Student Marital Status</p>
                        <p>Students Nationality</p>
                        <p>Students Social Media Links</p>
                        <p>Student Batches</p>
                        <p>Student Batches Types</p>
                        <p>Student Courses Fee</p>
                        <p>Student Profile Pic</p>
                        <p>Students Address Proof</p>
                        <p>Student ID Proof</p>
                        <p>Student Verification Call Recording</p>
                        <p>Student Re-verification</p>
                        <p>Student Pre-verification Date</p>
                        <p>Student Online Payment Failure Transaction ID</p>
                        <p>Student Online Payment Failure Date</p>
                        <p>Student Refund Request Status</p>
                        <p>Student Refund Request Remarks</p>
                        <p>Student Admission Follow up Status</p>
                        <p>Student Service Follow Up Status</p>
                        <p>Student Backend Follow Up Status</p>
                        <p>Student PDC Follow Up Status</p>
                        <p>Admission Follow Up Date</p>
                        <p>Service</p>
                        <p>Backend</p>
                        <p>PDC</p>
                        <p>Student Absent Record All Batch</p>
                        <p>Student Present Records All Batch</p>
                        <p>Employee Name</p>
                        <p>Employee Email ID</p>
                        <p>Employee Mobile Number</p>
                        <p>Employee Position</p>
                        <p>Employee State</p>
                        <p>Employee Country</p>
                        <p>Employee Social Media Link</p>
                        <p>Employee About Me</p>
                        <p>Employee Past</p>
                        <p>Employee Department</p>
                        <p>Employee ID</p>
                        <p>Employee Profile Pic</p>
                        <p>Service Manager</p>
                        <p>Backend Manager</p>
                        <p>Responsible Person Admission</p>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );


    const popover1 = (
        <Popover id="popover-basic">
            <Popover.Body>
                <div className='dailyreportemplate11'>
                    <div className='dailyreportemplate12'>
                        <input type="search" placeholder='Search' />
                    </div>

                    <div className='dailyreportemplate13'>
                        <p>No default country specified</p>
                        <p>Lorenr</p>
                        <p>Lorenr</p>
                        <p>Lorenr</p>
                        <p>Lorenr</p>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );


    return (
        <>
            <ITTargetAnalysis
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <ITTargetReportsFilterModal
                show={modalShow11}
                onHide={() => setModalShow11(false)}
                setModalShow1={setModalShow1}
                setModalShow2={setModalShow2}
            />
            <MYDEALSModal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
                setModalShow={setModalShow11}
                setModalShow2={setModalShow2}
            />
            <AddFieldModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>Report Template</p>
                </div>

                <div className='targetanalysis2'>
                    <div className='targetanalysis1' onClick={() => setModalShow11(true)}>
                        <p>Filters</p>
                    </div>

                    <div className='admission2'>
                        <div className='cancel1' onClick={() => setModalShow(true)}>
                            <p>Save</p>
                        </div>
                        <div className='targetanalysis' onClick={() => setModalShow(true)}>
                            <p>Edit</p>
                        </div>
                        <div className='cancel3'>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>

                <div className='targetanalysis3'>
                    <div className="targetanalysis4">
                        {["Daily", "Weekly", "Monthly", "Yearly"].map((bank, index) => (
                            <div
                                key={index}
                                className={faltu === index ? "targetanalysis5" : "targetanalysis6"}
                                onClick={() => handleFaltu(index)}
                            >
                                {bank}
                            </div>
                        ))}
                    </div>
                </div>


                <div className='dailyreportemplate'>
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

                    <div className='dailyreportemplate1'>
                        <div className='dailyreportemplate2'>
                            <input type="checkbox" />
                            <p>Active</p>
                        </div>
                        <div className='dailyreportemplate2'>
                            <input type="checkbox" />
                            <p>Non active</p>
                        </div>
                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                            <div className='dailyreportemplate3'>
                                <button>Add Variable</button>
                            </div>
                        </OverlayTrigger>
                    </div>
                </div>


                <div className='dailyreportemplate4'>
                    <div className='dailyreportemplate8'>
                        <h6>Values</h6>
                    </div>
                    <div className='dailyreportemplate5'>
                        <div className='dailyreportemplate6'>
                            <p>Lead Receive</p>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <div className='dailyreportemplate7'>
                                    <MdMoreHoriz color='#444444' size={20} />
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>NI-Lead by you</p>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <div className='dailyreportemplate7'>
                                    <MdMoreHoriz color='#444444' size={20} />
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Follow Up Done</p>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <div className='dailyreportemplate7'>
                                    <MdMoreHoriz color='#444444' size={20} />
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>High Priority follow up</p>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <div className='dailyreportemplate7'>
                                    <MdMoreHoriz color='#444444' size={20} />
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Lead to Admission Conversion</p>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <div className='dailyreportemplate7'>
                                    <MdMoreHoriz color='#444444' size={20} />
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Admission Justification</p>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <div className='dailyreportemplate7'>
                                    <MdMoreHoriz color='#444444' size={20} />
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Attendance status</p>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <div className='dailyreportemplate7'>
                                    <MdMoreHoriz color='#444444' size={20} />
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Total follow up taken</p>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <div className='dailyreportemplate7'>
                                    <MdMoreHoriz color='#444444' size={20} />
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Total follow up Closed</p>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <div className='dailyreportemplate7'>
                                    <MdMoreHoriz color='#444444' size={20} />
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>New Follow up created</p>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <div className='dailyreportemplate7'>
                                    <MdMoreHoriz color='#444444' size={20} />
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Admission Done</p>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <div className='dailyreportemplate7'>
                                    <MdMoreHoriz color='#444444' size={20} />
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Incoming call minutes</p>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <div className='dailyreportemplate7'>
                                    <MdMoreHoriz color='#444444' size={20} />
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Outcoming call minutes</p>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <div className='dailyreportemplate7'>
                                    <MdMoreHoriz color='#444444' size={20} />
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Missed Calls</p>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <div className='dailyreportemplate7'>
                                    <MdMoreHoriz color='#444444' size={20} />
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Total Call Duration</p>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <div className='dailyreportemplate7'>
                                    <MdMoreHoriz color='#444444' size={20} />
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Total Rejected Calls</p>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <div className='dailyreportemplate7'>
                                    <MdMoreHoriz color='#444444' size={20} />
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Not Pick up by client</p>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <div className='dailyreportemplate7'>
                                    <MdMoreHoriz color='#444444' size={20} />
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Highest call Duration Minutes & Number</p>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <div className='dailyreportemplate7'>
                                    <MdMoreHoriz color='#444444' size={20} />
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Fresh Leads Remaining</p>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <div className='dailyreportemplate7'>
                                    <MdMoreHoriz color='#444444' size={20} />
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Overdue follow-up</p>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <div className='dailyreportemplate7'>
                                    <MdMoreHoriz color='#444444' size={20} />
                                </div>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>

                <div className='dailyreportemplate9'>
                    <div className='dailyreportemplate10'>
                        <p>Dear,</p>
                        <p>Variable Selected</p>
                        <p>Employee Name</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HOC(DailyReportTemplate)