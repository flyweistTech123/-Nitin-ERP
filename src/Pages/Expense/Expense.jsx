import React, { useEffect, useState } from 'react';
import './Expense.css'
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoEye } from "react-icons/io5";


import img from '../../Img/img33.png'


const Expense = () => {
    const tableData = [
        {
            id: 1,
            Title: 'Loren',
            Amount: 'INR 10,000',
            VoucherNo: '1234',
            Description: 'dsaffhrjyukyujfewferwt',
            ExpenseType: 'Expense Type',
            AddedOn: 'DD/MM/YYYY',
            AddedBy: 'Loren Epsom',
            Modified: 'DD/MM/YYYY',
            ReturnRemarks: 'Loren enkrjgnergn',
            ReturnAmount: 'INR 4334'
        },

        {
            id: 1,
            Title: 'Loren',
            Amount: 'INR 10,000',
            VoucherNo: '1234',
            Description: 'dsaffhrjyukyujfewferwt',
            ExpenseType: 'Expense Type',
            AddedOn: 'DD/MM/YYYY',
            AddedBy: 'Loren Epsom',
            Modified: 'DD/MM/YYYY',
            ReturnRemarks: 'Loren enkrjgnergn',
            ReturnAmount: 'INR 4334'
        },
        {
            id: 1,
            Title: 'Loren',
            Amount: 'INR 10,000',
            VoucherNo: '1234',
            Description: 'dsaffhrjyukyujfewferwt',
            ExpenseType: 'Expense Type',
            AddedOn: 'DD/MM/YYYY',
            AddedBy: 'Loren Epsom',
            Modified: 'DD/MM/YYYY',
            ReturnRemarks: 'Loren enkrjgnergn',
            ReturnAmount: 'INR 4334'
        },
        {
            id: 1,
            Title: 'Loren',
            Amount: 'INR 10,000',
            VoucherNo: '1234',
            Description: 'dsaffhrjyukyujfewferwt',
            ExpenseType: 'Expense Type',
            AddedOn: 'DD/MM/YYYY',
            AddedBy: 'Loren Epsom',
            Modified: 'DD/MM/YYYY',
            ReturnRemarks: 'Loren enkrjgnergn',
            ReturnAmount: 'INR 4334'
        },
        {
            id: 1,
            Title: 'Loren',
            Amount: 'INR 10,000',
            VoucherNo: '1234',
            Description: 'dsaffhrjyukyujfewferwt',
            ExpenseType: 'Expense Type',
            AddedOn: 'DD/MM/YYYY',
            AddedBy: 'Loren Epsom',
            Modified: 'DD/MM/YYYY',
            ReturnRemarks: 'Loren enkrjgnergn',
            ReturnAmount: 'INR 4334'
        },
        {
            id: 1,
            Title: 'Loren',
            Amount: 'INR 10,000',
            VoucherNo: '1234',
            Description: 'dsaffhrjyukyujfewferwt',
            ExpenseType: 'Expense Type',
            AddedOn: 'DD/MM/YYYY',
            AddedBy: 'Loren Epsom',
            Modified: 'DD/MM/YYYY',
            ReturnRemarks: 'Loren enkrjgnergn',
            ReturnAmount: 'INR 4334'
        },

    ];
    return (
        <>
            <div className='admission'>
                <div className='admission1'>
                    <p>Expense</p>
                    <div className='admission2'>
                        <div className='expense30'>
                            <p>Create a field</p>
                        </div>
                        <div className='cancel2'>
                            <p>Edit</p>
                        </div>
                        <div className='cancel3'>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>

                <div className='itreport2'>
                    <div className='itreport3'>
                        <p>Filter</p>
                    </div>
                    <div className='admission9'>
                        <div className='admission10'>
                            <p>My filter</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>
                    <div className='cancel1'>
                        <p>Export</p>
                    </div>
                </div>


                <div className='expense31'>
                    <button>Add Expense</button>
                    <button>Available Cash on user</button>
                </div>
                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th>Title</th>
                                    <th>Amount</th>
                                    <th>Voucher No</th>
                                    <th>VoucherUpload</th>
                                    <th>Description</th>
                                    <th>Expense Type</th>
                                    <th>Expense Bill Upload</th>
                                    <th>Warranty bill upload</th>
                                    <th>Added On</th>
                                    <th>Added By</th>
                                    <th>Modified</th>
                                    <th>Return Remarks</th>
                                    <th>Return Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td>{data.Title}</td>
                                        <td>{data.Amount}</td>
                                        <td>{data.VoucherNo}</td>
                                        <td><IoEye color='#2155CD' size={20} /></td>
                                        <td>{data.Description}</td>
                                        <td>{data.ExpenseType}</td>
                                        <td><IoEye color='#2155CD' size={20} /></td>
                                        <td><IoEye color='#2155CD' size={20} /></td>
                                        <td>{data.AddedOn}</td>
                                        <td>{data.AddedBy}</td>
                                        <td>{data.Modified}</td>
                                        <td>{data.ReturnRemarks}</td>
                                        <td>{data.ReturnAmount}</td>
                                        <td>
                                            <div className='cancel1'>
                                                <p>Return</p>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className='admission15'>
                    <div className='admission16'>
                        <p>START DIALING</p>
                    </div>
                    <div className='admission16'>
                        <p>SELECT ACTION</p>
                        <IoIosArrowDown color='#3F3F3F' />
                    </div>
                    <div className='admission17'>
                        <input type="checkbox" />
                        <p>For All</p>
                    </div>
                </div>

                <div className='admission18'>
                    <button>Previous</button>
                    <button>Next</button>
                </div>
                {/* <div className='admission11'>
                </div> */}
            </div>
        </>
    )
}

export default HOC(Expense)