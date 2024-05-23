import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";
import { RiRefreshLine } from "react-icons/ri";
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
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import 'bootstrap/dist/css/bootstrap.min.css';


const Intakeouriersectiontemplate = () => {
    const [isActive, setIsActive] = useState(false);

    // Function to toggle the state of the button
    const toggleButton = () => {
        setIsActive(prevState => !prevState);
    };

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
            <div className='pettyCashTemplate1'>
                <div className='pettyCashTemplate2'>
                    <div className='pettyCashTemplate4'>
                        <div className='pettyCashTemplate3'>
                            <p>Courier Template For Whatsapp ( Interakt)</p>
                        </div>

                        <div className='birthdaywishes5'>
                            <p>Active</p>
                            <div
                                className={`birthdaywishes6 ${isActive ? 'active' : ''}`}
                                onClick={toggleButton} // Handle click to toggle the state
                            >
                                <div className="birthdaywishes7">
                                    <div className="birthdaywishes8">
                                        {isActive ? (
                                            <IoCheckmarkSharp color='#21005D' size={20} />
                                        ) : (
                                            <IoClose color='#21005D' size={20} />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <button>Add Variable</button>
                            </OverlayTrigger>
                        </div>

                    </div>

                    <div className='pettyCashTemplate505'>

                        <div className='pettyCashTemplate5'>
                            <label htmlFor="">SSelect Interakt Template</label>
                            <div className='pettyCashTemplate6'>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                                <div className='template9'>
                                    <button><RiRefreshLine size={20} />Refresh</button>
                                </div>
                            </div>
                        </div>
                        <div className='pettyCashTemplate7'>
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


                        <div className='pettyCashTemplate8'>
                            <p>Dear &#123;&#123; name &#125;&#125;</p>
                            <p>Your Courier or Consignment, with Docket No. &#123;&#123; docket_number &#125;&#125; has been Shipped via &#123;&#123; courier_company &#125;&#125; will Reach you within 10 Working Days.</p>
                            <p>Kindly Contact &#123;&#123; updated_by_user_mob &#125;&#125; if not Received.</p>
                            <p>Thank You<br />MTS INSTITUTE</p>
                        </div>

                        <div className='pettyCashTemplate9'>
                            <button onClick={() => navigate(-1)}>Save Template</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Intakeouriersectiontemplate