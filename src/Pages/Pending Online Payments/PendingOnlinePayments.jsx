import React, { useCallback, useEffect, useState } from 'react'
import './PendingOnlinePayments.css'
import HOC from '../../Components/HOC/HOC'

import {
    StudentDetails,
    ApproveOnlinePayment,
    PendingOnlineFilterModal,
    MYDEALSModal,
    AddFieldModal,
    History1,
    FilterModalhistory,
    AddNewEvent,
    AddNewFilter,
} from '../Modals/Modals'

import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import endPoints from '../../Repository/apiConfig';
import { getApi } from '../../Repository/Api';
import img1 from '../../Img/loading.gif'
import Pagination from '../../Components/Pagination/Pagination';


const PendingOnlinePayments = () => {
    const [paymentData, setPaymentData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);


    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalRecords: 1,
        limit: 20
    });


    const fetchData = useCallback(async () => {
        await getApi(endPoints.getAllPaymentDetails(pagination.currentPage, pagination.limit), {
            setResponse: setPaymentData,
            setLoading: setLoading,
            errorMsg: "Failed to fetch data!",
        })
    }, [pagination.currentPage, pagination.limit]);

    useEffect(() => {
        setPagination((prevPagination) => ({
            ...prevPagination,
            currentPage: paymentData?.pagination?.currentPage,
            totalPages: paymentData?.pagination?.totalPages,
            totalRecords: paymentData?.pagination?.totalItems,
        }));
    }, [paymentData]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);


    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= pagination.totalPages) {
            setPagination((prev) => ({
                ...prev,
                currentPage: newPage
            }));
        }
    };

    const handleLimitChange = (newLimit) => {
        setPagination((prev) => ({
            ...prev,
            limit: newLimit,
            currentPage: 1  // Reset to first page when changing limit
        }));
    };





    const tableData = [
        {
            id: 1,
            name: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            OrderID: 'Loren Epsom',
            amount: '12345678',
            paymentype: 'Online (Razerbuzz)',
            Status: 'Pending',
            Remarks: 'Rejected ( Database Failure)',
        },

        {
            id: 1,
            name: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            OrderID: 'Loren Epsom',
            amount: '12345678',
            paymentype: 'Online (Razerbuzz)',
            Status: 'Pending',
            Remarks: 'Rejected ( Database Failure)',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            OrderID: 'Loren Epsom',
            amount: '12345678',
            paymentype: 'Online (Razerbuzz)',
            Status: 'Pending',
            Remarks: 'Rejected ( Database Failure)',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            OrderID: 'Loren Epsom',
            amount: '12345678',
            paymentype: 'Online (Razerbuzz)',
            Status: 'Pending',
            Remarks: 'Rejected ( Database Failure)',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            OrderID: 'Loren Epsom',
            amount: '12345678',
            paymentype: 'Online (Razerbuzz)',
            Status: 'Pending',
            Remarks: 'Rejected ( Database Failure)',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            OrderID: 'Loren Epsom',
            amount: '12345678',
            paymentype: 'Online (Razerbuzz)',
            Status: 'Pending',
            Remarks: 'Rejected ( Database Failure)',
        },

    ];

    // StudentDetails Modal 
    const [modalShow, setModalShow] = React.useState(false);

    // Approve Online Payment Modal 
    const [modalShow1, setModalShow1] = React.useState(false);

    // Filter Modal 

    const [modalShow2, setModalShow2] = React.useState(false);

    // mydeals Modal
    const [modalShow3, setModalShow3] = React.useState(false);

    // add field Modal
    const [modalShow4, setModalShow4] = React.useState(false);




    // History Modal

    const [modalShow5, setModalShow5] = React.useState(false);


    // FilterModalhistory Modal

    const [modalShow6, setModalShow6] = React.useState(false);


    // AddNewEvent Modal

    const [modalShow7, setModalShow7] = React.useState(false);

    // AddNewFilter Modal
    const [modalShow8, setModalShow8] = React.useState(false);



    const openStatusModal = (item) => {
        setSelectedItem(item);
        setModalShow1(true);
    };

    return (
        <>
            <StudentDetails
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <ApproveOnlinePayment
                show={modalShow1}
                onHide={() => setModalShow1(false)}
                data={selectedItem}
                fetchdata={fetchData}
            />
            <PendingOnlineFilterModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
                setModalShow1={setModalShow3}
                setModalShow2={setModalShow4}
                setModalShow7={setModalShow8}
            />
            <MYDEALSModal
                show={modalShow3}
                onHide={() => setModalShow3(false)}
                setModalShow={setModalShow2}
                setModalShow2={setModalShow4}
                setModalShow7={setModalShow8}
            />
            <AddFieldModal
                show={modalShow4}
                onHide={() => setModalShow4(false)}
            />
            <AddNewFilter
                show={modalShow8}
                onHide={() => setModalShow8(false)}
            />
            <History1
                show={modalShow5}
                onHide={() => setModalShow5(false)}
                setModalShow5={setModalShow6}
                setModalShow6={setModalShow7}
            />
            <FilterModalhistory
                show={modalShow6}
                onHide={() => setModalShow6(false)}
            />
            <AddNewEvent
                show={modalShow7}
                onHide={() => setModalShow7(false)}
            />
            <div className='pendingpayment'>
                <div className='pendingpayment1'>
                    <p>Pending Online Payments</p>
                </div>

                <div className='admission8'>
                    <div>
                        <p>Filter</p>
                    </div>
                    <div className='admission9' onClick={() => setModalShow2(true)}>
                        <div className='admission10'>
                            <p>My filter</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>

                    <div className='pendingpayment2'>
                        <button>Export CSV</button>
                    </div>
                </div>
                <div className='pendingpayment11'>
                    <div className='admission13'>
                        <div className='table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>Order ID</th>
                                        <th>Amount</th>
                                        <th>Payment Type</th>
                                        <th>Status</th>
                                        <th>Remarks</th>
                                        <th>History</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <tr>
                                            <td colSpan="13" className='tableloading'>
                                                <img src={img1} alt="" />
                                            </td>
                                        </tr>
                                    ) : paymentData?.data?.length === 0 ? (
                                        <tr>
                                            <td colSpan="13" className='tableloading'>
                                                <p>No data available.</p>
                                            </td>
                                        </tr>
                                    ) : (
                                        paymentData?.data?.map((data) => (
                                            <tr key={data.id}>
                                                <td>
                                                    <div className='pendingpayment3'>
                                                        <input type="checkbox" />
                                                        {data?.fullName}
                                                        <div className='pendingpayment4' onClick={() => setModalShow(true)}>
                                                            <IoEye color='#FFFFFF' size={20} />
                                                        </div>
                                                        {data.paymentStatus === "PENDING" &&
                                                            <div className='pendingpayment5' onClick={() => openStatusModal(data)}>
                                                                <FaCheck color='#FFFFFF' size={18} />
                                                                <p>Approve</p>
                                                            </div>
                                                        }
                                                    </div>

                                                </td>
                                                <td>{data?.Date}</td>
                                                <td>{data?.OrderID}</td>
                                                <td>RS.{data?.payAmount}</td>
                                                <td>{data?.paymentType}</td>
                                                <td>
                                                    <div
                                                        className='admission14'
                                                        style={{
                                                            background:
                                                                data.paymentStatus === "APPROVED" ? '#40AF0C' :
                                                                    data.paymentStatus === "REJECT" ? '#FF0000' :
                                                                        ''
                                                        }}
                                                    >
                                                        <p>{data?.paymentStatus}</p>
                                                    </div>
                                                </td>
                                                <div className='admission19'>
                                                    <p>{data?.Remarks}</p>
                                                </div>
                                                <td>
                                                    <div className='admission14' onClick={() => setModalShow5(true)}>
                                                        <p>History</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>




                <Pagination
                    currentPage={pagination.currentPage}
                    totalPages={pagination.totalPages}
                    totalRecords={pagination.totalRecords}
                    limit={pagination.limit}
                    onPageChange={handlePageChange}
                    onLimitChange={handleLimitChange}
                />


            </div>
        </>
    )
}

export default HOC(PendingOnlinePayments)