import React, { useCallback, useEffect, useState } from 'react';
import './PettyCashPayment.css'
import HOC from '../../Components/HOC/HOC'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import img20 from '../../Img/img82.png'
import img19 from '../../Img/img83.png'

import img1 from '../../Img/loading.gif';


// Modals 


import {
    PettyCashPaymentFilterModal,
    PropertiesModal,
    PaymentFieldModal,
    NewPaymentRequest,
} from '../Modals/Modals.jsx'
import endPoints from '../../Repository/apiConfig.js';
import { deleteApi, getApi } from '../../Repository/Api.js';
import { formatDate, formatTime } from '../../utils/utils.js';
import Pagination from '../../Components/Pagination/Pagination.jsx';



const PettyCashPayment = () => {

    const [modalShow, setModalShow] = React.useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editData, setEditData] = useState(null);

    const [selectedItems, setSelectedItems] = useState([]);


    const navigate = useNavigate();
    const [pettycashData, setPettyCashData] = useState([]);
    const [loading, setLoading] = useState(false);


    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalRecords: 1,
        limit: 20
    });

    const fetchData = useCallback(async () => {
        await getApi(endPoints.getAllPettyCashList(pagination.currentPage, pagination.limit), {
            setResponse: setPettyCashData,
            setLoading: setLoading,
            errorMsg: "Failed to fetch data!",
        });
    }, [pagination.currentPage, pagination.limit]);

    useEffect(() => {
        setPagination((prevPagination) => ({
            ...prevPagination,
            currentPage: pettycashData?.pagination?.currentPage || 1,
            totalPages: pettycashData?.pagination?.totalPages || 1,
            totalRecords: pettycashData?.pagination?.totalRecords || 1,
        }));
    }, [pettycashData]);

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
            currentPage: 1
        }));
    };

    const handleCheckboxChange = (id) => {
        setSelectedItems((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const handleSelectAll = () => {
        const allIds = pettycashData?.data?.reports?.map((data) => data?._id) || [];
        setSelectedItems((prev) =>
            prev.length === allIds.length ? [] : allIds
        );
    };

    const handleDelete = async () => {
        if (selectedItems.length === 0) {
            alert("Please select an item to delete.");
            return;
        }

        await Promise.all(
            selectedItems.map(async (itemId) => {
                await deleteApi(endPoints.deletePdcFollowUpStatuses(itemId), {
                    setLoading,
                    successMsg: 'Data deleted successfully!',
                    errorMsg: 'Failed to delete data!',
                });
            })
        );

        setSelectedItems([]);
        setModalShow1(false);
        fetchData();
    };





    // New Payment Request  Modal 






    // Cash Request Reason  Modal 


    const [modalShow1, setModalShow1] = React.useState(false);



    function CashRequestReason(props) {


        return (
            <Modal
                {...props}
                size="sl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body >
                    <div className='newpaymentrequest1'>
                        <div className='newpaymentrequest6'>
                            <p>Cash Request Reason</p>
                        </div>

                        <div className='admission13'>
                            <div className='table-container'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th><input type="checkbox" /></th>
                                            <th>Reason</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>REASON Type</td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>REASON Type</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='admission2'>
                            <div className='cancel1' onClick={() => setModalShow2(true)} >
                                <p>Add</p>
                            </div>
                            <div className='cancel2'>
                                <p>Edit</p>
                            </div>
                            <div className='cancel3'>
                                <p>Delete</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    // Add record  Modal 


    const [modalShow2, setModalShow2] = React.useState(false);



    function Addrecord(props) {


        return (
            <Modal
                {...props}
                size="sl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body >
                    <div className='newpaymentrequest1'>
                        <div className='newpaymentrequest7'>
                            <IoCloseSharp size={20} color='#000000' onClick={() => setModalShow2(false)} />
                        </div>

                        <div className='newpaymentrequest3'>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Record</label>
                                <input type="text" placeholder='Add Here' />
                            </div>
                        </div>

                        <div className='newpaymentrequest5'>
                            <button onClick={() => setModalShow2(false)} style={{ backgroundColor: "#2155CD" }} >Add</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }




    // Filter Modal 

    const [modalShow3, setModalShow3] = React.useState(false);


    // add field Modal
    const [modalShow4, setModalShow4] = React.useState(false);


    // PropertiesModal
    const [modalShow5, setModalShow5] = React.useState(false);



    const popover1 = (
        <Popover id="popover-basic">
            <Popover.Body>
                <div className="toppart7">
                    <div className="toppart8" onClick={() => setModalShow5(true)}>
                        <h6>String</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="toppart8">
                        <h6>Date</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="toppart8">
                        <h6>List</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="toppart8">
                        <h6>Yes/ No</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );



    const openAddModal = () => {
        setEditData(null);
        setIsEditMode(false);
        setModalShow(true);
    };


    const openEditModal = () => {
        if (selectedItems.length === 0) {
            alert("Please select an item to edit.");
            return;
        }

        const selectedId = selectedItems[0];
        const itemToEdit = pettycashData?.data?.find(item => item._id === selectedId);

        if (itemToEdit) {
            setEditData(itemToEdit);
            setIsEditMode(true);
            setModalShow(true);
        }
    };
    return (
        <>
            <NewPaymentRequest
                show={modalShow}
                onHide={() => setModalShow(false)}
                fetchdata={fetchData}
                data={editData}
                edit={isEditMode}
            />
            <CashRequestReason
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <Addrecord
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <PettyCashPaymentFilterModal
                show={modalShow3}
                onHide={() => setModalShow3(false)}
                setModalShow2={setModalShow4}
            />
            <PaymentFieldModal
                show={modalShow4}
                onHide={() => setModalShow4(false)}
            />
            <PropertiesModal
                show={modalShow5}
                onHide={() => setModalShow5(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>PettyCash Payment</p>
                    <div className='admission2'>
                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover1}>
                            <div className='expense30'>
                                <p>Create a field</p>
                            </div>
                        </OverlayTrigger>
                        <div className='cancel2' onClick={openEditModal}>
                            <p>Edit</p>
                        </div>
                        <div className='cancel3' onClick={() => setModalShow1(true)}>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>

                <div className='itreport2'>
                    <div className='itreport3'>
                        <p>Filter</p>
                    </div>
                    <div className='admission9' onClick={() => setModalShow3(true)}>
                        <div className='admission10' >
                            <p>My filter</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>
                    <div className='cancel1'>
                        <p>Export</p>
                    </div>
                </div>


                <div className='pettycashpayment'>
                    <button onClick={openAddModal}>New Payment Request</button>
                    <button onClick={() => navigate('/expense')}>Expense</button>
                </div>
                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input
                                        type="checkbox"
                                        onChange={handleSelectAll}
                                        checked={selectedItems.length === pettycashData?.data?.length}
                                    /></th>
                                    <th>Request Date</th>
                                    <th>Time</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                    <th>Approved By</th>
                                    <th>Title</th>
                                    <th>Details</th>
                                    <th>Request By</th>
                                    <th>Requested Approved By</th>
                                    <th>Request Approved On</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="13" className='tableloading'>
                                            <img src={img1} alt="" />
                                        </td>
                                    </tr>
                                ) : pettycashData?.data?.length === 0 ? (
                                    <tr>
                                        <td colSpan="13" className='tableloading'>
                                            <p>No data available.</p>
                                        </td>
                                    </tr>
                                ) : (
                                    pettycashData?.data?.map((data) => (
                                        <tr key={data.id}>
                                            <td><input
                                                type="checkbox"
                                                checked={selectedItems.includes(data?._id)}
                                                onChange={() => handleCheckboxChange(data?._id)}
                                            /></td>
                                            <td>{formatDate(data.createdAt)}</td>
                                            <td>{formatTime(data.createdAt)}</td>
                                            <td>
                                                <div className='attendanc1'>
                                                    <div className='attendanc2'>
                                                        <input type="radio" name='status' />
                                                        <label htmlFor="" style={{ color: "#000000" }}>P</label>
                                                    </div>
                                                    <div className='attendanc2'>
                                                        <input type="radio" name='status' />
                                                        <label htmlFor="" style={{ color: "#000000" }}>A</label>
                                                    </div>
                                                    <div className='attendanc2'>
                                                        <input type="radio" name='status' />
                                                        <label htmlFor="" style={{ color: "#000000" }}>N/A</label>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{data.amount}</td>
                                            <td>{data.authority}</td>
                                            <td>{data.title}</td>
                                            <td>{data.details}</td>
                                            <td>{data.authority}</td>
                                            <td>{data.authority}</td>
                                            <td>{data.authority}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
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

export default HOC(PettyCashPayment)