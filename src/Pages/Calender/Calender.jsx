import React, { useEffect, useState } from 'react';
import './Calender.css'
import TopPart from '../Toppart/TopPart';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';


import { MdOutlineClose } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import ReactBigCalendar from './ReactBigCalender';






const Calender = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className='calender2'>
                <div className='general1'>
                    <TopPart />
                </div>
                <div className='task1'>

                    <div className='task2'>
                        <div className='task3'>
                            <button>Create</button>
                        </div>

                        <div className='task4'>
                            <div className='task5'>
                                <p>In Progress</p>
                                <MdOutlineClose color='#FFFFFF' size={20} />
                            </div>
                            <div className='task6'>
                                <IoSearchSharp color='#444444' size={23} />
                                <MdOutlineClose color='#444444' size={23} />
                            </div>
                        </div>
                    </div>


                    <div className='calender1'>
                        <ReactBigCalendar />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Calender