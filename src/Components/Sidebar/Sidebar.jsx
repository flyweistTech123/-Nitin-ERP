import React from 'react'
import './Sidebar.css'
import { IoIosArrowDown } from "react-icons/io";


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

const Sidebar = () => {
    return (
        <>
            <div className='sidebar'>
                <div className='sidebar1'>
                    <div className='sidebar2'>
                        <img src={img} alt="" />
                        <p>Dashboard</p>
                    </div>
                    <div className='sidebar2'>
                        <img src={img1} alt="" />
                        <p>CRM</p>
                    </div>
                    <div className='sidebar3'>
                        <div className='sidebar4'>
                            <img src={img2} alt="" />
                            <p>Section</p>
                        </div>
                        <IoIosArrowDown />
                    </div>
                    <div className='sidebar3'>
                        <div className='sidebar4'>
                            <img src={img3} alt="" />
                            <p>Template</p>
                        </div>
                        <IoIosArrowDown />
                    </div>
                    <div className='sidebar3'>
                        <div className='sidebar4'>
                            <img src={img4} alt="" />
                            <p>Automation Report</p>
                        </div>
                        <IoIosArrowDown />
                    </div>

                    <div className='sidebar5'>
                        <div className='sidebar6'>
                            <img src={img11} alt="" />
                            <p>Document</p>
                        </div>
                        <div className='sidebar6'>
                            <img src={img12} alt="" />
                            <p>IT Report</p>
                        </div>
                        <div className='sidebar6'>
                            <img src={img12} alt="" />
                            <p>IT Target Report</p>
                        </div>
                        <div className='sidebar6'>
                            <img src={img12} alt="" />
                            <p>IT Target Analysis</p>
                        </div>
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
                        <div className='sidebar6'>
                            <img src={img12} alt="" />
                            <p>Sales Target</p>
                        </div>
                        <div className='sidebar6'>
                            <img src={img13} alt="" />
                            <p>Call Recording Analysis</p>
                        </div>
                    </div>
                    <div className='sidebar2'>
                        <img src={img5} alt="" />
                        <p>Drive</p>
                    </div>
                    <div className='sidebar2'>
                        <img src={img6} alt="" />
                        <p>Employees</p>
                    </div>
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
                    <div className='sidebar3'>
                        <div className='sidebar4'>
                            <img src={img10} alt="" />
                            <p>Setting</p>
                        </div>
                        <IoIosArrowDown />
                    </div>
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
        </>
    )
}

export default Sidebar