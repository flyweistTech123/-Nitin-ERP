import React, { useState } from 'react';
import './General.css'
import HOC from '../../Components/HOC/HOC'
import TopPart from '../Toppart/TopPart';
import {Tellaboutyourself} from '../Modals/Modals'


import { GiPlainCircle } from "react-icons/gi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";



import img from '../../Img/img105.png'
import img1 from '../../Img/img106.png'

const General = () => {
    const [show, setshow] = useState(false)
    // const showhandle =()=>{
    //     setshow((prevShow) => !prevShow);
    // }


    // tell about yourself Modal 
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Tellaboutyourself
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className='general'>
                <div className='general1'>
                    <TopPart />
                </div>

                <div className='general2'>
                    <div className='general3'>
                        <div className='general4'>
                            <div className='general5'>
                                <GiPlainCircle color='#40AF0C' size={20} />
                                <p>Online</p>
                            </div>

                            <div className='general6'>
                                <div className='general7'>
                                    <p>ADMINISTRATOR</p>
                                    <MdOutlineKeyboardArrowDown color='#FFFFFF' size={25} />
                                </div>
                                <div className='general8'>
                                    <img src={img} alt="" />
                                </div>
                            </div>

                            <div className='general9'>
                                <div className='general10'>
                                    <FaUser className='general11' />
                                </div>
                            </div>
                            <div className='general12'>
                                <p>Employee ID: 12322</p>
                            </div>
                        </div>


                        <div className='general13'>
                            <div className='general14'>
                                <h6>Additional Information</h6>
                            </div>

                            <div className='general15'>
                                <p>Supervisor</p>
                                <div className='general16'>
                                    <img src={img1} alt="" />
                                    <div className='general17'>
                                        <h6>Loren Epsom</h6>
                                        <p>Sale</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='general13'>
                            <div className='general14'>
                                <h6>About Me</h6>
                            </div>

                            <div className='general19'>
                                <div className='general20'>
                                    <TbReport color='#00AB55' size={25} />
                                </div>
                                <div className='general21'>
                                    <p>Share interesting life's stories or tell other users about
                                        yourself, upload photos of memorable moments</p>
                                    <button onClick={()=>setModalShow(true)}>Tell About Yourself</button>
                                </div>
                            </div>
                        </div>

                        <div className='general13'>
                            <div className='general14'>
                                <h6>Social Media Link</h6>
                            </div>

                            <div className='general23'>
                                <div className='general24'>
                                    <label htmlFor=""><FaFacebook color='#444444' size={20} />  Facebook</label>
                                    <input type="text" placeholder='Paste Link Here' />
                                </div>
                                <div className='general24'>
                                    <label htmlFor=""><RiInstagramFill color='#444444' size={20} />  Instagram</label>
                                    <input type="text" placeholder='Paste Link Here' />
                                </div>
                                <div className='general24'>
                                    <label htmlFor=""><FaLinkedin color='#444444' size={20} />  Linked In</label>
                                    <input type="text" placeholder='Paste Link Here' />
                                </div>
                                <div className='general24'>
                                    <label htmlFor=""><RiWhatsappFill color='#444444' size={20} />  Whatsapp</label>
                                    <input type="text" placeholder='Paste Link Here' />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='general25'>
                        <div className='general26'>
                            <div className='general27'>
                                <h6>Contact Information</h6>
                                <p>Edit</p>
                            </div>

                            <div className='general28'>
                                <div className='general29'>
                                    <p>First Name</p>
                                    <h6>Loren</h6>
                                </div>
                                <div className='general29'>
                                    <p>Last Name</p>
                                    <h6>Epsom</h6>
                                </div>
                                <div className='general29'>
                                    <p>Contact Email</p>
                                    <h6>LorenEpsom@gmail.com</h6>
                                </div>
                                <div className='general29'>
                                    <p>Personal Email</p>
                                    <h6>LorenEpsom@gmail.com</h6>
                                </div>
                                <div className='general29'>
                                    <p>Department</p>
                                    <h6>Loren Epsom</h6>
                                </div>
                                <div className='general29'>
                                    <p>Second Name</p>
                                    <h6>field is empty</h6>
                                </div>
                                <div className='general29'>
                                    <p>Notification Language</p>
                                    <h6>English</h6>
                                </div>
                                <div className='general29'>
                                    <p>Personal Mobile Number</p>
                                    <h6>8956456412</h6>
                                </div>
                                <div className='general29'>
                                    <p>Working Mobile Number</p>
                                    <h6>9784563214</h6>
                                </div>
                                <div className='general29'>
                                    <p>Position</p>
                                    <h6>Loren Epsom</h6>
                                </div>
                                <div className='general29'>
                                    <p>City</p>
                                    <h6>field is empty</h6>
                                </div>
                                <div className='general29'>
                                    <p>State</p>
                                    <h6>field is empty</h6>
                                </div>
                                <div className='general29'>
                                    <p>Coutry</p>
                                    <h6>field is empty</h6>
                                </div>
                            </div>
                        </div>

                        <div className='general30'>
                            <p>Create a field</p>
                        </div>
                        <div className='general13'>
                            <div className='general14'>
                                <h6># Interesting</h6>
                            </div>
                            <div className='general21'>
                                <button onClick={() => setshow(true)}>Add your Interest</button>
                            </div>
                            {show && (
                                <div className='general31'>
                                    <div className='general32'>
                                        <p>#Music</p>
                                    </div>
                                    <div className='general32'>
                                        <p>#Loren</p>
                                    </div>
                                    <div className='general32'>
                                        <p>#Loren</p>

                                    </div>
                                    <div className='general32'>
                                        <p>#Loren</p>
                                    </div>

                                    <div className='general32'>
                                        <p>#Loren</p>
                                    </div>
                                    <div className='general32'>
                                        <p>#Loren</p>
                                    </div>

                                    <div className='general32'>
                                        <p>#Loren</p>
                                    </div>

                                    <div className='general32'>
                                        <p>#Loren</p>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(General)