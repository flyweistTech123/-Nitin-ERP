import React from 'react'
import './Navbar.css'
import { IoMdSearch } from "react-icons/io";
import img1 from '../../Img/img4.png'
import img2 from '../../Img/img5.png'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='navbar1'>
                    <div className='navbar2'>
                        <p>Logo</p>
                    </div>
                    <div className='navbar3'>
                        <div  className='navbar4'>
                            <IoMdSearch  color='#3F3F3F' size={20} />
                            <input type="search" placeholder='Search' />
                        </div>
                    </div>


                    <div className='navbar5'>
                        <div className='navbar6'>
                            <button>Payment</button>
                        </div>

                        <div className='navbar7'>
                            <img src={img1} alt="" />
                        </div>
                        <div  className='navbar8'>
                            <img src={img2} alt="" />
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar