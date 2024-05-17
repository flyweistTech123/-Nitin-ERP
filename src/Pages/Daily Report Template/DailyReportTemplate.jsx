import React, { useEffect, useState } from 'react';
import './DailyReportTemplate.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate, Link } from 'react-router-dom';

import {
    FilterModal,
    MYDEALSModal,
    AddFieldModal,
} from '../Modals/Modals.jsx'

import { IoIosArrowDown } from "react-icons/io";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
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




    return (
        <>
            <ITTargetAnalysis
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <FilterModal
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
                    <div className='targetanalysis1' onClick={() => setModalShow(true)}>
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

                        <div className='dailyreportemplate3'>
                            <button>Add Variable</button>
                        </div>
                    </div>
                </div>


                <div className='dailyreportemplate4'>
                    <div className='dailyreportemplate8'>
                        <h6>Values</h6>
                    </div>
                    <div className='dailyreportemplate5'>
                        <div className='dailyreportemplate6'>
                            <p>Lead Receive</p>
                            <div className='dailyreportemplate7'>
                                <MdMoreHoriz color='#444444' size={20} />
                            </div>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>NI-Lead by you</p>
                            <div className='dailyreportemplate7'>
                                <MdMoreHoriz color='#444444' size={20} />
                            </div>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Follow Up Done</p>
                            <div className='dailyreportemplate7'>
                                <MdMoreHoriz color='#444444' size={20} />
                            </div>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>High Priority follow up</p>
                            <div className='dailyreportemplate7'>
                                <MdMoreHoriz color='#444444' size={20} />
                            </div>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Lead to Admission Conversion</p>
                            <div className='dailyreportemplate7'>
                                <MdMoreHoriz color='#444444' size={20} />
                            </div>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Admission Justification</p>
                            <div className='dailyreportemplate7'>
                                <MdMoreHoriz color='#444444' size={20} />
                            </div>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Attendance status</p>
                            <div className='dailyreportemplate7'>
                                <MdMoreHoriz color='#444444' size={20} />
                            </div>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Total follow up taken</p>
                            <div className='dailyreportemplate7'>
                                <MdMoreHoriz color='#444444' size={20} />
                            </div>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Total follow up Closed</p>
                            <div className='dailyreportemplate7'>
                                <MdMoreHoriz color='#444444' size={20} />
                            </div>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>New Follow up created</p>
                            <div className='dailyreportemplate7'>
                                <MdMoreHoriz color='#444444' size={20} />
                            </div>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Admission Done</p>
                            <div className='dailyreportemplate7'>
                                <MdMoreHoriz color='#444444' size={20} />
                            </div>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Incoming call minutes</p>
                            <div className='dailyreportemplate7'>
                                <MdMoreHoriz color='#444444' size={20} />
                            </div>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Outcoming call minutes</p>
                            <div className='dailyreportemplate7'>
                                <MdMoreHoriz color='#444444' size={20} />
                            </div>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Missed Calls</p>
                            <div className='dailyreportemplate7'>
                                <MdMoreHoriz color='#444444' size={20} />
                            </div>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Total Call Duration</p>
                            <div className='dailyreportemplate7'>
                                <MdMoreHoriz color='#444444' size={20} />
                            </div>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Total Rejected Calls</p>
                            <div className='dailyreportemplate7'>
                                <MdMoreHoriz color='#444444' size={20} />
                            </div>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Not Pick up by client</p>
                            <div className='dailyreportemplate7'>
                                <MdMoreHoriz color='#444444' size={20} />
                            </div>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Highest call Duration Minutes & Number</p>
                            <div className='dailyreportemplate7'>
                                <MdMoreHoriz color='#444444' size={20} />
                            </div>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Fresh Leads Remaining</p>
                            <div className='dailyreportemplate7'>
                                <MdMoreHoriz color='#444444' size={20} />
                            </div>
                        </div>
                        <div className='dailyreportemplate6'>
                            <p>Overdue follow-up</p>
                            <div className='dailyreportemplate7'>
                                <MdMoreHoriz color='#444444' size={20} />
                            </div>
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