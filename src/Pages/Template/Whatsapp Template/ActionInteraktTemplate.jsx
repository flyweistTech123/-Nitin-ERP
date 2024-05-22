import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdClose } from "react-icons/io";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const ActionInteraktTemplate = () => {

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
                <div className='template30'>
                    <div className='template21'>
                        <IoArrowBackOutline size={25} onClick={() => navigate('/interakttemplate')} />
                        <h6>Interakt Template</h6>
                    </div>

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


                <div className='template22'>
                    <div className='template23'>
                        <label htmlFor="">Template Name</label>
                        <input type="text" placeholder='1st_reminder_pdc' />
                    </div>
                    <div className='template23'>
                        <label htmlFor="">Category</label>
                        <input type="text" placeholder='UTILITY' />
                    </div>
                    <div className='template23'>
                        <label htmlFor="">Language</label>
                        <input type="text" placeholder='English (UK)' />
                    </div>
                </div>

                <div className='template24'>
                    <div className='template25'>
                        <label htmlFor="">Header</label>
                        <input type="text" placeholder='1st_reminder_pdc' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='Fee Remainder' />
                    </div>
                </div>

                <div className='template24'>
                    <div className='template23'>
                        <label htmlFor="">Body</label>
                        <div className='template26'>
                            <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                            <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                            <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                            <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                        </div>
                    </div>
                </div>



                <div className='template24'>
                    <div className='template25'>
                        <label htmlFor="">Call_to_action</label>
                        <input type="text" placeholder='1st_reminder_pdc' />
                    </div>
                    <div className='template27'>
                        <div className='template25'>
                            <input type="text" placeholder='Call_phone' />
                        </div>
                        <div className='template25'>
                            <input type="text" placeholder='Call_us' />
                        </div>
                        <div className='template25'>
                            <input type="text" placeholder='+91 8897989780' />
                        </div>
                    </div>
                    <div className='template27'>
                        <div className='template25'>
                            <input type="text" placeholder='Visit Website' />
                        </div>
                        <div className='template28'>
                            <input type="text" placeholder='Visit Website' />
                        </div>
                    </div>
                    <div className='template27'>
                        <div className='template25'>
                            <input type="text" placeholder='Dynamic' />
                        </div>
                        <div className='template28'>
                            <input type="text" placeholder='Visit Website' />
                        </div>
                    </div>
                </div>

                <div className='template22'>
                    <div className='template23'>
                        <label htmlFor="">Variables as per WATI</label>
                        <input type="text" placeholder='Name' />
                    </div>
                    <div className='template23'>
                        <label htmlFor="">Variables as per our ERP</label>
                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                            <div className='template36'>
                                <div className='template37'>
                                    <p>First Name</p>
                                    <IoMdClose color='#FFFFFF' />
                                </div>
                            </div>
                        </OverlayTrigger>

                    </div>
                    <div className='template23'>
                        <label htmlFor="">Sample</label>
                        <input type="text" placeholder='Loren Epsom' />
                    </div>

                    <div className='template23'>
                        <input type="text" placeholder='Bankname' />
                    </div>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                        <div className='template23'>
                            <input type="text" placeholder='Map Variable' />
                        </div>
                    </OverlayTrigger>
                    <div className='template23'>
                        <input type="text" placeholder='ICICI' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='Account Number' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='003105028955' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='IFSC' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='Noida' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='Branch' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='UPI' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='Batch' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='Amount' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='Course' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder=' ' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='ID' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='' />
                    </div>
                    <div className='template23'>
                        <input type="text" placeholder='' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActionInteraktTemplate