import React from 'react'
import './Email.css'
import { useNavigate } from 'react-router-dom';
import { PiUserCircleFill } from "react-icons/pi";
import img from '../../Img/img59.png'
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



const Email = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='emailconatiner'>
                <div className='zoommetting1'>
                    <h6>EMAIL</h6>
                </div>

                <div className='email'>
                    <div className='email1'>
                        <div className='email2'>
                            <h6>Email</h6>
                            <div className='email3'>
                                <p>Templates :</p>
                                <select name="" id="">
                                    <option value="">No Templates</option>
                                </select>
                            </div>
                        </div>

                        <div className='email4'>
                            <div className='email5'>
                                <p>From:</p>
                                <PiUserCircleFill color='#444444' size={20} />
                            </div>
                            <div className='email6'>
                                <label htmlFor="">To:</label>
                                <input type="text" name="" id="" placeholder='+ Add Recipient'  className='email66161'/>
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
                                <GoListUnordered color='#444444'/>
                                <MdFormatListNumbered color='#444444'/>
                                <RiDoubleQuotesR  color='#444444'/>
                                <img src={img7} alt="" />
                            </div>


                            <div className='email9'>
                                <textarea name="" id="" cols="130" rows="10"></textarea>
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
                                <button onClick={()=>navigate('/admission')}>Create</button>
                                <button onClick={()=>navigate('/admission')}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Email