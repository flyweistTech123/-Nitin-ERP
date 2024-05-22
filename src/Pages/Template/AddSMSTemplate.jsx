import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdClose } from "react-icons/io";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { RiCheckboxCircleFill } from "react-icons/ri";

import img from '../../Img/img112.png'

const AddSMSTemplate = () => {

    const popover = (
        <Popover id="popover-basic">
            <Popover.Body className='template40'>
                <div className='template38'>
                    <div className='template39'>
                        <p>First Name</p>
                        <p>Last Name</p>
                        <p>Email ID</p>
                        <p>ID</p>
                        <p>Admission No.</p>
                        <p>Course</p>
                        <p>Specialization</p>
                        <p>Birth Date</p>
                        <p>Contact No.</p>
                        <p>Whatsapp No.</p>
                        <p>Blood Group</p>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );
    const navigate = useNavigate()
    return (
        <>
            <div className='template20'>
                <div className='template41'>
                    <IoArrowBackOutline color='#2155CD' size={20}  onClick={()=>navigate('/telegramtemplate')}/>
                    <p>BACK</p>
                </div>

                <div className='template42'>
                    <div className='template31'>
                        <div className='template32'>
                            <input type="checkbox" />
                            <label htmlFor="">Active</label>
                        </div>
                        <div className='template32'>
                            <input type="checkbox" />
                            <label htmlFor="">Selected for everyone</label>
                        </div>
                        <div className='template32'>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" className="template33">
                                    <label htmlFor="">Selected User</label>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <div className='template34'>
                                        <p>Select User</p>
                                    </div>
                                    <Dropdown.Item>
                                        <div className='template35'>
                                            <input type="checkbox" />
                                            <p>Loren Epson</p>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <div className='template35'>
                                            <input type="checkbox" />
                                            <p>Loren Epson</p>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <div className='template35'>
                                            <input type="checkbox" />
                                            <p>Loren Epson</p>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <div className='template35'>
                                            <input type="checkbox" />
                                            <p>Loren Epson</p>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>
                        <div className='template32'>
                            <Dropdown>
                                <Dropdown.Toggle variant="none" className="template33">
                                    <label htmlFor="">Selected Department</label>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <div className='template34'>
                                        <p>Select Department</p>
                                    </div>
                                    <Dropdown.Item>
                                        <div className='template35'>
                                            <input type="checkbox" />
                                            <p>Marketing</p>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <div className='template35'>
                                            <input type="checkbox" />
                                            <p>Lead</p>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <div className='template35'>
                                            <input type="checkbox" />
                                            <p>Backend</p>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <div className='template35'>
                                            <input type="checkbox" />
                                            <p>Service</p>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <div className='template35'>
                                            <input type="checkbox" />
                                            <p>Admission</p>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>
                    </div>
                </div>


                <div className='template43'>
                    <div className='template44'>
                        <img src={img} alt="" />
                    </div>

                    <div className='template45'>
                        <h5>Talk to your customer via SMS</h5>
                        <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra</p>

                        <div className='template46'>
                            <div className='template47'>
                                <RiCheckboxCircleFill color='#00E376' size={20} />
                                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className='template47'>
                                <RiCheckboxCircleFill color='#00E376' size={20} />
                                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className='template47'>
                                <RiCheckboxCircleFill color='#00E376' size={20} />
                                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className='template47'>
                                <RiCheckboxCircleFill color='#00E376' size={20} />
                                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>

                        <p style={{marginTop:"30px"}}>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra</p>


                        <div className='template48'>
                            <button onClick={()=>navigate('/connectsmstemplate')}>Connect</button>
                        </div>
                    </div>



                </div>

            </div>
        </>
    )
}

export default AddSMSTemplate