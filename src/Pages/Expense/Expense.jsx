import React, { useEffect, useState } from 'react';
import './Expense.css'
import HOC from '../../Components/HOC/HOC'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';



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



    const navigate = useNavigate()


    // Add Expense  Modal 
    const [modalShow, setModalShow] = React.useState(false);



    function AddExpense(props) {


        return (
            <Modal
                {...props}
                size="sl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body >
                    <div className='newpaymentrequest1'>
                        <div className='newpaymentrequest2'>
                            <p>Expense</p>
                            <IoCloseSharp size={20} color='#000000' onClick={() => setModalShow(false)} />
                        </div>

                        <div className='newpaymentrequest3'>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Title</label>
                                <input type="text" />
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Amount</label>
                                <input type="text" />
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Voucher No</label>
                                <div className='AddExpenseModal'>
                                    <input type="text" name="" id="" />
                                    <input type="text" name="" id="" />
                                    <button>Upload</button>
                                </div>
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Description</label>
                                <input type="text" />
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Expense Type</label>
                                <select name="" id="" onClick={() => setModalShow1(true)}>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Expense Bill Upload</label>
                                <div className='AddExpenseModal1'>
                                    <input type="text" name="" id="" />
                                    <button>Upload</button>
                                </div>
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Warranty Bill Upload</label>
                                <div className='AddExpenseModal1'>
                                    <input type="text" name="" id="" />
                                    <button>Upload</button>
                                </div>
                            </div>
                        </div>

                        <div className='newpaymentrequest5'>
                            <button onClick={() => setModalShow(false)}>Submit</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


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




    const [modalShow3, setModalShow3] = React.useState(false);


    // Edit Expense  Modal 

    function EditExpense(props) {


        return (
            <Modal
                {...props}
                size="sl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body >
                    <div className='newpaymentrequest1'>
                        <div className='newpaymentrequest2'>
                            <p>Edit Expense</p>
                            <IoCloseSharp size={20} color='#000000' onClick={() => setModalShow3(false)} />
                        </div>

                        <div className='newpaymentrequest3'>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Title</label>
                                <input type="text" placeholder='LOREM IPSUM' />
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Amount</label>
                                <input type="text" placeholder='₹ 100.32' />
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Voucher No</label>
                                <div className='AddExpenseModal'>
                                    <input type="text" name="" id="" placeholder='1234' />
                                    <input type="text" name="" id="" />
                                    <button>Upload</button>
                                </div>
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Description</label>
                                <input type="text" placeholder='dsaffhrjyukyujfewferwt' />
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Expense Type</label>
                                <select name="" id="" onClick={() => setModalShow1(true)}>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Expense Bill Upload</label>
                                <div className='AddExpenseModal1'>
                                    <input type="text" name="" id="" />
                                    <button>Upload</button>
                                </div>
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Warranty Bill Upload</label>
                                <div className='AddExpenseModal1'>
                                    <input type="text" name="" id="" />
                                    <button>Upload</button>
                                </div>
                            </div>
                        </div>

                        <div className='newpaymentrequest5'>
                            <button onClick={() => setModalShow1(false)}>Submit</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    const [modalShow4, setModalShow4] = React.useState(false);


    // Return Modal 

    function Return(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body >
                    <div className='returnmodal3'>
                        <div className='returnmodal'>
                            <div className='returnmodal1'>
                                <label htmlFor="">Return Amount</label>
                                <input type="text" />
                            </div>
                            <div className='returnmodal1'>
                                <label htmlFor="">Return Remarks</label>
                                <textarea name="" id="" cols="30" rows="5"></textarea>
                            </div>
                        </div>

                        <div className='returnmodal2'>
                            <button onClick={() => setModalShow4(false)}>Add</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        );
    }


    return (
        <>
            <AddExpense
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <CashRequestReason
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <Addrecord
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <EditExpense
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />
            <Return
                show={modalShow4}
                onHide={() => setModalShow4(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>Expense</p>
                    <div className='admission2'>
                        <div className='expense30'>
                            <p>Create a field</p>
                        </div>
                        <div className='cancel2' onClick={() => setModalShow3(true)}>
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
                    <button onClick={() => setModalShow(true)}>Add Expense</button>
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
                                            <div className='expense33' >
                                                <button onClick={() => setModalShow4(true)}>Return</button>
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