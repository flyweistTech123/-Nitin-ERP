import React, { useCallback, useEffect, useState } from 'react';
import './Setting.css'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import HOC from '../../Components/HOC/HOC'
import { ImSearch } from "react-icons/im";
import endPoints from '../../Repository/apiConfig';
import { deleteApi, getApi } from '../../Repository/Api';
import { Pagination } from 'react-bootstrap';
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import img1 from '../../Img/loading.gif'
import { AddStudyMedium } from '../Modals/Modals';


const StudyMedium = () => {
    const [studymediumdata, setStudyMediumData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);

    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalRecords: 1,
        limit: 20
    });

    const fetchData = useCallback(async () => {
        if (!pagination.currentPage || pagination.currentPage < 1) return;
        setLoading(true);

        await getApi(endPoints.getAllStudyMedium(pagination.currentPage, pagination.limit), {
            setResponse: setStudyMediumData,
            setLoading: setLoading,
            errorMsg: "Failed to fetch data!",
        })
    }, [pagination.currentPage, pagination.limit]);

    useEffect(() => {
        if (studymediumdata?.bankDetails) {
            setPagination((prevPagination) => ({
                ...prevPagination,
                currentPage: studymediumdata?.currentPage,
                totalPages: studymediumdata?.totalPages,
                totalRecords: studymediumdata?.totalCount,
            }));
        }
    }, [studymediumdata]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleDelete = async () => {
        if (!selectedItem) return;
        await deleteApi(endPoints.deleteStudyMedium(selectedItem), {
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


    const [modalShow, setModalShow] = React.useState(false);



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
            <AddStudyMedium
                show={modalShow}
                onHide={() => setModalShow(false)}
                fetchdata={fetchData}
                data={selectedItem}
                edit={isEditMode}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>Study Medium</p>
                </div>
                <div className='setting3'>
                    <div className='setting2'>
                        <input type="text" placeholder='Hindi' />
                        <ImSearch color='#444444' size={20} />
                    </div>
                    <div className='setting4'>
                        <button onClick={openAddModal}>New</button>
                    </div>
                </div>


                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Study Medium</th>
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
                                ) : studymediumdata?.studyMediums?.length === 0 ? (
                                    <tr>
                                        <td colSpan="13" className='tableloading'>
                                            <p>No data available.</p>
                                        </td>
                                    </tr>
                                ) : (
                                    studymediumdata?.studyMediums?.map((data) => (
                                        <tr key={data?._id}>
                                            <td>{data.name}</td>
                                            <td>
                                                <div className='setting'>
                                                    <button onClick={() => openEditModal(data)}><MdEdit /> Edit</button>
                                                    <button onClick={() => openDeleteModal(data?._id)}><RiDeleteBin6Fill /> Delete</button>
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

export default HOC(StudyMedium)