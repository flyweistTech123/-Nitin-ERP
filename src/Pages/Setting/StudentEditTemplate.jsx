import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

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

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentEditTemplate = () => {
    const navigate = useNavigate();

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
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );
    return (
        <>
            <div className='studentedittemplate'>
                <div className='studentedittemplate1'>
                    <FaArrowLeft onClick={() => navigate(-1)} />
                    <h6>Edit Template</h6>
                </div>
                <div className='studentedittemplate2'>
                    <input type="checkbox" />
                    <p>Active</p>
                </div>
                <div className='studentedittemplate3'>
                    <div className='studentedittemplate4'>
                        <div className='studentedittemplate5'>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <button>Add Variable</button>
                            </OverlayTrigger>
                        </div>
                        <div className='studentedittemplate6'>
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
                        </div>

                        <div className='studentedittemplate7'>
                            <p>Hello! We would like to thank you for your inquiry regarding the B.Com course. You can find out all the details about the course in this email.</p>
                            <p>Course Name: B.Com (Bachelors of Commerce)</p>
                            <p>Approved by: UGC/DEB/AICTE</p>
                            <p>Duration: 3 Years # SENDER.NAME #LEAD.NAME </p>
                            <p>Mode of Admission: Online</p>
                            <p>Eligibility: 12th Pass</p>
                            <p>Suitable For: Students/Working Professionals.</p>
                            <p>Age Criteria: No Age Criteria</p>
                            <p>Fees: Depends on University selection.</p>
                            <p>Books & Study: E Books & Online.</p>
                            <p>Mode of Examination: Online & Offline.</p>
                            <p>Rate of Passing: 99%</p>
                            <div className='studentedittemplate8'>
                                <p>Please note that the above information is for students who are seeking admission to Distance BCom Courses. For other courses the details may differ from one to another.</p>
                                <p>Also this information might not be sufficient for you, there can be more doubts and questions you want to ask, for this you can interact with our educational counsellors who are available for guidance. You can call us on .</p>
                                <p>For the course details we have an article presented for you , have a look at it -) BCom Distance Education.</p>
                            </div>

                            <div className='studentedittemplate9'>
                                <p>Thank You</p>
                                <p>Sales</p>
                                <p>dhirajrajput022@gmail.com</p>
                                <p>dhiraj rajput</p>
                            </div>
                        </div>

                        <div className='studentedittemplate10'>
                            <div className='studentedittemplate11'>
                                <MdOutlineAttachFile color='#444444' />
                                <p>File</p>
                            </div>
                            <div className='studentedittemplate11'>
                                <GrDocumentText color='#444444' />
                                <p>New Document</p>
                            </div>
                        </div>
                        <div className='zoommetting11'>
                            <button onClick={() => navigate(-1)}>Save</button>
                            <button onClick={() => navigate(-1)}>Cancel</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentEditTemplate