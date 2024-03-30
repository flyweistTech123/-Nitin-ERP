import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import HOC from '../../Components/HOC/HOC'
import ReactApexChart from 'react-apexcharts';
import { FaCalendarDays } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

import img from '../../Img/img20.png'
import img1 from '../../Img/img21.png'
import img2 from '../../Img/img22.png'
import img3 from '../../Img/img23.png'
import img4 from '../../Img/img24.png'
import img5 from '../../Img/img25.png'
import img6 from '../../Img/img26.png'
import img7 from '../../Img/img27.png'
import img8 from '../../Img/img28.png'
import img9 from '../../Img/img29.png'
import img10 from '../../Img/img30.png'
import img11 from '../../Img/img31.png'
import img12 from '../../Img/img32.png'
import { Link } from 'react-router-dom';
export const percentageData = [50, 10, 70];

const Dashboard = () => {
    const progressData = [
        { id: 1, progress: 30, status: 'Pending', number: 92600, image: img7 },
        { id: 2, progress: 50, status: 'Approved', number: 37515, image: img8 },
        { id: 3, progress: 70, status: 'Rejected', number: 55085, image: img9 }
    ];
    const progressData1 = [
        { id: 1, progress: 30, name: 'Username 1', status: 'Pending', number: 92600, image: img10 },
        { id: 2, progress: 50, name: 'Username 2', status: 'Approved', number: 37515, image: img11 },
        { id: 3, progress: 70, name: 'Username 3', status: 'Rejected', number: 55085, image: img12 }
    ];
    const progressData2 = [
        { id: 1, progress: 80, name: 'EaseBuzz', status: 'Pending', number: 92600 },
        { id: 2, progress: 50, name: 'DD', status: 'Approved', number: 37515 },
        { id: 3, progress: 60, name: 'Cash', status: 'Rejected', number: 55085 },
        { id: 4, progress: 60, name: 'CCAvenue', status: 'CCAvenue', number: 55085 },
        { id: 5, progress: 60, name: 'NEFT', status: 'NEFT', number: 55085 },
        { id: 6, progress: 60, name: 'Bank Deposit', status: 'Bank', number: 55085 },
    ];


    const statusColors = {
        Pending: "linear-gradient(90deg, #7579FF 0%, #B224EF 100%)",
        Approved: "linear-gradient(90deg, #3CBA92 0%, #0BA360 100%)",
        Rejected: "linear-gradient(90deg, #F09819 0%, #FF5858 100%)",
        CCAvenue: "linear-gradient(90deg, #2155CD 0%, #FF5858 100%)",
        NEFT: "linear-gradient(90deg, #00BCD4 0%, #FF5858 100%)",
        Bank: "linear-gradient(90deg, #FFEA20 0%, #FFEA20 100%)"
    };

    const [progress, setProgress] = useState(0); // Initial progress
    const [series, setSeries] = useState([44, 25, 80]);
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
    const [series2, setSeries2] = useState([44, 25, 80]);
    const [options2, setOptions2] = useState({
        chart: {
            type: 'donut',
            foreColor: '#3F3F3F',
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
        colors: ['#00AB55', '#3F3F3F', '#2155CD'],
        labels: ['Overdue', 'Total', 'Pending'],
        dataLabels: {
            enabled: false
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 130,
                    },
                    legend: {
                        position: 'top',
                    },
                },
            },
        ],
    });
    const [series3, setSeries3] = useState([44, 25, 80]);
    const [options3, setOptions3] = useState({
        chart: {
            type: 'donut',
            foreColor: '#3F3F3F',
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
        colors: ['#FF0000', '#00AB55', '#FFB800'],
        labels: ['Overdue', 'Total', 'Pending'],
        dataLabels: {
            enabled: false
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 130,
                    },
                    legend: {
                        position: 'top',
                    },
                },
            },
        ],
    });
    const [series4, setSeries4] = useState([44, 25, 80]);
    const [options4, setOptions4] = useState({
        chart: {
            type: 'donut',
            foreColor: '#3F3F3F',
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
        colors: ['#FFB800', '#FF0000', '#40AF0C'],
        labels: ['Pending', 'Rejected', 'Approved'],
        dataLabels: {
            enabled: false
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 130,
                    },
                    legend: {
                        position: 'top',
                    },
                },
            },
        ],
    });
    const [series5, setSeries5] = useState([44, 25, 80]);
    const [options5, setOptions5] = useState({
        chart: {
            type: 'donut',
            foreColor: '#3F3F3F',
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
        labels: ['Pending', 'Rejected', 'Approved'],
        dataLabels: {
            enabled: false
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 130,
                    },
                    legend: {
                        position: 'top',
                    },
                },
            },
        ],
    });
    const [chartState, setChartState] = useState({
        series: [60, 10, 30],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            colors: ['#4198D7', '#7A61BA', '#D8B655'],
            labels: ['Resolved', 'Rejected', 'Pending'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
    });


    const seriesData = [
        {
            name: "EVI",
            data: [10, 41, 35, 51, 49, 62, 50]
        },
        {
            name: "NDVI",
            data: [20, 35, 30, 45, 60, 55, 70]
        }
    ];

    const options6 = {
        chart: {
            height: 300,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Product Trends by Month',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            },
        },
        xaxis: {
            categories: [50, 100, 150, 200, 250, 300, 350],
        }
    };

    return (
        <>
            <div className='dashboard'>
                <p>Departments</p>

                <div className='dashboard1'>

                    <div className='dashboard2'>
                        <Link to={'/admission'} className='link'>
                            <div className='dashboard3'>
                                <img src={img} alt="" />
                                <p>Admission</p>
                            </div>
                        </Link>
                    </div>


                    <div className='dashboard2'>
                        <div className='dashboard3'>
                            <img src={img1} alt="" />
                            <p>Service</p>
                        </div>
                    </div>
                    <div className='dashboard2'>
                        <div className='dashboard3'>
                            <img src={img2} alt="" />
                            <p>Backend</p>
                        </div>
                    </div>
                    <div className='dashboard2'>
                        <div className='dashboard3'>
                            <img src={img3} alt="" />
                            <p>University</p>
                        </div>
                    </div>
                    <div className='dashboard2'>
                        <div className='dashboard3'>
                            <img src={img4} alt="" />
                            <p>Payment</p>
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
                            <div className='dashboard26'>
                                <div className='dashboard24'>
                                    <div className='dashboard25'></div>
                                </div>
                                <p>Engineering</p>
                            </div>
                            <div className='dashboard26'>
                                <div className='dashboard24'>
                                    <div className='dashboard25'></div>
                                </div>
                                <p>MBA</p>
                            </div>
                            <div className='dashboard26'>
                                <div className='dashboard24'>
                                    <div className='dashboard25'></div>
                                </div>
                                <p>BBA</p>
                            </div>
                            <div className='dashboard26'>
                                <div className='dashboard24'>
                                    <div className='dashboard25'></div>
                                </div>
                                <p>MCA</p>
                            </div>
                            <div className='dashboard26'>
                                <div className='dashboard24'>
                                    <div className='dashboard25'></div>
                                </div>
                                <p>BA</p>
                            </div>
                            <div className='dashboard26'>
                                <div className='dashboard24'>
                                    <div className='dashboard25'></div>
                                </div>
                                <p>B.Sc</p>
                            </div>
                            <div className='dashboard26'>
                                <div className='dashboard24'>
                                    <div className='dashboard25'></div>
                                </div>
                                <p>M.Sc</p>
                            </div>
                        </div>

                    </div>

                    <div className='dashboard20'>
                        <div className='dashboard27'>
                            <p>Admission Records</p>
                        </div>
                        <div className='dashboard28'>
                            <div className='dashboard29'>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29'>
                                <FaUser color='#2155CD' size={20} />
                                <p>Select User</p>
                            </div>
                        </div>

                        <div className='dashboard35'>
                            {progressData.map(item => {
                                const gradientColor = statusColors[item.status] || "#9e9e9e";
                                return (


                                    <div key={item.id} className='dashboard32'>
                                        <div className='dashboard33'>
                                            <p>{item.status}</p>
                                            <p>{item.number}</p>
                                        </div>
                                        <div className='dashboard34'>
                                            <div>
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="dashboard30">
                                                <div className="dashboard31" style={{ width: `${item.progress}%`, backgroundImage: gradientColor }}></div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>


                <div className='dashboard36'>
                    <div className='dashboard37'>
                        <div className='dashboard27'>
                            <p>Student Complaint Records</p>
                        </div>
                        <div className='dashboard28'>
                            <div className='dashboard29'>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29'>
                                <FaUser color='#2155CD' size={20} />
                                <p>Select User</p>
                            </div>
                        </div>

                        <div className='dashboard38'>
                            <div id="chart">
                                <ReactApexChart options={chartState.options} series={chartState.series} type="pie" width={420} />
                            </div>
                        </div>
                    </div>
                    <div className='dashboard37'>
                        <div className='dashboard27'>
                            <p>Student Request Records</p>
                        </div>
                        <div className='dashboard28'>
                            <div className='dashboard29'>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29'>
                                <FaUser color='#2155CD' size={20} />
                                <p>Select User</p>
                            </div>
                        </div>

                        <div className='dashboard38'>
                            <div id="chart">
                                <ReactApexChart options={chartState.options} series={chartState.series} type="pie" width={420} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='dashboard36'>
                    <div className='dashboard37'>
                        <div className='dashboard27'>
                            <p>Admission Follow Ups Records</p>
                        </div>
                        <div className='dashboard28'>
                            <div className='dashboard29'>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29'>
                                <FaUser color='#2155CD' size={20} />
                                <p>Select User</p>
                            </div>
                        </div>

                        <div className='dashboard38'>
                            <div id="chart">
                                <ReactApexChart options={options2} series={series2} type="donut" width={350} />
                                <p>Total Students: 1000</p>
                            </div>
                        </div>
                    </div>
                    <div className='dashboard37'>
                        <div className='dashboard27'>
                            <p>PDC Follow Ups Records</p>
                        </div>
                        <div className='dashboard28'>
                            <div className='dashboard29'>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29'>
                                <FaUser color='#2155CD' size={20} />
                                <p>Select User</p>
                            </div>
                        </div>

                        <div className='dashboard38'>
                            <div id="chart">
                                <ReactApexChart options={options3} series={series3} type="donut" width={350} />
                                <p>Total Students: 1000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dashboard36'>
                    <div className='dashboard37'>
                        <div className='dashboard27'>
                            <p>Refund Records</p>
                        </div>
                        <div className='dashboard28'>
                            <div className='dashboard29'>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29'>
                                <FaUser color='#2155CD' size={20} />
                                <p>Select User</p>
                            </div>
                        </div>

                        <div className='dashboard38'>
                            <div id="chart">
                                <ReactApexChart options={options4} series={series4} type="donut" width={350} />
                                <p>Total Students: 1000</p>
                            </div>
                        </div>
                    </div>
                    <div className='dashboard37'>
                        <div className='dashboard27'>
                            <p>PDC Follow Ups Records</p>
                        </div>
                        <div className='dashboard28'>
                            <div className='dashboard29'>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29'>
                                <FaUser color='#2155CD' size={20} />
                                <p>Select User</p>
                            </div>
                        </div>

                        <div className='dashboard38'>
                            <div id="chart">
                                <ReactApexChart options={options5} series={series5} type="donut" width={350} />
                                <p>Total Students: 1000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dashboard36'>
                    <div className='dashboard37'>
                        <div className='dashboard27'>
                            <p>Approved Admission Reports</p>
                        </div>
                        <div className='dashboard28'>
                            <div className='dashboard29'>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29'>
                                <FaUser color='#2155CD' size={20} />
                                <p>Select User</p>
                            </div>
                        </div>

                        <div className='dashboard23'>
                            <div className='dashboard26'>
                                <div className='dashboard24'>
                                    <div className='dashboard25'></div>
                                </div>
                                <p>Engineering</p>
                            </div>
                            <div className='dashboard26'>
                                <div className='dashboard24'>
                                    <div className='dashboard25'></div>
                                </div>
                                <p>MBA</p>
                            </div>
                            <div className='dashboard26'>
                                <div className='dashboard24'>
                                    <div className='dashboard25'></div>
                                </div>
                                <p>BBA</p>
                            </div>
                            <div className='dashboard26'>
                                <div className='dashboard24'>
                                    <div className='dashboard25'></div>
                                </div>
                                <p>MCA</p>
                            </div>
                            <div className='dashboard26'>
                                <div className='dashboard24'>
                                    <div className='dashboard25'></div>
                                </div>
                                <p>BA</p>
                            </div>
                            <div className='dashboard26'>
                                <div className='dashboard24'>
                                    <div className='dashboard25'></div>
                                </div>
                                <p>B.Sc</p>
                            </div>
                            <div className='dashboard26'>
                                <div className='dashboard24'>
                                    <div className='dashboard25'></div>
                                </div>
                                <p>M.Sc</p>
                            </div>
                        </div>
                    </div>
                    <div className='dashboard37'>
                        <div className='dashboard27'>
                            <p>Follow Ups Records</p>
                        </div>
                        <div className='dashboard28'>
                            <div className='dashboard29'>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29'>
                                <FaUser color='#2155CD' size={20} />
                                <p>Select User</p>
                            </div>
                        </div>

                        <div className='dashboard38'>
                            <div id="chart">
                                <ReactApexChart options={options2} series={series2} type="donut" width={350} />
                                <p>Total Students: 1000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dashboard36'>
                    <div className='dashboard37'>
                        <div className='dashboard27'>
                            <p>Follow Ups Records</p>
                        </div>
                        <div className='dashboard28'>
                            <div className='dashboard29'>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29'>
                                <FaUser color='#2155CD' size={20} />
                                <p>Select User</p>
                            </div>
                        </div>

                        <div className='dashboard38'>
                            <div id="chart">
                                <ReactApexChart options={options2} series={series2} type="donut" width={350} />
                                <p>Total Students: 1000</p>
                            </div>
                        </div>
                    </div>
                    <div className='dashboard37'>
                        <div className='dashboard27'>
                            <p>Follow Ups Records</p>
                        </div>
                        <div className='dashboard28'>
                            <div className='dashboard29'>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29'>
                                <FaUser color='#2155CD' size={20} />
                                <p>Select User</p>
                            </div>
                        </div>

                        <div className='dashboard38'>
                            <div id="chart">
                                <ReactApexChart options={options2} series={series2} type="donut" width={350} />
                                <p>Total Students: 1000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dashboard36'>
                    <div className='dashboard37'>
                        <div className='dashboard27'>
                            <p>Pending Cash Record to Authority</p>
                        </div>
                        <div className='dashboard28'>
                            <div className='dashboard29'>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                        </div>

                        <div className='dashboard35'>
                            {progressData1.map(item => {
                                const gradientColor = statusColors[item.status] || "#9e9e9e";
                                return (
                                    <div key={item.id} className='dashboard32'>
                                        <div className='dashboard33'>
                                            <p>{item.name}</p>
                                            <p>{item.number}</p>
                                        </div>
                                        <div className='dashboard34'>
                                            <div>
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="dashboard30">
                                                <div className="dashboard31" style={{ width: `${item.progress}%`, backgroundImage: gradientColor }}></div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className='dashboard37'>
                        <div className='dashboard27'>
                            <p>Expense Team Available Cash Records</p>
                        </div>
                        <div className='dashboard28'>
                            <div className='dashboard29'>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                        </div>

                        <div className='dashboard35'>
                            {progressData1.map(item => {
                                const gradientColor = statusColors[item.status] || "#9e9e9e";
                                return (
                                    <div key={item.id} className='dashboard32'>
                                        <div className='dashboard33'>
                                            <p>{item.name}</p>
                                            <p>{item.number}</p>
                                        </div>
                                        <div className='dashboard34'>
                                            <div>
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="dashboard30">
                                                <div className="dashboard31" style={{ width: `${item.progress}%`, backgroundImage: gradientColor }}></div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className='dashboard36'>
                    <div className='dashboard37'>
                        <div className='dashboard27'>
                            <p>Payment Received Mode Records </p>
                        </div>
                        <div className='dashboard28'>
                            <div className='dashboard29'>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                        </div>

                        <div className='dashboard35'>
                            {progressData2.map(item => {
                                const gradientColor = statusColors[item.status] || "#9e9e9e";
                                return (
                                    <div key={item.id} className='dashboard41'>
                                        <div className='dashboard39'>
                                            <p>{item.name}</p>
                                            <p>{item.number}</p>
                                        </div>
                                        <div className="dashboard40">
                                            <div className="dashboard31" style={{ width: `${item.progress}%`, backgroundImage: gradientColor }}></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className='dashboard37'>
                        <div className='dashboard27'>
                            <p>Approved Admission Compare</p>
                        </div>
                        <div className='dashboard28'>
                            <div className='dashboard29'>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Compare</p>
                            </div>
                            <div className='dashboard29'>
                                <FaUser color='#2155CD' size={20} />
                                <p>Select User</p>
                            </div>
                        </div>

                        <div className='dashboard35'>
                            <div id="chart">
                                <ReactApexChart options={options6} series={seriesData} type="line" height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dashboard36'>
                    <div className='dashboard37'>
                        <div className='dashboard27'>
                            <p>Admission Department Justification Record</p>
                        </div>
                        <div className='dashboard28'>
                            <div className='dashboard29'>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29'>
                                <FaUser color='#2155CD' size={20} />
                                <p>Select User</p>
                            </div>
                        </div>

                        <div className='dashboard35'>
                            <table>
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" /></th>
                                        <th>Employee Name</th>
                                        <th>Justification</th>
                                        <th>Achieved</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>
                                            <div className='dashboard42'>
                                                <img src={img12} alt="" />
                                                <p>Loren Epsom</p>
                                            </div>
                                        </td>
                                        <td>12</td>
                                        <td style={{ fontWeight: "700", color: "#40AF0C" }}>45</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>
                                            <div className='dashboard42'>
                                                <img src={img12} alt="" />
                                                <p>Loren Epsom</p>
                                            </div>
                                        </td>
                                        <td>12</td>
                                        <td style={{ fontWeight: "700", color: "#FF0000" }}>11</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>
                                            <div className='dashboard42'>
                                                <img src={img12} alt="" />
                                                <p>Loren Epsom</p>
                                            </div>
                                        </td>
                                        <td>12</td>
                                        <td style={{ fontWeight: "700", color: "#FFB800" }}>12</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className='dashboard43'>
                            <div className='dashboard44'>
                                <p>Records</p>
                                <div className='dashboard45'><p>20</p></div>
                            </div>

                            <div className='dashboard46'>
                                <button>Previous</button>
                                <button>Next</button>
                            </div>
                        </div>
                    </div>
                    <div className='dashboard37'>
                        <div className='dashboard27'>
                            <p>IT  Department Justification Record</p>
                        </div>
                        <div className='dashboard28'>
                            <div className='dashboard29'>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29'>
                                <FaUser color='#2155CD' size={20} />
                                <p>Select User</p>
                            </div>
                        </div>

                        <div className='dashboard35'>
                            <table>
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" /></th>
                                        <th>Employee Name</th>
                                        <th>Justification</th>
                                        <th>Achieved</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>
                                            <div className='dashboard42'>
                                                <img src={img12} alt="" />
                                                <p>Loren Epsom</p>
                                            </div>
                                        </td>
                                        <td>12</td>
                                        <td style={{ fontWeight: "700", color: "#40AF0C" }}>45</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>
                                            <div className='dashboard42'>
                                                <img src={img12} alt="" />
                                                <p>Loren Epsom</p>
                                            </div>
                                        </td>
                                        <td>12</td>
                                        <td style={{ fontWeight: "700", color: "#FF0000" }}>11</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>
                                            <div className='dashboard42'>
                                                <img src={img12} alt="" />
                                                <p>Loren Epsom</p>
                                            </div>
                                        </td>
                                        <td>12</td>
                                        <td style={{ fontWeight: "700", color: "#FFB800" }}>12</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className='dashboard43'>
                            <div className='dashboard44'>
                                <p>Records</p>
                                <div className='dashboard45'><p>20</p></div>
                            </div>

                            <div className='dashboard46'>
                                <button>Previous</button>
                                <button>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dashboard36'>
                    <div className='dashboard37'>
                        <div className='dashboard27'>
                            <p>Pending Tasks Employees Records</p>
                        </div>
                        <div className='dashboard28'>
                            <div className='dashboard29'>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29'>
                                <FaUser color='#2155CD' size={20} />
                                <p>Select User</p>
                            </div>
                        </div>

                        <div className='dashboard35'>
                            <table>
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" /></th>
                                        <th>Employee Name</th>
                                        <th>Justification</th>
                                        <th>Achieved</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>
                                            <div className='dashboard42'>
                                                <img src={img12} alt="" />
                                                <p>Loren Epsom</p>
                                            </div>
                                        </td>
                                        <td>12</td>
                                        <td style={{ fontWeight: "700", color: "#40AF0C" }}>45</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>
                                            <div className='dashboard42'>
                                                <img src={img12} alt="" />
                                                <p>Loren Epsom</p>
                                            </div>
                                        </td>
                                        <td>12</td>
                                        <td style={{ fontWeight: "700", color: "#FF0000" }}>11</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /></td>
                                        <td>
                                            <div className='dashboard42'>
                                                <img src={img12} alt="" />
                                                <p>Loren Epsom</p>
                                            </div>
                                        </td>
                                        <td>12</td>
                                        <td style={{ fontWeight: "700", color: "#FFB800" }}>12</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className='dashboard43'>
                            <div className='dashboard44'>
                                <p>Records</p>
                                <div className='dashboard45'><p>20</p></div>
                            </div>

                            <div className='dashboard46'>
                                <button>Previous</button>
                                <button>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(Dashboard)
