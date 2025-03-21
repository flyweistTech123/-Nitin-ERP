import React, { useCallback, useEffect, useState } from 'react';
import './Setting.css';
import HOC from '../../Components/HOC/HOC';
import 'bootstrap/dist/css/bootstrap.min.css';
import endPoints from '../../Repository/apiConfig';
import { deleteApi, getApi } from '../../Repository/Api';

import img1 from '../../Img/loading.gif';
import Pagination from '../../Components/Pagination/Pagination';
import { AddPdcFollowUpStatuses, PdcFollowUpStatusesDeleteConfirm } from '../Modals/Modals';

const PDCFollowUpStatus = () => {
    const [expensesData, setExpernsesData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editData, setEditData] = useState(null);

    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow1, setModalShow1] = React.useState(false);

    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalRecords: 1,
        limit: 20
    });

    const fetchData = useCallback(async () => {
        await getApi(endPoints.getAllPdcFollowUpStatuses(pagination.currentPage, pagination.limit), {
            setResponse: setExpernsesData,
            setLoading: setLoading,
            errorMsg: "Failed to fetch data!",
        });
    }, [pagination.currentPage, pagination.limit]);

    useEffect(() => {
        setPagination((prevPagination) => ({
            ...prevPagination,
            currentPage: expensesData?.pagination?.currentPage || 1,
            totalPages: expensesData?.pagination?.totalPages || 1,
            totalRecords: expensesData?.pagination?.totalRecords || 1,
        }));
    }, [expensesData]);

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
        const allIds = expensesData?.data?.reports?.map((data) => data?._id) || [];
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
        const itemToEdit = expensesData?.data?.find(item => item._id === selectedId);

        if (itemToEdit) {
            setEditData(itemToEdit);
            setIsEditMode(true);
            setModalShow(true);
        }
    };

    return (
        <>
            <AddPdcFollowUpStatuses
                show={modalShow}
                onHide={() => setModalShow(false)}
                fetchdata={fetchData}
                data={editData}
                edit={isEditMode}
            />

            <PdcFollowUpStatusesDeleteConfirm
                show={modalShow1}
                onHide={() => setModalShow1(false)}
                handleDelete={handleDelete}
            />

            <div className='admission'>
                <div className='admission1'>
                    <p>PDC Follow Up Status</p>
                    <div className='admission2'>
                        <div className='cancel1' onClick={openAddModal}>
                            <p>Add</p>
                        </div>
                        <div className='cancel2' onClick={openEditModal}>
                            <p>Edit</p>
                        </div>
                        <div className='cancel3' onClick={() => setModalShow1(true)}>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <input
                                            type="checkbox"
                                            onChange={handleSelectAll}
                                            checked={selectedItems.length === expensesData?.data?.length}
                                        />
                                    </th>
                                    <th>PdcFollowUp Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="13" className='tableloading'>
                                            <img src={img1} alt="" />
                                        </td>
                                    </tr>
                                ) : expensesData?.data?.length === 0 ? (
                                    <tr>
                                        <td colSpan="13" className='tableloading'>
                                            <p>No data available.</p>
                                        </td>
                                    </tr>
                                ) : (
                                    expensesData?.data?.map((data) => (
                                        <tr key={data?._id}>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedItems.includes(data?._id)}
                                                    onChange={() => handleCheckboxChange(data?._id)}
                                                />
                                            </td>
                                            <td>{data.expenseType}</td>
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

export default HOC(PDCFollowUpStatus);
