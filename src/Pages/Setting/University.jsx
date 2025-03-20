import React, { useCallback, useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'
import 'bootstrap/dist/css/bootstrap.min.css'

import { MdOutlineClose } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdHistory } from "react-icons/md";
import img1 from '../../Img/loading.gif'

// Modals 


import {
    UniversityFilterModal,
    MYDEALSModal,
    AddFieldModal,
    History,
    AddNewFilter,
    AddUniversity,
} from '../Modals/Modals.jsx'
import endPoints from '../../Repository/apiConfig.js';
import { deleteApi, getApi } from '../../Repository/Api.js';
import Pagination from '../../Components/Pagination/Pagination.jsx';

const University = () => {

    const [universityData, setUniversityData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);


    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalRecords: 1,
        limit: 20
    });


    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow11, setModalShow11] = React.useState(false);
    const [modalShow12, setModalShow12] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow4, setModalShow4] = React.useState(false);






    const fetchData = useCallback(async () => {
        await getApi(endPoints.getAllUniversity(pagination.currentPage, pagination.limit), {
            setResponse: setUniversityData,
            setLoading: setLoading,
            errorMsg: "Failed to fetch data!",
        })
    }, [pagination.currentPage, pagination.limit]);

    useEffect(() => {
        setPagination((prevPagination) => ({
            ...prevPagination,
            currentPage: universityData?.pagination?.currentPage,
            totalPages: universityData?.pagination?.totalPages,
            totalRecords: universityData?.pagination?.totalRecords,
        }));
    }, [universityData]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleDelete = async () => {
        if (!selectedItem) return;
        await deleteApi(endPoints.deleteUniversity(selectedItem), {
            setLoading,
            successMsg: 'Data deleted successfully!',
            errorMsg: 'Failed to delete data!',
        });
        fetchData();
    };


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


    const openAddModal = () => {
        setSelectedItem(null);
        setIsEditMode(false);
        setModalShow(true);
    };

    const openEditModal = (item) => {
        setSelectedItem(item);
        setIsEditMode(true);
        setModalShow(true);
    };

    const openDeleteModal = (categoryId) => {
        setSelectedItem(categoryId);
        handleDelete();
    };



    return (
        <>
            <AddUniversity
                show={modalShow}
                onHide={() => setModalShow(false)}
                fetchdata={fetchData}
                data={selectedItem}
                edit={isEditMode}
            />
            {/* <EditUniversity
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            /> */}
            <UniversityFilterModal
                show={modalShow11}
                onHide={() => setModalShow11(false)}
                setModalShow1={setModalShow12}
                setModalShow2={setModalShow2}
                setModalShow4={setModalShow4}
            />
            <MYDEALSModal
                show={modalShow12}
                onHide={() => setModalShow12(false)}
                setModalShow={setModalShow11}
                setModalShow2={setModalShow2}
                setModalShow7={setModalShow4}
            />
            <AddFieldModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <AddNewFilter
                show={modalShow4}
                onHide={() => setModalShow4(false)}
            />
            <History
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>University</p>
                </div>

                <div className='admission8'>
                    <div>
                        <p>Filter</p>
                    </div>
                    <div className='admission9' onClick={() => setModalShow11(true)}>
                        <div className='admission10'>
                            <p>My filter</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>
                    <div className='uviversitynewbutton'>
                        <button onClick={openAddModal}>New</button>
                    </div>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>University</th>
                                    <th>Registration</th>
                                    <th>TOC Charges</th>
                                    <th>L.E Charges</th>
                                    <th>Multiple Charges</th>
                                    <th>RR Charges</th>
                                    <th>Gap Charges</th>
                                    <th>Back Paper Charges</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="13" className='tableloading'>
                                            <img src={img1} alt="" />
                                        </td>
                                    </tr>
                                ) : universityData?.data?.length === 0 ? (
                                    <tr>
                                        <td colSpan="13" className='tableloading'>
                                            <p>No data available.</p>
                                        </td>
                                    </tr>
                                ) : (
                                    universityData?.data?.map((data) => (
                                        <tr key={data?._id}>
                                            <td>
                                                <MdHistory
                                                    color='#000000'
                                                    size={20}
                                                    onClick={() => setModalShow3(true)}
                                                />
                                                {data.UniversityName}
                                            </td>
                                            <td>₹{data.RegistrationCharges}</td>
                                            <td>₹{data.TOCCharge}</td>
                                            <td>₹{data.LECharge}</td>
                                            <td>₹{data.MultipleCharges}</td>
                                            <td>₹{data.RRCharges}</td>
                                            <td>₹{data.GapCharges}</td>
                                            <td>₹{data.BackPaperCharges}</td>
                                            <td>
                                                <div className='setting'>
                                                    <button onClick={() => openEditModal(data)}><MdEdit /> Edit</button>
                                                    <button  onClick={() => openDeleteModal(data?._id)}><RiDeleteBin6Fill /> Delete</button>
                                                </div>
                                            </td>
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

export default HOC(University)