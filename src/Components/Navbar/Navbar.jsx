import React from 'react'
import './Navbar.css'
import { IoMdSearch } from "react-icons/io";
import img1 from '../../Img/img4.png'
import img2 from '../../Img/img5.png'

const Navbar = () => {
    return (
        <>
            <div class='navbar'>
                <div class='navbar-left'>
                    <div class='logo'>
                        <p>Logo</p>
                    </div>
                </div>
                <div class='navbar-center'>
                    <div class='search'>
                        <div class='search-icon'>
                            <IoMdSearch color='#3F3F3F' size={20} />
                        </div>
                        <input type="search" placeholder='Search' />
                    </div>
                </div>
                <div class='navbar-right'>
                    <div class='navbar2'>
                        <button>Payment</button>
                    </div>
                    <div class='profile-img1'>
                        <img src={img1} alt="" />
                    </div>
                    <div class='profile-img'>
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar