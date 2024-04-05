import React, { useEffect, useState } from 'react';
import './ITTargetAnalysis.css'
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";




const ITTargetAnalysis = () => {
    const [faltu, setFaltu] = useState(null);

    const handleFaltu = (index) => {
        setFaltu(index);
    };
    const tableData = [
        {
            id: 1,
            Website: 'www.sdhdif.com',
        },

        {
            id: 1,
            Website: 'www.sdhdif.com',
        },
        {
            id: 1,
            Website: 'www.sdhdif.com',
        },
        {
            id: 1,
            Website: 'www.sdhdif.com',
        },
        {
            id: 1,
            Website: 'www.sdhdif.com',
        },
        {
            id: 1,
            Website: 'www.sdhdif.com',
        },

    ];
    return (
        <>
            <div className='admission'>
                <div className='admission1'>
                    <p>IT Target Analysis</p>
                </div>

                <div className='targetanalysis2'>
                    <div className='targetanalysis1'>
                        <p>Filters</p>
                    </div>

                    <div className='admission2'>
                        <div className='cancel1'>
                            <p>Add</p>
                        </div>
                        <div className='targetanalysis'>
                            <p>Edit</p>
                        </div>
                        <div className='cancel3'>
                            <p>Delete</p>
                        </div>
                        <div className='cancel1'>
                            <p>Import</p>
                        </div>
                        <div className='cancel1'>
                            <p>Export</p>
                        </div>
                    </div>
                </div>

                <div className='targetanalysis3'>
                    <div className="targetanalysis4">
                        {["Daily", "Weekly", "Monthly", "Yearly"].map((bank, index) => (
                            <div
                                key={index}
                                className={faltu === index ? "targetanalysis5" : "targetanalysis6"}
                                onClick={() => handleFaltu(index)}
                            >
                                {bank}
                            </div>
                        ))}
                    </div>
                </div>



                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th>Website</th>
                                    <th>Total Traffic</th>
                                    <th>Total Leads</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td>{data.Website}</td>
                                        <td>
                                            <div className='targetanalysis7'>

                                            </div>
                                        </td>
                                        <td>
                                            <div className='targetanalysis7'>

                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className='pendingpayment6'>
                    <div className='pendingpayment7'>
                        <h6>Total:</h6>
                        <span>Show quantity</span>
                    </div>

                    <div className='pendingpayment8'>
                        <p>Page :1</p>
                    </div>

                    <div className='pendingpayment9'>
                        <p>Records</p>
                        <div className='pendingpayment10'>
                            <p>20</p>
                            <IoIosArrowDown color='#3F3F3F' />
                        </div>
                    </div>
                </div>

                <div className='admission18'>
                    <button>Previous</button>
                    <button>Next</button>
                </div>

            </div>
        </>
    )
}

export default HOC(ITTargetAnalysis)