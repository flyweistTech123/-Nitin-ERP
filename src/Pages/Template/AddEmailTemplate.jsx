import React from 'react'
import { useNavigate } from 'react-router-dom';
import { PiUserCircleFill } from "react-icons/pi";
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
import { MdOutlineAttachFile } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { IoArrowBackOutline } from "react-icons/io5";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


const AddEmailTemplate = () => {
    const navigate = useNavigate()
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
    return (
        <>
            <div className='emailconatiner'>
                <div className='template41'>
                    <IoArrowBackOutline color='#444444' size={20} onClick={() => navigate('/emailtemplate')} />
                    <div className='zoommetting1'>
                        <h6>EMAIL</h6>
                    </div>
                </div>


                <div className='email'>
                    <div className='email1'>
                        <div className='email2'>
                            <h6>Email</h6>
                            <div className='email12'>
                                <div className='email3'>
                                    <p>Templates :</p>
                                    <select name="" id="">
                                        <option value="">No Templates</option>
                                    </select>
                                </div>
                                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                    <div className='dailyreportemplate3'>
                                        <button>Add Variable</button>
                                    </div>
                                </OverlayTrigger>
                            </div>
                        </div>

                        <div className='email4'>
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
                                <textarea name="" id="" ></textarea>
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
                                <button onClick={() => navigate('/admission')}>Save</button>
                                <button onClick={() => navigate('/admission')}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEmailTemplate