import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom'
import ReactApexChart from 'react-apexcharts';
import './Dashboard.css'
import HOC from '../../Components/HOC/HOC'


import { FaCalendarDays } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";


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
import img13 from '../../Img/img41.png'
import img14 from '../../Img/img42.png'
import img15 from '../../Img/img43.png'
import img16 from '../../Img/img44.png'
import img17 from '../../Img/img45.png'
import img18 from '../../Img/img46.png'




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
                breakpoint: 580,
                options: {
                    chart: {
                        width: 300
                    },
                    legend: {
                        position: 'right'
                    }
                }
            },
            {
                breakpoint: 968, // Example of another breakpoint (e.g., tablet)
                options: {
                    chart: {
                        width: 300 // Adjust width for tablet screens
                    },
                    legend: {
                        position: 'right' // Example of changing legend position for tablets
                    }
                }
            }
        ]
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
                breakpoint: 580,
                options: {
                    chart: {
                        width: 300
                    },
                    legend: {
                        position: 'right'
                    }
                }
            },
            {
                breakpoint: 968, // Example of another breakpoint (e.g., tablet)
                options: {
                    chart: {
                        width: 300 // Adjust width for tablet screens
                    },
                    legend: {
                        position: 'right' // Example of changing legend position for tablets
                    }
                }
            }
        ]
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
                breakpoint: 580,
                options: {
                    chart: {
                        width: 300,
                    },
                    legend: {
                        position: 'right',
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
                breakpoint: 580,
                options: {
                    chart: {
                        width: 300,
                    },
                    legend: {
                        position: 'right',
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
                breakpoint: 580,
                options: {
                    chart: {
                        width: 300,
                    },
                    legend: {
                        position: 'right',
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
                breakpoint: 580,
                options: {
                    chart: {
                        width: 300
                    },
                    legend: {
                        position: 'right'
                    }
                }
            },
            {
                breakpoint: 968, // Example of another breakpoint (e.g., tablet)
                options: {
                    chart: {
                        width: 300 // Adjust width for tablet screens
                    },
                    legend: {
                        position: 'bottom' // Example of changing legend position for tablets
                    }
                }
            }
        ]
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
            responsive: [
                {
                    breakpoint: 580,
                    options: {
                        chart: {
                            width: 300
                        },
                        legend: {
                            position: 'right'
                        }
                    }
                },
                {
                    breakpoint: 968, // Example of another breakpoint (e.g., tablet)
                    options: {
                        chart: {
                            width: 300 // Adjust width for tablet screens
                        },
                        legend: {
                            position: 'bottom' // Example of changing legend position for tablets
                        }
                    }
                }
            ]
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


    // Add Notice  Modal // 
    const [modalShow, setModalShow] = React.useState(false);
    const navigate = useNavigate()

    function AddNoticeModal(props) {

        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='dashboard50'>Add Notice</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='dashboard51'>
                        <div className='dashboard52'>
                            <input type="text" placeholder='Enter the subject' />
                            <input type="text" placeholder='Enter the subject' />
                        </div>
                        <div className='dashboard53'>
                            <textarea name="" id="" cols="100" rows="5" placeholder='Add Notice Here'></textarea>
                        </div>

                        <div className='dashboard54'>
                            <button>Add Notice</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    // Date  Modal // 
    const [modalShow1, setModalShow1] = React.useState(false);

    function DateModal(props) {
        const [showdate, setShowdate] = useState(0)

        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            ><Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className='dashboard51'>
                        {showdate === 0 ? (
                            <div className='dashboard55'>
                                <select name="" id="" onChange={(e) => setShowdate(parseInt(e.target.value))}>
                                    <option value="0">Any Date</option>
                                    <option value="0">Yesterday</option>
                                    <option value="0">Current Day</option>
                                    <option value="0">Tomorrow</option>
                                    <option value="0">This Week</option>
                                    <option value="0">This Month</option>
                                    <option value="0">Current Quarter</option>
                                    <option value="0">Last 7 days</option>
                                    <option value="0">Last 30 days</option>
                                    <option value="0">Last 60 days</option>
                                    <option value="0">Last 90 days</option>
                                    <option value="0">Last N days</option>
                                    <option value="0">Next N days</option>
                                    <option value="1">Month</option>
                                    <option value="0">Quarter</option>
                                    <option value="2">Year</option>
                                    <option value="3">Exact Date</option>
                                    <option value="0">Last Week</option>
                                    <option value="0">Last Month</option>
                                    <option value="4">Custom Range</option>
                                    <option value="0">Next Week</option>
                                    <option value="0">Next Month</option>
                                </select>
                            </div>
                        ) : showdate === 1 ? (
                            <div className='dashboard70'>
                                <select name="" id="" onChange={(e) => setShowdate(parseInt(e.target.value))}>
                                    <option value="0">Any Date</option>
                                    <option value="0">Yesterday</option>
                                    <option value="0">Current Day</option>
                                    <option value="0">Tomorrow</option>
                                    <option value="0">This Week</option>
                                    <option value="0">This Month</option>
                                    <option value="0">Current Quarter</option>
                                    <option value="0">Last 7 days</option>
                                    <option value="0">Last 30 days</option>
                                    <option value="0">Last 60 days</option>
                                    <option value="0">Last 90 days</option>
                                    <option value="0">Last N days</option>
                                    <option value="0">Next N days</option>
                                    <option value="1">Month</option>
                                    <option value="0">Quarter</option>
                                    <option value="2">Year</option>
                                    <option value="3">Exact Date</option>
                                    <option value="0">Last Week</option>
                                    <option value="0">Last Month</option>
                                    <option value="4">Custom Range</option>
                                    <option value="0">Next Week</option>
                                    <option value="0">Next Month</option>
                                </select>
                                <select name="" id="">
                                    <option value="0">January</option>
                                    <option value="0">February</option>
                                    <option value="0">March</option>
                                    <option value="0">April</option>
                                    <option value="0">May</option>
                                    <option value="0">June</option>
                                    <option value="0">July</option>
                                    <option value="0">August</option>
                                    <option value="0">September</option>
                                    <option value="0">October</option>
                                    <option value="0">November</option>
                                    <option value="0">December</option>
                                </select>
                                <select name="" id="">
                                    <option value="0">2023</option>
                                    <option value="0">2022</option>
                                    <option value="0">2021</option>
                                    <option value="0">2020</option>
                                    <option value="0">2019</option>
                                    <option value="0">2018</option>
                                    <option value="0">2017</option>
                                </select>
                            </div>
                        ) : showdate === 2 ? (
                            <div className='dashboard70'>
                                <select name="" id="" onChange={(e) => setShowdate(parseInt(e.target.value))}>
                                    <option value="0">Any Date</option>
                                    <option value="0">Yesterday</option>
                                    <option value="0">Current Day</option>
                                    <option value="0">Tomorrow</option>
                                    <option value="0">This Week</option>
                                    <option value="0">This Month</option>
                                    <option value="0">Current Quarter</option>
                                    <option value="0">Last 7 days</option>
                                    <option value="0">Last 30 days</option>
                                    <option value="0">Last 60 days</option>
                                    <option value="0">Last 90 days</option>
                                    <option value="0">Last N days</option>
                                    <option value="0">Next N days</option>
                                    <option value="1">Month</option>
                                    <option value="0">Quarter</option>
                                    <option value="2">Year</option>
                                    <option value="3">Exact Date</option>
                                    <option value="0">Last Week</option>
                                    <option value="0">Last Month</option>
                                    <option value="4">Custom Range</option>
                                    <option value="0">Next Week</option>
                                    <option value="0">Next Month</option>
                                </select>
                                <select name="" id="">
                                    <option value="0">2023</option>
                                    <option value="0">2022</option>
                                    <option value="0">2021</option>
                                    <option value="0">2020</option>
                                    <option value="0">2019</option>
                                    <option value="0">2018</option>
                                    <option value="0">2017</option>
                                </select>
                            </div>
                        ) : showdate === 3 ? (
                            <div className='dashboard70'>
                                <select name="" id="" onChange={(e) => setShowdate(parseInt(e.target.value))}>
                                    <option value="0">Any Date</option>
                                    <option value="0">Yesterday</option>
                                    <option value="0">Current Day</option>
                                    <option value="0">Tomorrow</option>
                                    <option value="0">This Week</option>
                                    <option value="0">This Month</option>
                                    <option value="0">Current Quarter</option>
                                    <option value="0">Last 7 days</option>
                                    <option value="0">Last 30 days</option>
                                    <option value="0">Last 60 days</option>
                                    <option value="0">Last 90 days</option>
                                    <option value="0">Last N days</option>
                                    <option value="0">Next N days</option>
                                    <option value="1">Month</option>
                                    <option value="0">Quarter</option>
                                    <option value="2">Year</option>
                                    <option value="3">Exact Date</option>
                                    <option value="0">Last Week</option>
                                    <option value="0">Last Month</option>
                                    <option value="4">Custom Range</option>
                                    <option value="0">Next Week</option>
                                    <option value="0">Next Month</option>
                                </select>
                                <input type="date" />
                            </div>
                        ) : showdate === 4 ? (
                            <div className='dashboard70'>
                                <select name="" id="" onChange={(e) => setShowdate(parseInt(e.target.value))}>
                                    <option value="0">Any Date</option>
                                    <option value="0">Yesterday</option>
                                    <option value="0">Current Day</option>
                                    <option value="0">Tomorrow</option>
                                    <option value="0">This Week</option>
                                    <option value="0">This Month</option>
                                    <option value="0">Current Quarter</option>
                                    <option value="0">Last 7 days</option>
                                    <option value="0">Last 30 days</option>
                                    <option value="0">Last 60 days</option>
                                    <option value="0">Last 90 days</option>
                                    <option value="0">Last N days</option>
                                    <option value="0">Next N days</option>
                                    <option value="1">Month</option>
                                    <option value="0">Quarter</option>
                                    <option value="2">Year</option>
                                    <option value="3">Exact Date</option>
                                    <option value="0">Last Week</option>
                                    <option value="0">Last Month</option>
                                    <option value="4">Custom Range</option>
                                    <option value="0">Next Week</option>
                                    <option value="0">Next Month</option>
                                </select>
                                <input type="date" />
                                <input type="date" />
                            </div>
                        ) : (
                            ""
                        )}

                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    // User  Modal // 
    const [modalShow2, setModalShow2] = React.useState(false);
    const [showdate1, setShowdate1] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({
        employee: null,
        department: null,
        team: null
    });
    const [isOpen, setIsOpen] = useState({
        employee: false,
        department: false,
        team: false
    });

    const options111 = [
        { value: 'employee', label: 'Select Employee' },
        { value: 'department', label: 'Select Department' },
        { value: 'team', label: 'Select Team' },
    ];

    const handleOptionClick = (option, type) => {
        setSelectedOptions({ ...selectedOptions, [type]: option });
        setIsOpen({ ...isOpen, [type]: false });
    };
    function UserModal(props) {
        const [showdate1, setShowdate1] = useState(0)
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            ><Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className='dashboard56'>
                        {showdate1 === 0 ? (
                            <div className='dashboard57' onClick={() => setShowdate1(1)}>
                                <div className='dashboard58'>
                                    <FaUser color='#2155CD' size={20} />
                                    <p>Select User</p>
                                </div>
                                <div className='dashboard59'>
                                    <FaAngleDown color='#2155CD' />
                                </div>
                            </div>
                        ) : showdate1 === 1 ? (
                            <div className='dashboard71'>
                                <div className="custom-dropdown">
                                    <div className='dashboard72' onClick={() => setIsOpen(!isOpen)}>
                                        <p>{selectedOptions ? selectedOptions.label : 'Select an option'}</p>
                                        <div className='dashboard59'>
                                            <FaAngleDown color='#2155CD' />
                                        </div>
                                        {isOpen && (
                                            <ul className="options">
                                                {options111.map((option, index) => (
                                                    <li key={index} onClick={() => handleOptionClick(option)}>
                                                        {option.label}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                                <div className="custom-dropdown">
                                    <div className='dashboard72' onClick={() => setIsOpen(!isOpen)}>
                                        <p>{selectedOptions ? selectedOptions.label : 'Select an option'}</p>
                                        <div className='dashboard59'>
                                            <FaAngleDown color='#2155CD' />
                                        </div>
                                        {isOpen && (
                                            <ul className="options">
                                                {options111.map((option, index) => (
                                                    <li key={index} onClick={() => handleOptionClick(option)}>
                                                        {option.label}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                                <div className="custom-dropdown">
                                    <div className='dashboard72' onClick={() => setIsOpen(!isOpen)}>
                                        <p>{selectedOptions ? selectedOptions.label : 'Select an option'}</p>
                                        <div className='dashboard59'>
                                            <FaAngleDown color='#2155CD' />
                                        </div>
                                        {isOpen && (
                                            <ul className="options">
                                                {options111.map((option, index) => (
                                                    <li key={index} onClick={() => handleOptionClick(option)}>
                                                        {option.label}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>


                        ) : (
                            ""
                        )}
                    </div>
                </Modal.Body>
            </Modal>
        );
    }

    // Filter  Modal // 
    const [modalShow3, setModalShow3] = React.useState(false);

    function FilterModal(props) {

        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            ><Modal.Header closeButton>
                    <Modal.Title className='dashboard60'>Select Filters</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='dashboard61'>
                        <div className='dashboard62'>
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                        </div>

                        <div className='dashboard63'>
                            <img src={img13} alt="" />
                            <img src={img14} alt="" />
                            <img src={img15} alt="" />
                            <img src={img16} alt="" />
                            <img src={img17} alt="" />
                            <img src={img18} alt="" />
                        </div>

                        <div className='dashboard64'>
                            <p>EaseBuzz Online Payment</p>
                            <p>Cash Payment</p>
                            <p>NEFT Payment</p>
                            <p>DD Payment</p>
                            <p>Bank Deposit</p>
                            <p>CCAvenue Online Payment</p>
                        </div>
                    </div>
                    <div className='dashboard65'>
                        <button>SUBMIT</button>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }

    // Compare  Modal // 
    const [modalShow4, setModalShow4] = React.useState(false);

    function CompareModal(props) {

        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            ><Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className='dashboard66'>
                        <div className='dashboard67'>
                            <p>Previous Date Range</p>
                            <div className='dashboard68'>
                                <input type="date" />
                                <p>TO</p>
                                <input type="date" />
                            </div>
                        </div>
                        <div className='dashboard67'>
                            <p>Current Date Range</p>
                            <div className='dashboard68'>
                                <input type="date" />
                                <p>TO</p>
                                <input type="date" />
                            </div>
                        </div>
                        <div className='dashboard65'>
                            <button>COMPARE </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }



    return (
        <>
            <AddNoticeModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <DateModal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <UserModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <FilterModal
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />
            <CompareModal
                show={modalShow4}
                onHide={() => setModalShow4(false)}
            />
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
                        <Link to={'/service'} className='link'>
                            <div className='dashboard3'>
                                <img src={img1} alt="" />
                                <p>Service</p>
                            </div>
                        </Link>
                    </div>


                    <div className='dashboard2'>
                        <Link to={'/backend'} className='link'>
                            <div className='dashboard3'>
                                <img src={img2} alt="" />
                                <p>Backend</p>
                            </div>
                        </Link>
                    </div>
                    <div className='dashboard2'>
                        <div className='dashboard3'>
                            <img src={img3} alt="" />
                            <p>University</p>
                        </div>
                    </div>

                    <div className='dashboard2'>
                        <Link to={'/paymentreceived'} className='link'>
                            <div className='dashboard3'>
                                <img src={img4} alt="" />
                                <p>Payment</p>
                            </div>
                        </Link>
                    </div>

                </div>

                <div className='dashboard4'>
                    <div className='dashboard5'>
                        <div className='dashboard6'>
                            <h6>Admission Statistics</h6>

                            <select name="" id="">
                                <option value="">Select Course</option>
                                <option value="" style={{ color: "#000000" }}>Engineering</option>
                                <option value="" style={{ color: "#000000" }}>MBA</option>
                                <option value="" style={{ color: "#000000" }}>BA</option>
                                <option value="" style={{ color: "#000000" }}>B.Sc</option>
                                <option value="" style={{ color: "#000000" }}>M.Sc</option>
                            </select>
                        </div>

                        <div className='dashboard7'>
                            <p>Engineering</p>
                        </div>
                        <div id="chart">
                            <ReactApexChart options={options} series={series} type="donut" width={320}  className="dososo" />
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
                                <option value="" style={{ color: "#000000" }}>Engineering</option>
                                <option value="" style={{ color: "#000000" }}>MBA</option>
                                <option value="" style={{ color: "#000000" }}>BA</option>
                                <option value="" style={{ color: "#000000" }}>B.Sc</option>
                                <option value="" style={{ color: "#000000" }}>M.Sc</option>
                            </select>
                        </div>

                        <div className='dashboard9'>
                            <p>Engineering</p>
                            <select name="" id="">
                                <option value="">Select Year</option>
                                <option value="" style={{ color: "#000000" }}>1st Year</option>
                                <option value="" style={{ color: "#000000" }}>2nd Year</option>
                                <option value="" style={{ color: "#000000" }}>3rd Year</option>
                                <option value="" style={{ color: "#000000" }}>4th Year</option>
                            </select>
                        </div>
                        <div id="chart">
                            <ReactApexChart options={options1} series={series1} type="donut" width={320} />
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
                                <button onClick={() => setModalShow(true)}>Add Notice</button>
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
                            <div className='dashboard29' onClick={() => setModalShow1(true)}>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29' onClick={() => setModalShow2(true)}>
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
                            <div className='dashboard29' onClick={() => setModalShow1(true)}>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29' onClick={() => setModalShow2(true)}>
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
                            <div className='dashboard29' onClick={() => setModalShow1(true)}>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29' onClick={() => setModalShow2(true)}>
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
                            <div className='dashboard29' onClick={() => setModalShow1(true)}>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29' onClick={() => setModalShow2(true)}>
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
                            <div className='dashboard29' onClick={() => setModalShow1(true)}>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29' onClick={() => setModalShow2(true)}>
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
                            <div className='dashboard29' onClick={() => setModalShow1(true)}>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29' onClick={() => setModalShow2(true)}>
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
                            <p>Payment Received Records</p>
                        </div>
                        <div className='dashboard28' >
                            <div className='dashboard29' onClick={() => setModalShow1(true)}>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29' onClick={() => setModalShow2(true)}>
                                <FaUser color='#2155CD' size={20} />
                                <p>Select User</p>
                            </div>

                            <div className='dashboard29' onClick={() => setModalShow3(true)}>
                                <p>Filter</p>
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
                            <div className='dashboard29' onClick={() => setModalShow1(true)}>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29' onClick={() => setModalShow2(true)}>
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
                            <div className='dashboard29' onClick={() => setModalShow1(true)}>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29' onClick={() => setModalShow2(true)}>
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
                            <div className='dashboard29' onClick={() => setModalShow1(true)}>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29' onClick={() => setModalShow2(true)}>
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
                            <div className='dashboard29' onClick={() => setModalShow1(true)}>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29' onClick={() => setModalShow2(true)}>
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
                            <div className='dashboard29' onClick={() => setModalShow1(true)}>
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
                            <div className='dashboard29' onClick={() => setModalShow1(true)}>
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
                            <div className='dashboard29' onClick={() => setModalShow1(true)}>
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
                            <div className='dashboard29' onClick={() => setModalShow4(true)}>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Compare</p>
                            </div>
                            <div className='dashboard29' onClick={() => setModalShow2(true)}>
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
                            <div className='dashboard29' onClick={() => setModalShow1(true)}>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29' onClick={() => setModalShow2(true)}>
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
                            <div className='dashboard29' onClick={() => setModalShow1(true)}>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29' onClick={() => setModalShow2(true)}>
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
                            <div className='dashboard29' onClick={() => setModalShow1(true)}>
                                <FaCalendarDays color='#2155CD' size={20} />
                                <p>Date</p>
                            </div>
                            <div className='dashboard29' onClick={() => setModalShow2(true)}>
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
