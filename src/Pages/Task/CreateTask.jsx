import React from 'react'
import HOC from '../../Components/HOC/HOC'
import { IoSettingsOutline } from "react-icons/io5";
import { IoAttach } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { RiDoubleQuotesL } from "react-icons/ri";
import { VscMention } from "react-icons/vsc";
import { MdOutlineClose } from "react-icons/md";

import { useNavigate } from 'react-router-dom';



const CreateTask = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='createtask10'>
                <div className='createtask11'>
                    <h6>New Task</h6>
                    <div className='createtask12'>
                        <IoSettingsOutline color='#444444' size={20} />
                        <select name="" id="">
                            <option value="">Add Template</option>
                        </select>
                    </div>
                </div>

                <div className='createtask13'>
                    <div className='createtask14'>
                        <h6>Enter Task Name</h6>
                    </div>

                    <div className='createtask15'>
                        <textarea name="" id="" rows={10}></textarea>
                    </div>

                    <div className='tellmeaboutmodal5'>
                        <div className='tellmeaboutmodal6'>
                            <IoAttach color='#444444' />
                            <p>File</p>
                        </div>
                        <div className='tellmeaboutmodal6'>
                            <GrDocumentText color='#444444' />
                            <p>Create Document</p>
                        </div>
                        <div className='tellmeaboutmodal6'>
                            <VscMention color='#444444' />
                            <p>Mention</p>
                        </div>
                        <div className='tellmeaboutmodal6'>
                            <RiDoubleQuotesL color='#444444' />
                            <p>Quote</p>
                        </div>
                    </div>


                    <div className='createtask16'>
                        <div className='createtask17'>
                            <label htmlFor="">Responsible Person</label>
                            <div className='createtask18'>
                                <div className='createtask19'>
                                    <p>Loren Epsom</p>
                                    <MdOutlineClose color='#FFFFFF' size={20} />
                                </div>

                                <div className='createtask20'>
                                    <p>+Add More</p>
                                </div>
                            </div>
                            <div className='createtask21'>
                                <p>Created  by</p>
                                <p>Participants</p>
                                <p>Obersevers</p>
                            </div>
                        </div>
                        <div className='createtask22'>
                            <label htmlFor="">DeadLine</label>
                            <input type="date" />
                        </div>
                    </div>

                    <div className='createtask23'>
                        <label htmlFor="">Task status summary</label>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Task status summary is required</label>
                    </div>


                    <div className='createtask24'>
                        <button onClick={()=>navigate('/task')}>Add Task</button>
                        <button>Add Task & Create another one</button>
                        <button onClick={()=>navigate('/task')}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(CreateTask)