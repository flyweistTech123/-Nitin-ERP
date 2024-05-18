import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './WorkReport.css';

import TopPart from '../Toppart/TopPart';
import Navbar from '../../Components/Navbar/Navbar';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const WorkReport = () => {
    const [currentSlide, setCurrentSlide] = useState(0);


    const tableData1 = [
        { id: 1, date: '18', week: 'MON' },
        { id: 2, date: '19', week: 'TUE' },
        { id: 3, date: '20', week: 'WED' },
        { id: 4, date: '21', week: 'THU' },
        { id: 5, date: '22', week: 'FRI' },
        { id: 6, date: '23', week: 'SAT' },
        { id: 7, date: '24', week: 'SUN' },
        { id: 8, date: '25', week: 'MON' },
        { id: 9, date: '26', week: 'TUE' },
        { id: 10, date: '27', week: 'WED' },
        { id: 11, date: '28', week: 'THU' },
        { id: 1, date: '18', week: 'MON' },
        { id: 2, date: '19', week: 'TUE' },
        { id: 3, date: '20', week: 'WED' },
        { id: 4, date: '21', week: 'THU' },
        { id: 5, date: '22', week: 'FRI' },
        { id: 6, date: '23', week: 'SAT' },
        { id: 7, date: '24', week: 'SUN' },
        { id: 8, date: '25', week: 'MON' },
        { id: 9, date: '26', week: 'TUE' },
        { id: 10, date: '27', week: 'WED' },
        { id: 11, date: '28', week: 'THU' },
    ];

    const tableData = [
        {
            id: 1,
            date: '18',
            week: 'MON',
            EmployeeName: "Loren Epsom",
            Rateofreportswithscored: "0%",
        },

        {
            id: 1,
            date: '19',
            week: 'TUE',
            EmployeeName: "Loren Epsom",
            Rateofreportswithscored: "0%",
        },


    ];


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 5,
        
    };





    return (
        <>
            <Navbar />
            <div className="workreport">
                <div className='workreport1'>
                    <TopPart />
                </div>
                <div className='workreport2'>
                    <div className='workreport3'>
                        <div className='workreport4'>
                            <IoIosArrowBack color='#444444' size={25} />
                            <h6>July 2023</h6>
                            <IoIosArrowForward color='#444444' size={25} />
                        </div>

                        <div className='workreport5'>
                            <input type="checkbox" />
                            <label htmlFor="">Statistics</label>
                        </div>
                    </div>

                    <div className='workreport6'>
                        <div className='workreport7'>
                            {/* <IoIosArrowBack color='#444444' size={25} onClick={handlePrevSlide} /> */}
                            <Slider {...settings} initialSlide={currentSlide}>
                                {tableData1.map((data, index) => (
                                    <div className='workreport8' key={data.id}>
                                        <div className='workreport9'>
                                            <h6>{data.date}</h6>
                                            <p>{data.week}</p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            {/* <IoIosArrowForward color='#444444' size={25} onClick={handleNextSlide} /> */}
                        </div>
                    </div>

                    <div className='workreport10'>
                        <div className='admission13'>
                            <div className='table-container'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Employee Name</th>
                                            <th>Rate of reports with scored</th>
                                            <th>Rate of positive scores</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData.map((data) => (
                                            <tr key={data.id}>
                                                <td>{data.EmployeeName}</td>
                                                <td>{data.Rateofreportswithscored}</td>
                                                <td>{data.Rateofreportswithscored}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default WorkReport;
