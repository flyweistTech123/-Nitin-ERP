import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { IoClose } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";

import img from '../../Img/img80.png'
import img1 from '../../Img/img60.png'
import img2 from '../../Img/img61.png'
import img3 from '../../Img/img62.png'
import img4 from '../../Img/img63.png'
import img5 from '../../Img/img64.png'
import img7 from '../../Img/img71.png'
import img8 from '../../Img/img82.png'
import img9 from '../../Img/img83.png'
import img10 from '../../Img/img84.png'
import img11 from '../../Img/img85.png'
import img12 from '../../Img/img86.png'
import img13 from '../../Img/img87.png'
import img14 from '../../Img/img88.png'
import img15 from '../../Img/img89.png'
import img16 from '../../Img/img90.png'
import img17 from '../../Img/img91.png'
import img18 from '../../Img/img92.png'
import img19 from '../../Img/img93.png'
import img20 from '../../Img/img94.png'
import img21 from '../../Img/img95.png'
import img22 from '../../Img/img96.png'
import img23 from '../../Img/img97.png'

import { GoListUnordered } from "react-icons/go";
import { MdFormatListNumbered } from "react-icons/md";
import { RiDoubleQuotesR } from "react-icons/ri";

const WorkAnniversory = () => {
    const [isActive, setIsActive] = useState(false);

    // Function to toggle the state of the button
    const toggleButton = () => {
        setIsActive(prevState => !prevState);
    };
    return (
        <>
            <Navbar />
            <div className='birthdaywishes'>
                <div className='birthdaywishes1'>
                    <div className='birthdaywishes2'>
                        <div className='birthdaywishes3'>
                            <div className='birthdaywishes4'>
                                <h6>Work Anniversary</h6>
                                <img src={img} alt="" />
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
                                <button>Add Variable</button>
                            </div>

                        </div>
                        <div className='birthdaywishes411'>
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


                        <div className='birthdaywishes9'>
                            <div className='birthdaywishes10'>
                                <p>Employee ID: 12345</p>
                                <p>Employee Name: Loren Epsom (Designation Name)</p>
                                <p>Date: DD/MM/YYY</p>
                            </div>

                            <div className='birthdaywishes11'>
                                <p>Dear [Employee's Name],</p>
                                <p>On this joyous occasion of your birthday, we wanted to take a moment to extend our warmest wishes and heartfelt congratulations to you! Today marks not just another year passing, but also an opportunity for us to express our appreciation for the incredible contributions you make to our team and the company as a whole.</p>
                                <p>Your dedication, hard work, and positive attitude continue to inspire all of us. Your commitment to excellence and willingness to go the extra mile do not go unnoticed. You have played a pivotal role in our success and growth, and for that, we are truly grateful.</p>
                                <p>As you celebrate another year of life, we hope you take some time to reflect on your achievements, both personal and professional. Your enthusiasm and determination set a fantastic example for your colleagues, and we are fortunate to have you as part of our team.</p>
                                <p>May this birthday be a stepping stone to even greater accomplishments and happiness in your life. We wish you continued success, good health, and many wonderful moments with your loved ones.</p>
                                <p>Once again, happy birthday! Enjoy your special day to the fullest!</p>
                                <p>Best wishes,</p>
                            </div>
                        </div>

                        <div className='birthdaywishes13'>
                            <div className='birthdaywishes14'>
                                <p>#Wish you happy Work Anniversary</p>
                            </div>
                        </div>

                        <div className='birthdaywishes15'>
                            <button>Save Wishes</button>
                            <button>Cancel</button>
                        </div>

                    </div>

                    <div className='birthdaywishes16'>
                        <div className='birthdaywishes17'>
                            <div className='birthdaywishes18'>
                                <h6>Upcoming work Anniversary</h6>
                            </div>
                            <div>
                                <div className='birthdaywishes19'>
                                    <p>Today</p>
                                    <div className='birthdaywishes21'>
                                        <div className='birthdaywishes20'>
                                            <img src={img8} alt="" />
                                            <p>Loren Epsom</p>
                                        </div>
                                        <div className='birthdaywishes20'>
                                            <img src={img9} alt="" />
                                            <p>Loren Epsom</p>
                                        </div>
                                        <div className='birthdaywishes20'>
                                            <img src={img10} alt="" />
                                            <p>Loren Epsom</p>
                                        </div>
                                        <div className='birthdaywishes20'>
                                            <img src={img11} alt="" />
                                            <p>Loren Epsom</p>
                                        </div>
                                    </div>

                                </div>
                                <div className='birthdaywishes19'>
                                    <p>Tomorrow</p>
                                    <div className='birthdaywishes21'>
                                        <div className='birthdaywishes20'>
                                            <img src={img12} alt="" />
                                            <p>Loren Epsom</p>
                                        </div>
                                        <div className='birthdaywishes20'>
                                            <img src={img13} alt="" />
                                            <p>Loren Epsom</p>
                                        </div>
                                        <div className='birthdaywishes20'>
                                            <img src={img14} alt="" />
                                            <p>Loren Epsom</p>
                                        </div>
                                        <div className='birthdaywishes20'>
                                            <img src={img15} alt="" />
                                            <p>Loren Epsom</p>
                                        </div>
                                        <div className='birthdaywishes20'>
                                            <img src={img16} alt="" />
                                            <p>Loren Epsom</p>
                                        </div>
                                        <div className='birthdaywishes20'>
                                            <img src={img17} alt="" />
                                            <p>Loren Epsom</p>
                                        </div>
                                    </div>

                                </div>
                                <div className='birthdaywishes19'>
                                    <p>Upcoming Birthdays</p>
                                    <div className='birthdaywishes21'>
                                        <div className='birthdaywishes20'>
                                            <img src={img18} alt="" />
                                            <p>Loren Epsom</p>
                                        </div>
                                        <div className='birthdaywishes20'>
                                            <img src={img19} alt="" />
                                            <p>Loren Epsom</p>
                                        </div>
                                        <div className='birthdaywishes20'>
                                            <img src={img20} alt="" />
                                            <p>Loren Epsom</p>
                                        </div>
                                        <div className='birthdaywishes20'>
                                            <img src={img21} alt="" />
                                            <p>Loren Epsom</p>
                                        </div>
                                        <div className='birthdaywishes20'>
                                            <img src={img22} alt="" />
                                            <p>Loren Epsom</p>
                                        </div>
                                        <div className='birthdaywishes20'>
                                            <img src={img23} alt="" />
                                            <p>Loren Epsom</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkAnniversory