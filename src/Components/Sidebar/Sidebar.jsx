import React, { useState } from 'react';
import './Sidebar.css'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


import img from '../../Img/img6.png'
import img1 from '../../Img/img7.png'
import img2 from '../../Img/img16.png'
import img3 from '../../Img/img8.png'
import img4 from '../../Img/img9.png'
import img5 from '../../Img/img10.png'
import img6 from '../../Img/img11.png'
import img7 from '../../Img/img12.png'
import img8 from '../../Img/img13.png'
import img9 from '../../Img/img14.png'
import img10 from '../../Img/img15.png'
import img11 from '../../Img/img17.png'
import img12 from '../../Img/img18.png'
import img13 from '../../Img/img19.png'
import { Link } from 'react-router-dom';




const Sidebar = () => {

    const [expandedMenus, setExpandedMenus] = useState([]);
    const [expandedMenus1, setExpandedMenus1] = useState([]);
    const [expandedMenus2, setExpandedMenus2] = useState([]);
    const [expandedMenus3, setExpandedMenus3] = useState([]);

    const toggleMenu = (index) => {
        const newExpandedMenus = [...expandedMenus];
        if (newExpandedMenus.includes(index)) {
            newExpandedMenus.splice(newExpandedMenus.indexOf(index), 1);
        } else {
            newExpandedMenus.push(index);
        }
        setExpandedMenus(newExpandedMenus);
    };
    const toggleMenu1 = (index) => {
        const newExpandedMenus = [...expandedMenus1];
        if (newExpandedMenus.includes(index)) {
            newExpandedMenus.splice(newExpandedMenus.indexOf(index), 1);
        } else {
            newExpandedMenus.push(index);
        }
        setExpandedMenus1(newExpandedMenus);
    };
    const toggleMenu2 = (index) => {
        const newExpandedMenus = [...expandedMenus2];
        if (newExpandedMenus.includes(index)) {
            newExpandedMenus.splice(newExpandedMenus.indexOf(index), 1);
        } else {
            newExpandedMenus.push(index);
        }
        setExpandedMenus2(newExpandedMenus);
    };
    const toggleMenu3 = (index) => {
        const newExpandedMenus = [...expandedMenus3];
        if (newExpandedMenus.includes(index)) {
            newExpandedMenus.splice(newExpandedMenus.indexOf(index), 1);
        } else {
            newExpandedMenus.push(index);
        }
        setExpandedMenus3(newExpandedMenus);
    };
    return (
        <>
            <div className='sidebar'>

                <div className='sidebar7'>
                    <div className='sidebar1'>
                        <Link to={'/dashboard'} className='link'>
                            <div className='sidebar2'>
                                <img src={img} alt="" />
                                <p>Dashboard</p>
                            </div>
                        </Link>
                        <Link to={'/crm'} className='link'>
                            <div className='sidebar2'>
                                <img src={img1} alt="" />
                                <p>CRM</p>
                            </div>
                        </Link>
                        <div className='sidebar2'>
                            <div className='sidebar3' onClick={() => toggleMenu(0)}>
                                <div className='sidebar4'>
                                    <img src={img2} alt="" />
                                    <p>Section</p>
                                </div>
                                <div>
                                    {expandedMenus.includes(0) ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>

                            </div>
                        </div>
                        {expandedMenus.includes(0) && (
                            <div className='subMenu'>
                                <ul>
                                    <Link to={'/admission'} className='link'>
                                        <li>Admission</li>
                                    </Link>
                                    <Link to={'/backend'} className='link'>
                                        <li>Backend</li>
                                    </Link>
                                    <Link to={'/service'} className='link'>
                                        <li>Service</li>
                                    </Link>

                                    <Link to={'/pendingonlinepayments'} className='link'>
                                        <li>Pending Online Payments</li>
                                    </Link>
                                    <Link to={'/paymentreceived'} className='link'>
                                        <li>Payment Received</li>
                                    </Link>
                                    <Link to={'/refundcancel'} className='link'>
                                        <li>Refund/Cancel</li>
                                    </Link>
                                    <Link to={'/pdc'} className='link'>
                                        <li>PDC Section</li>
                                    </Link>
                                    <Link to={'/examattendancestatus'} className='link'>
                                        <li>Exam Attendance Status</li>
                                    </Link>
                                    <Link to={'/results'} className='link'>
                                        <li>Results</li>
                                    </Link>

                                </ul>
                            </div>
                        )}

                        <div className='sidebar2'>
                            <div className='sidebar3' onClick={() => toggleMenu1(0)}>
                                <div className='sidebar4'>
                                    <img src={img3} alt="" />
                                    <p>Template</p>
                                </div>
                                <div>
                                    {expandedMenus1.includes(0) ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>

                            </div>
                        </div>
                        {expandedMenus1.includes(0) && (
                            <div className='subMenu'>
                                <ul>
                                    <Link to={'/template'} className='link'>
                                        <li>Whatsapp</li>
                                    </Link>
                                    <Link to={'/template'} className='link'>
                                        <li>Telegram</li>
                                    </Link>
                                    <Link to={'/template'} className='link'>
                                        <li>E-mail</li>
                                    </Link>
                                    <Link to={'/template'} className='link'>
                                        <li>SMS</li>
                                    </Link>
                                </ul>
                            </div>
                        )}
                        <div className='sidebar2'>
                            <div className='sidebar3' onClick={() => toggleMenu2(0)}>
                                <div className='sidebar4'>
                                    <img src={img4} alt="" />
                                    <p>Automation Report </p>
                                </div>
                                <div>
                                    {expandedMenus2.includes(0) ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>

                            </div>
                        </div>
                        {expandedMenus2.includes(0) && (
                            <div className='subMenu'>
                                <ul>
                                    <Link to={'/automationlogs'} className='link'>
                                        <li>Whatsapp</li>
                                    </Link>
                                    <Link to={'/automationlogs'} className='link'>
                                        <li>Telegram</li>
                                    </Link>
                                    <Link to={'/automationlogs'} className='link'>
                                        <li>E-mail</li>
                                    </Link>
                                    <Link to={'/automationlogs'} className='link'>
                                        <li>SMS</li>
                                    </Link>
                                </ul>
                            </div>
                        )}

                        <div className='sidebar5'>
                            <Link to={'/automationlogs'} className='link'>
                                <div className='sidebar6'>
                                    <img src={img11} alt="" />
                                    <p>Document</p>
                                </div>
                            </Link>
                            <Link to={'/itreport'} className='link'>
                                <div className='sidebar6'>
                                    <img src={img12} alt="" />
                                    <p>IT Report</p>
                                </div>
                            </Link>
                            <Link to={'/ittargetreport'} className='link'>
                                <div className='sidebar6'>
                                    <img src={img12} alt="" />
                                    <p>IT Target Report</p>
                                </div>
                            </Link>
                            <Link to={'/ittargetanalysis'} className='link'>
                                <div className='sidebar6'>
                                    <img src={img12} alt="" />
                                    <p>IT Target Analysis</p>
                                </div>
                            </Link>
                            <div className='sidebar6'>
                                <img src={img12} alt="" />
                                <p>Daily Report Template</p>
                            </div>
                            <div className='sidebar6'>
                                <img src={img13} alt="" />
                                <p>Call Recording Storage</p>
                            </div>
                            <div className='sidebar6'>
                                <img src={img12} alt="" />
                                <p>IT Reporting Template</p>
                            </div>
                            <Link to={'/salestarget'} className='link'>
                                <div className='sidebar6'>
                                    <img src={img12} alt="" />
                                    <p>Sales Target</p>
                                </div>
                            </Link>
                            <Link to={'/callrecordinganalysis'} className='link'>
                                <div className='sidebar6'>
                                    <img src={img13} alt="" />
                                    <p>Call Recording Analysis</p>
                                </div>
                            </Link>
                        </div>
                        <div className='sidebar2'>
                            <img src={img5} alt="" />
                            <p>Drive</p>
                        </div>
                        <Link to={'/employees'} className='link'>
                            <div className='sidebar2'>
                                <img src={img6} alt="" />
                                <p>Employees</p>
                            </div>
                        </Link>
                        <div className='sidebar2'>
                            <img src={img7} alt="" />
                            <p>Company Structure</p>
                        </div>
                        <div className='sidebar2'>
                            <img src={img8} alt="" />
                            <p>History</p>
                        </div>
                        <div className='sidebar2'>
                            <img src={img9} alt="" />
                            <p>Permission Access</p>
                        </div>
                        <div className='sidebar2'>
                            <div className='sidebar3' onClick={() => toggleMenu3(0)}>
                                <div className='sidebar4'>
                                    <img src={img10} alt="" />
                                    <p>Setting</p>
                                </div>
                                <div>
                                    {expandedMenus3.includes(0) ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>

                            </div>
                        </div>
                        {expandedMenus3.includes(0) && (
                            <div className='subMenu'>
                                <ul>
                                    <Link to={'/university'} className='link'>
                                        <li>University</li>
                                    </Link>
                                    <Link to={'/courses'} className='link'>
                                        <li>Courses</li>
                                    </Link>
                                    <Link to={'/specialization'} className='link'>
                                        <li>Specialization</li>
                                    </Link>
                                    <Link to={'/subject'} className='link'>
                                        <li>Subject</li>
                                    </Link>
                                    <Link to={'/bankaccount'} className='link'>
                                        <li>Bank Account</li>
                                    </Link>
                                    <Link to={'/studymedium'} className='link'>
                                        <li>Study Medium</li>
                                    </Link>
                                    <Link to={'/coursefeeshead'} className='link'>
                                        <li>Course fee structure</li>
                                    </Link>
                                    <Link to={'/autobackup'} className='link'>
                                        <li>Auto Backup</li>
                                    </Link>
                                    <li>Restore Setting</li>
                                    <li>Birthday Wishes</li>
                                    <li>Work Anniversary</li>
                                    <li>Telegram API</li>
                                    <li>Easebuzz API</li>
                                    <li>CC Avenue API</li>
                                    <li>Paytm Gateway</li>
                                    <li>Keka</li>
                                    <li>Wati API</li>
                                    <li>Interakt API</li>
                                    <li>KIT 19</li>
                                    <Link to={'/pdcfollowupStatus'} className='link'>
                                        <li>PDC Follow Up Status</li>
                                    </Link>
                                    <Link to={'/expensetype'} className='link'>
                                        <li>Expense Type</li>
                                    </Link>
                                    <Link to={'/idletime'} className='link'>
                                        <li>Idle Time</li>
                                    </Link>
                                    <Link to={'/pendingdocumentlist'} className='link'>
                                        <li>Pending Document List</li>
                                    </Link>
                                    <li>Final Approval Cash Temp</li>
                                    <Link to={'/couriersection'} className='link'>
                                        <li>Courier Section</li>
                                    </Link>
                                    <li>Pending Docs List Temp</li>
                                    <li>Petty Cash Template</li>
                                    <li>Courier Section Template</li>
                                    <li>Email Template</li>
                                    <li>FONADA API</li>
                                    <li>ERP Settings</li>
                                    <li>Payment Type Mode</li>
                                    <Link to={'/studentrequesttype'} className='link'>
                                        <li>Student Request Type</li>
                                    </Link>
                                    <Link to={'/studentcomplainttype'} className='link'>
                                        <li>Student Complaint Type</li>
                                    </Link>
                                    <li>Callyzer API</li>
                                    <li>Fee Receipt Format</li>
                                    <Link to={'/admissionconfirmstatus'} className='link'>
                                        <li>Admission Confirm Status</li>
                                    </Link>
                                </ul>
                            </div>
                        )}
                        <div className='sidebar2'>
                            <img src={img9} alt="" />
                            <p>Reference Form Data</p>
                        </div>
                        <div className='sidebar2'>
                            <img src={img9} alt="" />
                            <p>Petty Cash</p>
                        </div>
                        <div className='sidebar2'>
                            <img src={img9} alt="" />
                            <p>Expense</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sidebar