import React, { useState } from 'react';
import './Drive.css'
import TopPart from '../Toppart/TopPart';
import Navbar from '../../Components/Navbar/Navbar';
import { CgMenuLeft } from "react-icons/cg";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

import img from '../../Img/img107.png'

const Drive = () => {

    return (
        <>
            <Navbar />
            <div className='drive'>
                <div className='drive1'>
                    <TopPart />
                </div>

                <div className='drive2'>
                    <div className='drive3'>
                        <h6>My Drive</h6>
                        <div className='drive4'>
                            <button>Recycle Bin</button>
                            <button>Add</button>
                        </div>
                    </div>

                    <div className='drive5'>
                        <div className='drive6'>
                            <p>Filter and search</p>
                        </div>
                        <div className='drive7'>
                            <p>Files deleted to the recycle bin are kept for 30 day</p>
                        </div>
                    </div>


                    <div className='drive8'>
                        <div className='drive9'>
                            <div className='drive10'>
                                <CgMenuLeft color='#444444' size={20}/>
                                <MdOutlineCheckBoxOutlineBlank color='#444444' size={20}/>
                            </div>

                            <div className='drive11'>
                                <img src={img} alt="" />
                            </div>

                            <div className='drive12'>
                                <p>Uploaded Files</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Drive