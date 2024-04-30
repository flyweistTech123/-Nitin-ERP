import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { IoMdSearch } from "react-icons/io";
import img1 from '../../Img/img4.png'
import img2 from '../../Img/img5.png'
import img3 from '../../Img/img48.png'
import img4 from '../../Img/img49.png'
import img5 from '../../Img/img50.png'
import img6 from '../../Img/img51.png'
import img7 from '../../Img/img52.png'
import img8 from '../../Img/img53.png'
import img9 from '../../Img/img54.png'
import img10 from '../../Img/img55.png'
import img11 from '../../Img/img56.png'
import img12 from '../../Img/img57.png'
import img13 from '../../Img/img58.png'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { Link, useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { LuHistory } from "react-icons/lu";
import { FaUserAlt } from "react-icons/fa";
import { BsFilterLeft } from "react-icons/bs";

import Offcanvas from 'react-bootstrap/Offcanvas';




// Offcanvas


import img14 from '../../Img/img6.png'
import img15 from '../../Img/img7.png'
import img16 from '../../Img/img16.png'
import img17 from '../../Img/img8.png'
import img18 from '../../Img/img9.png'
import img19 from '../../Img/img10.png'
import img20 from '../../Img/img11.png'
import img21 from '../../Img/img12.png'
import img22 from '../../Img/img13.png'
import img23 from '../../Img/img14.png'
import img24 from '../../Img/img15.png'
import img25 from '../../Img/img17.png'
import img26 from '../../Img/img18.png'
import img27 from '../../Img/img19.png'
import { IoIosCloseCircle } from "react-icons/io";



const Navbar = () => {
    const [step, setStep] = useState(0);

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


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // profile Modal


    const [modalShow, setModalShow] = React.useState(false);
    const navigate = useNavigate()



    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      // Update the state based on screen size on component mount
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 768); // Example breakpoint (adjust as needed)
      };
  
      // Initial check
      handleResize();
  
      // Listen for window resize events
      window.addEventListener('resize', handleResize);
  
      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const handleClick = () => {
      if (isSmallScreen) {
        handleShow1(); // Call handleShow if screen is small
      } else {
        setModalShow(true); // Otherwise, setModalShow(true)
      }
    };



    function ProfileModal(props) {
        const [step, setStep] = useState(0);


        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                // centered
                // style={{ position: "absolute", top: "9%", right: "10%", transform: "translateX(30%)" }}
                className="custom-modal122"
            >
                <Modal.Body>
                    <div className='profileModal'>
                        <div className='profileModal1'>
                            <div className='profileModal111'>
                                <div className='profileModal2'>
                                    <div className='profileModal3'>
                                        <FaUser color='#FFFFFF' />
                                    </div>
                                    <div className='profileModal4'>
                                        <h6>Loren Epsom</h6>
                                        <p>Designation</p>
                                    </div>
                                </div>

                                <div className='profileModal5'>
                                    <p>See Profile</p>
                                </div>
                            </div>

                        </div>

                        <div className='profileModal1'>
                            <div className='profileModal6' onClick={() => navigate('/loginhistory')}>
                                <LuHistory color='#444444' size={30} />
                                <h6>Login History</h6>
                            </div>
                        </div>

                        <div className='profileModal1'>
                            <div className='profileModal6' onClick={() => navigate('/attendee')}>
                                <img src={img3} alt="" />
                                <h6>Attendees</h6>
                            </div>
                        </div>
                        <div className='profileModal1'>
                            <div className='profileModal6'>
                                <img src={img4} alt="" />
                                <h6>Notification</h6>
                            </div>
                        </div>
                        <div className='profileModal1'>
                            <div className='profileModal6'>
                                <img src={img5} alt="" />
                                <div className='profileModal7'>
                                    <button>Task</button>
                                    <div className='profileModal8'>
                                        <h6 style={{ color: '#FFB800' }}>Pending  04</h6>
                                        <h6 style={{ color: '#40AF0C' }}>Resolved  14</h6>
                                        <h6 style={{ color: '#FF0000' }}>Rejected  20</h6>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='profileModal9'>
                            <div className={step === 0 ? "profileModal20" : "profileModal22"} onClick={() => setStep(0)}>
                                <div className='profileModal21'>
                                    <img src={img6} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                            <div className={step === 1 ? "profileModal20" : "profileModal22"} onClick={() => setStep(1)}>
                                <div className='profileModal21'>
                                    <img src={img7} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                            <div className={step === 2 ? "profileModal20" : "profileModal22"} onClick={() => setStep(2)}>
                                <div className='profileModal21'>
                                    <img src={img8} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                            <div className={step === 3 ? "profileModal20" : "profileModal22"} onClick={() => setStep(3)}>
                                <div className='profileModal21'>
                                    <img src={img9} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                            <div className={step === 4 ? "profileModal20" : "profileModal22"} onClick={() => setStep(4)}>
                                <div className='profileModal21'>
                                    <img src={img10} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                            <div className={step === 5 ? "profileModal20" : "profileModal22"} onClick={() => setStep(5)}>
                                <div className='profileModal21'>
                                    <img src={img11} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                            <div className={step === 6 ? "profileModal20" : "profileModal22"} onClick={() => setStep(6)}>
                                <div className='profileModal21'>
                                    <img src={img12} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                            <div className={step === 7 ? "profileModal20" : "profileModal22"} onClick={() => setStep(7)}>
                                <div className='profileModal21'>
                                    <img src={img13} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                        </div>

                        <div className='profileModal23'>
                            <p>Load More</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }




    // search Modal


    const [modalShow1, setModalShow1] = React.useState(false);



    function SearcheModal(props) {
        const [step, setStep] = useState(0);


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className='searchModal'>
                        <div className='searchModal1'>
                            <h6>Employees</h6>
                            <IoIosCloseCircle color='#OOOOOO' size={25} onClick={() => setModalShow1(false)} />
                        </div>

                        <div className='searchModal2'>
                            <div className='searchModal3' color='#444444' size='20'>
                                <FaUserAlt />
                            </div>
                            <p>Loren Epsom</p>
                        </div>

                        <div className='searchModal4'>
                            <h6>CRM: contact</h6>
                        </div>
                        <div className='searchModal5'>
                            <div className='searchModal6'>
                                <p>Loren Epsom</p>
                            </div>
                            <div className='searchModal6'>
                                <p>Loren Epsom</p>
                            </div>
                            <div className='searchModal6'>
                                <p>Loren Epsom</p>
                            </div>
                            <div className='searchModal6'>
                                <p>Loren Epsom</p>
                            </div>
                            <div className='searchModal6'>
                                <p>Loren Epsom</p>
                            </div>
                            <div className='searchModal6'>
                                <p>Loren Epsom</p>
                            </div>
                            <div className='searchModal6'>
                                <p>Loren Epsom</p>
                            </div>
                            <div className='searchModal6'>
                                <p>Loren Epsom</p>
                            </div>
                            <div className='searchModal6'>
                                <p>Loren Epsom</p>
                            </div>
                        </div>
                        <div className='searchModal9'>
                            <p>More</p>
                        </div>
                        <div className='searchModal4'>
                            <h6>CRM: leads</h6>
                        </div>
                        <div className='searchModal5'>
                            <div className='searchModal6'>
                                <p>Loren Epsom</p>
                            </div>
                        </div>
                        <div className='searchModal4'>
                            <h6>Search</h6>
                        </div>

                        <div className='searchModal7'>
                            <div className='searchModal8'>
                                <p>Lead</p>
                            </div>
                            <div className='searchModal8'>
                                <p>Deals</p>
                            </div>
                            <div className='searchModal8'>
                                <p>Contact</p>
                            </div>
                            <div className='searchModal8'>
                                <p>My Activities</p>
                            </div>
                            <div className='searchModal8'>
                                <p>Task</p>
                            </div>
                            <div className='searchModal8'>
                                <p>Calender</p>
                            </div>
                            <div className='searchModal8'>
                                <p>Feed</p>
                            </div>
                            <div className='searchModal8'>
                                <p>Workflow</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }







    return (
        <>

            <ProfileModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <SearcheModal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <div class='navbar'>
                <div class='navbar-left'>
                    <div class='logo' onClick={() => navigate('/dashboard')}>
                        <p>Logo</p>
                    </div>
                </div>
                <div class='navbar-center'>
                    <div class='search' onClick={() => setModalShow1(true)}>
                        <div class='search-icon'>
                            <IoMdSearch color='#3F3F3F' size={20} />
                        </div>
                        <input type="search" placeholder='Search' />
                    </div>
                </div>
                <div class='navbar-right'>
                    <div className='navbar101' onClick={handleShow}>
                        <BsFilterLeft color='#000000' size={35} />
                    </div>
                    <div className='navbar102'>
                        <div class='navbar2'>
                            <button>Payment</button>
                        </div>
                        <div class='profile-img1'>
                            <img src={img1} alt="" />
                        </div>
                        <div class='profile-img' onClick={handleClick}>
                            <img src={img2} alt="" />
                        </div>
                    </div>

                </div>
            </div>



            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu Bar</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='sidebar'>
                        <div className='sidebar7'>
                            <div className='sidebar1'>
                                <Link to={'/dashboard'} className='link'>
                                    <div className='sidebar2'>
                                        <img src={img14} alt="" />
                                        <p>Dashboard</p>
                                    </div>
                                </Link>
                                <Link to={'/crm'} className='link'>
                                    <div className='sidebar2'>
                                        <img src={img15} alt="" />
                                        <p>CRM</p>
                                    </div>
                                </Link>
                                <div className='sidebar2'>
                                    <div className='sidebar3' onClick={() => toggleMenu(0)}>
                                        <div className='sidebar4'>
                                            <img src={img16} alt="" />
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
                                            <img src={img25} alt="" />
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
                                            <img src={img18} alt="" />
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
                                    <Link to={'/documents'} className='link'>
                                        <div className='sidebar6'>
                                            <img src={img25} alt="" />
                                            <p>Document</p>
                                        </div>
                                    </Link>
                                    <Link to={'/itreport'} className='link'>
                                        <div className='sidebar6'>
                                            <img src={img26} alt="" />
                                            <p>IT Report</p>
                                        </div>
                                    </Link>
                                    <Link to={'/ittargetreport'} className='link'>
                                        <div className='sidebar6'>
                                            <img src={img26} alt="" />
                                            <p>IT Target Report</p>
                                        </div>
                                    </Link>
                                    <Link to={'/ittargetanalysis'} className='link'>
                                        <div className='sidebar6'>
                                            <img src={img26} alt="" />
                                            <p>IT Target Analysis</p>
                                        </div>
                                    </Link>
                                    <Link to={'/dailyReporttemplate'} className='link'>
                                        <div className='sidebar6'>
                                            <img src={img26} alt="" />
                                            <p>Daily Report Template</p>
                                        </div>
                                    </Link>
                                    <Link to={'/callrecordingstorage'} className='link'>
                                        <div className='sidebar6'>
                                            <img src={img27} alt="" />
                                            <p>Call Recording Storage</p>
                                        </div>
                                    </Link>
                                    <Link to={'/itreportingtemplate'} className='link'>
                                        <div className='sidebar6'>
                                            <img src={img26} alt="" />
                                            <p>IT Reporting Template</p>
                                        </div>
                                    </Link>
                                    <Link to={'/salestarget'} className='link'>
                                        <div className='sidebar6'>
                                            <img src={img26} alt="" />
                                            <p>Sales Target</p>
                                        </div>
                                    </Link>
                                    <Link to={'/callrecordinganalysis'} className='link'>
                                        <div className='sidebar6'>
                                            <img src={img27} alt="" />
                                            <p>Call Recording Analysis</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className='sidebar2'>
                                    <img src={img19} alt="" />
                                    <p>Drive</p>
                                </div>
                                <Link to={'/employees'} className='link'>
                                    <div className='sidebar2'>
                                        <img src={img20} alt="" />
                                        <p>Employees</p>
                                    </div>
                                </Link>
                                <Link to={'/companystructure'} className='link'>
                                    <div className='sidebar2'>
                                        <img src={img21} alt="" />
                                        <p>Company Structure</p>
                                    </div>
                                </Link>
                                <div className='sidebar2'>
                                    <img src={img22} alt="" />
                                    <p>History</p>
                                </div>
                                <Link to={'/permissionaccess'} className='link'>
                                    <div className='sidebar2'>
                                        <img src={img23} alt="" />
                                        <p>Permission Access</p>
                                    </div>
                                </Link>
                                <div className='sidebar2'>
                                    <div className='sidebar3' onClick={() => toggleMenu3(0)}>
                                        <div className='sidebar4'>
                                            <img src={img24} alt="" />
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
                                            <Link to={'/coursefeesstructure'} className='link'>
                                                <li>Course fee structure</li>
                                            </Link>
                                            <Link to={'/autobackup'} className='link'>
                                                <li>Auto Backup</li>
                                            </Link>
                                            <li>Restore Setting</li>
                                            <Link to={'/birthdaywishes'} className='link'>
                                                <li>Birthday Wishes</li>
                                            </Link>
                                            <Link to={'/workanniversory'} className='link'>
                                                <li>Work Anniversary</li>
                                            </Link>
                                            <Link to={'/telegramAPI'} className='link'>
                                                <li>Telegram API</li>
                                            </Link>
                                            <Link to={'/easebuzzAPI'} className='link'>
                                                <li>Easebuzz API</li>
                                            </Link>
                                            <Link to={'/ccavenueAPI'} className='link'>
                                                <li>CC Avenue API</li>
                                            </Link>
                                            <Link to={'/paytmgateway'} className='link'>
                                                <li>Paytm Gateway</li>
                                            </Link>
                                            <Link to={'/keka'} className='link'>
                                                <li>Keka</li>
                                            </Link>
                                            <Link to={'/watiApi'} className='link'>
                                                <li>Wati API</li>
                                            </Link>
                                            <Link to={'/interktAPI'} className='link'>
                                                <li>Interakt API</li>
                                            </Link>
                                            <Link to={'/kit19'} className='link'>
                                                <li>KIT 19</li>
                                            </Link>
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
                                            <Link to={'/pendingdocumentLlisttemplate'} className='link'>
                                                <li>Pending Docs List Temp</li>
                                            </Link>
                                            <Link to={'/pettycashtemplate'} className='link'>
                                                <li>Petty Cash Template</li>
                                            </Link>
                                            <Link to={'/couriersectiontemplate'} className='link'>
                                                <li>Courier Section Template</li>
                                            </Link>
                                            <Link to={'/settingemailtemplate'} className='link'>
                                                <li>Email Template</li>
                                            </Link>
                                            <Link to={'/fonadaapi'} className='link'>
                                                <li>FONADA API</li>
                                            </Link>
                                            <Link to={'/erpaettings'} className='link'>
                                                <li>ERP Settings</li>
                                            </Link>
                                            <Link to={'/paymenttypemode'} className='link'>
                                                <li>Payment Type Mode</li>
                                            </Link>
                                            <Link to={'/studentrequesttype'} className='link'>
                                                <li>Student Request Type</li>
                                            </Link>
                                            <Link to={'/studentcomplainttype'} className='link'>
                                                <li>Student Complaint Type</li>
                                            </Link>
                                            <Link to={'/callyzerapi'} className='link'>
                                                <li>Callyzer API</li>
                                            </Link>
                                            <Link to={'/feereceiptformat'} className='link'>
                                                <li>Fee Receipt Format</li>
                                            </Link>
                                            <Link to={'/admissionconfirmstatus'} className='link'>
                                                <li>Admission Confirm Status</li>
                                            </Link>
                                        </ul>
                                    </div>
                                )}
                                <Link to={'/referenceformdata'} className='link'>
                                    <div className='sidebar2'>
                                        <img src={img23} alt="" />
                                        <p>Reference Form Data</p>
                                    </div>
                                </Link>
                                <Link to={'/pettycashpayment'} className='link'>
                                    <div className='sidebar2'>
                                        <img src={img23} alt="" />
                                        <p>Petty Cash</p>
                                    </div>
                                </Link>
                                <Link to={'/expense'} className='link'>
                                    <div className='sidebar2'>
                                        <img src={img23} alt="" />
                                        <p>Expense</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </Offcanvas.Body>
            </Offcanvas>







            <Offcanvas show={show1}  placement="end" onHide={handleClose1} style={{ width: "100%"}}>
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body Admissionfollowup101>
                    <div className='profileModal'>
                        <div className='profileModal1'>
                            <div className='profileModal111'>
                                <div className='profileModal2'>
                                    <div className='profileModal3'>
                                        <FaUser color='#FFFFFF' />
                                    </div>
                                    <div className='profileModal4'>
                                        <h6>Loren Epsom</h6>
                                        <p>Designation</p>
                                    </div>
                                </div>

                                <div className='profileModal5'>
                                    <p>See Profile</p>
                                </div>
                            </div>

                        </div>

                        <div className='profileModal1'>
                            <div className='profileModal6' onClick={() => navigate('/loginhistory')}>
                                <LuHistory color='#444444' size={30} />
                                <h6>Login History</h6>
                            </div>
                        </div>

                        <div className='profileModal1'>
                            <div className='profileModal6' onClick={() => navigate('/attendee')}>
                                <img src={img3} alt="" />
                                <h6>Attendees</h6>
                            </div>
                        </div>
                        <div className='profileModal1'>
                            <div className='profileModal6'>
                                <img src={img4} alt="" />
                                <h6>Notification</h6>
                            </div>
                        </div>
                        <div className='profileModal1'>
                            <div className='profileModal6666'>
                                <img src={img5} alt="" />
                                <div className='profileModal7'>
                                    <button>Task</button>
                                    <div className='profileModal8'>
                                        <h6 style={{ color: '#FFB800' }}>Pending  04</h6>
                                        <h6 style={{ color: '#40AF0C' }}>Resolved  14</h6>
                                        <h6 style={{ color: '#FF0000' }}>Rejected  20</h6>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='profileModal9'>
                            <div className={step === 0 ? "profileModal20" : "profileModal22"} onClick={() => setStep(0)}>
                                <div className='profileModal21'>
                                    <img src={img6} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                            <div className={step === 1 ? "profileModal20" : "profileModal22"} onClick={() => setStep(1)}>
                                <div className='profileModal21'>
                                    <img src={img7} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                            <div className={step === 2 ? "profileModal20" : "profileModal22"} onClick={() => setStep(2)}>
                                <div className='profileModal21'>
                                    <img src={img8} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                            <div className={step === 3 ? "profileModal20" : "profileModal22"} onClick={() => setStep(3)}>
                                <div className='profileModal21'>
                                    <img src={img9} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                            <div className={step === 4 ? "profileModal20" : "profileModal22"} onClick={() => setStep(4)}>
                                <div className='profileModal21'>
                                    <img src={img10} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                            <div className={step === 5 ? "profileModal20" : "profileModal22"} onClick={() => setStep(5)}>
                                <div className='profileModal21'>
                                    <img src={img11} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                            <div className={step === 6 ? "profileModal20" : "profileModal22"} onClick={() => setStep(6)}>
                                <div className='profileModal21'>
                                    <img src={img12} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                            <div className={step === 7 ? "profileModal20" : "profileModal22"} onClick={() => setStep(7)}>
                                <div className='profileModal21'>
                                    <img src={img13} alt="" />
                                </div>
                                <p>Set Theme</p>
                            </div>
                        </div>

                        <div className='profileModal23'>
                            <p>Load More</p>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Navbar