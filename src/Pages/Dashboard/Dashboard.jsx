import React, { useState } from 'react';
import './Dashboard.css'
import HOC from '../../Components/HOC/HOC'
import ReactApexChart from 'react-apexcharts';

import img from '../../Img/img20.png'
import img1 from '../../Img/img21.png'
import img2 from '../../Img/img22.png'
import img3 from '../../Img/img23.png'
import img4 from '../../Img/img24.png'
import img5 from '../../Img/img25.png'
import img6 from '../../Img/img26.png'
export const percentageData = [50, 10, 70]; // Example percentage values

const Dashboard = () => {
    const [series, setSeries] = useState([44, 55, 41,44, 55, 41]);
    const [options, setOptions] = useState({
        chart: {
            type: 'donut',
            foreColor: '#3F3F3F', // Change the color of labels and text
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: false
                    }
                }
            }
        },
        colors: ['#3F3F3F', '#00AB55', '#2155CD'],
        labels: ['Pending Admissions', 'Renew Admissions', 'New Admissions'],
        dataLabels: {
            enabled: false // Disable the percentage labels
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 1000,
                    },
                    legend: {
                        position: 'top',
                    },
                },
            },
        ],
    });

    const [series1, setSeries1] = useState([78, 22]);
    const [options1, setOptions1] = useState({
        chart: {
            type: 'donut',
            foreColor: '#3F3F3F', // Change the color of labels and text
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: false
                    }
                }
            }
        },
        colors: ['#00AB55', '#3F3F3F'],
        labels: ['Fees Admissions',],
        dataLabels: {
            enabled: false // Disable the percentage labels
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 1000,
                    },
                    legend: {
                        position: 'top',
                    },
                },
            },
        ],
    });

    return (
        <>
            <div className='dashboard'>
                <p>Departments</p>

                <div className='dashboard1'>
                    <div className='dashboard2'>
                        <div className='dashboard3'>
                            <img src={img} alt="" />
                            <p>Admission</p>
                        </div>
                    </div>
                    <div className='dashboard2'>
                        <div className='dashboard3'>
                            <img src={img1} alt="" />
                            <p>Admission</p>
                        </div>
                    </div>
                    <div className='dashboard2'>
                        <div className='dashboard3'>
                            <img src={img2} alt="" />
                            <p>Admission</p>
                        </div>
                    </div>
                    <div className='dashboard2'>
                        <div className='dashboard3'>
                            <img src={img3} alt="" />
                            <p>Admission</p>
                        </div>
                    </div>
                    <div className='dashboard2'>
                        <div className='dashboard3'>
                            <img src={img4} alt="" />
                            <p>Admission</p>
                        </div>
                    </div>
                </div>

                <div className='dashboard4'>
                    <div className='dashboard5'>
                        <div className='dashboard6'>
                            <h6>Admission Statistics</h6>

                            <select name="" id="">
                                <option value="">Select Course</option>
                            </select>
                        </div>

                        <div className='dashboard7'>
                            <p>Engineering</p>
                        </div>
                        <div id="chart">
                            <ReactApexChart options={options} series={series} type="donut" />
                            <p>Total Students: 1000</p>
                        </div>

                        <div className='dashboard8'>
                            <p>Data source came from backend records</p>
                        </div>
                    </div>
                    <div className='dashboard5'>
                        <div className='dashboard6'>
                            <h6>Fees Collection</h6>

                            <select name="" id="">
                                <option value="">Select Course</option>
                            </select>
                        </div>

                        <div className='dashboard9'>
                            <p>Engineering</p>
                            <select name="" id="">
                                <option value="">Select Year</option>
                            </select>
                        </div>
                        <div id="chart">
                            <ReactApexChart options={options1} series={series1} type="donut" />
                            <div className='dashboard10'>
                                <p>Total Revenue: ₹ 10,00,000</p>
                                <span>See Student List</span>
                            </div>
                        </div>

                        <div className='dashboard8'>
                            <p>Data source came from backend records</p>
                        </div>
                    </div>

                    <div className='dashboard11'>
                        <div className='dashboard12'>
                            <h6>Notice</h6>
                            <div className='dashboard13'>
                                <button>Add Notice</button>
                            </div>
                        </div>

                        <div className='dashboard14'>
                            <img src={img5} alt="" />
                            <div className='dashboard15'>
                                <h6>Jorem ipsum dolor sit amet</h6>
                                <p>Yesterday   10:30 AM</p>
                            </div>
                        </div>

                        <div className='dashboard16'>
                            <p>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos......</p>
                        </div>

                        <div className='dashboard17'>
                            <p>See More</p>
                        </div>

                        <div className='dashboard18'>
                            <button>Load More</button>
                        </div>
                    </div>
                </div>


                <div className='dashboard19'>
                    <div className='dashboard20'>
                        <div className='dashboard21'>
                            <div className='dashboard22'>
                                <h6>Admission Revenue</h6>
                                <p>Go to columns for details.</p>
                            </div>
                            <img src={img6} alt="" />
                        </div>

                        <div className='dashboard23'>
                            {percentageData.map((percentage, index) => (
                                <div key={index} className="progress-container">
                                    <div className="progress-bar" style={{ height: `${percentage}%`, backgroundColor: '#E2A03F' }}></div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(Dashboard)
